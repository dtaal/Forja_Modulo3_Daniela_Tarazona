let logButton=document.getElementById ('login-button');

logButton.addEventListener('click', (e)=>{
  e.preventDefault();

  var logUser=document.getElementById ('login').value;
  var logPass=document.getElementById ('password').value;

if (logUser=="Admin" && logPass=="Kuepa2022"){
  window.setTimeout(()=>{window.location.href='dashboard.html'},1000);
}

else if (logUser!="Admin" && logPass!="Kuepa2022") {
  Swal.fire({
    icon: 'error',
    title: 'Inicio de sesión inválido',
    text: 'Intenta nuevamente',
  })
}
else {
  Swal.fire({
    icon: 'error',
    title: 'Inicio de sesión inválido',
    text: 'Debes llenar los campos solicitados',
  })
}
});
