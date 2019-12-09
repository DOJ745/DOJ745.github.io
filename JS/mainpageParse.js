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

var mainpageInfo = doc.getElementsByTagName("Mainpage");

var text_parse = mainpageInfo[0].getElementsByTagName("text");
var p_locale = document.getElementById("picParse");
var p_parse = p_locale.getElementsByTagName("p");

for(let i = 0; i < p_parse.length; i++)
{
    p_parse[i].innerHTML = text_parse[i].innerHTML;
}

var pic_parse = mainpageInfo[0].getElementsByTagName("Picture");

var pic_path = new Array();
for(let i = 0; i < pic_parse.length; i++)
{
    pic_path.push(pic_parse[i].getAttribute("path"));
}

var border_attr = pic_parse[0].getAttribute("border");

var pic_locale = document.getElementById("picParse");
var img_arr = pic_locale.getElementsByTagName("img");

for(let i = 0; i < pic_parse.length; i++)
{
    img_arr[i].setAttribute("src", pic_path[i]);
    img_arr[i].setAttribute("class", border_attr);
}