const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=6")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => {
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(todo.title));

        document.getElementById("todo-list").appendChild(div)
      });
    });
};

getTodos();
