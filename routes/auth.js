const passport = require('passport');
const express = require('express');
const router = express.Router();


router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get(
    '/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/surveys');
    }
);

router.get('/api/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
    res.send(req.user);
});

module.exports = router;