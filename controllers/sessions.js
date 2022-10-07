const User = require("../models/user")
const SessionsController = {
    New: (req, res) => {
        res.render("sessions/new", {signedIn: req.session.signedIn})
    },

    Create: (req, res) => {
        console.log("######### Trying to log in #########");
        const email = req.body.email;
        const password = req.body.password;

        User.findOne({ email: email }).then((user) => {
        if (!user) {
            res.redirect("/sessions/new");
        } else if (user.password != password) {
            res.redirect("/sessions/new");
        } else {
            req.session.user = user;
            res.redirect("/");
        }
        });
    }
}

module.exports = SessionsController