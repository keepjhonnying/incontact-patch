	const notifyiConReturn = "https://www.shareicon.net/data/128x128/2016/12/19/863780_music_512x512.png";
	const notifyiConStrike = "http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-refresh-3-icon.png";
	const return2minTitle = 'RETORNO DE 2 MIN';

	const chat2minReturn = 'Dar retorno no CHAT';
	const chat3strike = 'Dar retorno no CHAT';

	const call2minReturn = 'Dar retorno na CALL';

	//Botão lembrete chat 2min
	const btnChat2min = document.createElement("button");
		btnChat2min.name = "chat2min";
		btnChat2min.setAttribute('id', 'chat2min');
		btnChat2min.setAttribute('class', 'patchBtn');
		btnChat2min.innerHTML  = "Chat 2min";
		btnChat2min.onclick = function() {
			btnChat2min.style.display = "none";
			btnChat2minStop.style.display = "block";
			console.log("Inicia lembrete a cada 2 min");
			start2minChat("0");
	};

	//Botão parar lembrete
	const btnChat2minStop = document.createElement("button");
		btnChat2minStop.name = "chat2minstop";
		btnChat2minStop.setAttribute('id', 'chat2minstop');
		btnChat2minStop.setAttribute('class', 'hidden');
		btnChat2minStop.innerHTML  = "2min stop";
		btnChat2minStop.style.display = "none"
		btnChat2minStop.onclick = function() {
			btnChat2minStop.style.display = "none";
			btnChat2min.style.display = "block";
			console.log("Parar lembrete");
			stop2minchat();
	};

	//Botão parar strike no Chat
	const btnChatStrikeStop = document.createElement("button");
		btnChatStrikeStop.name = "chat2continuestop";
		btnChatStrikeStop.setAttribute('id', 'stopchat2continue');
		btnChatStrikeStop.setAttribute('class', 'patchBtn');
		btnChatStrikeStop.innerHTML  = "Stop Strike";
		btnChatStrikeStop.style.display = "none"
		btnChatStrikeStop.onclick = function() {
			btnChatStrikeStop.style.display = "none";
			btnChatStrike.style.display = "block";
			console.log("Parar strike");
			stop3strike('0');
	};

	//Botão strike no Chat
	const btnChatStrike = document.createElement("button");
		btnChatStrike.name = "chat2continue";
		btnChatStrike.setAttribute('id', 'chat2continue');
		btnChatStrike.setAttribute('class', 'patchBtn');
		btnChatStrike.innerHTML  = "Chat Strike";
		btnChatStrike.onclick = function() {
			btnChatStrike.style.display = "none";
			btnChatStrikeStop.style.display = "block";
			console.log("Iniciar strike");
			start3strike('0');
	};

	//Botão lembrete call 2min
	const btnCall2min = document.createElement("button");
		btnCall2min.name = "call2return";
		btnCall2min.setAttribute('content', 'Call-2return');
		btnCall2min.setAttribute('id', 'call2return');
		btnCall2min.setAttribute('class', 'patchBtn');
		btnCall2min.innerHTML  = "Call 2min";
		btnCall2min.onclick = function() {
			btnCall2min.style.display = "none";
			btnCall2minStop.style.display = "block";
			console.log("Inicia lembrete a cada 2 min");
			start2mincall();
	};

	//Parar lembrete de retorno da Call
	const btnCall2minStop = document.createElement("button");
		btnCall2minStop.name = "call2returnstop"
		btnCall2minStop.setAttribute('content', 'Stop-Reminder')
		btnCall2minStop.setAttribute('id', 'call2returnstop')
		btnCall2minStop.setAttribute('class', 'patchBtn')
		btnCall2minStop.innerHTML  = "Stop Reminder"
		btnCall2minStop.style.display = "none"
		btnCall2minStop.onclick = function() {
			btnCall2minStop.style.display = "none"
			btnCall2min.style.display = "block"
			console.log("Parar lembrete")
			stop2mincall();
	};

	var timeOutChat, timeOutCall, start3strikeRule
	var not2minChat

	/*
	$('span[title="Admin"]').click(function() {
				var robotSets = ['set1','set2','set3'];
				var selectedrobotSets = robotSets[Math.floor(Math.random()*robotSets.length)];
				var putBkg = document.getElementById('uimanager_container').getElementsByClassName('glance-workspace')[0];
				let r = Math.random().toString(36).substring(7);
				putBkg.style.backgroundImage =  "url(https://robohash.org/"+r+"?set="+selectedrobotSets+")";
	});
	*/

	function killAll() {
			try{
			  obsChat.disconnect()
			  obsCall.disconnect()
			  stop2minchat()
			  stop3strike()
			  stop2mincall()
			  console.log('bye')
			} catch (err){
				console.log(err)
			}
	}

	const obsChat = new MutationObserver((mutations) => { 
		mutations.forEach((mutation) => {
	    const el = mutation.target;
	    if ((!mutation.oldValue || !mutation.oldValue.match(/\bhidden\b/)) 
	        && mutation.target.classList 
	        && mutation.target.classList.contains('hidden')){
	    	let btnHide = document.getElementById("chat2minstop");
	    	let btnShow = document.getElementById("chat2min");
	    	let btnHide2 = document.getElementById("stopchat2continue");
	    	let btnShow2 = document.getElementById("chat2continue");
	      	console.log('Fim do chat');
			btnShow.style.display = "block";
			btnHide.style.display = "none";
			btnShow2.style.display = "block";
			btnHide2.style.display = "none";

			try{
			  stop2minchat();
			  stop3strike();
			} catch (err){
				console.log(err)
			}

        ;}
	 	});
	 });

	const obsCall = new MutationObserver((mutations) => { 
		mutations.forEach((mutation) => {
	    const el = mutation.target;
	    if ((!mutation.oldValue || !mutation.oldValue.match(/\bhidden\b/)) 
	        && mutation.target.classList 
	        && mutation.target.classList.contains('hidden')){
	    	console.log('Fim da Call');
	    	var btnHide = document.getElementById("call2returnstop");
	    	var btnShow = document.getElementById("call2return");
			btnShow.style.display = "block";
			btnHide.style.display = "none";
			try{
			  stop2mincall()
			} catch (err){
				console.log(err)
			}
	    }
	 	});
	 });

	function insertTextAtCursor(text) {
	    var el = document.activeElement;
	    var val = el.value;
	    var endIndex;
	    var range;
	    var doc = el.ownerDocument;
	    if (typeof el.selectionStart === 'number' &&
	        typeof el.selectionEnd === 'number') {
	        endIndex = el.selectionEnd;
	        el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
	        el.selectionStart = el.selectionEnd = endIndex + text.length;
	    } else if (doc.selection !== 'undefined' && doc.selection.createRange) {
	        el.focus();
	        range = doc.selection.createRange();
	        range.collapse(false);
	        range.text = text;
	        range.select();
	    }
	}

	function notify(type) {
	    switch(type) {
	      case 'retorno2min':
	        var not2minChat = new Notification('Retorno de 2min', { body: 'Retorno de 2min', icon: notifyiConStrike });
	        not2minChat.onclick = function(event) {
					window.focus()
					this.close()
					document.getElementById('chatworkspaceui-0').getElementsByClassName('message-text-input')[0].focus()
					insertTextAtCursor("Mais um momento, por gentileza")
	        };
	      break;
	      case 'strike':
	        var not2minChat = new Notification('Strike', { body: 'Strike 2min', icon: notifyiConStrike });
	        not2minChat.onclick = function(event) {
					window.focus()
					document.getElementById('chatworkspaceui-0').getElementsByClassName('message-text-input')[0].focus()
					insertTextAtCursor("Você tem uma sessão ativa no Chat do Service Desk Américas.<h2><strong><b>Deseja continuar?</b></strong></h2>")
					this.close()
	        };
	      break;
	      case 'call':
	        var not2minChat = new Notification('Retorno de 2min', { body: 'Retorno de 2min', icon: notifyiConReturn });
	        not2minChat.onclick = function(event) {
					window.focus()
					this.close();
	        };
	      break;
	      default:
	        {}
	        break;
	    }
	}

	function setIntervalX(callback, delay, repetitions) {
	    var x = 0;
	    var intervalID = window.setInterval(function () {

	       callback();

	       if (++x === repetitions) {
	           window.clearInterval(intervalID);
	       }
	    }, delay);
	    return intervalID;
	}

	function start2minChat(num) {
		return timeOutChat = setInterval(function(){ notify("retorno2min"); }, 119 * 1000)
	}

	function start2mincall() {
		return timeOutCall = setInterval(function(){ notify("call"); }, 120 * 1000)
	}

	function start3strike(num) {
		return start3strikeRule = setIntervalX(function () {
			notify("strike")
		}, 119 * 1000, 3);
	}

	function stop3strike(num) {
		return clearInterval(start3strikeRule);
		console.log("Pausa no strike");
	}

	function stop2minchat() {
		return clearInterval(timeOutChat);
		console.log("Pausado");
	}

	function stop2mincall() {
		console.log("Pausado");
		return clearInterval(timeOutCall);
	}

	function whenExist(selector, myFunction, intervalTime) {
		var interval = setInterval(function() {
			 if (jQuery(selector).length > 0) {
			    myFunction();
			    clearInterval(interval);
			 }
		}, intervalTime);
	}

	whenExist("#chatworkspaceui-0 .summary-section", function(){
		console.log('%cVocê já tratou um\nwebticket hoje?', 'background: #222; color: #bada55');
		var chatWorkspace = document.getElementById('chatworkspaceui-0').getElementsByClassName('summary-section')[0];

		var chatDiv = document.createElement("div");
		chatDiv.id = "inContactPatch-chat";
		chatWorkspace.appendChild(chatDiv);	

		var toDivChat = document.getElementById("inContactPatch-chat");

		toDivChat.appendChild(btnChat2min);
		toDivChat.appendChild(btnChat2minStop);
		toDivChat.appendChild(btnChatStrike);
		toDivChat.appendChild(btnChatStrikeStop);

		obsChat.observe(document.getElementById('chatWorkspace'), { 
			attributes: true, 
			attributeOldValue: true, 
			attributeFilter: ['class'] 
		});
	}, 5000);

	whenExist("#contactContainer", function(){
		var callContainer = document.getElementById('contactContainer');

		var callDiv = document.createElement("div");
		callDiv.id = "inContactPatch-call";
		callContainer.appendChild(callDiv);

		var toDivCall = document.getElementById("inContactPatch-call");

		toDivCall.appendChild(btnCall2min);
		toDivCall.appendChild(btnCall2minStop);
		console.log('%cTenha idéias originais\nSe não forem originais, ao menos dê os devidos créditos', 'background: #222; color: #bada55');

		obsCall.observe(document.getElementById('workspace'), { 
			attributes: true, 
			attributeOldValue: true, 
			attributeFilter: ['class'] 
		});
	}, 5000);

	jQuery(document).on('DOMNodeInserted', '.confirm-button', function(){
		jQuery(this).after(
			killAll()
		);
	});

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	    if (request.data) {
	        insertTextAtCursor(request.data);
	    }
	});