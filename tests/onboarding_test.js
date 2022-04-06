Feature('Onboarding');

let logo = '//android.widget.ImageView[@content-desc="OneSoil logo"]';
let permission_geo_allow = '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]';
let main_map = '//android.widget.FrameLayout[@content-desc="Showing a Map created with Mapbox. Scroll by dragging two fingers. Zoom by pinching two fingers."]';

Scenario('Onboarding - All screens', ({ I }) => {
    I.startActivity('io.onesoil.scouting.staging', 'io.onesoil.scouting.MainActivity');
    I.seeCurrentActivityIs('io.onesoil.scouting.MainActivity');
    I.waitForInvisible(logo, 15); // locator by xpath
    I.see('Monitor your fields'); // locator by text
    I.tap('NEXT');
    I.waitForElement('Add notes', 5); // Wait 5 sec.
    I.tap('NEXT');
    I.waitForElement('Vegetation index updates');
    I.tap('Not now');
    I.waitForElement('Add your first field');
    I.tap('ADD A FIELD');
    I.waitForElement(permission_geo_allow, 3);
    I.tap('WHILE USING THE APP'); // Allow GEO
    I.waitForElement(main_map, 5);
});

Scenario('onboarding - skip', ({ I }) => {
});
