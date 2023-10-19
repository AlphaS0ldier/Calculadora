let pantalla = document.getElementById("screen");

let arr_botones = document.querySelectorAll("li");

for (const boton of arr_botones) {
  /*
    if(boton.firstChild.dataset.key!="clear"&&
    boton.firstChild.dataset.key!="equal"){

    }
    */
  if (boton.firstChild.dataset.key == "clear") {
    boton.addEventListener("click", () => (pantalla.textContent = ""));
  } else if (boton.firstChild.dataset.key == "equal") {

    boton.addEventListener(
      "click",
      () => {
        try
        {pantalla.textContent = eval(pantalla.textContent);}
        catch(error){
            window.alert(error);
        }
        }
    );
  } else {
    boton.addEventListener(
      "click",
      () => (pantalla.textContent += boton.firstChild.dataset.key)
    );
  }
}