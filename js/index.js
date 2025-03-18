const gridWrapper = document.getElementById("grid-wrapper");



async function getUsersAndShow() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    users.forEach(user => {

        const gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");
        gridWrapper.appendChild(gridContainer);
        const userDiv = document.createElement("div");
        userDiv.classList.add("user-div");
        gridContainer.appendChild(userDiv);


        const idNameDiv =  document.createElement("div");


        const infoContainer = document.createElement("div");
        infoContainer.id ="info-container";
        const pId = document.createElement("p");

        pId.innerHTML =  `<span class="info-name-span">ID:</span>  ${user.id}`;
        infoContainer.appendChild(pId);
        const pName = document.createElement("p");
        pName.innerHTML =  `<span class="info-name-span">Name:</span>  ${user.name}`;
        infoContainer.appendChild(pName);
        userDiv.appendChild(infoContainer);


        const a = document.createElement("a");
        a.innerText = "Details";
        userDiv.appendChild(a);
        a.onclick = () => {
            location.href = "user-details.html?id=" + user.id;
        }


    })
}



 getUsersAndShow();


