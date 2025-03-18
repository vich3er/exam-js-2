const params = new URLSearchParams(window.location.search);
const postID = params.get("postId");
const spanClass = 'posts-span'

const getAndShowPost = async (postId) => {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/'+ postId).then(res => res.json());

    const postTitle =document.getElementById('post-title');
    postTitle.innerText = post.title;
    const pUserId = document.getElementsByClassName('postInfoId')[0];
const pId = document.getElementsByClassName('postInfoId')[1];
pId.innerHTML = post.id;
pUserId.innerHTML = post.userId;

const a = document.getElementsByTagName('a')[0];
a.href = 'user-details.html?id=' + post.userId;


const postBody = document.getElementById('post-body');
postBody.innerText =  post.body;
}



const getAndShowComments=async (postId) => {
    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(res => res.json());
const commentsDiv = document.getElementById('comments-div');
    comments.forEach((comment) => {
        const  commentWrapper = document.createElement('div');
        commentWrapper.classList.add('comment-wrapper');

        const commentDiv = document.createElement('div');
        commentDiv.className = 'commentDiv';
        const ul = document.createElement('ul');

        for (const key in comment) {
            const li = document.createElement('li');
            li.classList.add('comment-list-item');
          if (key!=='body'){
              li.innerHTML = `<span class='posts-span'>${key}: </span> ${comment[key]}`;
          }
          else{
              li.innerHTML =  `${comment[key]}`;
          }
            ul.appendChild(li);
        }




        commentDiv.appendChild(ul);
        commentWrapper.appendChild(commentDiv);
        commentsDiv.appendChild(commentWrapper);





    })






}



getAndShowPost(postID);
getAndShowComments(postID);