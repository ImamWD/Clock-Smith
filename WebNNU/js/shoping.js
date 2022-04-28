

let countAll = document.querySelectorAll('.item').length;
let x =0;
let Name;
let salary;
let img;
let i=1;
let j =0;
let s ;
for( j=0;j<countAll;j++)
{
    s=document.getElementsByClassName('item')[j];
   s.addEventListener('click',pass);
    s.addEventListener('click', (event) => {
    });

}





Name = document.getElementsByClassName("clock-name")[i].innerText;
salary = document.getElementsByClassName("sal")[i].innerText;
img = document.getElementsByClassName("image")[i].src;

function pass()
{

    localStorage.setItem('clock_Na',Name);
    localStorage.setItem('clock_Salary',salary);
    localStorage.setItem('clock_img',img);
    window.location.href = 'Product.html';

}
