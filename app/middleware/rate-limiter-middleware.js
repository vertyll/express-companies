const { RateLimiterMemory } = require("rate-limiter-flexible");

const rateLimiter = new RateLimiterMemory({
  points: 10, // ile req
  duration: 1, // przez ile sek
});

const rateLimiterMiddleware = (req, res, next) => {
  rateLimiter
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send("Too many requests");
    });
};

module.exports = rateLimiterMiddleware;
