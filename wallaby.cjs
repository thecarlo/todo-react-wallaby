module.exports = () => ({
  autoDetect: true,
  testFramework: {
    configFile: './vite.config.ts',
  },

  tests: ['src/**/*.test.+(ts|tsx)'],
});
