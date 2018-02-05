
    $('.flex').click(function () {
        $(".flex").removeClass("active");
        $(this).addClass('active');

        var cont = $('#cont');
        if(cont.hasClass('active')) $('.contentContacts').css('display','block');
        else{

            $('.contentContacts').css('display','none');
        }
    });




