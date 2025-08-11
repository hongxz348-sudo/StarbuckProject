$(function(){
    $(".ChangeBaground-btn").click(function(){
        $("body").css("background-color" , "oklch(70.7% 0.022 261.325)");
        $(".Detail").css("color" , "white");
        $(".ChangeBaground-btn").css("display", "none");
        $(".Changetowhite-btn").css("display" , "block");
        $(".menu").hover(
            function(){
            $(this).css("color", "white");
            },
            function(){
                $(this).css("color" , "black");
            }
        );
    });
    $(".Changetowhite-btn").click(function(){
        $("body").css("background-color" , "#eee");
        $(".Changetowhite-btn").css("display" , "none");
        $(".ChangeBaground-btn").css("display", "block");
        $(".Detail").css("color" , "oklch(70.5% 0.015 286.067)");
        $(".menu").hover(
            function(){
            $(this).css("color", "oklch(43.2% 0.095 166.913)");
            },
            function(){
                $(this).css("color" , "black");
            }
        );
    });
    

    $("#closeMenubtn").click(function(){
        $("#hiddenmenu").css("left", "0%");
    });

    $("#CloseMenu-btn").click(function(){
        $("#hiddenmenu").css("left", "-100%");
    });
    

   
    $(".btn").click(function(){
        $(".menu").slideToggle();
        $(".menu ").css("display" , "flex");
    });
     $(".btn1").click(function(){
        $(".menu1").slideToggle();
        $(".menu1").css("display" , "flex");
    });
     $(".btn3").click(function(){
        $(".menu3").slideToggle();
        $(".menu3").css("display" , "flex");
    });
     $(".btn4").click(function(){
        $(".menu4").slideToggle();
        $(".menu4").css("display" , "flex");
    });
     $(".btn5").click(function(){
        $(".menu5").slideToggle();
        $(".menu5").css("display" , "flex");
    });
});
