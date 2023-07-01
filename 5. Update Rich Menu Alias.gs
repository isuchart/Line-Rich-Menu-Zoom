// Headers:
//   + Authorization: Bearer {channel access token}
//   + Content-Type: application/json
// Endpoint: https://api.line.me/v2/bot/richmenu/alias/{richMenuAliasId}
// Method: POST
// Param:
//   + richMenuAliasId: ชื่อของ Rich Menu (สูงสุด 100 ตัวอักษร)
// Body:
//   + richMenuId: ID ของ Rich Menu ที่อยู่ใน channel เดียวกัน

function Update_RichMenu_Alias(){
  var options = {
  "method" : "post",
  "headers" : {"Content-Type" : "application/json",
                "Authorization": 'Bearer '+ ctoken, },
  "payload" : JSON.stringify({
                  "richMenuAliasId": "schedule", //ไอดีใหม่
                  "richMenuId": "richmenu-e66e2407213196f65de7a570c1aa2eb4" //ไอดีใหม่
              })

  };
  var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/richmenu/alias/schedule", options);
    var json = response.getContentText();    
    var data = JSON.parse(json);
    
    Logger.log(json)
    Logger.log(data.richMenuId)
    return data.richMenuId
}
