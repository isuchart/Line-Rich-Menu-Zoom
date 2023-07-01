function delete_Rich_Menu() {
var options = {
"method" : "DELETE",
"headers" : {"Authorization": 'Bearer '+ ctoken, },
};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/richmenu/richmenu-51cb793fb8f5a589bd9b12332fb2c7ba", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}


