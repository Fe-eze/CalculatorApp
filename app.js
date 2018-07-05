anybutton = document.querySelectorAll("input");
result = document.querySelector(".result")

for(var i=0; i<anybutton.length; i++){
  anybutton[i].addEventListener("click", function() {
    result.textContent = "click!"+[i];
  });
}