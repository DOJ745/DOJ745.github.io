if (window.XMLHttpRequest)
{ // для IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp = new XMLHttpRequest();
}
else
{ // для IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

// Открываемый файл
xmlhttp.open("GET","https://raw.githubusercontent.com/DOJ745/DOJ745.github.io/master/XML/Database.xml", false);
xmlhttp.overrideMimeType('application/xml');
xmlhttp.send();
// Результат получаем в форме текста
xmlDoc = xmlhttp.responseText;

var parser = new DOMParser();
// Преобразуем текст в DOM
var doc = parser.parseFromString(xmlDoc, "application/xml");

// Получаем всё содержисое тега WeaponMainpage
var all_weaponInfo = doc.getElementsByTagName("WeaponMainPage");
// Находим информацию для парсинга
var weaponParse = all_weaponInfo[0].getElementsByTagName("Parsing");
// Находим информацию о картинках
var pictures = weaponParse[0].getElementsByTagName("Picture");
// Получаем информацию о стиле границ картинок
var border_attr = pictures[0].getAttribute("border");
var path_attrs = new Array();

for(let i = 0; i < pictures.length; i++)
{
    path_attrs.push(pictures[i].getAttribute("path"));
}

// Получаем массив изображений, имеющийся на странице

var img_parse = document.getElementById("picParse");
var img_arr = img_parse.getElementsByTagName("img");
for(let i = 0; i < img_arr.length; i++)
{
    // Записывает в тег img необходимые значения аттрибутов 
    
    img_arr[i].setAttribute("src", path_attrs[i]);
    img_arr[i].setAttribute("class", border_attr);
}