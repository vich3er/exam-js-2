const gridWrapper = document.getElementById("grid-wrapper");



async function getUsersAndShow() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    users.forEach(user => {
        // ячекйкі роблю
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");
        gridWrapper.appendChild(gridContainer);
        const userDiv = document.createElement("div");
        userDiv.classList.add("user-div");
        gridContainer.appendChild(userDiv);

        // айді + нейм
        const idNameDiv =  document.createElement("div");
        // idNameDiv.classList.add("id-name-div");
        // userDiv.appendChild(idNameDiv);

        // верх діва з юзером
        const infoContainer = document.createElement("div");
        infoContainer.id ="info-container";
        const pId = document.createElement("p");
        // pId.innerText = 'ID: ' + user.id;
        pId.innerHTML =  `<span class="info-name-span">ID:</span>  ${user.id}`;
        infoContainer.appendChild(pId);
        const pName = document.createElement("p");
        pName.innerHTML =  `<span class="info-name-span">Name:</span>  ${user.name}`;
        infoContainer.appendChild(pName);
        userDiv.appendChild(infoContainer);






        // кнопка-посилання
        const a = document.createElement("a");
        a.innerText = "Details";
        userDiv.appendChild(a);
        a.onclick = () => {
            location.href = "user-details.html?id=" + user.id;
        }





    })
}










 getUsersAndShow();



// якщо робити таблицю а не гріди
// let infoTable = document.getElementById("info-table");
//
//
//
// async function getUsersAndShow() {
//     const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
//     users.forEach(user => {
//         const userDiv = document.createElement("div");
//         userDiv.classList.add("userDiv");
//         addId(user, userDiv);
//         addNameAndButton(user, userDiv, user.id);
//         infoTable.appendChild(userDiv);
//
//     })
// }

//
//
// const addId = (user, userDiv) =>{
//     const userId = document.createElement("div");
//     userId.classList.add("userId");
//     userId.innerHTML = user.id;
//     userDiv.appendChild(userId);
//
// }
//
// const addNameAndButton = (user, userDiv, userId) =>{
//     const userNameAndButton = document.createElement("div");
//     userNameAndButton.classList.add("userNameAndButton");
//     const userName = document.createElement("div");
//     userName.classList.add("userName");
//     userName.innerText = user.name;
//     userNameAndButton.appendChild(userName);
//     let a = document.createElement("a");
//     a.href = `user-details.html?id=${userId}`;
//     a.innerText = 'Details';
//     a.classList.add("link");
//     userNameAndButton.appendChild(a);
//     userDiv.appendChild(userNameAndButton);
// }
//
//
//