import passport from 'passport';
import omit from 'lodash.omit';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { facebookAuth, host } from '../../../config';

const configStrategy = {
  clientID: facebookAuth.appId,
  clientSecret: facebookAuth.appSecret,
  callbackURL: `${host}/v1/authentication/facebook/callback`,
  profileFields: ['about', 'id', 'gender', 'displayName', 'link', 'photos', 'email', 'birthday']
};

const callbackStrategy = async (accessToken, refreshToken, profile, done) => {
  try {
    return done(null, omit(profile, ['_raw', '_json']));
  } catch (error) {
    return done(error);
  }
};

const facebookStrategy = new FacebookStrategy(configStrategy, callbackStrategy);

passport.use(facebookStrategy);
