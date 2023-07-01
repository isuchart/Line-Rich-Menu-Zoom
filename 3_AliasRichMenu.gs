function AliasRichMenu() {
var options = {
"method" : "post",
"headers" : {"Content-Type" : "application/json",
              "Authorization": 'Bearer '+ ctoken, },
"payload" : JSON.stringify({
                "richMenuAliasId": "schedule",
                "richMenuId": "richmenu-5f6f31d217d376c2bb631fc5c4c395ec"
            })

};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/richmenu/alias", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}
