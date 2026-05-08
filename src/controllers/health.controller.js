const healthService = require('../services/health.service');

const healthCheck = (req, res) => {
  const data = healthService.getHealthStatus();
  res.json({ code: 200, message: 'success', data });
};

module.exports = {
  healthCheck,
};
