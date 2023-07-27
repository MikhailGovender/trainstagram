const serializeUser = (user: any, cb: any) => {
  process.nextTick(() =>
    cb(null, {
      username: user.username,
    })
  );
};

export default serializeUser;
