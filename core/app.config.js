module.exports.PORT = 8008;

module.exports.CORS_OPTIONS = {
  origin: ["*", /localhost/],
  methods: "POST,GET,PUT,DELETE,PATCH,OPTIONS",
  exposedHeaders: "Content-Range,X-Content-Range",
  credentials: true,
  allowedHeaders:
    "Cache-Control, Origin, Authorization, Content-Type, X-Requested-With, auth-token",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  maxAge: 1400,
};

module.exports.COLLECTIONS = {
  users: "users",
};
