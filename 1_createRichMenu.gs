  // richmenu-42bddfdb59cd298fd8e180e77176883d     aboutmenu
  // richmenu-5f6f31d217d376c2bb631fc5c4c395ec     schedule 

function createrichmenu1() {
var richmenu = 
{
  "size": {
    "width": 2500,
    "height": 800
  },
  "selected": true,
  "name": "aboutmenu",
  "chatBarText": "สนใจคลิก",
  "areas": [
    {
      "bounds": {
        "x": 2021,
        "y": 492,
        "width": 479,
        "height": 267
      },
      "action": {
        "type": "richmenuswitch",
        "richMenuAliasId": "schedule",
        "data": "schedule"
      }
    },
    {
      "bounds": {
        "x": 449,
        "y": 93,
        "width": 1568,
        "height": 534
      },
      "action": {
        "type": "message",
        "text": "aboutMe"
      }
    }
  ]
}


var options = {
"method" : "post",
"headers" : {"Content-Type" : "application/json",
              "Authorization": 'Bearer '+ ctoken, },
 "payload" : JSON.stringify(richmenu)

};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/richmenu", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}

function createrichmenu2() {
var richmenu = 
{
  "size": {
    "width": 2500,
    "height": 843
  },
  "selected": true,
  "name": "schedule",
  "chatBarText": "สนใจคลิก",
  "areas": [
    {
      "bounds": {
        "x": 470,
        "y": 55,
        "width": 1585,
        "height": 534
      },
      "action": {
        "type": "message",
        "text": "schedule"
      }
    },
    {
      "bounds": {
        "x": 8,
        "y": 513,
        "width": 462,
        "height": 268
      },
      "action": {
        "type": "richmenuswitch",
        "richMenuAliasId": "aboutmenu",
        "data": "aboutmenu"
      }
    }
  ]
}


var options = {
"method" : "post",
"headers" : {"Content-Type" : "application/json",
              "Authorization": 'Bearer '+ ctoken, },
 "payload" : JSON.stringify(richmenu)

};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/richmenu", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}

function createrichmenu3() {
var richmenu = 
{
  "size": {
    "width": 2500,
    "height": 843
  },
  "selected": true,
  "name": "schedule",
  "chatBarText": "Bulletin",
  "areas": [
    {
      "bounds": {
        "x": 470,
        "y": 55,
        "width": 1585,
        "height": 534
      },
      "action": {
        "type": "message",
        "text": "schedule"
      }
    },
    {
      "bounds": {
        "x": 8,
        "y": 513,
        "width": 462,
        "height": 268
      },
      "action": {
        "type": "richmenuswitch",
        "richMenuAliasId": "aboutmenu",
        "data": "aboutmenu"
      }
    }
  ]
}


var options = {
"method" : "post",
"headers" : {"Content-Type" : "application/json",
              "Authorization": 'Bearer '+ ctoken, },
 "payload" : JSON.stringify(richmenu)

};
var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/richmenu", options);
  var json = response.getContentText();    
  var data = JSON.parse(json);
  
  Logger.log(json)
  Logger.log(data.richMenuId)
  return data.richMenuId
  
}
