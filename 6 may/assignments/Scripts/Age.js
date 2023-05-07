function ag()
{
    let da = new Date(document.getElementById("d1").value)
    let cur1 = Date()
    let curr = new Date(cur1)

    let diff = ((curr - da) / (1000 * 60 * 60 * 24 * 365))
    let diff1 = parseInt((curr - da) / (1000 * 60 * 60 * 24 * 365))

    let diff2 = parseInt((diff-diff1) * 12)

    document.getElementById("p1").innerHTML = `<h1>Age: ${diff1} years and ${diff2} months</h1>`
}