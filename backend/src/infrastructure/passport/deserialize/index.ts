const deserializeUser = (user: any, cb: any) => {
  process.nextTick(() => cb(null, user));
};

export default deserializeUser;
