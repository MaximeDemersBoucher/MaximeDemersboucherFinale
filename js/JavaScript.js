/*var sal =prompt("Entrer un nombre :");

function impot()
{
if(sal<= 30000 && sal> 15000)
{
    alert((sal-2248)*0.15);
    alert((sal-2278)*0.1253);
}
else if(sal>30000 && sal<= 50000)
{
    alert((sal-5595)*0.2);
    alert((sal-4939)*17);
}
else if(sal>50000 && sal<=100000)
{
    alert((sal-16151)*0.15);
    alert((sal-13810)*0.1253);
}
else
    {
        alert((sal)*0.25);
        alert((sal)*0.25);
}
}
impot();*/
/*
var actif=false;
$( "#boutonGauche" ).click(function() {
    $("#Bc").css("left","700px")
});
$( "#boutonDroite" ).click(function() {
    //CODE ICI
    $("#Bc").css("right","500px")
});
$( "#boutonEnleverImage" ).click(function() {
    //CODE ICI
    $("#Bc").fadeOut("slow")
});
$( "#boutonAjouterImage" ).click(function() {
    //CODE ICI
    $("#Bc").fadeIn("slow")
});
$( "#boutonAjouterAttribut" ).click(function() {
    //CODE ICI
    $("#Bc").attr("alt","this.love")
});
$( "#boutonAjouterTitre" ).click(function() {
    //CODE ICI
    $("#Bc").title("ghvdhvhfbvf")
});
$( "#boutonDupliquer" ).click(function() {
    //CODE ICI
    $("#Bc").clone().insertAfter("#Bc");

});
$( "#boutonTeleport" ).click(function() {
    //CODE ICI
    actif=!actif
    $("#Bc").insertAfter(".tp")
    if(actif===true){
        $("#Bc").insertAfter(".tp")
    }
    else{
        $(".tp").insertAfter("#rest")
    }

});
$( "#boutonVitesseSupreme" ).click(function() {
        setInterval(function () {
            $("#Bc").fadeOut("slow")
    },500);
    setInterval(function () {
        $("#Bc").fadeIn("slow")
    },500);
});
$( "#boutonBoom" ).click(function() {
    //CODE ICI
    var NomImg =$("#Bc").attr("src");
    if(NomImg=== "bootstrap-4.2.1-dist/img/BattlecatB.png")
    {
        $("#Bc").attr("src","bootstrap-4.2.1-dist/img/BCcellB.png")
    }
    else {
        $("#Bc").attr("src", "bootstrap-4.2.1-dist/img/BattlecatB.png")
    }
    $(".rest").hide();
});
$( "#boutonChangerImage" ).click(function() {
    //CODE ICI
    $("#Bc").attr("src","bootstrap-4.2.1-dist/img/BCcellB.png");
});
/*$( "#boutonTeleport" ).click(function() {
    //CODE ICI
    $("#Bc").moveTo("0","1000")
    }
*/
function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

// Get the video
var video = document.getElementById("bootstrap-4.2.1-dist/img/video.mp4");

// Get the button
var btn = document.getElementById("myBtn");
/*
// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}*/
/*
var $animation_elements = $('.animation-element');
var $window = $(window);
$window.on('scroll', check_if_in_view);
function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}
*/
