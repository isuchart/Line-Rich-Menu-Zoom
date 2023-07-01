

function SetDefault_RichMenu() {

var options = {
"method" : "post",
"headers" : {"Authorization": 'Bearer '+ ctoken, },

};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/user/all/richmenu/richmenu-42bddfdb59cd298fd8e180e77176883d", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}


function User_RichMenu() {

var options = {
"method" : "post",
"headers" : {"Authorization": 'Bearer '+ ctoken, },

};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/user/Uc9c41f5ed5cb5a82dacf00a1de3f6804/richmenu/richmenu-6abda77fc6a5b6751472aef60d5ee83d", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}




