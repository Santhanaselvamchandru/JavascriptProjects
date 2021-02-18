var input = document.getElementById('ip');
input.addEventListener('keyup',() =>{
    let val = input.value.toUpperCase();
    let ul = document.getElementById('collection');
    let li = ul.querySelectorAll('li');
    for(let i = 0;i<li.length ; i++){
        if(li[i].innerHTML.toUpperCase().indexOf(val) > -1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
            li[i].style.borderBottom = 'none';
        }
    }
});