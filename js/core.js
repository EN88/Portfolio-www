//Modal animated open/close
$("#modal-01").animatedModal({
    modalTarget: 'modal1',
    animatedIn: 'zoomIn',
    animatedOut: 'bounceOut',
});
$("#modal-02").animatedModal({
    modalTarget: 'modal2',
    animatedIn: 'zoomIn',
    animatedOut: 'bounceOut',
});
$("#modal-03").animatedModal({
    modalTarget: 'modal3',
    animatedIn: 'zoomIn',
    animatedOut: 'bounceOut',
});
$("#modal-04").animatedModal({
    modalTarget: 'modal4',
    animatedIn: 'zoomIn',
    animatedOut: 'bounceOut',
});
$("#modal-05").animatedModal({
    modalTarget: 'modal5',
    animatedIn: 'zoomIn',
    animatedOut: 'bounceOut',
});
$("#modal-06").animatedModal({
    modalTarget: 'modal6',
    animatedIn: 'zoomIn',
    animatedOut: 'bounceOut',
});





//Rocket back to begin of page
$('.rocket').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600, 'swing');
});




//Scroll down
$('.scroll-down-ico').click(function () {
    var window_hight = $(window).height();
//    console.log(window_hight)
    //if window height <=799 to scrollTop 300 else
    if(window_hight <=760) {
        $("html, body").animate({
            scrollTop: 360
        }, 1000, 'swing');           
    } else if(window_hight <= 799) {
        $("html, body").animate({
            scrollTop: 450
        }, 1000, 'swing');            
    } else {
        $("html, body").animate({
            scrollTop: 605
        }, 1000, 'swing');    
    }

});





//Contact form submit
$("#submit").click(function(e) {
    e.preventDefault();
    
    var name = $("#name").val();
    var mail = $("#email").val();
    var message = $("#message").val();
    
    var a = false;
    var b = false;
    var c = false;
//    console.log('button send message click');
    
    function validate_name() {
        if (name.length < 2) {
            a = false;
//            console.log('validate_name false');
        } else {
            a = true;
//            console.log('validate_name valid');
        }
    }
    function validate_mail() {
        if (mail.length < 8) {
            b = false;
//            console.log('validate_mail false');
        } else {
            b = true;
//            console.log('validate_mail valid');
        }
    } 
    function validate_message() {
        if (message.length < 10) {
            c = false;
//            console.log('validate_message false');
        } else {
            c = true;
//            console.log('validate_message valid');
        }
    }     
    
    function validate() {
        validate_name();
        validate_mail();
        validate_message();
        
        if (a == false) {
            $('input#name').addClass('not-valid');
        } else {
            $('input#name').removeClass('not-valid');
        }
        if (b == false) {
            $('input#email').addClass('not-valid');
        } else {
            $('input#email').removeClass('not-valid');
        }
        if (c == false) {
            $('textarea#message').addClass('not-valid');
        } else {
            $('textarea#message').removeClass('not-valid');
        }
        
        if (a == true && b == true && c == true) {
            $.ajax({
                url: "contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    email: mail,
                    message: message
                }
            });
//            console.log('wyslane');
            $('#submit').addClass('hidden');
            $('#msg-sent').removeClass('hidden');
        } else {
            return false;
//            console.log('validate false');
        }
    }
    
    validate();
})





//Smooth Scroll
$(function () {

    var $window = $(window);
    var scrollTime = 0.7;
    var scrollDistance = 300;

    $window.on("mousewheel DOMMouseScroll", function (event) {

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo: {
                y: finalScroll,
                autoKill: true
            },
            ease: Power1.easeOut,
            overwrite: 5
        });

    });
});