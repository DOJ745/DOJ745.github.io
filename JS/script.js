                                    /* ------------ Смена стиля nav для мобильных устройств ------------ */

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


                                            /* ------------ Парсер XML ------------ */

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

var first_parse = aboutText[0].getElementsByTagName("text")[0].innerHTML;
var second_parse = aboutText[0].getElementsByTagName("text")[1].innerHTML;
var third_parse = aboutText[0].getElementsByTagName("text")[2].innerHTML;

/* Вставляю полученные тексты в теги с нужными id */

document.getElementById("parse_here").innerHTML = first_parse;
document.getElementById("parse_here2").innerHTML = second_parse;
document.getElementById("parse_here3").innerHTML = third_parse;



/* Парсим информацию об картинках на страницу longsword_index.html */
/*var firstPicture = longswordPictures[0].getElementsByTagName("Picture1");*/

/*
var longswordInfo = doc.getElementsByTagName("Longsword");
var longswordPicture = longswordInfo[0].getElementsByTagName("Picture1");



var firstAttr = longswordPicture[0].getAttribute("path");
var secondAttr = longswordPicture[0].getAttribute("border");

var imgArray = document.getElementsByTagName("img");

imgArray[0].setAttribute(src, firstAttr); */