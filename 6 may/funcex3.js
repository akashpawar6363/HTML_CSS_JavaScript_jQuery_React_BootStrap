function add(...nums)
{
    let sum=0

    for(n of nums)
    {
        sum = sum + n
    }
    console.log("sum is: ",sum)
}

add(1)
add(1,2,3,4,5)