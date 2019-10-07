'use strict';

function sendPasteToContentScript(toBePasted) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {data: toBePasted});
    });
}


function onClickHandler(info, tab) {
    var pasteReturn = "Mais um momento, por gentileza.";
    var pasteStrike = "Você tem uma sessão ativa no Chat do Service Desk Américas.<h2><strong><b>Deseja continuar?</b></strong></h2>";
    var endChatStrike = "Sua sessão será encerrada porque não recebemos atividade nos últimos 6 minutos. Entre em contato novamente pelo chat ou pelo Portal do Service Desk Américas.";
    var endChat = "Service Desk agradece seu contato. Um ótimo dia pela frente.";
    var plsWait = "Um momento enquanto verifico e qualquer dúvida pode me chamar"
    var tksWait = "Obrigado por agurdar"
    switch(info.menuItemId) {
      case 'chat2min':
        sendPasteToContentScript(pasteReturn)
      break;
      case 'chatStrike':
        sendPasteToContentScript(pasteStrike)
      break;
      case 'chatEndStrike':
        sendPasteToContentScript(endChatStrike)
      break;
      case 'chatEnd':
        sendPasteToContentScript(endChat)
      break;
      default:
        {}
        break;
    }

}

// Registra handler no click do contextMenu
chrome.contextMenus.onClicked.addListener(onClickHandler);

// Cria menus
chrome.runtime.onInstalled.addListener(function(details) {
    chrome.contextMenus.create(
        {
            'title': 'Retorno 2min',
            'id': 'chat2min',
            'contexts': ['editable']
        });

    chrome.contextMenus.create(
        {
            'title': 'Strike',
            'id': 'chatStrike',
            'contexts': ['editable']
        });

    chrome.contextMenus.create(
        {
            'title': 'Finaliza Strike',
            'id': 'chatEndStrike',
            'contexts': ['editable']
        });

    chrome.contextMenus.create(
        {
            'title': 'Finaliza Chat',
            'id': 'chatEnd',
            'contexts': ['editable']
        });
});