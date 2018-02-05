$(document).ready(function () {


    $("#searchform").hover(function () {
        $("#toolone").addClass('fadeIn');
        $("#toolone").removeClass('fadeOut');
        $("#toolone").css('display', 'block');


    });


    $("#searchform").mouseleave(function () {
        $("#toolone").removeClass('fadeIn');
        $("#toolone").addClass('fadeOut');



    });

    $("#searchfo").hover(function () {
        $("#tooltwo").addClass('fadeIn');
        $("#tooltwo").removeClass('fadeOut');
        $("#tooltwo").css('display', 'block');


    });


    $("#searchfo").mouseleave(function () {
        $("#tooltwo").removeClass('fadeIn');
        $("#tooltwo").addClass('fadeOut');



    });




    $("#vopros").hover(function () {
        $("#toolthree").addClass('fadeIn');
        $("#toolthree").removeClass('fadeOut');
        $("#toolthree").css('display', 'block');


    });


    $("#vopros").mouseleave(function () {
        $("#toolthree").removeClass('fadeIn');
        $("#toolthree").addClass('fadeOut');



    });












});