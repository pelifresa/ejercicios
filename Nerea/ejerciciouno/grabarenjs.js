/*
1-Coger el valor del campo
2-Crear un BLOB tipo text/plain
3-crear enlace + archivo
4-crossbrowsing
5-crear el objeto enlace, para que lo muestre en pantalla o sea modificado a partir de la segunda descarga
------
6-destruir en elace, solo a partir de la segunda descarga
*/

function guardarTextoArchivo(){
	//vamos a por el contenido del campo que nos interesa
	var  textoGuardar=document.getElementById('inputTextoGuardar').value;

	//Se crea un BLOB (representa los datos que no necesariamente se encuentran en un formato nativo de JS) que contenga los datos del campo
	var archivoTextoBlob=new Blob([textoGuardar],{type:'texto/plain'});

	//creamos el nombre del nuevo archivo
	var nombreArchivo="archivo.txt";

	//creamos el enlace para hacer efectivo el script
	var downloadLink=document.createElement("a")
	downloadLink.download=nombreArchivo;
	downloadLink.innerHTML="link descarga";

	//crossbrowsing
	window.URL=window.URL || window.webkitURL;

	//Creación del objeto link
	downloadLink.href=window.URL.createObjectURL(archivoTextoBlob);

	//al hacer click en el enlace, llamamos a la función para eliminarlo del DOM, siempre en el caso de querer guardar un segundo archivo
	downloadLink.onclick=destroyClickedElement;
	downloadLink.style.display="none";

	//agregamos el enlace al DOM
	document.body.appendChild(downloadLink)

	//creamos un manejador d enventos de tipo click
	downloadLink.click();
}

function destroyClickedElement(event){
	document.body.removeChild(event.target);
}