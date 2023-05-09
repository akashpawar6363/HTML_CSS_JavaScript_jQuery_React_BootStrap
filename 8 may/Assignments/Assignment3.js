function showDetails(pname, pcost, pdesc)
{
   this.pname=pname
   this.pcost=pcost
   this.pdesc=pdesc
}

let obj = new showDetails({pname: "Swaraj", pcost:2000, pdesc: "GUY"})
console.log(obj.pname,obj.pcost,obj.pdesc)
