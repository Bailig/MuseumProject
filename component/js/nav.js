var hash= $(this).find('li.active a').attr('href');
if(hash !== '#home'){
    $('header nav').addClass('inbody');
}else{
    $('header nav').removeClass('inbody');
}
$('.navbar').on('activate.bs.scrollspy', function(){
    var hash= $(this).find('li.active a').attr('href');
    if(hash !== '#home'){
        $('header nav').addClass('inbody');
    }else{
        $('header nav').removeClass('inbody');
    }
});

