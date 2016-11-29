$(document).ready(function(){
    var date = new Date();
    var hour = date.getHours().toString();
    var min = date.getMinutes().toString();
    var str = hour + ":" + min;

    $("#showTime").append(str);


$("#leftBar").animate({


});;

});

$("#nameOfUser").onclick(function(){

})


function highLightButton(objectThatWasPressed) {
    console.log(objectThatWasPressed);
    objectThatWasPressed.style.backgroundColor = "black";


}

function NOhighLightButton(objectThatWasPressed) {

    console.log(objectThatWasPressed);
    objectThatWasPressed.style.backgroundColor = "rgba(0,0,0,0.2)";
}

