let Name =document.getElementById("clock-name").innerText;
let salary =document.getElementById("sal").innerText;
let img =document.getElementById("image").src;

function pass()
{
    localStorage.setItem('clock_Na',Name);
    localStorage.setItem('clock_Salary',salary);
    localStorage.setItem('clock_img',img);
    window.location.href = 'Product.html';

}

document.getElementById("item").addEventListener('click',pass);