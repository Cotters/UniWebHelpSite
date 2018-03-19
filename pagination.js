jQuery(document).ready(function() {
    
//    (1.toString()).concat('.html')) // - get the html file to load
    
    jQuery('.pag-next').click(function(event) {
//        event.preventDefault();
        document.getElementsById('content').innerHTML = "<h1>This works!</h1>";
    })  
});