menu.onclick = function CLK()
{
    var change_class = document.getElementById("myTopnav");
    
    if(change_class.className === "topnav")
    {
        change_class.className += " responsive";
        alert(change_class);
    }
    
    else
    {   
        change_class.className = "topnav";
    }
}