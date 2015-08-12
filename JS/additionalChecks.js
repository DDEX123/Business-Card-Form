// JavaScript Document


function formCheck (){
	numberedFieldsCheck();
	checkEmail()

	}


function checkEmail() {

    var email = document.getElementById('workEmail');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	document.getElementById('emailFieldIntCheck').style.display="none";
 
    if (!filter.test(email.value)) {
    	 document.getElementById('emailFieldIntCheck').style.display="inline";
	return false;
 	}
 }	
 
function numberedFieldsCheck(){
    var reg = /^[\d\+\(\)\ ]*$/;
	
	document.getElementById('telFieldIntCheck').style.display="none";
	document.getElementById('mobileFieldIntCheck').style.display="none";
	document.getElementById('faxFieldIntCheck').style.display="none";
	
	fieldChecks(reg,'tel','telFieldIntCheck');
	fieldChecks(reg,'mobile','mobileFieldIntCheck');
	fieldChecks(reg,'fax','faxFieldIntCheck');
}

function fieldChecks(arg0,arg1,arg2)
{
	var x = document.getElementById(arg1).value;
	if (!arg0.test(x))
	{
		document.getElementById(arg2).style.display="inline";

		return false;
		} 
	}

function showCardPrev(){
	
	cardPrevTextPlacement('nameField','fullName');
	cardPrevTextPlacement('titleField','qualification');

	cardPrevTextPlacement('phoneField1','tel');
	icoVisibility('tel','telIco');
				
	cardPrevTextPlacement('phoneField2','mobile');
	icoVisibility('mobile','mobileIco');
	
	cardPrevTextPlacement('phoneField3','fax');
	icoVisibility('fax','faxIco');
	
	cardPrevTextPlacement('emailField','workEmail');
	icoVisibility('workEmail','mailIco');

	cardPrevTextPlacement('address1Field','selectEntity');
	cardPrevTextPlacement('address2Field','address1');
	cardPrevTextPlacement('address3Field','address2');
	cardPrevTextPlacement('address4Field','address3');
	cardPrevTextPlacement('address5Field','address4');
	
	}
	
function cardPrevTextPlacement(arg1,arg2){
	if (arg2.firstChild!=='option'){
		document.getElementById(arg1).innerHTML=document.getElementById(arg2).value;
		} else {
		document.getElementById(arg1).innerHTML=document.getElementById(arg2).selectedIndex;
		}
	}
	
function icoVisibility(arg1,arg2){
		if (document.getElementById(arg1).value!=0)
			{
				document.getElementById(arg2).style.visibility="visible";
				return
			} else {
			document.getElementById(arg2).style.visibility="hidden";
			return
		}
		
	 }
