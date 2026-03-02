const history =()=>{
    // console.log("Im a click")
    // 1 Get the ulr 
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => display(data));
}

const display=(post)=>{
    const history = document.getElementById("history");
    post.forEach(element => {
      const newelement =document.createElement("div")
      newelement.innerHTML = `
       <div style="border: 2px solid black; cursor: pointer; font-weight: bold; font-size:medium; padding: 20px; height: 400px; background-color: mediumseagreen;">
            <div style="display: flex; align-items: center;justify-content: space-between;">
                <p><i class="fa-solid fa-address-card"></i> Name :${element.name}</p>
                <p><i class="fa-regular fa-calendar"></i> suite :${element.address.suite}</p>
            </div>
            <p><i class="fa-solid fa-envelope"></i> Email :${element.email}</p>
            <p><i class="fa-solid fa-circle-user"></i> Username :${element.username}</p>

            <div style=" align-items: center;justify-content: space-between; ">
                <p><i class="fa-solid fa-street-view"></i> Address :${element.address.street}</p>
                <p><i class="fa-solid fa-city"></i> City :${element.address.city}</p>
            </div>
            <p><i class="fa-solid fa-phone"></i> Phone :${element.phone}</p>
            <p><i class="fa-brands fa-weebly"></i> Website :${element.website}</p>
            <p><i class="fa-brands fa-asymmetrik"></i> Company Name :${element.company.name}</p>
            <p><i class="fa-solid fa-cable-car"></i> serial number ID :${element.id}</p>

        </div>
      
      `;

      history.appendChild(newelement)
        
    });

}

// {
// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
// "street": "Kulas Light",
// "suite": "Apt. 556",
// "city": "Gwenborough",
// "zipcode": "92998-3874",
// "geo": {
// "lat": "-37.3159",
// "lng": "81.1496"
// }
// },