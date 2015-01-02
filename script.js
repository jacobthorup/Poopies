document.addEventListener("DOMContentLoaded", function(){

  var rotated = false;

  var button = document.querySelector("#spin-button")

  button.addEventListener("click", function(){

    var puppies = document.querySelector("#puppies");

    var info = document.querySelector("#info");

    if(rotated){

      puppies.style.webkitTransform = "rotate(0)";

      puppies.style.opacity = "0";

      info.style.marginTop = "-120px";

      rotated = false;
    }
    else
    {

    puppies.style.webkitTransform = "rotate(5deg) scale(.9)";

    puppies.style.opacity = "1";

    info.style.marginTop = "10px";


    rotated = true;
    }
  })

})

