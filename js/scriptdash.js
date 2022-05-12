
var modalOpen=document.getElementById('formSearch');


modalOpen.addEventListener ('click', (e)=>{
    e.preventDefault();
    var docNum=document.getElementById("documentNum").value;
    var modal=document.querySelector('.modal');
    var modalSec=document.querySelector ('.modal-secondary');
    var modalTer=document.querySelector ('.modal-terciary');
    var modalFort=document.querySelector ('.modal-quaternary');
    var modalClose=document.querySelector('.modal_close');

if (docNum==52368795) {
    modal.classList.add('modal--show');
}
else if (docNum==1001235478) {
    modalSec.classList.add('modal--show');
}
else if (docNum==25413574){
    modalTer.classList.add('modal--show');
}
else if (docNum==1007203506){
    modalFort.classList.add('modal--show');
}
modalClose.addEventListener('click', (e)=>{
    e.preventDefault();
});
});
