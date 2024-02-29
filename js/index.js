import { hone } from "./phone.js";
console.log(hone);
// https://auth-rg69.onrender.com/api/products/all
let dark = document.querySelector('#dark')
let wrapper = document.querySelector('#wrapper')
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://auth-rg69.onrender.com/api/products/all',{
    method: "GET"
})
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        console.log(data);
    })
    .catch(err =>{
        console.log(err);
    })
})


function creatCard(block3) {
    return` <div class="block2-table" id="block3">
    <p>${1}</p>
<p>${block3.Name}</p>
<p>${block3.price}</p>
<p>${block3.status}</p>
<p>${block3.description}</p>
<p>${block3.createdAt}</p>
<p>${block3.updatedAt}</p>
<div class="bbb">
    <button id="edit">edit</button>
<button id="delete">delete</button>
</div>
    `
}

hone.forEach(hone => {
    let card = creatCard(hone);
    wrapper.innerHTML += card
});


dark.addEventListener('click',()=>{
    // document.body.classList.add('tun')
    // document.body.classList.remove('tun')
    document.body.classList.toggle('tun')
})




window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  