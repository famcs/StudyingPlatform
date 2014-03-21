/*
 * GET users listing.
 */

var log = require('./../libs/log')(module);
var UserModel = require('./../libs/mongoose').UserModel;

exports.home = function(req, res) {
    console.log(req.params);
    res.render('home', {
        session: req.session
    });
};

exports.logout = function(req, res) {
    delete req.session.user_id;
    res.redirect('/');
};

exports.check = function(req, res, next) {
    if (!req.session.user_id && !req.body.login) {
        console.log('user not defined')
        res.render('login');
    } else {
        next();
    }
};

exports.login = function(req, res) {
    var user = UserModel.findOne(req.body, function(err, user) {
        if (user) {
            /*req.session.user_id = login;
            req.session.user_name = user.name;*/
            res.send('success');
        } else {
            res.send('fail');
        }
    });
};

exports.signUp = function (req, res) {
    var user = new UserModel(req.body.user);

    user.roles = ['admin'];

    if (UserModel.findOne({username: user.username})) {
        log.error("User " + user.username + "  already has an account");
    }

    user.save(function (err, user) {
        if (err) {
            log.error("User " + user.username + " was not registered beacuse of error: " + err);
            res.send(401);
        }
        log.info("User " + user.username + " was successfully registered");
        res.send(200);

    });
}

exports.getUserInfo = function(req, res) {
    res.json({
        user_id: req.user.userId,
        username: req.user.username,
        scope: req.authInfo.scope
    })
};