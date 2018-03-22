	var counter = 0;
	var totalCounter = 0;

	function checkboxFunction(chkBox){
	        var Checked = chkBox.checked;
	        var closestCheck = chkBox.closest("article");
	        var currentClassName = chkBox.className;
	        counter = $('input.' + currentClassName).filter(':checked').length

	        if (Checked == true) {
	        	closestCheck.classList.add("articleBox");
	        	if(counter == 1){
	        		totalCounter++;
	        	}
	        }
	        else
	        { 
	        	closestCheck.classList.remove("articleBox");
			}
			if(counter == 0){
				totalCounter--;
			}
			

			$('#' + currentClassName).text(counter + "/3");
			if(counter == 3)
		        $('input.' + currentClassName + ':not(:checked)').attr('disabled', 'disabled');
		    else
		        $('input.' + currentClassName).removeAttr('disabled');

		    if(totalCounter == 4){
		    	$('#readyButton').removeClass('disabled');
		    }else{
		    	$('#readyButton').addClass('disabled');
		    }


	}