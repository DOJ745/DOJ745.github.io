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

    xmlhttp.open("GET","", false);
    xmlhttp.overrideMimeType('application/xml');
    xmlhttp.send();
    xmlDoc = xmlhttp.responseText;

    var parser = new DOMParser();
    var doc = parser.parseFromString(xmlDoc, "application/xml");
    var lineItems = doc.getElementsByTagName("About");