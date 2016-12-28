$(document).ready(function(){

    $('.settings').hide();
    $('#leftBar').hide();
    onInitApp();


    var date = new Date();
    var hour = date.getHours().toString();
    var min = date.getMinutes().toString();
    if (date.getMinutes() < 9)
        min = '0' + min;
    var str = hour + ":" + min;

    $("#showTime").append(str);


$("#nameOfUser").html($.cookie('userName'));




});


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


$("#buttonSave").click(function(){
   var userEmail = $('#inputEmail').val();
   var userName = $('#userName').val();

    setCookie(userEmail, userName);

    $("#nameOfUser").html(userName);
    $('.settings').hide();
    $('#leftBar').fadeToggle( "slow", "linear" );
});


function setCookie(userEmailString, userNameString) {


    $.cookie('name', 'siCookie');
    $.cookie('userEmail', userEmailString);
    $.cookie('userName', userNameString);

    console.log(document.cookie);

}

function onInitApp() {

    console.log(document.cookie);



    if (!$.cookie('name')) {
        //no cookie
        $('#leftBar').hide();
        $('#buttonClose').hide();
        $('.settings').fadeToggle( "slow", "linear" );

    } else {
        //have cookie
        $('.settings').hide();
        $('#leftBar').fadeToggle( "slow", "linear" );
    }
}

$('#cleanCookie').click(function(){
    var x = $.removeCookie('name');
    console.log(x);
    console.log(document.cookie);
    location.reload();
});

$('#changeSettings').click(function(){
    $('#leftBar').fadeToggle( "slow", "linear" );
    $("#userName").val($.cookie('userName'));
    $('.settings').fadeToggle( "slow", "linear" );
});

$('#buttonClose').click(function(){
    $('.settings').fadeToggle( "slow", "linear" );
    $('#leftBar').fadeToggle( "slow", "linear" );
});