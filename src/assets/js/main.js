import $ from 'jquery/dist/jquery.min';

$(window).on('mousemove', function (){
    let pokeball = $('.pokeball')
    let eye = $('.pokeball__inner-circle')
    let line = $('.pokeball__line')


    let rotatePokeball = (event.clientX - pokeball.position().left) / 50
    let topLine;

    topLine = 22 + event.clientY/300

    let translateEye = (event.clientX - $(this).width()/2 ) / 75

    pokeball.css('transform', `rotate(${rotatePokeball}deg)`)
    eye.css('transform', `translateX(${translateEye}px)`)
    line.css('top', `${topLine}px`)

})