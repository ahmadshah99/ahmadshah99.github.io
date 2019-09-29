$(document).ready(function(){
    $('.extend-sp').click(function(e) {
        show_side_project($(this));
    });
    
    function show_side_project(curr) {
        let curr_desc = curr.parent().next('.sp-description');
        if (curr_desc.css('display') == 'none' || curr_desc.css('display') == 'hidden') {
            curr.text('+');
        } else {
            curr.text('-');
        }
        curr_desc.slideToggle();
    }
});