/**
 * Created by mankind on 30/01/15.
 */
// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1054713217878922', // your App ID
        'clientSecret'  : 'e1eb2a151b27880193ebdccc6fd346ee', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'cZhkP4qr0i8aHTnKCmZOslkGn',
        'consumerSecret'    : 's2OVOadmckJe1zo2UkLGHa90Qz9QT0KlQxKTGX0bp8wQuv0KT1',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
