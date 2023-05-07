const days = ["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"]

function year()
{
    let d = new Date(document.getElementById("d1").value)
    let cur1 = Date()
    let cur = new Date(cur1)
    let dd = d.getDate()
    let mm = d.getMonth()+1
    console.log(mm)
    let yy = cur.getFullYear()
    let db = dd + '-' + mm + '-' + yy 
    let ds = new Date(db)
    console.log(ds)
    console.log(days[ds.getDay()])
    document.getElementById("p1").innerHTML = `<h1> This Year Birthday on ${days[ds.getDay()]}</h1>`
}