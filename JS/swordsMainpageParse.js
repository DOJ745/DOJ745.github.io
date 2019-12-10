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
        
var swordsInfo = doc.getElementsByTagName("SwordsMainPage");
var pictures = swordsInfo[0].getElementsByTagName("Picture");


var border_attr = pictures[0].getAttribute("border");
var path_attrs = new Array();

for(let i = 0; i < pictures.length; i++)
{
    path_attrs.push(pictures[i].getAttribute("path"));
}
    
var img_parse = document.getElementById("picParse");
var img_arr = img_parse.getElementsByTagName("img");
for(let i = 0; i < img_arr.length; i++)
{
    img_arr[i].setAttribute("src", path_attrs[i]);
    img_arr[i].setAttribute("class", border_attr);
}