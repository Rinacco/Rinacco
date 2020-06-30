$(function() {

//共通のjQuery//
$('.logo').click(function() {
$(this).fadeOut(1500);
$(this).fadeIn(1500);
});

$('.header-link a').hover(
function(){
$(this).css('font-weight','bold');
},
function(){
$(this).css('font-weight','normal');
}
);

$('footer a').hover(
function(){
$(this).css('font-weight','bold');
},
function(){
$(this).css('font-weight','normal');
}
);

//newsのjQuery//

$('.main-content a').hover(
function() {
$(this).css('opacity', '1');
},
function() {
$(this).css('opacity', '0.7');
}
);

//aboutのjQuery//

});
