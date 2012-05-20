// ==UserScript==
// @name           RandomSig
// @namespace      EPITECH
// @author	   Aversiste
// @version        0.1
// @description    Place a random sig at the end of your posts
// @license        WTF Public License; http://en.wikipedia.org/wiki/WTF_Public_License
// @include        http://www.epitech.eu/intra/index.php?section=all&page=forum*
// ==/UserScript==

//           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
//                   Version 2, December 2004
// 
// Copyright (C) 2011 Tristan LE GUERN <leguern@medu.se>
// 
// Everyone is permitted to copy and distribute verbatim or modified
// copies of this license document, and changing it is allowed as long
// as the name is changed.
// 
//           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
//  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
// 
//  0. You just DO WHAT THE FUCK YOU WANT TO.


var RandomSigFrequency = 1100;
var RandomSigTarget = '###';
var RandomSigStaticContent = '\n(|€~';

var RandomSigArray = [
//Silc
"< Chipo> Je sais pas pour vous, mais moi j'ai aucune idee precise de ce que va faire notre [eip]",
//irc
"pierrep: .... y en a un qui nous a envoye un .doc pour le stage OpenOffice.org, wtf",
//tNETacle
"tNETacle - Le reseau qui fait des trous dans les boites.",
"tNETacle - Le reseau qui t'entacule.",
"tNETacle - Le reseau qu'ta tante accule.",
"tNETacle - Le reseau qui gère ℵ0 clients.",
//random login
"corfa_u: Oui, mais ma generation à plus raison que ta generation.",
"el-gol_h: T'facon les africains sont bons qu'à faire des singeries.",
"greer-_k: Ma gorge est faite avec le cote qui gratte des eponges.",
"marand_a: Cette nuit, j'ai reve que j'etais un saucisson. Et que j'avais bon gout.",
"marand_a: Les types ça sert à rien, quand tu programmes tu sais ce que tu fais.",
"marand_a: Tu mets toute ta main et tu extraits le teton.",
"marand_a: (b jkh grr",
"marand_a: Bon, le java c'est trop cool en fait. Je pense que je vais laisser tomber le tnethacle pour un EIP qui fait du java.",
"marand_a: Un jour tu va avoir un rapport sexuel avec moi, et tu me dira que c'était pas un viol, parce que je n'aurais pas mis de capote.",
"michau_a: De rage, je me suis fait un bouillon de poule.",
"pichot_f: Tu veux une metablague ? Bah c'est l'histoire d'un type.",
"pichot_f: Tu veux une blague de shemale islamiste ?\nC'est l'histoire d'une Mecque.",
"tribou_f: Le buffer j'en ai rien à foutre, tu peux le garder.",
"tribou_f: Quoi ? Tu touches a mon buffer ? Tu touches a mon buffer ?",
"tribou_f: Moi j'utilise pas les fichiers de conf, ça sert à rien.",
"tribou_f: Les octets sont de gauche à droite.",
"michau_a: Là dessus, on est tous d'accord je pense. Sauf peut-être nos OpenBSDistes.\nvivet_n: Pas grave ils sauront faire sans :P\ntribou_f: Non.... Sauron n'utilise pas OpenBSD...",
//fortune
"Evangelists do it with Him watching.",
// Grands hommes
"Je suis réactionnaire parce qu'antiparlementaire, antidémocrate et antisocialiste.\nBenito Mussolini",
"Non.\nIoánnis Metaxás",
"Je pense qu'il est impossible de faire des progrès sous le système parlementaire.\nIoánnis Metaxás",
"Oh shit, now I’ve completely ruined my life.\nSebastian Schauseil",
"Les Anglais ont Shakespeare, mais, en dehors de cela, leur histoire ne contient que des énergumènes ou des nullités.\nAdolf Hitler",
"Je suis un ami des bêtes et j'aime particulièrement les chiens.\nAdolf Hitler"
];

function RandomSigModify (textarea) {
	for (var i = 0; i != textarea.length; ++i)
		if (textarea[i].value.search(RandomSigTarget) != -1) {
			var index = Math.floor(Math.random()*RandomSigArray.length);
			textarea[i].value = textarea[i].value.replace(RandomSigTarget, RandomSigArray[index]);
			textarea[i].value = textarea[i].value.concat(RandomSigStaticContent);
		}
	setTimeout(RandomSigTimer, RandomSigFrequency);
}

function RandomSigTimer (time) {
	var textarea = document.getElementsByTagName('textarea');
	if (textarea.length != 0) {
		RandomSigModify(textarea);
	}
	else
		setTimeout(RandomSigTimer, RandomSigFrequency);
}

(function () { RandomSigTimer(0); })();
