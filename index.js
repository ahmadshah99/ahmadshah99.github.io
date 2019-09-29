$(document).ready(function(){
    $('.extend-sp').click(function(e) {
        show_side_project($(this));
    });
    
    function show_side_project(curr) {
        let curr_desc = curr.parent().next('.sp-description');
        if (curr.text() == '-') {
            curr.text('+');
            curr.css('color', 'green');
        } else {
            curr.text('-');
            curr.css('color', 'red');
        }
        curr_desc.slideToggle();
    }
});