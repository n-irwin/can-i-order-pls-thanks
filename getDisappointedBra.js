const notifier = require("node-notifier")

const Discord = require('discord.js');

// Discord - desktop and mobile notifications yo

// Get Discord, make an account, start a server. Unlimted powaah...
// GOT TOKEN? Go to the discord developer page https://discordapp.com/developers/applications, login, create an application, create a bot user in that app and copy the bot token, not the app token...
// Hold that tought...use token on below on line 33!
// Need to auth the app to use your account first - hit the link below but include your token 
// https://discordapp.com/api/oauth2/authorize?response_type=code&client_id=YOU_APP_CLIENT_HERE&scope=identify%20guilds.join&state=15773059ghq9183habn&prompt=consent
// Add your bot to the server -  I totally didnt forget this step and spend 15 mins swearing at the bot, nope not me...
// https://discordpy.readthedocs.io/en/latest/discord.html#inviting-your-bot


// https://youtu.be/dQw4w9WgXcQ ? 'Risky click' : 'Ricky click'


const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})


//Sound check waan...tu
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
})
//Rmemebr that thought you are holding....TOKEN HERE YO!
client.login('NjkzMzYzNDA1OTY4NTA2OTIw.Xn8EqQ.fK3oUkOh4JXZbgcGhejy8nyWpQQ');



module.exports.getDisappointedBra = async page => {
  await page.screenshot({ path: "latest-screenshot.png", fullPage: true })

  const slotsAvailable = await page.evaluate(() => {
    let openSlots = [...document.querySelectorAll(".open-delivery-window")]

    return openSlots.some(slot => getComputedStyle(slot, null).display === "block")
  })

  
  let message = slotsAvailable ? ":rainbow: Get in there quick! :shopping_cart:" : ":poop: Still no slots available! :fire:"
  
  // todo: Add 3rd arg for channel name for the bot to message a channel ofyour choice...
  //get channel id 
  //https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-
  let activeChannel = '693372884676116510'

  client.channels.fetch(activeChannel)
  .then(channel => {
    channel.send(message)
    .then(message => console.log(`Sent message to ${channel.name}: ${message.content}`))
    .catch(console.error);

  })
  


//Desktop notifications
  notifier.notify({
    title: "Countdown Check",
    message: slotsAvailable ? "✅ Get in there quick! ✅" : "❌ Still no slots available! ❌"
  })

}
