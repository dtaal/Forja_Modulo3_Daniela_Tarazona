function ir(){
var log=document.getElementById("login").value;
var pass=document.getElementById("password").value;
  console.log (log)
  console.log (pass)

if (log=="Admin" && pass=="Kuepa2022"){
   alert ("Correcto")
   window.location="dashboard.html"
}
else {
    alert ("Incorrecto")
}
}

