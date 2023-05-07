function greet(message)
{
    let guests=["Akash", "Omkar", "nikhil","Purushottam","Ajay","Abhijeet"]
    for(let i = 0; i<guests.length; i++)
    {
        console.log(message(), guests[i])
    }
}

function indianwelcome()
{
    return "Namaskar....!"
}

// greet(indianwelcome)

// greet(function (){
//     return "moshi moshi"
//  })

// let k = function()
// {
//     return "konnichiva"
// }
// greet(k)

greet(()=>"hi")