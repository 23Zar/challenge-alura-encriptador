document.addEventListener("DOMContentLoaded", function() {

  var btnEncriptar = document.getElementById("encriptar");
  var btnDesencriptar = document.getElementById("desencriptar");

  btnEncriptar.addEventListener("click", function() {
      var texto = document.getElementById("texto").value.toLowerCase();
      var textoEncriptado = encriptar(texto);
      document.getElementById("resultado").value = textoEncriptado;
  });

  btnDesencriptar.addEventListener("click", function() {
      var textoEncriptado = document.getElementById("texto").value.toLowerCase();
      var textoDesencriptado = desencriptar(textoEncriptado);
      document.getElementById("resultado").value = textoDesencriptado;
  });

  function encriptar(texto) {
      var textoCifrado = texto.replace(/e/img, "enter");
      textoCifrado = textoCifrado.replace(/o/img, "ober");
      textoCifrado = textoCifrado.replace(/i/img, "imes");
      textoCifrado = textoCifrado.replace(/a/img, "ai");
      textoCifrado = textoCifrado.replace(/u/img, "ufat");
      return textoCifrado;
  }

  function desencriptar(textoEncriptado) {
      var textoDescifrado = textoEncriptado.replace(/enter/img, "e");
      textoDescifrado = textoDescifrado.replace(/ober/img, "o");
      textoDescifrado = textoDescifrado.replace(/imes/img, "i");
      textoDescifrado = textoDescifrado.replace(/ai/img, "a");
      textoDescifrado = textoDescifrado.replace(/ufat/img, "u");
      return textoDescifrado;
  }

});

  
  


  
  