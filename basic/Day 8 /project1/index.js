const root = document.getElementById("root");
const postsContainer = document.querySelector(".posts-container");



fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
.then(posts=>{
    console.log(posts);
    // posts.forEach(post => {
        // const postElem = document.createElement("article");
        // postElem.classList.add("post")

        // const title = document.createElement("h1");
        // title.classList.add("post__title");
        // title.textContent = post.title;
        
        // const body = document.createElement("p");
        // body.classList.add("post__body");
        // body.textContent = post.body;

        // postElem.append(title);
        // postElem.append(body);

        // postsContainer.append(postElem);
    // });

    postsContainer.innerHTML = posts.map(post=>{
        return `<div class="post">
            <h1 class="post__title">${post.title}</h1>
            <p class="title__body">${post.body}</p>
        </div>`
    }).join("")
})



