const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: France_King,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function FLASH_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_France_King = France_King({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_France_King.ev.on('creds.update', saveCreds)
			Qr_Code_By_France_Kingr.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_France_King.sendMessage(Qr_Code_By_France_King.user.id, { text: 'TOGE-MD;;;' + b64data });
	
				   let FLASH_MD_TEXT =`*╔══《T̷O̷G̷E̷ ̷M̷D̷》══◇*

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
	 await Qr_Code_By_France_King.sendMessage(Qr_Code_By_France_King.user.id,{text:FLASH_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_France_King.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					FLASH_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await FLASH_MD_QR_CODE()
});
module.exports = router
