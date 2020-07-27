function DoubleLinkList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  let length = 0;
  let head = null;
  let tail = null;

  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;

      // 插入在第一个位置, 如果是空链表,直接加, 否则把头结点修改
      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
        // 如果是插入在尾部, 就从tail开始修改, 然后把尾节点修改
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        // 如果插入在中间, 那就先找到那个位置, 然后进行插入
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;
      }

      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let current = head;
      let previous;
      let index = 0;

      if (position === 0) {
        head = current.next;

        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };
}
