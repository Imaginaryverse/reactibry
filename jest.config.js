const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
};

module.exports = config;
