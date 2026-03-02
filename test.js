


  const data =async()=>{
   const res =await fetch("https://jsonplaceholder.typicode.com/posts/1")
    

 console.log("Hello Im a Arman");
 const jeson =await res.json()
 console.log(jeson)
 console.log(true);
  }


 data()