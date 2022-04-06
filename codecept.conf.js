const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './tests/*_test.js',
  output: './.output',
  helpers: {
    Appium: {
      platform: 'Android',
      desiredCapabilities: {
        // appPackage: 'io.onesoil.scouting.staging',
        // appActivity: 'io.onesoil.scouting.MainActivity',
        deviceName: 'RedmiNote9',
        platformVersion: '11',
        reset: 'true', // by default
        unlockType: 'pin',
        unlockKey: '1111',
        autoGrantPermissions: 'true'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'JSAppiumTests'
}