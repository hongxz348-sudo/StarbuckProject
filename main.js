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
    });


    const btn =  $("#closeMenubtn");
    let OpenMenu = true;
    btn.click(function(){
        OpenMenu = !OpenMenu;
        if(OpenMenu){
            $("#hiddenmenu").css("left", "0%");
        }else{
            $("#hiddenmenu").css("left", "-100%");
        }
        
    });
});
