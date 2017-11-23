

var unseenCount = 0;

function newMessageHandler(message) {
  // increment the number of unseen messages
  unseenCount = unseenCount + 1;

  // append the new message to the chat tab
  var chatTab = getChatTab();
  chatTab.appendMessage(message);

  // If the messages page is open, append the message there
  var messagesPage = getMessagesPage();
  if(messagesPage.isOpen) {
    messagesPage.appendMessage(message);
  }

  // if the chat tab or the messages page has focus,
  // then decrement the unseen count
  if(chatTab.hasFocus || messagesPage.hasFocus) {
    unseenCount = unseenCount - 1;
  }
}
