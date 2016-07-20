//$(document).ready(function(){
//    $("#login").click(function(){
//        $(this).hide();
//        $("#register").show(500);
//        $("#register_form").hide(500);
//        $("#login_form").show(500);
//    });
//    $("#register").click(function(){
//        $(this).hide();
//        $("#login").show(500);
//        $("#register_form").show(500);
//        $("#login_form").hide(500);
//    });
//});

$(document).ready(function(){
    $("#login").click(function(){
        $(this).hide();
        $("#register").slideDown();
        $("#register_form").hide(500);
        $("#login_form").slideDown( "slow" );
    });
    $("#register").click(function(){
        $(this).hide();
        $("#login").slideDown();
        $("#register_form").slideDown( "slow" );
        $("#login_form").hide(500);
    });
});