let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = 'IDR 5.000,00'
let sn = 'IDR 15.000,00'
let ss = 'IDR 30.000,00'
let sp = 'IDR 35.000,00'
let sv = 'IDR 45.000,00'
//premium
let ph = 'IDR 10.000,00'
let pn = 'IDR 20.000,00'
let pp = 'IDR 40.000,00'
let pv = 'IDR 50.000,00'
let ppm = 'IDR 70.000,00'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* ${sh}/Grup (1 Minggu)
┊⫹⫺ *Normal:* ${sn}/Grup (1 Bulan)
┊⫹⫺ *Standar:* ${ss}/Grup (2 Bulan)
┊⫹⫺ *Pro:* ${sp}/Grup (4 Bulan)                                                    
┊⫹⫺ *Permanent:* = ${sv}/Grup (Unlimited)
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* ${ph}k (1 Minggu)
┊⫹⫺ *Normal:* ${pn}k (1 Bulan)
┊⫹⫺ *Pro:* ${pp}k (4 Bulan)
┊⫹⫺ *Vip:* ${pv}k (8 Bulan)
┊⫹⫺ *Permanent:* = ${ppm}k (Unlimited)
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Dana:* [${pdana}]
• *OVO:* [${povo}]
• *GoPay:* [${pgopay}]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'k (1 bulan)' },
	{title: "🔖 𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.order *Paket:* STANDAR • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'k (2 bulan)' },
	{title: "🔖 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sp + 'k (4 bulan)' },
	{title: "🔖 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'k (UNLIMITED)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'k (1 bulan)' },
	{title: "🌟 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'k (4 bulan)' },
	{title: "🌟 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pv + 'k (8 bulan)' },
	{title: "🌟 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
