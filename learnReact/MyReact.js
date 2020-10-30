/**
 *   React.createElement()
 *
 */

function createElement(type, props, ...children) {
  // createElement实际就是返回一个react element对象, 里面包含主要的属性是 type和props
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  // 如果子节点不是dom节点,而是一些基本类似,例如string和number, 要封装成一个element对象.type类型是""TEXT_ELEMENT"
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// 上面是创建 React Element对象
// --------------------------------------------------

/**
 *   commit阶段
 *
 */

// 更新节点操作-----------------------------------

const isEvent = (key) => key.startsWith("on");
const isProperty = (key) => key !== "children" && !isEvent(key);
const isNew = (prev, next) => (key) => prev[key] !== next[key];
const isGone = (prev, next) => (key) => !(key in next);

function updateDom(dom, prevProps, nextProps) {
  // 删除旧事件或修改事件
  Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  // 删除旧的属性,
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = "";
    });

  // 设置新的或修改属性
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = nextProps[name];
    });

  // 增加监听事件
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}

//----------------------------------------------

// 用来提交Fiber树的过程的函数
function commitRoot() {
  // 删除节点操作
  deletions.forEach(commitWork);

  commitWork(wipRoot.child);

  // 将目前渲染在页面的fiber树保存为currentRoot
  currentRoot = wipRoot;
  wipRoot = null;
}

// 递归的把dom节点添加到document上
function commitWork(fiber) {
  if (!fiber) {
    return;
  }

  let domParentFiber = fiber.parent;

  // 要找到dom节点的父节点, 需要一直往上查找fiber树, 知道找到拥有dom节点的fiber节点
  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent;
  }
  const domParent = domParentFiber.dom;

  // 通过effectTag来判断是进行插入更新还是删除操作, 复用老节点是更新, 修改节点是插入,
  if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === "DELETION") {
    commitDeletion(fiber, domParent);
  }

  // domParent.appendChild(fiber.dom);
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom);
  } else {
    commitDeletion(fiber.child, domParent);
  }
}

//----------------------------------------------

/**
 *   React.render()
 *   Reconciler阶段
 */

// 用react element对象映射到的fiber节点创建dom节点
function createDom(fiber) {
  // 判断节点是否是文本节点, 如果是文本节点就创建文本节点, 不是就创建元素节点
  const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);

  // // 将fiber对象里的props属性除了children属性添加到真实dom上
  // const isProperty = (key) => key !== "children";
  // Object.keys(fiber.props)
  //   .filter(isProperty)
  //   .forEach((name) => {
  //     dom[name] = fiber.props[name];
  //   });

  updateDom(dom, {}, fiber.props);

  return dom;
}

function render(element, container) {
  // 在内存中的fiber树, work in progress
  // 第一次是root fiber节点
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    // 双fiber树就是通过alternate连接
    alternate: currentRoot,
  };

  // 新增记录删除的数组
  deletions = [];

  nextUnitOfWork = wipRoot;

  // // 需要特殊处理文本类型的元素,如果是文本类型的, 需要创建文本节点, 其他就是正常html标签
  // const dom =
  //   element.type == "TEXT_ELEMENT"
  //     ? document.createTextElement("")
  //     : document.createElement(element.type);

  // // 在element对象的props里找到所有props属性,也就是dom上的属性, 挂载到dom上去
  // const isProperty = (key) => key !== "children";
  // Object.keys(element.props)
  //   .filter(isProperty)
  //   .forEach((name) => {
  //     dom[name] = element.props[name];
  //   });

  // // 循环将子节点也都渲染成真实dom
  // element.props.children.forEach((child) => {
  //   render(child, dom);
  // });

  // // 把真实dom挂载到root上
  // container.appendChild(dom);
}

/**
 *   Concurrent
 *
 */

// 每个工作的小单元
let nextUnitOfWork = null;

let currentRoot = null;
let wipRoot = null;
let deletions = null;

function workLoop(deadline) {
  // shouldYield用来判断线程是否需要打断, false代表不用打断
  let shouldYield = false;

  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);

    // 判断浏览器是否有更重要的工作, 主要是靠deaddline判断浏览器接管线程前还有多少时间, 一帧是16.666ms
    shouldYield = deadline.timeRemaining() < 1;
  }

  // 如果工作单元全都完成并存在内存中的fiber树, 就一次性提交全部fiber树
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
}

// 浏览器里的api, 作用是 在浏览器一帧的剩余空闲时间内执行有限度相对较低的任务
// 可以理解为类似于setTimeout,, 在其他优先级高的任务执行后在执行相应的回调函数
// requestIdleCallback提供了一个deadline参数, 可以用来确认在浏览器接管线程前还有多少时间
requestIdleCallback(workLoop);

