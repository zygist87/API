/*
$(document).ready(function(){
  console.log('hello---- jquery');
});

$(function(){
    console.log('hello---- jquery');
    function labas(){
        console.log('hello')
    }
    labas();
})

$(funcion(){
    $('.boxes').on('click', function(){
        console.log('click')
    })
})
*/
$(function() {
    $('#burger').on('click', function(){
        $('#side-menu').toggleClass('side-menu--closed');
    })
})


