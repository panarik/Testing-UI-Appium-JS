const { I } = inject();

module.exports = {

  fields: {
    logo: '//android.widget.ImageView[@content-desc="OneSoil logo"]',
    permission_geo_allow: '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]',
    main_map: '//android.widget.FrameLayout[@content-desc="Showing a Map created with Mapbox. Scroll by dragging two fingers. Zoom by pinching two fingers."]',
    main_search: '//android.widget.EditText[@text="Search for a field or location"]'
  },

  runOnboarding() {
    I.startActivity('io.onesoil.scouting.staging', 'io.onesoil.scouting.MainActivity');
    I.seeCurrentActivityIs('io.onesoil.scouting.MainActivity');
    I.waitForInvisible(this.fields.logo, 15); // locator by xpath
    I.see('Monitor your fields'); // locator by text
    I.tap('NEXT');
    I.waitForElement('Add notes', 5); // Wait 5 sec.
    I.tap('NEXT');
    I.waitForElement('Vegetation index updates');
    I.tap('Not now');
    I.waitForElement('Add your first field');
    I.tap('ADD A FIELD');
    I.waitForElement(this.fields.permission_geo_allow, 3);
    I.tap('WHILE USING THE APP'); // Allow GEO
    I.waitForElement(this.fields.main_map, 5);
    I.tap('Skip tutorial');
    I.waitForElement(this.fields.main_search, 3);
  }

}