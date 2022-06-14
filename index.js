let promiseBackent =new  Promise(( resolve, reject)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
     .then ((response)=>{
         return response.json()  
     })


    .then((data)=> 
     setTimeout(() =>{
        resolve(data);
     },2000)
     ) 
});
async function getUser(){
    const data = await promiseBackent;
    console.log(data);
    console.log(1);
}

getUser();
   

