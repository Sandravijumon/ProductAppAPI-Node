const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "productTitle":"String",
        "productCode":"String",
        "price":"String",
        "description":"String"
    }
)
let productmodel=mongoose.Model("Products",schema);
module.exports={productmodel}