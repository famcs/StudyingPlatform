/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var index = require('./routes/index');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var passport = require('passport');
var config = require('./libs/config');
var log = require('./libs/log')(module);
var oauth2 = require('./libs/oauth2');

//var db = require('./lib/mongoose');

require('./libs/auth');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(passport.initialize());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.post('/oauth2/token', oauth2.token);

app.get('/', index.index);
app.get('/api/userInfo',
    passport.authenticate('bearer', {
        session: false
    }),
    user.getUserInfo
);
/*
app.get('/home', user.check, user.home);
app.get('/home/:user', user.check, user.home);
*/
app.listen(config.get('port'), function() {
    log.info('Express server listening on port ' + config.get('port'));
});