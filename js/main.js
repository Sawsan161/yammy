$('.close').on('click',function(){
    $('.rows').animate({width:"0px",left:"-300px"},1000);
    $('.open').removeClass('d-none');
    $('.close, .sidebar ul, .sidebar .icon').hide();
    $('.open').show();
    console.log("hello");

});
$('.open').on('click',function(){
    $('.rows').animate({width:"400px",left:"300px"},1000);
    $('.open').addClass('d-none');
    $('.close ,.sidebar ul, .sidebar .icon' ).show();
    $('.open').hide();
console.log("hi");
});

// $('.open').on('click',function(){
//     $('aside').animate({width:"300px",left:"0px"},1000);
//     $('.open').animate({left:"320"},1000);
//     $('.inner').animate({left:"10%"},1000)
// })
// $('.singer').on('click', function(){
//     $(this).next('.prief').slideToggle(1000);
// })