var btn = document.querySelector(".btn");
var priNomeResposta = document.getElementById("firsNameMsg");
var secNomeResposta = document.getElementById("lastNameMsg");
var emailResposta = document.getElementById("emailMsg");
var senhaResposta = document.getElementById("passwordMsg");
var imagemErro1 = document.querySelector(".imgError1");
var imagemErro2 = document.querySelector(".imgError2");
var imagemErro3 = document.querySelector(".imgError3");
var imagemErro4 = document.querySelector(".imgError4");
var firstnomeBorder = document.getElementById("firstName");
var lastnomeBorder = document.getElementById("lastName");
var emailBorder = document.getElementById("email");
var passwordBorder = document.getElementById("password");

btn.addEventListener("click", function() {
 
  var firstnome = document.getElementById("firstName").value;
  var lastnome = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  
if (firstnome == "") {
    priNomeResposta.textContent = "First Name cannot be empty";
    imagemErro1.style.opacity = "1";
    firstnomeBorder.style.border="1px solid hsl(0, 100%, 74%)";
    firstnomeBorder.placeholder = "";
} else {
    priNomeResposta.textContent = "";
}

if (lastnome == "") {
    secNomeResposta.textContent = "Last Name cannot be empty";
    imagemErro2.style.opacity = "1";
    lastnomeBorder.style.border="1px solid hsl(0, 100%, 74%)";
    lastnomeBorder.placeholder = "";
}
else {
    secNomeResposta.textContent = "";
}

if (email == "") {
    emailResposta.textContent = "Looks like this is not an email";
    imagemErro3.style.opacity = "1";
    emailBorder.style.border="1px solid hsl(0, 100%, 74%)";
    emailBorder.placeholder = "email@example/com";
}else {
    emailResposta.textContent = "";
}

if (password == ""){
    senhaResposta.textContent = "Password cannot be empty";
    imagemErro4.style.opacity = "1";
    passwordBorder.style.border="1px solid hsl(0, 100%, 74%)";
    passwordBorder.placeholder = "";
 }else {
    senhaResposta.textContent = "";
}

firstnomeBorder.addEventListener("focus", function() {
    imagemErro1.style.opacity = "0";
  });
  
  // Evento de foco para o campo de sobrenome
  lastnomeBorder.addEventListener("focus", function() {
    imagemErro2.style.opacity = "0";
  });
  
  // Evento de foco para o campo de e-mail
  emailBorder.addEventListener("focus", function() {
    imagemErro3.style.opacity = "0";
  });
  
  // Evento de foco para o campo de senha
  passwordBorder.addEventListener("focus", function() {
    imagemErro4.style.opacity = "0";
  });

});

// Função para aplicar a cor de borda padrão
function aplicarCorPadraoBorda(elemento) {
    elemento.style.border = "1px solid hsl(246, 25%, 77%)";
  }
  
  // Evento de mudança para o campo de primeiro nome
  firstnomeBorder.addEventListener("change", function() {
    aplicarCorPadraoBorda(this);
  });
  
  // Evento de desfoco para o campo de primeiro nome
  firstnomeBorder.addEventListener("blur", function() {
    aplicarCorPadraoBorda(this);
  });
  
  // Evento de mudança para o campo de sobrenome
  lastnomeBorder.addEventListener("change", function() {
    aplicarCorPadraoBorda(this);
  });
  
  // Evento de desfoco para o campo de sobrenome
  lastnomeBorder.addEventListener("blur", function() {
    aplicarCorPadraoBorda(this);
  });
  
  // Evento de mudança para o campo de e-mail
  emailBorder.addEventListener("change", function() {
    aplicarCorPadraoBorda(this);
  });
  
  // Evento de desfoco para o campo de e-mail
  emailBorder.addEventListener("blur", function() {
    aplicarCorPadraoBorda(this);
  });
  
  // Evento de mudança para o campo de senha
  passwordBorder.addEventListener("change", function() {
    aplicarCorPadraoBorda(this);
  });
  
  // Evento de desfoco para o campo de senha
  passwordBorder.addEventListener("blur", function() {
    aplicarCorPadraoBorda(this);
  });