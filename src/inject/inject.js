chrome.extension.sendMessage({}, function(response) {

	const notifyiConReturn = "http://www.newdesignfile.com/postpic/2014/12/refresh-button-icon-32x32_236413.png";
	const notifyiConStrike = "http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-refresh-3-icon.png";
	const return2minTitle = 'RETORNO DE 2 MIN';

	const chat2minReturn = 'Dar retorno no CHAT';
	const chat3strike = 'Dar retorno no CHAT';

	const call2minReturn = 'Dar retorno na CALL';

	//new Notification(chat2minTitle, { body: chat2minReturn, icon: notifyiConReturn });

	/*const fuckAll = new MutationObserver((mutations) => { 
		mutations.forEach((mutation) => {
	    const el = mutation.target;
	    if ((!mutation.oldValue || !mutation.oldValue.match(/\bhidden\b/)) 
	        && mutation.target.classList 
	        && mutation.target.classList.contains('hidden')){
	    	console.log('Fim da Call');
			try {
				
				clearInterval(readyStateCheckInterval);
				for(i=0; i<100; i++)
				{
				    window.clearInterval(i);
				}

				var leVars = [
				"obsChat",
				"obsCall",
				"chatWorkspace",
				"timeOutCall",
				"timeOutChat",

				"readyStateCheckInterval"
				];
				leVars.forEach(function(variavel) {
				    console.log(variavel);
				    variavel = undefined;
				    delete(variavel);
				});

				stop2mincall();
				stop3strike();
				stop2minchat();
				stop2mincall();
			}
			catch(err) {
			  console.log('*.*')
			}
			
	    }
	 	});
	 });*/


	 function killAll() {
			try {
				var leVars = [
				"obsChat",
				"obsCall",
				"chatWorkspace",
				"timeOutCall",
				"timeOutChat",
				"readyStateCheckInterval"
				];
				leVars.forEach(function(variavel) {
				    console.log(variavel);
				    variavel = undefined;
				    delete(variavel);
				});

				stop2mincall();
				stop3strike();
				stop2minchat();
				stop2mincall();
			 	obsChat.disconnect();
			 	obsCall.disconnect();
				clearInterval(readyStateCheckInterval);
			}
			catch(err) {
			  {}
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
			try {
			  return stop2minchat() && clearInterval(start3strikeRule);
			}
			catch(err) {
			  console.log('¬_¬')
			}
		}
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
			try {
			  return stop2mincall();
			}
			catch(err) {
			  console.log('Sem timer ativo')
			}
	    }
	 	});
	 });

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

	function rafAsync() {
	    return new Promise(resolve => {
	        requestAnimationFrame(resolve); //faster than set time out
	    });
	}

	async function checkElement(selector) {
	    const querySelector = document.querySelector(selector);
	    while (querySelector === null) {
	        await rafAsync()
	    }
	    return querySelector;
	}  

	function start2minChat(num) {

		return timeOutChat = setInterval(
		"new Notification('Retorno de 2min', { body: 'Retorno de 2min', icon: 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-refresh-3-icon.png' });console.log('Retorno de 2min');console.log('Notificação');document.getElementsByClassName('message-text-input')[0].focus();document.getElementsByClassName('message-text-input')[0].innerHTML ='Mais um momento, por gentileza';",
		5000
		);
		//120 * 1000
	}

	function start2mincall() {

		return timeOutCall = setInterval(
		"new Notification('Retorno de 2min', { body: 'Retorno de 2min', icon: 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-refresh-3-icon.png' });console.log('Retorno de 2min');console.log('Notificação');document.getElementsByClassName('message-text-input')[0].focus();document.getElementsByClassName('message-text-input')[0].innerHTML ='Mais um momento, por gentileza';",
		5000
		);

	}

	function start3strike(num) {

		return start3strikeRule = setInterval(
		"new Notification('Retorno de 2min', { body: 'Retorno de 2min', icon: 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-refresh-3-icon.png' });console.log('Retorno de 2min');console.log('Notificação');document.getElementsByClassName('message-text-input')[0].focus();document.getElementsByClassName('message-text-input')[0].innerHTML ='Mais um momento, por gentileza';",
		5000
		);

	}

	function stop3strike(num) {
		clearInterval(start3strikeRule);
		console.log("Pausa no strike");
	}


	function stop2minchat() {
		return clearInterval(timeOutChat);
		console.log("Pausado");
	}

	function stop2mincall() {
		return clearInterval(timeOutCall);
		console.log("Pausado");
	}

	var readyStateCheckInterval = setInterval(async function() {
		await checkElement('#chatworkspaceui-0');
		//await checkElement('#contactContainer');
		console.log('%cPara de fuçar aqui e vai\ncarpir um quintal,\nlavar uma louça,\ntratar um backlog...', 'background: #222; color: #bada55');

	if (document.readyState === "complete") {
			
			// ----------------------------------------------------------
			console.log("There is no knowledge that is not power");
			console.log("Tenha idéias originais, se não forem originais, ao menos dê os devidos créditos");
			// ----------------------------------------------------------

			obsChat.observe(document.getElementById('chatWorkspace'), { 
			  attributes: true, 
			  attributeOldValue: true, 
			  attributeFilter: ['class'] 
			});

			obsCall.observe(document.getElementById('workspace'), { 
			  attributes: true, 
			  attributeOldValue: true, 
			  attributeFilter: ['class'] 
			});

			var chatWorkspace = await document.getElementById('chatworkspaceui-0').getElementsByClassName('summary-section')[0];

			//var chatWorkspace1 = await document.getElementById('chatworkspaceui-1').getElementsByClassName('summary-section')[0];

			var chatDiv = document.createElement("div");
			chatDiv.id = "inContactPatch-chat";
			chatWorkspace.appendChild(chatDiv);

			var callContainer = document.getElementById('contactContainer');

			var callDiv = document.createElement("div");
			callDiv.id = "inContactPatch-call";
			callContainer.appendChild(callDiv);

			var toDivChat = document.getElementById("inContactPatch-chat");
			var toDivCall = document.getElementById("inContactPatch-call");

			//Botão lembrete chat 2min
			var btnChat2min = document.createElement("button");
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
			var btnChat2minStop = document.createElement("button");
				btnChat2minStop.name = "chat2minstop";
				btnChat2minStop.setAttribute('id', 'chat2minstop');
				btnChat2minStop.setAttribute('class', 'hidden');
				btnChat2minStop.innerHTML  = "2min stop";
				btnChat2minStop.onclick = function() {
					btnChat2minStop.style.display = "none";
					btnChat2min.style.display = "block";
					console.log("Parar lembrete");
					stop2minchat();
				};
		
			//Botão parar strike no Chat
			var btnChatStrikeStop = document.createElement("button");
				btnChatStrikeStop.name = "chat2continuestop";
				btnChatStrikeStop.setAttribute('id', 'stopchat2continue');
				btnChatStrikeStop.setAttribute('class', 'patchBtn');
				btnChatStrikeStop.innerHTML  = "Stop Strike";
				btnChatStrikeStop.onclick = function() {
					btnChatStrikeStop.style.display = "none";
					btnChatStrike.style.display = "block";
					console.log("Parar strike");
					stop3strike('0');
				};

			//Botão strike no Chat
			var btnChatStrike = document.createElement("button");
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
			var btnCall2min = document.createElement("button");
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
			var btnCall2minStop = document.createElement("button");
				btnCall2minStop.name = "call2returnstop"
				btnCall2minStop.setAttribute('content', 'Stop-Reminder')
				btnCall2minStop.setAttribute('id', 'call2returnstop')
				btnCall2minStop.setAttribute('class', 'patchBtn')
				btnCall2minStop.innerHTML  = "Stop Reminder"
				btnCall2minStop.onclick = function() {
					btnCall2minStop.style.display = "none"
					btnCall2min.style.display = "block"
					console.log("Parar lembrete")
					stop2mincall();
				};

			btnChat2minStop.style.display = "none"
			btnCall2minStop.style.display = "none"
			btnChatStrikeStop.style.display = "none"


			toDivChat.appendChild(btnChat2min);
			toDivChat.appendChild(btnChat2minStop);
			toDivChat.appendChild(btnChatStrike);
			toDivChat.appendChild(btnChatStrikeStop);

			toDivCall.appendChild(btnCall2min);
			toDivCall.appendChild(btnCall2minStop);

			//document.getElementById("chat2min").onClicked.addListener(start3strike("call"));
			var robotSets = ['set1','set2','set3'];
			var selectedrobotSets = robotSets[Math.floor(Math.random()*robotSets.length)];
			var putBkg = document.getElementById('uimanager_container').getElementsByClassName('glance-workspace')[0];
			let r = Math.random().toString(36).substring(7);
			putBkg.style.backgroundImage =  "url(https://robohash.org/"+r+"?set="+selectedrobotSets+")";

			//var script = document.createElement('script');
			//script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
			//script.type = 'text/javascript';
			//document.body.appendChild(script);


			//var JS= document.createElement('script');
			//JS.text= "jQuery('.confirm-button').hover(function() {console.log('test');obsChat.disconnect();obsCall.disconnect();fuckAll.disconnect();});";
			//await document.body.appendChild(JS);

			/*fuckAll.observe(document.getElementsByClassName('.confirm-button')[0], { 
			  attributes: true, 
			  attributeOldValue: true, 
			  attributeFilter: ['class'] 
			});*/

			jQuery(document).on('DOMNodeInserted', '.confirm-button', function(){ $(this).after(killAll()); });

			clearInterval(readyStateCheckInterval);
	}
	
	}, 10);

});
