let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click', (e) =>{
        console.log(e.target);
        document.querySelectorAll('.button').style.
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    })
})