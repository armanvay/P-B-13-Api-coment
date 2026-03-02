// "postId": 1,
// "id": 1,
// "name": "id labore ex et quam laborum",
// "email": "Eliseo@gardner.biz",
// "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"


const Show=()=>{
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
      .then((res) => res.json())
      .then(commentdata => display(commentdata));
}

const display = (post) => {
// 1 Get the Number id const 

const commientcard = document.getElementById("commient-card");
commientcard.innerHTML=""

  post.forEach(post =>{
    const chiderens =document.createElement("div")
    chiderens.innerHTML = `

       <div class="card">
            <h1>Id : ${post.id}</h1>
            <h5>Name : ${post.name}</h5>
            <p>Email : ${post.email}</p>
            <p>Body : ${post.body}>
        </div>
    `;
    commientcard.appendChild(chiderens);
  })
  

};

