document.getElementById("total-tip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("submit").addEventListener('click', calculateTip );

document.addEventListener("keypress",function(e)
{
    if(e.keyCode == 13)
    {
        calculateTip();
    }
})

function calculateTip() 
{
    var bill, people,percentage;
    bill = document.getElementById("bill-input").value;
    people= document.getElementById("people-number").value;
    percentage = document.getElementById("Options").value;

    if(bill === "" || percentage === 0)
    {
        window.alert("Enter some values");
        return;//prevent function from continuing
    }

    if(people === "" || people <=1)
    {
        people=1;
        document.getElementById("each").style.display = "none";
    }
    else
    {
        document.getElementById("each").style.display = "block";
    }

    var tip = (bill * percentage) / people;
    tip = Math.round(tip * 100) / 100;
    tip = tip.toFixed(2);
    document.getElementById("total-tip").style.display = "block";
    document.getElementById("tip").innerHTML = tip;

    window.scrollBy(0,50);
}

