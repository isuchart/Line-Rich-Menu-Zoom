// https://drive.google.com/file/d/1dq1_yr9cwi_mAJop1Aaosvg1L5cJzzxO/view?usp=sharing
// https://drive.google.com/file/d/1oYCTeWNs8o3XO7NDL2Ch6a82vIQaRc4O/view?usp=sharing

function upImgToRichMenu1() {
var filepic = DriveApp.getFileById("1dq1_yr9cwi_mAJop1Aaosvg1L5cJzzxO").getBlob()
var options = {
"method" : "post",
"headers" : {"Content-Type" : "image/png",
              "Authorization": 'Bearer '+ ctoken, },
"payload" : filepic

};
var response = UrlFetchApp.fetch("https://api-data.line.me/v2/bot/richmenu/richmenu-42bddfdb59cd298fd8e180e77176883d/content", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}


function upImgToRichMenu2() {
var filepic = DriveApp.getFileById("1oYCTeWNs8o3XO7NDL2Ch6a82vIQaRc4O").getBlob()
var options = {
"method" : "post",
"headers" : {"Content-Type" : "image/png",
              "Authorization": 'Bearer '+ ctoken, },
"payload" : filepic

};
var response = UrlFetchApp.fetch("https://api-data.line.me/v2/bot/richmenu/richmenu-5f6f31d217d376c2bb631fc5c4c395ec/content", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}
