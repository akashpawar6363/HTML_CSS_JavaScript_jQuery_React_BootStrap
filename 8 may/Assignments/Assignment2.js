function product(prodName, prodCost, prodDesc)
{
    this.pname = prodName
    this.pcost = prodCost
    this.pdesc = prodDesc

    this.showDetails = function (){
        console.log(this.pname,this.pcost,this.pdesc)
    }
}

let obj = new product("Swaraj", 2000, "King of Kakade Group")
obj.showDetails()