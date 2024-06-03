$(document).ready(function() {
    console.log("Document is ready!");
    $('#contact-us-button').on('click', function() {
        window.location.href = 'contact.html';
        console.log("Contact us button clicked!");
        $('#contact-form-popup').fadeIn();
    });

    $(document).on('click', '.project-item', function() {
        console.log("Project item clicked!");
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
    });

    $(document).on('click', function(event) {
        console.log("Document clicked!");
        if (!$(event.target).closest('#contact-form-popup, #contact-us-button').length) {
            $('#contact-form-popup').fadeOut();
        }
    });

    // Initialize Slick Slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true
    });

    // Change project image and highlight selected project
    $('.project-item').click(function() {
        console.log("Project item clicked!");
        $('.project-item').removeClass('project-selected');
        $(this).addClass('project-selected');
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
    });
});
