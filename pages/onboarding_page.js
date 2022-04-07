const { I } = inject();

module.exports = {

  fields: {
    app_name: 'Next Scouting',
    app_package: 'io.onesoil.scouting.staging',
    app_activity: 'io.onesoil.scouting.MainActivity',
    app_location: 'C:/Users/user/Documents/PROJECTS/JSAppiumTests/resources/app-staging.apk',
    logo: '//android.widget.ImageView[@content-desc="OneSoil logo"]',
    permission_geo_allow: '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]',
    main_map: '//android.widget.FrameLayout[@content-desc="Showing a Map created with Mapbox. Scroll by dragging two fingers. Zoom by pinching two fingers."]',
    main_search: '//android.widget.EditText[@text="Search for a field or location"]'
  },

  runOnboarding() {

    //ToDo: should use fullReset: 'true'
    I.startActivity(this.fields.app_package, this.fields.app_activity);
    I.seeCurrentActivityIs(this.fields.app_activity);
    I.waitForElement(this.fields.logo);
    I.waitForInvisible(this.fields.logo, 15);
    I.see('Monitor your fields');
    I.tap('NEXT');
    I.waitForElement('Add notes', 5);
    I.tap('NEXT');
    I.waitForElement('Vegetation index updates');
    I.tap('Not now');
    I.waitForElement('Add your first field', 3);
    I.tap('ADD A FIELD');
    I.waitForElement(this.fields.permission_geo_allow, 3);
    I.tap('WHILE USING THE APP'); // Allow GEO
    I.waitForElement(this.fields.main_map, 5);
    I.tap('Skip tutorial');
    I.waitForElement(this.fields.main_search, 3);
  },

  installApp() {
    I.seeAppIsNotInstalled('io.onesoil.scouting.staging');
    I.installApp('C:/Users/user/Documents/PROJECTS/JSAppiumTests/resources/app-staging.apk');
    I.seeAppIsInstalled('io.onesoil.scouting.staging');
  }

}