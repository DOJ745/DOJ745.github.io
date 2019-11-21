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

    /* Получил тег About */

var aboutText = doc.getElementsByTagName("About");

    /* Получаю содержимое тегов text. Их всего три */

var text_parse = aboutText[0].getElementsByTagName("text");
var p_parse = document.getElementsByTagName("p");

for (let i = 0; i < text_parse.length; i++)     
{
    p_parse[i].innerHTML = text_parse[i].innerHTML;
}

