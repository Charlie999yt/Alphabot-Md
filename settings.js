const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = english  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "Whatsappbot-Mdོ" //namabot kalian
global.ownername= "ᴹᴿ᭄ CHARLIE999 ×፝֟͜×" //nama kalian
global.myweb ="https://api.zeeoneofc.xyz" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/CHARLIE999" //bebas asal jan hapus
global.github = "https://GitHub.com/Charlie99yt" //bebas
global.email = "sbadgamer4@gmail.com" //bebas
global.region = "India" //bebas
global.timezone = 'India/Delhi' //  timezone wib
global.premium = ["+556696124031","+919556416715"] //premium user
global.owner = ["+919556416715","+919556416715"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "+919556416715" // nomor wa kalian
global.ownernomerr = "+919556416715" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.packname = '© CHARLIE999' //sticker wm ubah
global.author = 'WHATSAPP-BOT' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'This command can only be used by the administrator !',
    botAdmin: 'This command can only be used when the bot becomes admin !',
    owner: 'This command can only be used by the owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'This command can only be used in private !',
	bot: 'Bot number user special features',
    errtoimg: 'Sorry, currently not compatible with gif sticker !',
    wait: '⏳ wait in Proses',
	lockCmd: 'Features not activated by owner!',
	example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
