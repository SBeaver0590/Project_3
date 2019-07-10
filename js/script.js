// this submission is to see what can be improved. I am going for meets expectations.
$(document).ready(function() {
    //Focus Section
    $('#name').focus();//Here is where I set focus to the name input field.

   
    //Job Role Section   
    $('#other-title').hide(); //target the other input field and hide it.
    $('#title').on('click', function(event){ // here is where i said if the option other was clicked show the text field.

        if ($('#title').val() == 'other') {
            $('#other-title').show();
        }else{
            $('#other-title').hide();  
        }
    });

    //T-Shirt Section
    $('#color option').hide();
    $('#design option:first').hide();
    //Hide all options based on the design clicked show available options for that color.
    $('#design').on('change',function(){
        $('#color option').hide();
        if ($(this).val() == "js puns"){
            $(':contains(JS Puns shirt only)').show();
        }else {
            $(':contains(JS shirt only)').show(); 
        }
        $('#color').val('');
    }); 
    
    //Activities Section
    let totalActivityCost = 0;    
    $('.activities').append("<span id= 'totalCost'></span>");
   
    $(":checkbox").on("change", function() {
    
        let parentLabelText = $(this)[0].parentElement.innerText; // Get the parent label text of the selected checkbox
        let dollarIndex = parentLabelText.indexOf("$");  // Get the dollar index in the selected checkbox parent label text
        let activityCost = parentLabelText.slice(dollarIndex + 1);  // Get the activity cost from the selected checkbox parent label text

        // If the selected check box is checked, add the activity cost to the total activity cost
            if ($(this)[0].checked) {
          totalActivityCost += parseInt(activityCost);
        }   else {
          totalActivityCost -= parseInt(activityCost);
        }
          let spanTotalActivity = $('#totalCost');
    
        spanTotalActivity.text("Total: $ " + totalActivityCost);  //Assign the total activity cost to the span Total Activity
    
        let selectedCheckboxEmDashIndex = parentLabelText.indexOf("\u2014");  
        let selectedCheckboxCommaIndex = parentLabelText.indexOf(",");
        let selectedCheckboxDayAndTime = parentLabelText.slice(selectedCheckboxEmDashIndex + 1, selectedCheckboxCommaIndex);
        
        // Loop through all the checkboxes to see if there are any conflicting events if so disable the buttons option
        //as well as not being able to add it to the total cost.
          for (let j = 0; j < $(":checkbox").length; j++) {
          let checkBoxParentLabelText = $(":checkbox")[j].parentElement.innerText;
          let checkBoxEmDashIndex = checkBoxParentLabelText.indexOf("\u2014");
          let checkBoxCommaIndex = checkBoxParentLabelText.indexOf(",");
          let checkBoxDayAndTime = checkBoxParentLabelText.slice(checkBoxEmDashIndex + 1, checkBoxCommaIndex);
         
            if (selectedCheckboxDayAndTime == checkBoxDayAndTime && parentLabelText != checkBoxParentLabelText) {
            if ($(this)[0].checked) {
              $(":checkbox")[j].disabled = true;
            } else {
             $(":checkbox")[j].disabled = false;
            }
         }
          }
    });
          //Payment Section
            $('#payment').val('credit card');
            $('p:first').hide();
            $('p:last').hide();
     //Show the credit card option initially, if user chooses something else show method for that option.
             $('#payment').change(function() {
            if($('#payment option:selected').val() === 'paypal') {
                $('#credit-card, #bitcoin, p:last').hide();
                $('#paypal, p:first').show();
            } else if ($('#payment option:selected').val() === "bitcoin") {
                $('#credit-card, #paypal, p:first').hide();
                $('#bitcoin, p:last').show();
            } else {
                $('#credit-card').show();
                $('#paypal, #bitcoin, p:first, p:last').hide();
            }
        
        }); 
            $('form').prepend('<div id="errorMessage"></div>');
            $('form').submit(function(e){
            //Form Validation Section
            var emailAddress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
            // var creditCard = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/;
            // var zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
            var creditCard = /^[0-9]{13,16}$/;
            var zipCode = /^[0-9]{5}$/;
            var cvv = /^[0-9]{3}$/;
            

            var errorMessage ="";
            //if the user fails to provide all the required information show an error and do not allow it to be submitted
            //until all fields are complete.
                
            if($('#name').val()=== ""){
                e.preventDefault();
                errorMessage= "<h2>Error!<h/2> Please be sure to enter all required fields.";
                $("html, body").animate({scrollTop: 0}, "slow");
                errorMessage = errorMessage.fontcolor("maroon");
                $('#name').addClass('error');
                $('#name').focus();
            }else if(!emailAddress.test($('#mail').val()) ){
                e.preventDefault();
                errorMessage= "<h2>Error!</h2> Please provide a valid email address.";
                $("html, body").animate({scrollTop: 0}, "slow");
                errorMessage = errorMessage.fontcolor("maroon");
                $('#mail').focus();
            }else if($(".activities > label > input:checked").length=== 0 ){
                e.preventDefault();
                errorMessage= "<h2>Error!</h2> Please select at least one activity.";
                $("html, body").animate({scrollTop: 0}, "slow");
                errorMessage = errorMessage.fontcolor("maroon");
                $('.activities').focus();
            }else if($('#payment').val()==="credit card"&& !creditCard.test($("#cc-num").val()) ){
                e.preventDefault();
                //$("#cc-num").css('border-color','red');
                errorMessage= "<h2>Error!</h2> Please enter a valid credit card number.";
                $("html, body").animate({scrollTop: 0}, "slow");
                errorMessage = errorMessage.fontcolor("maroon");
                $('#cc-num').focus();
            }else if($('#payment').val()==="credit card"&& !zipCode.test($("#zip").val())){
                e.preventDefault();
                errorMessage= "<h2>Error!</h2> Please enter a valid zip code.";
                $("html, body").animate({scrollTop: 0}, "slow");
                errorMessage = errorMessage.fontcolor("maroon");
                $('#zip').focus();
            }else if($('#payment').val()==="credit card"&& !cvv.test($("#cvv").val())) {
                e.preventDefault();
                errorMessage= "<h2>Error!</h2> Please enter 3 digits for your CVV";
                $("html, body").animate({scrollTop: 0}, "slow");
                errorMessage = errorMessage.fontcolor("maroon");
                $('#cvv').focus();
            }else{
                errorMessage="";
            alert('Thank You For Registering.')
            }
            document.getElementById('errorMessage').innerHTML= errorMessage;
        });
    
});
