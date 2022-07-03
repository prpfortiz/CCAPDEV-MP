exports.isPrivate = (req, res, next) => {
    if (req.session._id) {
        return next()
    }
    else {
        res.redirect('/');
    }
};

exports.isPublic = (req, res, next) => {
    if (req.session._id) {
        res.redirect('/');
    }
    else {
        return next();
    }
}