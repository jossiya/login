"use script"

const { post } = require("../../../routes/home");

const id= document.querySelector("#id"),
    pw= document.querySelector("#pw"),
    loginBth = document.querySelector("#btn") ;

loginBth.addEventListener("click",login)
function login(){
const req={
    id : id.value,
    pw : pw.value
    };
    fetch("/login",{
        method:"post",
        headers :{
            "Content-Type" : "application/json"
        },
        body :JSON.stringify(req)
    })
}