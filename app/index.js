const _0x49905f=_0x48ef;(function(_0x3d9917,_0x410da0){const _0x4e4043=_0x48ef,_0x2dd8b8=_0x3d9917();while(!![]){try{const _0x382421=parseInt(_0x4e4043(0x132))/0x1+parseInt(_0x4e4043(0x16e))/0x2+parseInt(_0x4e4043(0x1c3))/0x3*(-parseInt(_0x4e4043(0x158))/0x4)+-parseInt(_0x4e4043(0x1a1))/0x5+parseInt(_0x4e4043(0x1ae))/0x6+parseInt(_0x4e4043(0x183))/0x7+-parseInt(_0x4e4043(0x1a4))/0x8*(parseInt(_0x4e4043(0x186))/0x9);if(_0x382421===_0x410da0)break;else _0x2dd8b8['push'](_0x2dd8b8['shift']());}catch(_0x575b58){_0x2dd8b8['push'](_0x2dd8b8['shift']());}}}(_0x39aa,0x6b686));const fs=require('fs'),path=require(_0x49905f(0x1df)),axios=require(_0x49905f(0x14e)),readline=require(_0x49905f(0x1a5)),{DateTime}=require(_0x49905f(0x173)),logger=require(_0x49905f(0x164)),printBanner=require(_0x49905f(0x134));class APIClient{constructor(_0x51a3e1){const _0x328e3e=_0x49905f;this['headers']=_0x51a3e1,this[_0x328e3e(0x19d)]=_0x328e3e(0x19a),this['wormUrl']=_0x328e3e(0x15c);}async[_0x49905f(0x1cf)](_0x332982,_0x268b7f=null){const _0x3d1081=_0x49905f,_0x3d2d6d=_0x268b7f?{...this[_0x3d1081(0x15b)],..._0x268b7f}:this['headers'];return axios[_0x3d1081(0x1cf)](''+this[_0x3d1081(0x19d)]+_0x332982,{'headers':_0x3d2d6d});}async[_0x49905f(0x194)](_0x861b63,_0x5eafd9={},_0x31c0da=null){const _0x142a66=_0x49905f,_0x3f68f8=_0x31c0da?{...this[_0x142a66(0x15b)],..._0x31c0da}:this[_0x142a66(0x15b)];return axios[_0x142a66(0x194)](''+this[_0x142a66(0x19d)]+_0x861b63,_0x5eafd9,{'headers':_0x3f68f8});}async[_0x49905f(0x180)](_0x27851a,_0x292a52=null){const _0x20b379=_0x49905f,_0x20f959=_0x292a52?{...this['headers'],..._0x292a52}:this[_0x20b379(0x15b)];return axios[_0x20b379(0x1cf)](''+this['wormUrl']+_0x27851a,{'headers':_0x20f959});}async[_0x49905f(0x130)](_0x2b6a21,_0x14dfca={},_0x422200=null){const _0x95cfb0=_0x49905f,_0x12f061=_0x422200?{...this[_0x95cfb0(0x15b)],..._0x422200}:this[_0x95cfb0(0x15b)];return axios['post'](''+this[_0x95cfb0(0x182)]+_0x2b6a21,_0x14dfca,{'headers':_0x12f061});}}class UserManager{constructor(_0x9873db){const _0x441481=_0x49905f;this[_0x441481(0x19f)]=_0x9873db;}[_0x49905f(0x14b)](_0x19f9e0){const _0x404936=_0x49905f,_0x4ea412=JSON[_0x404936(0x17b)](decodeURIComponent(_0x19f9e0[_0x404936(0x1de)](_0x404936(0x187))[0x1][_0x404936(0x1de)]('&')[0x0]));return{'name':_0x4ea412['first_name']+'\x20'+_0x4ea412[_0x404936(0x15e)],'username':_0x4ea412[_0x404936(0x153)],'firstName':_0x4ea412[_0x404936(0x1d6)],'id':_0x4ea412['id']};}async['login'](_0x4a7cfe){const _0x2f2940=_0x49905f,_0x21a31a={'Telegramauth':_0x2f2940(0x1ac)+_0x4a7cfe};try{const _0x40780e=await this['apiClient']['get']('/user',_0x21a31a);if(_0x40780e[_0x2f2940(0x15f)]?.[_0x2f2940(0x1bf)]!==undefined)return logger[_0x2f2940(0x155)]('Login\x20successful!'),logger[_0x2f2940(0x155)](_0x2f2940(0x144)+_0x40780e[_0x2f2940(0x15f)][_0x2f2940(0x1bf)]),_0x40780e[_0x2f2940(0x15f)];throw new Error(_0x2f2940(0x1d0));}catch(_0x2dc458){return this[_0x2f2940(0x1bc)](_0x4a7cfe);}}async[_0x49905f(0x1bc)](_0x5e4c7f){const _0x443151=_0x49905f,_0x94188c={'Telegramauth':_0x443151(0x1ac)+_0x5e4c7f},_0x1def06=this[_0x443151(0x14b)](_0x5e4c7f),_0x2846c4={'name':''+_0x1def06[_0x443151(0x133)],'referId':0x19df15058,'username':_0x1def06[_0x443151(0x153)]};try{logger['warn'](_0x443151(0x188));const _0xc17704=await this[_0x443151(0x19f)][_0x443151(0x194)](_0x443151(0x1c9),_0x2846c4,_0x94188c);if(_0xc17704['data']?.['balance']!==undefined)return logger[_0x443151(0x155)]('Registration\x20successful!'),logger['info']('Balance:\x20'+_0xc17704[_0x443151(0x15f)]['balance']),_0xc17704[_0x443151(0x15f)];throw new Error(_0x443151(0x143));}catch(_0x223eba){return logger['error'](_0x443151(0x1b3)+_0x223eba[_0x443151(0x13d)]),null;}}}class GuildManager{constructor(_0x2efb4a){const _0x48f357=_0x49905f;this[_0x48f357(0x19f)]=_0x2efb4a,this['guildId']='6719f06c4a340fbb632a5075';}async['checkMembership'](_0x317478){const _0x456402=_0x49905f,_0x150859={'Telegramauth':_0x317478};try{const _0x278df2=await this[_0x456402(0x19f)][_0x456402(0x1cf)](_0x456402(0x142),_0x150859);if(_0x278df2['data']?.['guildMember'])return logger[_0x456402(0x155)]('Already\x20a\x20member\x20of\x20guild:\x20'+_0x278df2['data'][_0x456402(0x1d5)][_0x456402(0x133)]),!![];return![];}catch(_0x4704f4){return logger[_0x456402(0x14f)](_0x456402(0x18e)+_0x4704f4[_0x456402(0x13d)]),![];}}async[_0x49905f(0x146)](_0x2ff306){const _0x5ac4aa=_0x49905f;if(await this[_0x5ac4aa(0x13e)](_0x2ff306))return!![];const _0x5a4548={'Telegramauth':_0x2ff306};try{const _0x4e6803=await this[_0x5ac4aa(0x19f)][_0x5ac4aa(0x1cf)](_0x5ac4aa(0x1b2)+this['guildId'],_0x5a4548);if(_0x4e6803[_0x5ac4aa(0x15f)]==='OK')return logger['info'](_0x5ac4aa(0x12e)),!![];return logger[_0x5ac4aa(0x139)](_0x5ac4aa(0x1ce)),![];}catch(_0x56a5dd){return logger['error'](_0x5ac4aa(0x168)+_0x56a5dd['message']),![];}}}class WormManager{constructor(_0x48d09f){const _0x16220e=_0x49905f;this[_0x16220e(0x19f)]=_0x48d09f;}async['catchWorm'](_0x1099ea){const _0x14ef17=_0x49905f,_0x56634d={'Authorization':_0x14ef17(0x1ac)+_0x1099ea};try{const _0x445f87=await this['apiClient']['getWorm']('/worms/mint-status',_0x56634d),_0x572daa=_0x445f87[_0x14ef17(0x15f)][_0x14ef17(0x15f)];if(_0x572daa[_0x14ef17(0x174)]===_0x14ef17(0x196)){logger[_0x14ef17(0x155)](_0x14ef17(0x13f));const _0x4b0203=await this[_0x14ef17(0x19f)][_0x14ef17(0x130)](_0x14ef17(0x1c0),{},_0x56634d),_0x1e9025=_0x4b0203[_0x14ef17(0x15f)][_0x14ef17(0x15f)];logger[_0x14ef17(0x155)](_0x14ef17(0x185)+_0x4b0203[_0x14ef17(0x15f)][_0x14ef17(0x13d)]),_0x1e9025?.[_0x14ef17(0x174)]===_0x14ef17(0x18a)&&this[_0x14ef17(0x19c)](_0x1e9025[_0x14ef17(0x181)]);}else _0x572daa[_0x14ef17(0x174)]===_0x14ef17(0x18a)?this['logNextMintTime'](_0x572daa[_0x14ef17(0x181)]):logger[_0x14ef17(0x139)](_0x14ef17(0x16f)+_0x572daa[_0x14ef17(0x174)]);}catch(_0x8d9559){logger[_0x14ef17(0x14f)](_0x14ef17(0x1b3)+_0x8d9559[_0x14ef17(0x13d)]);}}['logNextMintTime'](_0x52bec5){const _0x1feb87=_0x49905f,_0x5915b2=DateTime['fromISO'](_0x52bec5)[_0x1feb87(0x184)](DateTime['DATETIME_FULL']);logger['info'](_0x1feb87(0x1a6)+_0x5915b2);}}class MinigameManager{constructor(_0x191103){this['apiClient']=_0x191103;}async[_0x49905f(0x1af)](_0x11bcb7){const _0x42cf41=_0x49905f,_0x49d1a7={'Telegramauth':_0x42cf41(0x1ac)+_0x11bcb7};try{const _0x2f4d81=await this[_0x42cf41(0x19f)][_0x42cf41(0x1cf)](_0x42cf41(0x1c7),_0x49d1a7);let {turn:_0x4b6981}=_0x2f4d81[_0x42cf41(0x15f)];logger[_0x42cf41(0x155)]('Starting\x20egg\x20cracking:\x20'+_0x4b6981+'\x20turns');const _0x13e27f=await this[_0x42cf41(0x19f)][_0x42cf41(0x1cf)](_0x42cf41(0x1be),_0x49d1a7);_0x4b6981=_0x13e27f[_0x42cf41(0x15f)][_0x42cf41(0x179)],logger[_0x42cf41(0x155)](_0x42cf41(0x199)+_0x4b6981);let _0x2b2cd9=0x0;while(_0x4b6981>0x0){const _0x41e5c5=await this[_0x42cf41(0x19f)][_0x42cf41(0x1cf)](_0x42cf41(0x1d9),_0x49d1a7),{result:_0x146227}=_0x41e5c5['data'];_0x4b6981=_0x41e5c5[_0x42cf41(0x15f)][_0x42cf41(0x179)],_0x2b2cd9+=_0x146227,logger['info'](_0x4b6981+_0x42cf41(0x1d1)+_0x146227);}await this[_0x42cf41(0x15a)](_0x49d1a7,_0x2b2cd9);}catch(_0x458fb4){logger[_0x42cf41(0x14f)](_0x42cf41(0x170)+_0x458fb4[_0x42cf41(0x13d)]);}}async[_0x49905f(0x15a)](_0x4f7163,_0x3b9317){const _0x15f4e7=_0x49905f;try{const _0x29daf0=await this['apiClient'][_0x15f4e7(0x1cf)](_0x15f4e7(0x178),_0x4f7163);_0x29daf0[_0x15f4e7(0x15f)]===!![]?(logger[_0x15f4e7(0x155)](_0x15f4e7(0x1a0)),logger[_0x15f4e7(0x155)](_0x15f4e7(0x1c6)+_0x3b9317)):logger[_0x15f4e7(0x14f)](_0x15f4e7(0x140));}catch(_0x268f1f){logger[_0x15f4e7(0x14f)](_0x15f4e7(0x12f)+_0x268f1f[_0x15f4e7(0x13d)]);}}async[_0x49905f(0x175)](_0x3562e3,_0x2d203a){const _0x27e24e=_0x49905f,_0x202fd5={'Telegramauth':_0x27e24e(0x1ac)+_0x3562e3};try{const _0x135922=await this[_0x27e24e(0x167)](_0x202fd5);if(!_0x135922)return;if(await this[_0x27e24e(0x171)](_0x135922,_0x202fd5))return;await this[_0x27e24e(0x148)](_0x135922,_0x2d203a,_0x202fd5);}catch(_0x5288f7){await this['handleUpgradeError'](_0x5288f7,_0x202fd5);}}async[_0x49905f(0x167)](_0x3673ce){const _0x2a4291=_0x49905f;try{const _0x2d5e16=await this[_0x2a4291(0x19f)][_0x2a4291(0x1cf)](_0x2a4291(0x149),_0x3673ce),_0x2177ea=_0x2d5e16[_0x2a4291(0x15f)];return logger['info'](_0x2a4291(0x1cc)+_0x2177ea['level']),_0x2177ea;}catch(_0x4d8756){return logger[_0x2a4291(0x14f)](_0x2a4291(0x157)+_0x4d8756[_0x2a4291(0x13d)]),null;}}async[_0x49905f(0x171)](_0x569b86,_0x3d4026){const _0x527f63=_0x49905f;if(_0x569b86[_0x527f63(0x174)]!==_0x527f63(0x1a7))return![];const _0x1afb07=Date[_0x527f63(0x19e)](),_0x3bbf31=_0x569b86[_0x527f63(0x189)]+_0x569b86[_0x527f63(0x1b8)]*0x3c*0x3c*0x3e8;if(_0x1afb07>_0x3bbf31){const _0x43c8c6=await this['apiClient']['post'](_0x527f63(0x1c4),{},_0x3d4026);if(_0x43c8c6[_0x527f63(0x15f)]===!![])return logger[_0x527f63(0x155)](_0x527f63(0x1c1)),!![];logger[_0x527f63(0x14f)]('Upgrade\x20confirmation\x20failed');}else{const _0x2a95c4=Math[_0x527f63(0x1ba)]((_0x3bbf31-_0x1afb07)/(0x3c*0x3e8));logger[_0x527f63(0x155)](_0x527f63(0x1ab)+_0x2a95c4+'\x20minutes');}return!![];}async[_0x49905f(0x148)](_0x2bcbf6,_0x349c21,_0x2a509e){const _0x1758bf=_0x49905f;if(_0x2bcbf6['status']!==_0x1758bf(0x1c8))return;if(!_0x2bcbf6[_0x1758bf(0x18f)]){logger[_0x1758bf(0x155)](_0x1758bf(0x159));return;}_0x349c21>=_0x2bcbf6['nextLevel'][_0x1758bf(0x17e)]?await this[_0x1758bf(0x1b9)](_0x2a509e):logger[_0x1758bf(0x139)](_0x1758bf(0x1b0)+_0x2bcbf6['nextLevel'][_0x1758bf(0x17e)]+_0x1758bf(0x193));}async[_0x49905f(0x160)](_0x4eadca,_0x577c46){const _0x187c5e=_0x49905f;_0x4eadca['response']?.[_0x187c5e(0x174)]===0x190&&_0x4eadca[_0x187c5e(0x1b4)][_0x187c5e(0x15f)]===_0x187c5e(0x1d2)?(logger[_0x187c5e(0x139)](_0x187c5e(0x18c)),await this[_0x187c5e(0x1b9)](_0x577c46)):logger[_0x187c5e(0x14f)](_0x187c5e(0x17a)+_0x4eadca[_0x187c5e(0x13d)]);}async['initiateUpgrade'](_0x544035){const _0xd2510c=_0x49905f;try{const _0xf7706e=await this[_0xd2510c(0x19f)]['get']('/minigame/incubate/upgrade',_0x544035),_0x3e8516=_0xf7706e[_0xd2510c(0x15f)],_0x2dfab2=new Date(_0x3e8516[_0xd2510c(0x189)]+_0x3e8516[_0xd2510c(0x1b8)]*0x3c*0x3c*0x3e8);logger[_0xd2510c(0x155)](_0xd2510c(0x1b7)+_0x3e8516[_0xd2510c(0x154)]+_0xd2510c(0x1c5)+_0x2dfab2[_0xd2510c(0x184)]());}catch(_0x3fa72e){logger[_0xd2510c(0x14f)](_0xd2510c(0x1bd)+_0x3fa72e[_0xd2510c(0x13d)]);}}}function _0x48ef(_0x2e30b9,_0x24522b){const _0x39aa87=_0x39aa();return _0x48ef=function(_0x48ef63,_0x2d258d){_0x48ef63=_0x48ef63-0x12e;let _0x321e64=_0x39aa87[_0x48ef63];return _0x321e64;},_0x48ef(_0x2e30b9,_0x24522b);}class TaskManager{constructor(_0x4a47f7){const _0x770a3=_0x49905f;this[_0x770a3(0x19f)]=_0x4a47f7;}async[_0x49905f(0x176)](_0x149143){const _0x4c01a3=_0x49905f,_0xf34dc8={'Telegramauth':_0x4c01a3(0x1ac)+_0x149143};try{const _0x3af00a=await this[_0x4c01a3(0x162)](_0xf34dc8);if(_0x3af00a[_0x4c01a3(0x1a3)]===0x0){logger[_0x4c01a3(0x155)](_0x4c01a3(0x13a));return;}await this[_0x4c01a3(0x150)](_0x3af00a,_0xf34dc8);}catch(_0x4ece66){logger[_0x4c01a3(0x14f)](_0x4c01a3(0x14c)+_0x4ece66[_0x4c01a3(0x13d)]);}}async['getIncompleteTasks'](_0x3e132b){const _0x3a297a=_0x49905f,[_0x239e73,_0x2578d1]=await Promise[_0x3a297a(0x192)]([this['apiClient']['get'](_0x3a297a(0x161),_0x3e132b),this[_0x3a297a(0x19f)][_0x3a297a(0x1cf)](_0x3a297a(0x169),_0x3e132b)]),_0x257a36=_0x239e73['data'][_0x3a297a(0x16b)](_0x1276c2=>_0x1276c2['tasks']),_0x1f66a0=_0x2578d1[_0x3a297a(0x15f)][_0x3a297a(0x14a)](_0x39fcf0=>_0x39fcf0[_0x3a297a(0x1db)]);return _0x257a36[_0x3a297a(0x1a9)](_0x4ebb58=>!_0x1f66a0[_0x3a297a(0x15d)](_0x4ebb58[_0x3a297a(0x156)]));}async[_0x49905f(0x150)](_0x578279,_0x5ead4e){const _0x38f952=_0x49905f;for(const _0x3bbd9a of _0x578279){try{const _0x78e135={'taskId':_0x3bbd9a[_0x38f952(0x156)],'channelId':_0x3bbd9a[_0x38f952(0x166)]||'','slug':_0x3bbd9a[_0x38f952(0x16c)]||_0x38f952(0x1d7),'point':_0x3bbd9a['point']},_0x236a7b=await this[_0x38f952(0x19f)][_0x38f952(0x194)]('/project/join-task',_0x78e135,_0x5ead4e);_0x236a7b[_0x38f952(0x15f)]['msg']==='Successfully'?logger[_0x38f952(0x155)]('Task\x20'+_0x3bbd9a[_0x38f952(0x1cb)]+_0x38f952(0x1cd)+_0x3bbd9a[_0x38f952(0x137)]):logger['error']('Task\x20'+_0x3bbd9a[_0x38f952(0x1cb)]+'\x20failed');}catch(_0x369795){}await new Promise(_0x248ade=>setTimeout(_0x248ade,0x3e8));}}}class Utilities{static[_0x49905f(0x198)](_0x33b906){const _0x4d776a=_0x49905f,_0x59603a=Math[_0x4d776a(0x17d)](_0x33b906/0xe10)[_0x4d776a(0x190)]()[_0x4d776a(0x16d)](0x2,'0'),_0x3e6bd4=Math['floor'](_0x33b906%0xe10/0x3c)[_0x4d776a(0x190)]()['padStart'](0x2,'0'),_0x40f5cf=(_0x33b906%0x3c)[_0x4d776a(0x190)]()[_0x4d776a(0x16d)](0x2,'0');return _0x59603a+':'+_0x3e6bd4+':'+_0x40f5cf;}static async[_0x49905f(0x191)](_0x42cc8e){const _0x3bcc9e=_0x49905f;for(let _0x14e0ce=_0x42cc8e;_0x14e0ce>=0x0;_0x14e0ce--){readline[_0x3bcc9e(0x145)](process[_0x3bcc9e(0x1b5)],0x0),process[_0x3bcc9e(0x1b5)][_0x3bcc9e(0x1d3)](_0x3bcc9e(0x1a8)+this[_0x3bcc9e(0x198)](_0x14e0ce)+'\x20to\x20continue\x20the\x20loop'),await new Promise(_0x683c4c=>setTimeout(_0x683c4c,0x3e8));}readline[_0x3bcc9e(0x195)](process[_0x3bcc9e(0x1b5)],0x0),readline[_0x3bcc9e(0x145)](process[_0x3bcc9e(0x1b5)],0x0);}static[_0x49905f(0x131)](_0x37b189){const _0x5276cb=_0x49905f,_0x9483f7=readline['createInterface']({'input':process[_0x5276cb(0x177)],'output':process[_0x5276cb(0x1b5)]});return new Promise(_0x27a44c=>_0x9483f7[_0x5276cb(0x147)](_0x37b189,_0x1fc915=>{const _0x5a1036=_0x5276cb;_0x9483f7[_0x5a1036(0x135)](),_0x27a44c(_0x1fc915);}));}}function _0x39aa(){const _0x5d2ac3=['guild','first_name','none','Attempting\x20to\x20join\x20guild...','/minigame/egg/play','application/json','taskId','main','utf8','split','path','Successfully\x20joined\x20the\x20guild','Claim\x20error:\x20','postWorm','askQuestion','268895HRDJPB','name','./src/helper','close','wormManager','point','userManager','warn','All\x20tasks\x20completed','Processing\x20account:\x20','getUserPreferences','message','checkMembership','Worm\x20spotted,\x20catching\x20it','Claim\x20failed','toLowerCase','/guild/me','Unable\x20to\x20register\x20account','Balance:\x20','cursorTo','join','question','handleConfirmedStatus','/minigame/incubate/info','map','extractUserInfo','Error\x20performing\x20tasks:\x20','minigameManager','axios','error','executeTasks','application/json,\x20text/plain,\x20*/*','Do\x20you\x20want\x20to\x20perform\x20tasks?\x20(y/n):\x20','username','level','info','_id','Error\x20getting\x20incubation\x20info:\x20','4hjjBrx','Maximum\x20level\x20reached','claimReward','headers','https://worm.birds.dog','includes','last_name','data','handleUpgradeError','/project','getIncompleteTasks','loadAccounts','../config/logger','\x22Windows\x22','channelId','getIncubationInfo','Error\x20joining\x20guild:\x20','/user-join-task','API\x20call\x20failed\x20for\x20account\x20','flatMap','slug','padStart','1579462cZexnO','Status:\x20','Egg\x20minigame\x20error:\x20','handleProcessingUpgrade','https://birdx.birds.dog/','luxon','status','upgradeEgg','performTasks','stdin','/minigame/egg/claim','turn','Egg\x20upgrade\x20error:\x20','parse','same-site','floor','birds','empty','getWorm','nextMintTime','wormUrl','4077115RJNFQN','toLocaleString','Result:\x20','9LNTjzS','user=','Login\x20unsuccessful,\x20Registering\x20account','upgradedAt','WAITING','executeActivities','Start\x20incubating\x20your\x20egg\x20now.','taskManager','Error\x20checking\x20guild\x20membership:\x20','nextLevel','toString','countdown','all','\x20birds','post','clearLine','MINT_OPEN','Fatal\x20error\x20in\x20main\x20loop:\x20','formatTime','Current\x20turn:\x20','https://api.birds.dog','cors','logNextMintTime','baseUrl','now','apiClient','Claim\x20successful!','739830DVIbiM','catchWorm','length','6149368ixQvjj','readline','Next\x20worm\x20catch:\x20','processing','Wait\x20','filter','\x20|\x20Skipping\x20this\x20account.','Upgrade\x20in\x20progress\x20|\x20Time\x20remaining:\x20','tma\x20','data.txt','2184462FzqQGE','playEggGame','Not\x20enough\x20birds\x20to\x20upgrade.\x20Need\x20','guildManager','/guild/join/','Error:\x20','response','stdout','readFileSync','Starting\x20upgrade\x20to\x20level\x20','duration','initiateUpgrade','ceil','\x22Not/A)Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x22115\x22,\x20\x22Chromium\x22;v=\x22115\x22','register','Error\x20during\x20egg\x20upgrade:\x20','/minigame/egg/turn','balance','/worms/mint','Upgrade\x20completed','replace','1945707XJTeXo','/minigame/incubate/confirm-upgraded','.\x20Completion\x20time:\x20','Total\x20reward:\x20','/minigame/egg/join','confirmed','/user','exit','title','Egg\x20level:\x20','\x20completed\x20|\x20reward:\x20','Unexpected\x20response\x20when\x20joining\x20guild','get','New\x20account','\x20Egg\x20left\x20|\x20Reward\x20','Start\x20incubating\x20your\x20egg\x20now','write','Error\x20processing\x20account\x20'];_0x39aa=function(){return _0x5d2ac3;};return _0x39aa();}class BirdX{constructor(){const _0x197c92=_0x49905f;this[_0x197c92(0x15b)]={'Accept':_0x197c92(0x151),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':'en-US;q=0.6,en;q=0.5','Content-Type':_0x197c92(0x1da),'Origin':'https://birdx.birds.dog','Referer':_0x197c92(0x172),'Sec-Ch-Ua':_0x197c92(0x1bb),'Sec-Ch-Ua-Mobile':'?0','Sec-Ch-Ua-Platform':_0x197c92(0x165),'Sec-Fetch-Dest':_0x197c92(0x17f),'Sec-Fetch-Mode':_0x197c92(0x19b),'Sec-Fetch-Site':_0x197c92(0x17c),'User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/115.0.0.0\x20Safari/537.36'};const _0x4a1226=new APIClient(this[_0x197c92(0x15b)]);this['userManager']=new UserManager(_0x4a1226),this[_0x197c92(0x1b1)]=new GuildManager(_0x4a1226),this[_0x197c92(0x136)]=new WormManager(_0x4a1226),this[_0x197c92(0x14d)]=new MinigameManager(_0x4a1226),this[_0x197c92(0x18d)]=new TaskManager(_0x4a1226);}async[_0x49905f(0x163)](){const _0x42edf8=_0x49905f,_0x20b703=path[_0x42edf8(0x146)](__dirname,_0x42edf8(0x1ad));return fs[_0x42edf8(0x1b6)](_0x20b703,_0x42edf8(0x1dd))[_0x42edf8(0x1c2)](/\r/g,'')[_0x42edf8(0x1de)]('\x0a')[_0x42edf8(0x1a9)](Boolean);}async[_0x49905f(0x13c)](){const _0x4a65d6=_0x49905f,_0x14907f=await Utilities[_0x4a65d6(0x131)]('Do\x20you\x20want\x20to\x20upgrade?\x20(y/n):\x20'),_0x592c19=await Utilities['askQuestion'](_0x4a65d6(0x152));return{'shouldUpgrade':_0x14907f[_0x4a65d6(0x141)]()==='y','shouldPerformTasks':_0x592c19['toLowerCase']()==='y'};}async['processAccount'](_0x31a907,_0x740a0a){const _0x28c2f8=_0x49905f,_0x3a2cba=this[_0x28c2f8(0x138)][_0x28c2f8(0x14b)](_0x31a907);logger[_0x28c2f8(0x155)](_0x28c2f8(0x13b)+_0x3a2cba['firstName']);const _0x16acb3=await this[_0x28c2f8(0x138)]['login'](_0x31a907);if(!_0x16acb3){logger[_0x28c2f8(0x14f)](_0x28c2f8(0x16a)+_0x3a2cba['id']+_0x28c2f8(0x1aa));return;}try{await this[_0x28c2f8(0x18b)](_0x31a907,_0x16acb3[_0x28c2f8(0x1bf)],_0x740a0a);}catch(_0x204178){logger[_0x28c2f8(0x14f)](_0x28c2f8(0x1d4)+_0x3a2cba['id']+':\x20'+_0x204178[_0x28c2f8(0x13d)]);}await new Promise(_0x66488d=>setTimeout(_0x66488d,0x3e8));}async['executeActivities'](_0x180990,_0x327a65,_0x1e1eeb){const _0x38f2bf=_0x49905f;await this[_0x38f2bf(0x136)][_0x38f2bf(0x1a2)](_0x180990),await this[_0x38f2bf(0x14d)][_0x38f2bf(0x1af)](_0x180990),_0x1e1eeb['shouldUpgrade']&&(logger[_0x38f2bf(0x155)]('Starting\x20egg\x20check\x20and\x20upgrade...'),await this[_0x38f2bf(0x14d)]['upgradeEgg'](_0x180990,_0x327a65)),_0x1e1eeb['shouldPerformTasks']&&(logger[_0x38f2bf(0x155)]('Starting\x20task\x20execution...'),await this['taskManager'][_0x38f2bf(0x176)](_0x180990)),logger[_0x38f2bf(0x155)](_0x38f2bf(0x1d8)),await this[_0x38f2bf(0x1b1)][_0x38f2bf(0x146)](_0x180990);}async[_0x49905f(0x1dc)](){const _0x2e0535=_0x49905f;try{const _0xc060de=await this[_0x2e0535(0x163)](),_0x2d517f=await this[_0x2e0535(0x13c)]();while(!![]){for(const _0x57dbe4 of _0xc060de){await this['processAccount'](_0x57dbe4,_0x2d517f);}await Utilities[_0x2e0535(0x191)](0xb4);}}catch(_0x210f68){logger['error'](_0x2e0535(0x197)+_0x210f68[_0x2e0535(0x13d)]),process[_0x2e0535(0x1ca)](0x1);}}}printBanner();const client=new BirdX();client[_0x49905f(0x1dc)]()['catch'](_0x146eb4=>{const _0x4dac55=_0x49905f;logger[_0x4dac55(0x14f)](_0x146eb4[_0x4dac55(0x13d)]),process[_0x4dac55(0x1ca)](0x1);});