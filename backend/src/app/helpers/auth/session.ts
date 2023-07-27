import expressSession from "express-session";
import { ENV } from "../../../infrastructure/env";

const session = expressSession({
  secret: ENV.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
});

export default session;
