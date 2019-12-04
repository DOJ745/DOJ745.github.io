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
        
var longswordInfo = doc.getElementsByTagName("Longsword");
var pictures = longswordInfo[0].getElementsByTagName("Picture");
var text_parse = longswordInfo[0].getElementsByTagName("text");

var border_attr = pictures[0].getAttribute("border");
var path_attrs = new Array();

for(let i = 0; i < pictures.length; i++)
{
    path_attrs.push(pictures[i].getAttribute("path"));
}

var p_arr = document.getElementsByTagName("p");
for(let i = 0; i < text_parse.length; i++)
{
    p_arr[i].innerHTML = text_parse[i].innerHTML;
}
    
var img_arr = document.getElementsByTagName("img");
for(let i = 0; i < pictures.length; i++)
{
    if(img_arr[0].className === "graficlogo")
    {
          img_arr[i + 1].setAttribute("src", path_attrs[i]);
          img_arr[i + 1].setAttribute("class", border_attr);
    }
    else if(img_arr[i].className === "foot_img")
    {
        i = pictures.length + 1;
    }
    else 
    {
        img_arr[i].setAttribute("src", path_attrs[i]);
        img_arr[i].setAttribute("class", border_attr);
    }
}