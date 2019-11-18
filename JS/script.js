menu.onclick = function CLK()
{
    var change_class = document.getElementById("myTopnav");
    
    if(change_class.className === "topnav")
    {
        change_class.className += " responsive";
    }
    else
    {   
        change_class.className = "topnav";
    }
}


/* Парсер XML*/

if (window.XMLHttpRequest)
{ // для IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp = new XMLHttpRequest();
}
else
{ // для IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET","https://raw.githubusercontent.com/DOJ745/DOJ745.github.io/master/XML/Database.xml", false);
xmlhttp.overrideMimeType('application/xml');
xmlhttp.send();
xmlDoc = xmlhttp.responseText;

var parser = new DOMParser();
var doc = parser.parseFromString(xmlDoc, "application/xml");

/* Получил массив тегов About
У меня пока что только 1 тег about*/

var Site = doc.getElementsByTagName("About");

/*Получаю содержимое тега text*/

var first_parse = aboutText[0].getElementsByTagName("text")[0].innerHTML;

/* Получаю абзац, куда буду вставлять текст*/
//var p_parse = document.getElementById("parse_here").innerHTML;

document.getElementById("parse_here") = first_parse;