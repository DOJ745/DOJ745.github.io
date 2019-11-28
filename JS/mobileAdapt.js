                                    /* ------------ Смена стиля nav для мобильных устройств ------------ */

menu.onclick = function CLK()
{
    var change_class = document.getElementById("myTopnav");
    
    var a_weaponMain = document.getElementById("Weapon");
    var a_armorMain = document.getElementById("Armor");
    
    if(change_class.className === "topnav")
    {
        change_class.className += " responsive";
        /* Меняю  ссылки для того, чтобы на мобильной версии люди
        при нажатии на "Доспехи" или "Оружие" не заходили на их
        главные страницы, а чтобы они переходили на уже отсортированные
        наборы оружий или доспехов.
        */
        a_weaponMain.setAttribute("href", "#");
        a_armorMain.setAttribute("href", "#");
    }
    else
    {   
        change_class.className = "topnav";
    }
}
