const jwt = require("jsonwebtoken");

module.exports = async function isAuthenticated(req, res, next) {
    const token = req.headers["authorization"].split(" ")[1];

    // " Bearer <toekn>.split(" ")[1]"
    // ["Bearer", "<toeken>"] 

    jwt.verify(token, "secret", (err, user) => {
        if (err) {
            return res.json({ message: err });
        } else {
            req.user = user;
            next();
        }
    });

};