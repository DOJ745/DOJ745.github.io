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

var footerInfo = doc.getElementsByTagName("Footer");
var footer_text = footerInfo[0].getElementsByTagName("text");

var footer_parse = doc.getElementById("Footer");
var footer_parse_p = footer_parse.getElementsByTagName("p");

for(let i = 0; i < footer_parse_p.length; i++)
{
    footer_parse_p[i].innerHTML = footer_text[i];    
}