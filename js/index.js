let infoTable = document.getElementById("info-table");



async function getUsersAndShow() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("userDiv");
        addId(user, userDiv);
        addNameAndButton(user, userDiv, user.id);
        infoTable.appendChild(userDiv);

    })
}


const addId = (user, userDiv) =>{
    const userId = document.createElement("div");
    userId.classList.add("userId");
    userId.innerHTML = user.id;
    userDiv.appendChild(userId);

}

const addNameAndButton = (user, userDiv, userId) =>{
    const userNameAndButton = document.createElement("div");
    userNameAndButton.classList.add("userNameAndButton");
    const userName = document.createElement("div");
    userName.classList.add("userName");
    userName.innerText = user.name;
    userNameAndButton.appendChild(userName);
    let a = document.createElement("a");
    a.href = `user-details.html?id=${userId}`;
    a.innerText = 'Details';
    a.classList.add("link");
    userNameAndButton.appendChild(a);
    userDiv.appendChild(userNameAndButton);
}



  getUsersAndShow();