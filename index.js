function createLib (execlib) {
  return execlib.lib.extend({
    service: {
      user: {
        getNotifications: true,
        processNewMessage: [{
          name: 'From',
          type: 'string'
        },{
          name: 'To Group',
          type: 'String'
        },{
          name: 'To Peer',
          type: 'String'
        },{
          name: 'Message',
          type: 'String'
        }],
        createNewGroupWithMembers: [{
          name: 'Username',
          type: 'string'
        },{
          name: 'Group name',
          type: 'string'
        },{
          name: 'Members',
          type: ['array', 'null']
        }],
        getAllConversations: [{
          name: 'Username',
          type: 'string'
        }],
        initiateChatConversationsWithUsers: [{
          name: 'Username',
          type: 'string'
        },{
          name: 'Usernames',
          type: ['array', 'null']
        }],
        getMessages: [{
          name: 'User ID',
          type: 'string'
        },{
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
          name: 'User ID',
          type: 'string'
        },{
          name: 'Conversation ID',
          type: 'string'
        },{
          name: 'Message ID',
          type: 'number'
        }],
        markMessageSeen: [{
          name: 'User ID',
          type: 'string'
        },{
          name: 'Conversation ID',
          type: 'string'
        },{
          name: 'Message ID',
          type: 'number'
        }]
      },
    },
    user: {
      service: {
        acknowledgeChatNotification: [{
          title: 'Realm Name',
          type: 'string'
        },{
          title: 'Notification Object',
          type: 'object',
          required: ['affected', 'p2p'],
          properties: {
            affected: { type: 'array' },
            mids: { type: 'array' },
            lastmessage: {
              type: 'object',
              required: ['from', 'message', 'created', 'seen']
            }
          }
        }]
      }
    }
  }, require('./webindex'));
}
module.exports = createLib;
