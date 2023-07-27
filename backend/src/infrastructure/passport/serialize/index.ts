const serializeUser = (user: any, cb: any) => {
  process.nextTick(() =>
    cb(null, {
      id: user.id,
      username: user.username,
      picture: user.picture,
    })
  );
};

export default serializeUser;
