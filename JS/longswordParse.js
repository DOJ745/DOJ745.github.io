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

var border_attr = pictures[0].getAttribute("border");

var path_attrs = new Array();

for(let i = 0; i < pictures.length; i++)
{
    var path_attrs.push(pictures[i].getAttribute("path"));
    // var path_attr2 = pictures[0].getAttribute("path");
}

var img_arr = document.getElementsByTagName("img");

for(let i = 0; i < pictures.length; i++)
{
    img_arr[i].setAttribute("src", path_attrs[i]);
    img_arr[i].setAttribute("class", border_attr);
}

/*img_arr[1].setAttribute("src", path_attr1);
img_arr[1].setAttribute("class", class_attr);
img_arr[1].setAttribute("alt", picture1[0].innerHTML)

img_arr[2].setAttribute("src", path_attr2);
img_arr[2].setAttribute("class", class_attr);
img_arr[2].setAttribute("alt", picture2[0].innerHTML)*/