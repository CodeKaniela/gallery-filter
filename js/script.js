$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide();
            $('.filter').filter('.' + value).show();

        }
    });
    

    $('.filter-button').click(function () {
        $(this).siblings().removeClass('activeBtn');
        $(this).addClass('activeBtn');
    });

});