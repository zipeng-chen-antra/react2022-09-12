const container = document.querySelector(".container");

const newPost = document.createElement("div");
const newPost2 = document.createElement("div");
const newPost3 = document.createElement("div");
const newPost4 = document.createElement("div");

newPost.textContent = "new Post";
newPost2.textContent = "new Post 2";
newPost3.textContent = "new Post 3";
newPost4.textContent = "new Post 4";

container.appendChild(newPost);
container.appendChild(newPost2);
container.appendChild(newPost3);
container.appendChild(newPost4);