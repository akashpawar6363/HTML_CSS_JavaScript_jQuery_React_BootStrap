class product
{
       showDetailsProd(prodName, prodCost, prodDesc)
    {
        console.log("this product is",prodName, "cost is",prodCost,"desc:", prodDesc)
    }
}

let obj = new product()
obj.showDetailsProd("Swaraj", 2000, "Good Boy")