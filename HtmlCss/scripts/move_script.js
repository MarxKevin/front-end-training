$(function(){
var hoverActif =true;	//variable d'activation/désactivation du hover (désactivation au click)

//Animation de déplacement des sliders au survole

	//gauche (écouteur)
	$("#slide_ecouteur").hover(  //Au survol, déplace les sliders vers la droite, noircis l'élément non survolé
		function(){
			if(hoverActif){
				$(this).animate({left:"-59vw"},300,"linear");
				$("#slide_headset").animate({left:"51vw"},300,"linear");
				$(".fond_headset").animate({opacity:"0.5"},300);
			}
			
		},
		function(){
			if(hoverActif){		//Quand le survol n'est plus actif on fait revenir le tout au stade initial
				$(this).animate({left:"-60vw"},300,"linear");
				$("#slide_headset").animate({left:"50vw"},300,"linear");
				$(".fond_headset").animate({opacity:"1"},300);
			}
	});


	//droite ( headset)
	$("#slide_headset").hover(	//Au survol, déplace les sliders vers la gauche, noircis l'élément non survolé
		function(){
			if(hoverActif){
				$(this).animate({left:"49vw"},300,"linear");
				$("#slide_ecouteur").animate({left:"-61vw"},300,"linear");
				$(".fond_ecouteur").animate({opacity:"0.5"},300);
			}
		},
		function(){
			if(hoverActif){		//Quand le survol n'est plus actif on fait revenir le tout au stade initial
				$(this).animate({left:"50vw"},300,"linear");
				$("#slide_ecouteur").animate({left:"-60vw"},300,"linear");
				$(".fond_ecouteur").animate({opacity:"1"},300);
			}
	});



//Animation de déplacement des sliders au click

	//gauche (écouteur)
	$("#slide_ecouteur").click(		//Au click, déplace le wrapper vers la gauche
		function(){
			$("#wrapper").animate({left:"54vw"},1000);
			$("h2").animate({top:"40vw",opacity:"0"},1000);
			hoverActif =false;		//désactive le survol de l'élément

			$(".fond_ecouteur form").animate({left:"40%"},1000);	//Animation d'entrée du formulaire gauche
	});


	//droite ( headset)
	$("#slide_headset").click(		//Au click, déplace le wrapper vers la droite
		function(){
			$("#wrapper").animate({left:"-55vw"},1000);
			$("h2").animate({top:"40vw",opacity:"0"},1000);
			hoverActif =false;		//désactive le survol de l'élément

			$(".fond_headset form").animate({right:"36%"},1000);		//Animation d'entrée du formulaire droite
		
	});


//Animation des boutons "Back" au survol


	//gauche (écouteur)
	$(".back_gauche").hover(	//Au survol animation de déplacement du bouton back du slider écouteur, retour a la position initiale quand le survol n'est plus actif
		function(){
			$(this).animate({left:"20px"},300,"linear");
		},
		function(){
			$(this).animate({left:"0px"},300,"linear");
	});

	//droite ( headset)
	$(".back_droite").hover(	//Au survol animation de déplacement du bouton back du slider headset, retour a la position initiale quand le survol n'est plus actif
		function(){
			$(this).animate({right:"195px"},300,"linear");
		},
		function(){
			$(this).animate({right:"175px"},300,"linear");
	});




//Animation des boutons "Back" au click

	//gauche (écouteur)
	$(".back_gauche").click(		//Au click, retour du wrapper a sa position initiale
		function(event){

			$("#wrapper").animate({left:"0vw"},1000);
			$("h2").animate({top:"50%",opacity:"1"},1000);
			hoverActif =true;		//Réactive le survol de l'élément
			event.stopPropagation();	//Empêche le lancement de l'animation de déplacement du wrapper due au bubbling

			$(".fond_ecouteur form").animate({left:"-10%"},1000);	//Animation de sortie du formulaire gauche
	});

	//droite ( headset)
	$(".back_droite").click(	//Au click, retour du wrapper a sa position initiale
		function(event){

			$("#wrapper").animate({left:"0vw"},1000);
			$("h2").animate({top:"50%",opacity:"1"},1000);
			hoverActif =true;		//Réactive le survol de l'élément
			event.stopPropagation();	//Empêche le lancement de l'animation de déplacement du wrapper due au bubbling

			$(".fond_headset form").animate({right:"-20%"},1000);	//Animation de sortie du formulaire droite
	});


})