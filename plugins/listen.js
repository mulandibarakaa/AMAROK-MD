  const {
     command,
     isPublic,
     tiny,
     clockString
  } = require("../lib")
 const { 
  HANDLERS
} = require("../config")

  command(
     {     pattern: "menu",
           fromMe: isPublic,
           type: "user",
    },
   async(message,match) => {
 
  let sections = [
     {  
    title: "AMAROK MENU",
    rows: [
         {title: "「 DOWNLOAD 」", rowld: `downloads`, description: `☆THIS IS THE DOWNLOAD MENU☆`},
         {title: "「 GROUP 」", rowld: `groups`, description: `☆GROUPS COMMAND LIST HERE☆`}
    ]
 },{
     title: "BOT COMMANDS",
     rows: [
           {title: "「 CONVERTER 」", rowld: `vectors`, description: `☆CONVERTER TO STICKERS`},
           {title: "「 USER MENU 」", rowld: `users`, description: `☆USER MENU LIST☆`},
           {title: "「 TOOLS MENU 」", rowld: `toolz`, description: `☆TOOLS MENU LIST☆`},
           {title: "「 SEARCH MENU 」", rowld: `searchz`, description: `☆SEARCH MENU LIST☆`}
       ]
   },
  ]
 const listMessage = {
    text: "[AMAROK MD]",
    footer: "LIST MENU BOT",
    title: "LIST MENU BOT",
    buttonText: "《TAPE HERE》",
sections 
}
return await message.client.sendMessage(message.jid, listMessage, {
  quoted: message 
 })
});
//====================================================
//                   AMAROK LIST MENU
//====================================================

 command({ pattern: "downloads", fromMe: isPublic, },
async(message,match) => {

     try {
            let [date, time] = new Date()
            .toLocaleString("en-IN", {
                timeZone: "Africa/Johannesburg"
            })
            .split(",");
            let menu = `

╭──❍「 *DOWNLOAD* 」
│ *»* song
│ *»* tik
│ *»* insta
│ *»* mp3
│ *»* fetch
│ *»* img
│ *»* yts
│ *»* ytv
│ *»* yta
│ *»* play
│ *»* video
│ *»* getexif
╰─────❍`;
const buttons = [
  {buttonld: `alive`, buttonText: {displayText: "🎗ALIVE🎗"}, type:1},
  {buttonld: `menu`, buttonText: {displayText: "🎗MENU🎗"}, type:1},
 ]
return await message.client.sendMessage(message.jid, buttonMessage, 
{ 
 quoted: message 
 });
}
}
});
