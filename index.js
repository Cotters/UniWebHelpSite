jQuery(document).ready(function() {
    
    var duration = 400; // Scroll duration (milliseconds)
    
    jQuery('.pag-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
    

//    function load_home() {
//        document.getElementById("content").innerHTML = '<h1>Working!</h1>';
//        document.getElementById("content").innerHTML = '<object type="text/html" data="1.html"></object>';
//        $("#content").load("1.html");
//    }
//    
//    $(document).ready( function() {
//        $("#load_home").on("click", function() {
//            document.getElementById("content").innerHTML = '<object type="text/html" data="1.html"></object>';
//        });
//    });

   
});