let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa axis : 6283813417529
⫹⫺ Via Dana : 6281352724422
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/khurushi5

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
