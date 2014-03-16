/*
 * GET users listing.
 */

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

exports.getUserInfo = function(req, res) {
    res.json({
        user_id: req.user.userId,
        username: req.user.username,
        scope: req.authInfo.scope
    })
};