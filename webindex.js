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
      },{
        name: 'Options',
        type: 'object'
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
      /*
      markMessageRcvd: [{
        name: 'Conversation ID',
        type: 'string'
      },{
        name: 'Message ID',
        type: 'number'
      }],
      */
      markMessageSeen: [{
        name: 'Conversation ID',
        type: 'string'
      },{
        name: 'Message ID',
        type: 'number'
      }],
      editChatMessage: [{
        name: 'Conversation ID',
        type: 'string'
      },{
        name: 'Message ID',
        type: 'number'
      },{
        name: 'Edited Message',
        type: 'string'
      },{
        name: 'Options',
        type: 'object'
      }],
      reportChatActivity: [{
        name: 'Conversation ID',
        type: 'string'
      }],
      createNewChatGroupWithMembers: [{
        name: 'Group Name',
        type: ['string', 'object']
      },{
        name: 'Member IDs',
        type: 'array'
      }]
    }
  }
};
