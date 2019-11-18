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

var aboutText = doc.getElementsByTagName("About");

/*Получаю содержимое тега text*/

var first_parse = aboutText[0].getElementsByTagName("text")[0].innerHTML;
var second_parse = aboutText[0].getElementsByTagName("text")[1].innerHTML;
var third_parse = aboutText[0].getElementsByTagName("text")[2].innerHTML;

/* Получаю абзац, куда буду вставлять текст*/

document.getElementById("parse_here").innerHTML = first_parse;
document.getElementById("parse_here2").innerHTML = second_parse;
document.getElementById("parse_here3").innerHTML = third_parse;