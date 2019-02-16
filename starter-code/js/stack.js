$(document).ready(function(){

    $('#btn-add').click(()=> {
        let element = $('#input').val();
        stack1.addElement(element); 


        $('.stack-section').not('.active').last().addClass('active').html(element)

        //$('.stack-section:last-child:not(.active)').addClass('active').html(element)

        //$('#stack').append($('<div class="stack-section"></div>').html(element).addClass('active'));
})


$('#btn-take').click(() => {
    stack1.removeElement();

    // $('.stack-section').hasClass('.active').first().removeClass('active').html(element)


})



}) // end ready function