$(document).ready(function() {
    //Focus Section
    $('#name').focus();//Here is where I set focus to the name input field.
   
   
   
    //Job Role Section   
    $('#other-title').hide(); //target the other input field.
    $('#title').on('click', function(event){ // here is where i said if th 

        if ($('#title').val() == 'other') {
            $('#other-title').show();
        }else{
            $('#other-title').hide();  
        }
    });

    //T-Shirt Section
    $('#color option').hide();
    $('#design option:first').hide();

    $('#design').on('click',function(){
        $('#color option').hide();
        if ($(this).val() == "js puns"){
            $(':contains(JS Puns shirt only)').show();
        }else {
            $(':contains(JS shirt only)').show(); 
        }
    }) 

});

