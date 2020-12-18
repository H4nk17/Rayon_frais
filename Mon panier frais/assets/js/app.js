var boutonLegumes = document.getElementById('bouton1');
var boutonFruit = document.getElementById('bouton2');
var boutonConfiture = document.getElementById('bouton3');
var boutonBoissons = document.getElementById('bouton4');

var contentLegumes = document.getElementById('content1');
var contentFruit = document.getElementById('content2');
var contentConfiture = document.getElementById('content3');
var contentBoissons = document.getElementById('content4');

boutonLegumes.addEventListener('click',() =>{
	if(contentLegumes.style.display === 'none')	{
		contentLegumes.style.display = '';
	}else{
		contentLegumes.style.display = 'none';
	};
	});
	
	boutonFruit.addEventListener('click',() =>{
		if(contentFruit.style.display === 'none')	{
			contentFruit.style.display = '';
		}else{
			contentFruit.style.display = 'none';
		}
	});
	
	boutonConfiture.addEventListener('click',() =>{
		if(contentConfiture.style.display === 'none')	{
			contentConfiture.style.display = '';
		}else{
			contentConfiture.style.display = 'none';
		}
	});
	
	boutonBoissons.addEventListener('click',() =>{
		if(contentBoissons.style.display === 'none')	{
			contentBoissons.style.display = '';
		}else{
			contentBoissons.style.display = 'none';
		}
	});