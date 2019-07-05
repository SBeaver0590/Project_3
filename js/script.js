
$(document).ready(function() {
    //Focus Section
    $('#name').focus();//Here is where I set focus to the name input field.
   
   
    //Job Role Section   
    $('#other-title').hide(); //target the other input field.
    $('#title').on('click', function(event){ // here is where i said if th               cdcdcd 

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
        //as well as not adding it to the total cost.
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
});  







