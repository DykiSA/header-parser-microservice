/**
 * @param {Express} Express instance
 */
const myApp = function(app) {
  app.get('/api/whoami', function(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const language = req.headers['accept-language'];
    const userAgent = req.headers['user-agent'];
    res.json({
      ipaddress: ip,
      language: language,
      software: userAgent
    });
  });
}

module.exports = myApp;