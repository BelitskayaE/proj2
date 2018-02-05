$(document).ready(function() {
    $(window).resize(function () {
        if ($(window).width() < '800') {

$('#leftmenu').css('display','none');

/*$('#menuangle').click(function(){

    if($('#leftmenu').attr("opened") == "false" || $('#leftmenu').attr("opened") == undefined) {
        $('#leftmenu').css('display','block');


        $('#leftmenu').attr("opened", "true");


    } else {
        $('#leftmenu').css('display', 'none');


        $('#leftmenu').attr("opened", "false");

    }


})



*/



            function hide() {
                $(document).click(function () {
                    $("#leftmenu").removeClass('slideInDown');
                    $("#leftmenu").addClass('slideInUp');
                        $('#leftmenu').css('display', 'none');
                        $(document).off('click');





                })
            }

            $('#leftmenu').click(function(event){
                event.stopPropagation();
            });


            $("#menuangle").click(
                function (e) {
                    $("#leftmenu").removeClass('slideInUp');
                    $("#leftmenu").addClass('slideInDown');
                    $("#leftmenu").css('display', 'block')


                    setTimeout(hide, 20);

                }
            )

        }
    })
})