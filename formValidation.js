
// Form validation
class isValid{
	constructor(){	
		jQuery('.onlycharallow').attr('onkeypress','return obj.validateChar(event)'); 
		jQuery('.onlynumallow').attr('onkeypress','return obj.validateNum(event)');	
	}
	validateChar(evt) {
	  var charCode = (evt.which) ? evt.which : evt.keyCode;
	  if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 123)) {
	      if (charCode == 8 || charCode == 32 || charCode == 9)
	          return true;
	      else
	          return false;
	  } else
	      return true;
	}
	validateNum(evt) {
	  var charCode = (evt.which) ? evt.which : event.keyCode;
	  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	      if (charCode == 43 || charCode == 40 || charCode == 41 || charCode == 9)
	          return true;
	      else
	          return false;
	  } else
	      return true;
	}
}	
let obj = new isValid();
// Form validation End
