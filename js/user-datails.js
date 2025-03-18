const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const userInfo = document.getElementById('all-user-info-div');
const getAndShowUserInfo = async (id) => {
    const user = await fetch('https://jsonplaceholder.typicode.com/users/'+ id).then(res => res.json());
  const h2 = document.getElementsByTagName('h2')[0]
h2.innerHTML = user.name;
  showInfo(user);

    const btn = document.getElementById('user-posts-btn')
    btn.onclick =()=>{
        showPosts(user);
    }

}




const showInfo = (user) => {
    for (const userKey in user) {
        const divInfo = document.createElement("div");
        const columnName = document.createElement("div");
        columnName.innerText = userKey;
        divInfo.append(columnName);
        columnName.className = "column-name";
        const infoColumn = document.createElement("div");
        if (  typeof user[userKey] ==='object') {
            console.log(userKey);
const ul = document.createElement("ul");
const insideInfo = user[userKey];
for (const key in insideInfo ) {
    const li = document.createElement("li");
if ( typeof insideInfo[key]==='object') {
    li.classList.add("parenttttt");
    li.innerHTML= `<span class="inside-li-span">${key}</span>`;
    const liInfo = insideInfo[key];
// li.innerText = key + " : ";
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


            divInfo.appendChild(ul)
        }

        else {
            infoColumn.innerText = user[userKey];
            infoColumn.className = "info-column-inline-block";
            divInfo.appendChild( infoColumn);
        }


        userInfo.appendChild(divInfo);
    }
}


const showPosts = async (user) => {
const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`).then(res => res.json());
const modalDiv = document.createElement("div");
modalDiv.className = "modal";
const modalContent = document.createElement("div");
modalContent.className = "modal-content";
const modalDivWrapper = document.createElement("div");
    modalDivWrapper.className = "modalDivWrapper";

    const close = document.createElement("img");
    close.className = "close";
    close.src = "/images/img.png";
    close.alt = "close";

    close.onclick =()=>{
        // modalDiv.remove() чи краще хайден?
        modalDiv.classList.toggle('hidden')
    }
    const closeDiv = document.createElement("div");
    closeDiv.className = "closeDiv";
    closeDiv.appendChild(close);
    modalDivWrapper.appendChild(closeDiv);


 for (const post of posts)
 {
     const div = document.createElement("div");
     const p = document.createElement("p");
     p.innerText = post.title;
     p.className = "post-title";
     div.appendChild(p);
     const button = document.createElement("a");
     button.innerText = "details";
     button.className = "details-btn";
     button.href = `post-details.html?postId=${post.id}`;
     div.appendChild(button);
     div.className= 'post-title-and-btn';
     const divWrapper = document.createElement("div");
     divWrapper.className = "post-title-and-btn-wrapper";
     divWrapper.appendChild(div);
     modalContent.appendChild(divWrapper);
 }
    modalDivWrapper.appendChild(modalContent);

 modalDiv.appendChild(modalDivWrapper);

document.body.appendChild(modalDiv);
console.log(document.documentElement.outerHTML);

}


getAndShowUserInfo(id);


