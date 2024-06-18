

function pes(){
    let input = document.getElementById('bar-pes').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('moda');
    let box = document.getElementById('box-pes');
    box.style.display = 'block'



for(i = 0; i < x.length; i++){

if(!x[i].innerHTML.toLocaleLowerCase().includes(input)){
    x[i].style.display = 'none';

} else {
    x[i].style.display = 'list-item';
};

}

}

function fpes(){
    let box = document.getElementById('box-pes');
    box.style.display = 'none'
}
