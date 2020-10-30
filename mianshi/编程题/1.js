// 1.实现一个简单的模板字符串替换

// 实现一个render(template, context)方法, 将template中的占位符用context填充

var template = "{{name}}很厉害, 才{{age}}岁";
var context = { name: "bottle", age: "15" };

function render(template, context) {
  return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    context[key.trim()];
  });
}

const str = render(template, context);
console.log(str);
