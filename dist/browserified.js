(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
ALLEX.execSuite.libRegistry.register('social_chatmethoddescriptorslib', require('./webindex'));

},{"./webindex":2}],2:[function(require,module,exports){
module.exports = {
  user: {
    user: {
      sendChatMessage: [{
        name: 'To Group',
        type: 'string'
      },{
        name: 'To',
        type: 'string'
      },{
        name: 'Msg',
        type: 'string'
      }],
      getChatConversations: true,
      initiateChatConversationsWithUsers: [{
        name: 'User IDs',
        type: ['array', 'null']
      }],
      getChatMessages: [{
        name: 'Conversation ID',
        type: 'string'
      },{
        name: 'Oldest Message ID',
        type: ['number', 'null']
      },{
        name: 'How Many',
        type: ['number', 'null']
      }],
      markMessageRcvd: [{
        name: 'Conversation ID',
        type: 'string'
      },{
        name: 'Message ID',
        type: 'number'
      }],
      markMessageSeen: [{
        name: 'Conversation ID',
        type: 'string'
      },{
        name: 'Message ID',
        type: 'number'
      }]
    },
  }
};

},{}]},{},[1]);
