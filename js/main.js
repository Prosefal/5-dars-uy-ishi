elForm = document.querySelector(".js-form");
elInput = document.querySelector(".js-input");
elDanger = document.querySelector(".danger");
elSucces = document.querySelector(".succes");

elForm.addEventListener("submit", function (evt){
  evt.preventDefault();
  let result = elInput.value;

  if (result > 10){
    elSucces.className = 'border-1'
    elDanger.className = 'border-4'
  }
  else{

    elDanger.className = 'border-2'
    elSucces.className = 'border-3'

  }
})

