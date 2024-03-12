const  strtbtn = document.querySelector('.head1');
const btngroup = document.querySelector('.btn-group')

strtbtn.onclick = () => {
    btngroup.classList.add('active');
}