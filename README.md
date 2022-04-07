# Setup
1. type `appium-doctor` - everithing is OK.
2. type `appium` - server is running.
3. connect your android device via ABD.
4. put vour `deviceName` and `platformVersion` into desiredCapabilities{} from `codecept.conf.js`
5. put your .apk file path into `onboarding_page.js` -> `app_location` link

# Run
type `npx codeceptjs run --steps`
