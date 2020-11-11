$(document).ready(function(){
    $("#search").keyup(function(){

        var searchVal = ($("#search").val().toLowerCase());
        $(".card").filter(function(){

            $(this).toggle($(this).text().toLowerCase().indexOf(searchVal) > -1);
            
        });
    });
    //$(".para").hide();
    $(".para").toggle(6000);
});