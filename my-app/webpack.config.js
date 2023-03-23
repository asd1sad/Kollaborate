const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv({
      path: './.env.production',
      safe: true,
      systemvars: true,
      silent: true,
      defaults: false
    })
  ]
};
