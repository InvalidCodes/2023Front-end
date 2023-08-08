// 关注点分离，指html页面设计和javascript页面行为分离

// DOM
if(document.nodeType===9){//顶层节点
  console.log("top node");
}

// 对象，键值对形式
const user = {
  name: "gyf",
  age: 20,
  jobs: ["front-end", "engineer", 2, true],
  container: {
    frontEnd: "前端",
    backend: ["python", "java"],
  },
};
//console.log(user);

// 对象数组
let todos = [
  {
    id: 1,
    text: "前端",
    isCompleted: true,
  },
  {
    id: 2,
    text: "后端",
    isCompleted: false,
  },
  {
    id: 3,
    text: "全栈",
    isCompleted: false,
  },
];
console.log("Learnt front-end or not? -" + todos[0].isCompleted);

// 对象数组转json
const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

// 函数
function self_intro() {
  //console.log("My name is " + user.name + " who is a " + user.jobs);
  const hello = `Though I'm only ${user.age} years old, I have little hair.`; //esc下面的单引号
  console.log(hello.toUpperCase() + " (" + hello.length + " words)");
}

function time() {
  let time = Date.now();
  console.log(time);
  console.log("The time is " + Date(time));
}

function selection() {
  // 三目运算符
  const judge = todos[1].id === 10 ? "id is 10." : "id is not 10.";
  console.log(judge);
  // 循环
  for (let todo of todos) {
    console.log("Count! " + todo.text);
  }
}

self_intro();
time();
selection();
