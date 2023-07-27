import { Router, Request, Response } from "express";
import passport from "passport";
import strategy from "../../../../infra/passport/strategy";
import expressSession from "express-session";
import { ENV } from "../../../../infra/env";

const routes = Router();

passport.use(strategy);

const session = expressSession({
  secret: ENV.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true },
});

export const getLogin = (_: Request, res: Response) => {
  res.sendFile("login.html", {
    root: "./frontend/src/",
  });
};

routes.get("/login", getLogin);

routes.use(session)

passport.serializeUser((user: any, cb: any) => {
  process.nextTick(() =>
    cb(null, {
      id: user.id,
      username: user.username,
      picture: user.picture,
    })
  );
});

passport.deserializeUser((user: any, cb) => {
  process.nextTick(() => cb(null, user));
});

routes.use(passport.authenticate("session"));

routes.post(
  "/login/password",
  passport.authenticate(strategy, {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

export default routes;
