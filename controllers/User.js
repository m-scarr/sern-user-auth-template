var bcrypt = require("bcrypt");

module.exports = {
    unauthorized: {
        get: {
            isLoggedIn: (db, req, res) => {
                if (req.isAuthenticated()) {
                    res.json({ success: true, user: { ...req.user.dataValues } })
                } else {
                    res.json({ success: false })
                }
            }
        },
        post: {
            register: (db, req, res) => {
                var salt = bcrypt.genSaltSync(10);
                var hashedPassword = bcrypt.hashSync(req.body.password, salt);
                var user = {
                    logInName: req.body.logInName,
                    password: hashedPassword,
                    salt: salt,
                };
                db.User.create(user)
                    .then((result) => {
                        res.json(result);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.json(false);
                    });
            },
            logIn: (db, req, res) => {
                res.json({
                    success: true,
                    user: { ...req.user.dataValues },
                });
            }
        },
        delete: {
        }
    },
    authorized: {
        get: {
            info: (db, req, res) => { res.json(req.user.dataValues) },
            logOut: (db, req, res) => {
                req.logout();
                res.json(true)
            },
        },
        post: {
        },
        delete: {
        }
    }
}