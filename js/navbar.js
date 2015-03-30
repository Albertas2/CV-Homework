$("#navbar a").on('click', function (e) {


    e.preventDefault();


    var toggleBtn = $(".navbar-toggle");


    if (toggleBtn.is(':visible'))
        toggleBtn.trigger("click");


    $("li.active").removeClass("active");
    $(this).parent().addClass("active");


    var hash = this.hash;


    $("html, body").animate({
        scrollTop: $(hash).offset().top - 60
    });

});