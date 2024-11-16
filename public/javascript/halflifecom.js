var $ = jQuery;
var language = "english";

jQuery(function($){

    $burgButton = $("#burg");
    $burgOwner = $("#burg_owner");
    $burgDeadzone = $("#burg_deadzone")

    $burgButton.click(function(){
        $burgOwner.toggleClass("mobile_open");
    });

    $burgDeadzone.click(function(){
        $burgOwner.removeClass("mobile_open");
    })

    $('.language-button a, a.language-button').click(function() {
        if( LanguageIsOpen() ) {
            LanguageClose();
        } else {
            LanguageOpen();
        }
    });

    $('#language-close').click(function() {
        LanguageClose();
    });

    $(document).keyup(function(e) {
        if (LanguageIsOpen() && e.key === "Escape") { // escape key maps to keycode `27`
            LanguageClose();
       }
    });

    $(document).mouseup(function(e) 
    {
        if ( !LanguageIsOpen() ) { return; }
        var container = $("#language-dropdown");
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            LanguageClose();
        }
    });

});

function ScrimIsOpen() {
    if ( $("#scrim").css('display') == 'none' || $("#scrim").css("visibility") == "hidden"){
        return false
    }
    return true;
}

function LanguageIsOpen() {
    if ( $("#language-dropdown").css('display') == 'none' || $("#language-dropdown").css("visibility") == "hidden"){
        return false
    }
    return true;
}

function ScrimIsOpen() {
    if ( $("#scrim").css('display') == 'none' || $("#scrim").css("visibility") == "hidden"){
        return false
    }
    return true;
}

function MainMenuIsOpen() {
    return $("header#topnav").hasClass("open");
}

function MainMenuOpen() {
    ScrimOpen();
    $('header#topnav').removeClass('closed').addClass('open');
    LanguageClose( false );
}

function MainMenuClose( closeScrim = true ) {
    if ( closeScrim ) { ScrimClose(); }
    $('header#topnav').addClass('closed').removeClass('open');
}


function LanguageOpen() {
    ScrimOpen();
    $("#language-dropdown").fadeIn();
    MainMenuClose( false );
}

function LanguageClose( closeScrim = true ) {
    if ( closeScrim ) { ScrimClose(); }
    $("#language-dropdown").fadeOut();
}

function ScrimOpen() {
    $("#scrim").fadeIn('fast');
}

function ScrimClose() {
    $("#scrim").fadeOut('fast');
}

