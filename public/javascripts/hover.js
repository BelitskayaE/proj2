$(document).ready(function () {


    $( "#else" ).hover(function() {

        $( ".addelse" ).css( 'display','block' );
        $( ".addelse" ).addClass('fadeIn');

    });



    $( "#else" ).mouseleave(function() {
        $( ".addelse" ).removeClass('fadeIn');

        $( ".addelse" ).css( 'display','none' );


    });


    $( ".addelse" ).hover(function() {

        $( ".addelse" ).css( 'display','block' );



    });


    $( ".addelse" ).mouseleave(function() {




        $( ".addelse" ).css( 'display','none' );

    });







$('#add').hover(function(){

    $( ".addalso" ).css( 'display','block' );
    $( ".addalso" ).addClass('fadeIn');


    }


)

    $( "#add" ).mouseleave(function() {
        $( ".addalso" ).removeClass('fadeIn');

        $( ".addalso" ).css( 'display','none' );


    });





    $( ".addalso" ).hover(function() {


        $( ".addalso" ).css( 'display','block' );



    });


    $( ".addalso" ).mouseleave(function() {

        $( ".addalso" ).css( 'display','none' );

    });


})