// fiber节点完成3件事:
// 1.把react element渲染到dom上
// 2.给下一个react element子节点创建fiber节点
// 3.选择下一个工作单元
function performUnitOfWork(fiber) {
  // // 1.如果不存在fiber.dom, 就去创建一个dom
  // if (!fiber.dom) {
  //   fiber.dom = createDom(fiber);
  // }

  // // 如果fiber节点有父节点,让父节点挂载该fiber节点的dom
  // // if(fiber.parent) {
  // //   fiber.parent.dom.appendChild(fiber.dom)
  // // }

  // // 2. 循环给所有子节点创建新的fiber节点
  // const elements = fiber.props.children;  // elements是一个数组
  // // 抽取出新创建fiber节点的代码变成reconcilerChildren()函数
  // reconcilerChildren(fiber, elements);

  // let index = 0
  // let prevSibling = null

  // while(index < element.length){
  //   const element = elements[index]

  //   const newFiber = {
  //     type: element.type,
  //     props: element.props,
  //     partent: fiber,
  //     dom: null,
  //   }
  // }
  // // 根据是否为第一个节点, 添加到fiber root的child或者sibling上面,
  // if(index === 0){
  //   fiber.child = newFiber
  // }else {
  //   prevSibling.sibling = newFiber
  // }

  // prevSibling = newFiber
  // index++

  // // 3. 返回下一个工作单元
  // if(fiber.child){
  //   return fiber.child
  // }

  // let nextFiber = fiber
  // while(nextFiber){
  //   if(nextFiber.sibling){
  //     return nextFiber.sibling
  //   }
  //   nextFiber = nextFiber.parent
  // }

  // 函数式组件和类组件不同的地方在于:
  // - 函数式组件的fiber节点没有保存dom节点
  // - 函数式组件的子节点是通过运行函数得到的, 而不是从props的children得到的
  const isFunctionComponent = fiber.type instanceof Function;

  // 函数式组件进行专门的函数更新.
  if (isFunctionComponent) {
    updateFunctionComponent(fiber);
  } else {
    updateHostComponent(fiber);
  }

  // 3. 返回下一个工作单元, 先尝试找child节点, 然后是兄弟节点, 然后是父节点的兄弟节点, 直到rootFiber
  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }

    nextFiber = nextFiber.parent;
  }
}

function updateHostComponent(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  reconcileChildren(fiber, fiber.props.children);
}

/**
 *  hook相关
 *
 */
let wipFiber = null;
let hookIndex = null;

// 如果更新的是函数组件, 会给fiber加上一个Hook属性, 并且要有一个hookIndex用来对当前的hook的Index追踪
function updateFunctionComponent(fiber) {
  wipFiber = fiber;
  hookIndex = 0;
  wipFiber.hooks = [];

  // 通过fiber.type找到的是函数式组件, 运行该函数返回一个react element,
  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}

// 使用useState时, 现在alternate上检查是否有旧的Hook,有就把旧的state给新的hook, 没有就初始化一个
function useState(initial) {
  const oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex];
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  };

  const actions = oldHook ? oldHook.queue : [];
  actions.forEach((action) => {
    hook.state = action(hook.state);
  });

  const setState = (action) => {
    hook.queue.push(action);
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    };
    // 设置为下一个更新工作单元
    nextUnitOfWork = wipRoot;
    deletions = [];
  };

  wipFiber.hooks.push(hook);
  hookIndex++;
  return [hook.state, setState];
}

// 抽取新建fiber节点的代码, diff算法
// 1.如果old fiber和react element有相同的type(dom节点相同), 只需要更新它的属性
// 2.如果type不同说明替换了新的dom节点, 需要重新创建
// 3.如果type不同且同级仅存在old fiber,说明需要删除节点
function reconcileChildren(wipFiber, elements) {
  let index = 0;
  // oldFiber就是当前页面渲染的Fiber树, currentFiber
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
  let prevSibling = null;

  while (index < elements.length || oldFiber != null) {
    const element = elements[index];
    let newFiber = null;

    const sameType = oldFiber && element && element.type == oldFiber.type;

    // 1. type相同, 更新属性
    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: "UPDATE",
      };
    }
    // 2. type不同,重新创建节点
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: "PLACEMENT",
      };
    }

    // 3. type不同, 并且仅存在oldFiber, 删除节点
    if (oldFiber && !sameType) {
      oldFiber.effectTag = "DELETION";
      deletions.push(oldFiber);
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    // 根据是否是第一个节点, 添加到对应的child/sibling上面
    if (index === 0) {
      wipFiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }
}
