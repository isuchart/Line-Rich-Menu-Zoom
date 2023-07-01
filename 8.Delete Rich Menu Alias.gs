function delete_Rich_Menu_Alias_A() {
var options = {
"method" : "DELETE",
"headers" : {"Authorization": 'Bearer '+ ctoken, },
};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/richmenu/alias/menu-a", options); //อย่าลืมเปลี่ยน
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}

function delete_Rich_Menu_Alias_B() {
var options = {
"method" : "DELETE",
"headers" : {"Authorization": 'Bearer '+ ctoken, },
};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/richmenu/alias/menu-b", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}
