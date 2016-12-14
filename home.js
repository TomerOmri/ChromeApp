$(document).ready(function(){
    var date = new Date();
    var hour = date.getHours().toString();
    var min = date.getMinutes().toString();
    var str = hour + ":" + min;

    $("#showTime").append(str);


   // $('p span').css('color' ,'red');


    $('ul#list li:first').css('color' ,'red');


$("#nameOfUser").dblclick(function(){
    var newName = prompt("Please enter your name");
    $("#nameOfUser").empty().append(newName);
});

});



function highLightButton(objectThatWasPressed) {

    objectThatWasPressed.style.backgroundColor = "black";


}

function NOhighLightButton(objectThatWasPressed) {

    objectThatWasPressed.style.backgroundColor = "rgba(0,0,0,0.2)";
}

$(".addTile").click(function(){
   var nameOfTile = prompt("Enter name of tile:");
   var linkToSite = prompt("Enter site address:");
    var fullLinkPath = 'http://' + linkToSite;

console.log(fullLinkPath);

    var aLink = $('<a />').attr('href', fullLinkPath)
        .attr('target', '_blank')
        .text(nameOfTile);

   var closeSpan = $('<span />').text(aLink)
       .attr('id', 'menuButton')
       .attr('onemouseover', 'highLightButton(this)')
       .attr('onmouseleave', 'NOhighLightButton(this)');

   console.log(closeSpan);




   $('#menu').append(aLink);

});