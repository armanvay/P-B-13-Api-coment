const lodetodo = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
 const res =await fetch(url)
 const daata = await res.json()
  display(daata);
};

const display = (posttodo) => {
  const todoContiner = document.getElementById("todo-continer");
  todoContiner,innerHTML=""


  posttodo.forEach((newpostTode) => {


    console.log(newpostTode.id)
    const newcreElemant = document.createElement("div");
    newcreElemant.innerHTML = `
    
    
             <div class="childern-card">
             <p>${newpostTode.completed === true ? `<i class="fa-solid fa-circle-check"> </i>` : `<i class="fa-regular fa-circle-check"></i>`}
             
             
             </p>
             <p>${newpostTode.id}</p>
             <h1>${newpostTode.title}</h1>

            </div>
    
    `;

    todoContiner.appendChild(newcreElemant);
  });
  
};
// lodetodo()

// "userId": 1,
// "id": 2,
// "title": "quis ut nam facilis et officia qui",
// "completed": false
