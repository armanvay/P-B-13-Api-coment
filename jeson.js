// const person ={
//     name :"arman",
//     age :17,
//     fruts :"mango",
//     dish :"matan",
//     fridend :["hasan","asif","Tanjim","Rajon"],
//     isRich:true
// }

// const { createElement } = require("react");

// console.log(person,typeof person)
// const personJeson =JSON.stringify(person) 
// console.log(personJeson,typeof personJeson)



// jeson



//  sistam 1 
// const data = document.getElementById("lode-data").addEventListener("click",function(){
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((res) =>res.json())
// .then((data =>console.log(data)))
// })

// sitim 2 


const lode =() =>{

  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) =>res.json())
  .then((data =>console.log(data)))

}



const lodepost =()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
      .then((res) => res.json())
      .then((post) => {
        // console.log(post);
        displypost(post);
      });
}

const displypost =(post)=>{

    //1 get the continer 

    const postcontiner = document.getElementById("post-continer");

    postcontiner.innerHTML=""
// console.log(postcontiner)

    post.forEach((post) =>{

        // console.log(post.title)
        
        // 2 createElement HTMAL Elment 
        const divss =document.createElement("div")
        divss.innerHTML = `
         <div class="psot-card">
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            </div>

        
        `;
        

        // 3 add li to continer 

        postcontiner.appendChild(divss)
        
    })
    
}
// lodepost()