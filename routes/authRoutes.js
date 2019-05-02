const passport = require('passport');

module.exports = (app) => {
  // LOCAL
  app.post('/auth',
    passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/' }),
    function(req, res) {
      console.log('hit me babay one more toime');
      res.redirect(307, '/dashboard');
    }
  );

  // GOOGLE
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  // FACEBOOK
  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['profile', 'email']
    })
  );

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
