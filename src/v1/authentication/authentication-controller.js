import passport from 'passport';

class AuthenticationController {
  constructor(authPassport) {
    this.passport = authPassport;
  }

  facebook = passport.authenticate('facebook', { session: false }).bind(this);

  async facebookCallback(request, response, next) {
    this.passport.authenticate(
      'facebook',
      { session: false },
      async (error, user) => {
        if (!error && user) {
          response.render('login', { user });
          return;
        }
        next(error);
      }
    )(request, response);
  }
}

export default new AuthenticationController(passport);
