var log = require('./libs/log')(module);
var mongoose = require('./libs/mongoose').mongoose;
var UserModel = require('./libs/mongoose').UserModel;
var ClientModel = require('./libs/mongoose').ClientModel;
var AccessTokenModel = require('./libs/mongoose').AccessTokenModel;
var RefreshTokenModel = require('./libs/mongoose').RefreshTokenModel;

UserModel.remove({}, function(err) {
    var user = new UserModel({
        username: "user",
        password: "user",
        roles: ["user"]
    });
    var admin = new UserModel({
        username: "admin",
        password: "admin",
        roles: ["user", "admin"]
    });
    user.save(function(err, user) {
        if (err) return log.error(err);
        else log.info("New user - %s:%s", user.username, user.password);
    });
    admin.save(function(err, user) {
        if (err) return log.error(err);
        else log.info("New user - %s:%s", user.username, user.password);
    });
});

ClientModel.remove({}, function(err) {
    var client = new ClientModel({
        name: "Angular web site client",
        clientId: "angular_client",
        clientSecret: "zxcVFR4815162342"
    });
    client.save(function(err, client) {
        if (err) return log.error(err);
        else log.info("New client - %s:%s", client.clientId, client.clientSecret);
    });
});
AccessTokenModel.remove({}, function(err) {
    if (err) return log.error(err);
});
RefreshTokenModel.remove({}, function(err) {
    if (err) return log.error(err);
});

setTimeout(function() {
    mongoose.disconnect();
}, 3000);