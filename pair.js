const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: France_King,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function FLASH_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_France_King = France_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_France_King.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_France_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_France_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_France_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, { text: 'TOGE-MD;;;' + b64data });

               let FLASH_MD_TEXT = `*╔══《T̷O̷G̷E̷ ̷M̷D̷》══◇*

║𝐦𝐞𝐫𝐜𝐢 𝐝'𝐚𝐯𝐨𝐢𝐫 𝐜𝐡𝐨𝐢𝐬𝐢 𝐧𝐨𝐭𝐫𝐞 𝐛𝐨𝐭 ║𝐭𝐨𝐮𝐭 𝐥'𝐞𝐪𝐮𝐢𝐩𝐞 𝐯𝐨𝐮𝐬 𝐬𝐨𝐮𝐡𝐚𝐢𝐭𝐞 𝐥𝐚 ║𝐛𝐢𝐞𝐧𝐯𝐞𝐧𝐮𝐞 😁
╚════════════
╔═════◇
║ *『••• OWNER INFO •••』*
║
║ ❒ 𝐎𝐰𝐧𝐞𝐫: _13038480418_

║ ❒ 𝐑𝐞𝐩𝐨: _https://github.com/toge012345_

║ ❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/JQ4s2pJuBReE7YL9wKJPHo_

║ ❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VaYtF0Z2975CYz9Fmv2k_

║ ❒ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: _https://www.instagram.com/lawliet.kfx_

║ 
╚════════════════════╝ 
 *𝐓𝐎𝐆𝐄 𝐌𝐃 𝐌𝐔𝐋𝐓𝐈 𝐃𝐄𝐕𝐈𝐂𝐄*
___________________________________

*_N'oubliez pas de donner une étoile⭐ à mon dépôt_*`
 await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id,{text:FLASH_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_France_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FLASH_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await FLASH_MD_PAIR_CODE()
});
module.exports = router
