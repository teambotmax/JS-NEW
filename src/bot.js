const LineConnect = require('./connect');
const LINE = require('./main.js');
const fs = require('fs');
console.info("\n\
..¶¶¶¶¶¶¶¶7………………………………$¶¶¶¶¶$\n\
….¶¶¶¶¶¶¶¶¶¢…………………………¶¶¶¶¶¶¶$\n\
….ø¶¶¶¶¶$¶¶¶¶……………………..¢¶¶¶¶¶¶¶$\n\
……¶¶¶¶¶¶¶¶¶¶¶¶………………….¶¶¶¶¶¶¶¶ø\n\
……..¶¶¶¶¶¶¶¶¶¶¶¶¢…………….¶¶¶¶¶¶¶¶¶o\n\
…………¶¶¶¶¶¶¶¶¶¶¶¶…………..¶¶¶¶¶¶¶¶¶\n\
…………..¢¶¶¶¶¶¶¶¶¶¶¶…………¶¶¶¶¶¶¶¶¶\n\
………………¶¶¶¶¶$¶¶¶¶¶7……o¶¶¶¶¶¶¶¶7\n\
………………….7¶¶¶¶¶¶¶¶¶¶….o¶¶¶¶¶¶¶¶\n\
……………………….o¶¶¶¶¶¶¶¶….¶¶¶¶¶¶¶\n\
………………………………….$¶¶¶o¶¶¶¶¶¶\n\
……………………….o¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
………………….¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
………………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶7\n\
…………….¶¶¶ø……¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
…………..¶¶¶¶……….¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
…………¶¶¶¶¶¶……¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
…………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
…………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
…………..¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
………………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
………………….7¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
…………………………o¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n\
……………………………¶¶¶¶¶¶¶¶¶¶¶¶¶1\n\
★═══════════★★══════════★\n\
─────██████─█████─█████────\n\
───────██───██   ██─██   ██────\n\
───────██───█████─████─────\n\
───────██───██────██   ██────\n\
───────██───██────█████────\n\
★═══════════★★══════════★\n\
★─ https://line.me/ti/p/~please.jan.goblog ─★\n\
★─ https://line.me/ti/p/~cuma.akun.titipan ─★\n");
console.info("\n\
★═─═─═─═─═─★★─═─═─═─═─═★\n\
───⚜ Type : LINE PEKOK JS\n\
───⚜ Version: VERSION KW SERIES\n\
───⚜ Thanks to @Alfathdirk @TCR_TEAM\n\
★═─═─═─═─═─★★─═─═─═─═─═★\n\
\nNB : Bot Ini Dibuat Oleh @Alfathdirk @TCR_TEAM Dan Di Remake Oleh @TRIO_PEKOK_BOTS \n\
***Copyright belongs to the author***");

/*
| This constant is for auth/login
| 
| Change it to your authToken / your email & password
*/
//TRIO_PEKOK_PROTECTION

const auth = {
    authToken: '',
	certificate: '',
	email: 'akunbotketigaku@gmail.com',
	password: 'basyirjalu026'
}

let client =  new LineConnect();
//let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		//LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
