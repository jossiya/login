"use sctrct"


//로그인 기능
const id= document.querySelector("#id"),
    psword= document.querySelector("#psword"),
    loginBth = document.querySelector("#btn") ;

loginBth.addEventListener("click",login)
function login(){
    const req={
    id : id.value,
    psword :psword.value,
    };
    
    fetch("/login", {
        method:"POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href="/main";
        }else{
            alert(res.msg);
        }  
    })
    .catch((err)=>{
    console.error(new Error("로그인 중 에러발생"));
    });
}
