const  strtbtn = document.querySelector('.butt1');
const btngroup = document.querySelector('.btn-group');
const btnExit = document.querySelector('.btn-ext');
const SEC1 = document.querySelector('.SEC1');

strtbtn.onclick = () => {
    btngroup.classList.add('active');
    SEC1.classList.add('active');
}

btnExit.onclick= () => {
    btngroup.classList.remove('active');
    SEC1.classList.remove('active');
}