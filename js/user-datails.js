const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const userInfo = document.getElementById('all-user-info-div');
const getAndShowUserInfo = async (id) => {
    const user = await fetch('https://jsonplaceholder.typicode.com/users/'+ id).then(res => res.json());
  const h2 = document.getElementsByTagName('h2')[0]
h2.innerHTML = user.name;
  showInfo(user);
  addPostsBtn(user);

}


// переробити на рекурсію бажано
const showInfo = (user) => {
    for (const userKey in user) {
        const divInfo = document.createElement("div");
        const columnName = document.createElement("div");
        columnName.innerText = userKey;
        const infoColumn = document.createElement("div");
        if (  typeof user[userKey] ==='object') {
            console.log(userKey);
const ul = document.createElement("ul");
const insideInfo = user[userKey];
for (const key in insideInfo ) {
    const li = document.createElement("li");
if ( typeof insideInfo[key]==='object') {
    const liInfo = insideInfo[key];
li.innerText = key + " : ";
const ul2 = document.createElement("ul");
li.appendChild(ul2);
    for (const key in liInfo) {
        const li2 = document.createElement("li");
        li2.innerText = liInfo[key];
        ul2.appendChild(li2);
        console.log(liInfo[key]);
    }
}
else
    li.innerText = key + " : " + insideInfo[key];
    ul.appendChild(li);
}
infoColumn.appendChild(ul);
        }
      else infoColumn.innerText = user[userKey];
        divInfo.append(columnName, infoColumn);
        userInfo.appendChild(divInfo);
    }
}



const addPostsBtn = (user) => {
    const btn = document.createElement("button");
    btn.innerText = 'post of current user'
    userInfo.appendChild(btn);
    btn.onclick =()=>{
        showPosts(user);
    }
}





const showPosts = async (user) => {
const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`).then(res => res.json());

 const modalDiv = document.createElement("div");
modalDiv.className = "modal";

const modalContent = document.createElement("div");
modalContent.className = "modal-content";
const ul = document.createElement("ul");

modalContent.appendChild(ul);
 for (const post of posts)
 {
     const div = document.createElement("div");
     const li = document.createElement("li");
     const p = document.createElement("p");
     p.innerText = post.title;
     li.appendChild(p);
     // li.innerText = post;
     const button = document.createElement("a");
     button.innerText = "details";
     button.className = "details-btn";
    button.href = `post-details.html?postId=${post.id}`;
     li.appendChild(button);
     li.className= 'post-title-and-btn';
     ul.appendChild(li);
 }



 modalDiv.appendChild(modalContent);
 const close = document.createElement("img");
close.className = "close";
close.src = "/images/img.png";
close.alt = "close";

close.onclick =()=>{
    // modalDiv.remove() чи краще хайден?
     modalDiv.classList.toggle('hidden')
}

modalContent.appendChild(close);
document.body.appendChild(modalDiv);
console.log(document.documentElement.outerHTML);

}


getAndShowUserInfo(id);


