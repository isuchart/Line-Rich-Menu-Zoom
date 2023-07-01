//getRichMenu
function get_RichMenu_list() {
var options = {
"method" : "get",
"headers" : {"Authorization": 'Bearer '+ ctoken, },
};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/richmenu/list", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  console.log(data)
  return data.richMenuId
  
}



function getList_RichMenu_Alias() {
var options = {
"method" : "get",
"headers" : {"Authorization": 'Bearer '+ ctoken, },
};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/richmenu/alias/list", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(data)
  return data.richMenuId
  
}
