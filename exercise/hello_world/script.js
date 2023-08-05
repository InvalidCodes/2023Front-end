var user = {
  name: "gyf",
  age: 20,
  jobs: ["front-end", "engineer"],
  container: {
    frontEnd: "qianduan",
    backend: ["python", "java"],
  },
};

function time() {
  var time = Date.now();
  console.log(time);
  //console.log(Date(1691161291023));
  console.log(Date(time));
}

time();
