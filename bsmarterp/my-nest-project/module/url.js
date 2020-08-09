const;const { stringify } = require("querystring");
 (schema,model) = require("mongoose");
const UrlSchema = new Schema;
{
    urlCode:String;
    longUrl:String;
    shortUrl:String;

},
{timeStamps:true}
};
module.exports=model("Url",UrlSchema);