let form=document.getElementById("form-user");
let campos=document.querySelectorAll("#form-user input");

const reglas={
    textos: /^[a-zA-Z-AÁ-ÿ\s]{1,50}$/,
    numeros:/^\d{7,10}$/,
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
    password:/^(?=.*\d)(?=.*[!#$@%&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
}

const inputs={
    numdoc:false,
    name:false,
    lastname:false,
    email:false,
    phone:false,
    address:false,
    alergias:false,
    formcity:false,

}

form.addEventListener('submit',e=>{
    e.preventDefault();
    if(inputs.numdoc && inputs.name && inputs.lastname && inputs.email && inputs.phone && inputs.address && inputs.alergias && inputs.formcity){
        Swal.fire({
            icon: 'success',
            title: '¡Genial!',
            text: 'Cambios guardados exitosamente',
          })
       /* Swal.fire({
            title: '¿Quieres guardas los cambios?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Guardar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Cambios guardados',
                'Tus cambios se subieron correctamente',
                'success'
              )
            }
          })*/
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los cambios NO se guardaron, revisa nuevamente',
          })
    }
})

switch(e.target.name){
    case "numdoc":   
        validarInput(reglas.numeros,e.target.name,e.target);
    break;
    case "name":
        validarInput(reglas.textos,e.target.name,e.target);
    break;
    case "lastname":
        validarInput(reglas.textos,e.target.name,e.target);
    break;
    case "numdoc":
        validarInput(reglas.numeros,e.target.name,e.target);
    break;
    case "email":
        validarInput(reglas.correo,e.target.name,e.target);
    break;
    case "address":
        validarInput(reglas.password,e.target.name,e.target);
    break;
    case "alergias":
        validarInput(reglas.textos,e.target.name,e.target);
    break;
}

campos.forEach((campo)=>{
    campo.addEventListener('keyup',validarCampos);
    campo.addEventListener('blur',validarCampos);
})
