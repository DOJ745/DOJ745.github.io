if (window.XMLHttpRequest)
{ 
    // для IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
}
else
{ 
    // для IE6, IE5
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

var footer_parse = document.getElementById("Footer");
var footer_parse_p = footer_parse.getElementsByTagName("p");

for(let i = 0; i < footer_parse_p.length; i++)
{
    footer_parse_p[i].innerHTML = footer_text[i].innerHTML;    
}

/*var footer_table = footerInfo[0].getElementsByTagName("tableinfo");
var footer_parse_table = document.getElementById("parseTable");*/

/*footer_parse_table.innerHTML = footer_table.innerHTML;*/

/*for(let i = 0, let j = 0; i < footer_td.length; i++)
{
    if(i % 2 == 0)
    {
        j++;
        footer_td[i].innerHTML = footer_t[j].innerHTML;
    }
    else
    {
        footer_td[i].innerHTML = footer_t[i].innerHTML;
    }
    footer_td[i].innerHTML = footer_t[i].innerHTML;
}*/

var table_parse = new String("<table border = '1px'>");
table_parse = table_parse + "<tr><td>ФИО</td><td>Фурсик Андрей Алексеевич</td></tr>";
table_parse = table_parse + "<tr><td>Факультет</td><td>ИТ</td></tr>";
table_parse = table_parse + "<tr><td>Специальность</td><td>ПОИБМС</td></tr>";
table_parse = table_parse + "<tr><td>Группа</td><td>7</td></tr>";
table_parse = table_parse + "<tr><td>Год</td><td>2019</td></tr></table>";

/*if (window.DOMParser)
{
    parser2 = new DOMParser();
    xmlDoc2 = parser2.parseFromString(table_parse,"text/xml");
}

else // Internet Explorer
{
    xmlDoc2 = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc2.async = false;
    xmlDoc2.loadXML(table_parse);
}*/

document.getElementById("parseTable").innerHTML = document.write(table_parse);