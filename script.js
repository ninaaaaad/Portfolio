var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght(){
return input.value.length;
}
function bokya(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}



    button.addEventListener("click", function(){

            
        if(inputLenght() > 0 ){
           return bokya();
            // var li = document.createElement("li");
            // li.appendChild(document.createTextNode(input.value));
            // ul.appendChild(li);
            // input.value="";
        }
      
    })

    input.addEventListener("keypress", function(event){    
        if(inputLenght() > 0 && event.keycode === 13 ){
           return bokya();
            // var li = document.createElement("li");
            // li.appendChild(document.createTextNode(input.value));
            // ul.appendChild(li);
            // input.value="";
        }
      
    })

