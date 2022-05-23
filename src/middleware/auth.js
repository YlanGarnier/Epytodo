const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        jwt.verify(authHeader, process.env.SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({msg:"No token, authorization denied"})
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
