const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function day()
{
    let d = new Date(document.getElementById("d1").value)
    document.getElementById("p1").innerHTML = `DayName is ${days[d.getDay()]}`
    

}