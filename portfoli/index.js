let btn = document.querySelector("#btn")
let body = document.querySelector("body")

btn.addEventListener("click",()=>{
    if(body.id=="light"){
        body.id="dark"
        btn.innerHTML=`<i class="fa-regular fa-moon"></i>`
    }
    else if(body.id=="dark"){
        body.id="light"
         btn.innerHTML=`<i class="fa-regular fa-sun"></i>`
    }
})