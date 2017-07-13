$("#card").keyup(function(){

	$("#type").removeClass("error");		//remove error class add in addValiditySymbol()

	var cardNumber = $("#card").val();		//get the card number in the input

	var regEx= validRegex(cardNumber);		//store the result of validRegex(), return boolean

	function validRegex(num){				//test if the card number is valid with regex
		var reg = /^([0-9]+)$/g;
		return reg.test(num);
	}


	if(cardNumber==''){						//if the input si empty, set <div id="type"> empty

		$("#type").show().text("");

	}else if(regEx){						//if the card number is valid with regex launch the code below

		var firstNumber = cardNumber.substring(0,1);  //get the first number set in the input
	
		switch(firstNumber){				//launch code in case depending of the first number set in the input

			case '3':
				var secondNumber = cardNumber.substring(1,2);  		//get the second number set in the input
				if(secondNumber == '4'|| secondNumber == '7'){		//if the second number is 4 or 7 set var with card name or ?
					var text = "American Express";
				}else{
					text = "?";
				}

				$("#type").show().text(text);			//set <div id="type"> with card name else set with ?
				if(cardNumber.length ==15){				//if the card number have the right lenght launch addValiditySymbol()
					addValiditySymbol();
				}
			  	
				break;

			case '4':
				$("#type").show().text("Visa");
				if(cardNumber.length >=13 && cardNumber.length <=16){
					addValiditySymbol();
				}
				break;

			case '5':
				$("#type").show().text("Mastercard");
				if(cardNumber.length ==16){
					addValiditySymbol();
				}
				break;

			default:
				$("#type").show().text("?");
				
		}
		
	}else{										//if the card number is invalid with regex set <div id="type"> with invalid sentence
		$("#type").show().text("Numéro invalide");
	}
	

	
	function addValiditySymbol(){				// add V or X if the card is valid or not

		var para = cardValidityCheck(cardNumber);		//store the cardValidityCheck(), return boolean
		var check = document.createElement("span");

		
		if(para){
			$(check).addClass("fa fa-check");		//add the font-awsome class needed to put up the V symbol
			
		}else{
			$("#type").addClass("error");			//add class to put the text in red
			$("#type").show().text("Invalid");		//set <div id="type"> with invalid sentence
			$(check).addClass("fa fa-times");		//add the font-awsome class needed to put up the X symbol
		}

		$("#type").append(check);
		
	};

	function cardValidityCheck(number){		//check de validity of the card number, return boolean ( use luhn algorithm)

		var cardCheck=false;		//set the validity by default to false
		var sum = 0;
		var pair = false;			//the first number is never in a pair position in luhn algorithm so set by default to false

		while(number>0){			//while there are number in the number received
			chiffre = number%10;	//take the number at the right position
			
			if(pair){				//if the position is pair multiply this by 2
				chiffre=chiffre*2;
				if(chiffre>9){		//if the number multiply is over 10  subtract this by 9 ( a number can't be more than 9)
					chiffre = chiffre-9;
				}
			}

			sum = sum + chiffre;	//add the number to the sum

			number = Math.floor(number/10);  //remove the number use before

			pair != pair		//switch false/true and true/false
		}

		if(sum%10==0){			//if the sum modulo 10 is egual to 0, the card is valid so return true
			cardCheck = true;
		}

		return cardCheck;		//return boolean
		
	};



});






