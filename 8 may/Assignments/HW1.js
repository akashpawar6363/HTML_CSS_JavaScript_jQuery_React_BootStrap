class product
{
    constructor(productName, productCost, productDesc)
    {
        this.pname = productName
        this.pcost = productCost
        this.pdesc = productDesc
    }

    showProdDetails()
    {
        console.log("Product name is",this.pname,"its cost is",this.pcost," desc:",this.pdesc)
    }
}

let obj = new product("Earphone", 2500, "Boat earbuds with noise cancellation")
obj.showProdDetails()
let obj1 = new product("Iphone 13 pro", 140000, "Flagship phone of Apple")
obj1.showProdDetails()
