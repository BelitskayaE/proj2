$(document).ready(function () {


    $(".badg").hover(
        function () {


            $(".badg").addClass('wobble')

        },

        function () {


            $(".badg").removeClass('wobble')

        }
    )


    $("#bell").hover(
        function () {


            $(".badg").addClass('wobble')

        },

        function () {


            $(".badg").removeClass('wobble')

        }
    )

    function bell_hide() {
        $(document).click(function () {

            $("#uvedom").css('display', 'none');
            $(document).off('click');



        })
    }

    $("#bell").click(
        function (e) {

            $(".badg").css('visibility', 'hidden');
            $("#uvedom").css('display', 'block')


            setTimeout(bell_hide, 20);

        }
    )




})