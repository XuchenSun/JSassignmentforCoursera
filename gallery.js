function upDate(previewPic)
{

	document.getElementById('image').innerHTML=previewPic.alt;// change the alt

	document.getElementById('image').style.backgroundImage="url("+previewPic.src+")";// provide url address to change the image address
}


function unDo()
{
  
	document.getElementById('image').style.backgroundImage = "url('')"// change the image when mouse is out of the image
   
	document.getElementById('image').innerHTML="Hover Over an image below to diaplay here";// change the words
	
}
