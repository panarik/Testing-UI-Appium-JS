const { I } = inject();

module.exports = {

    fields: {
        app_package: 'io.onesoil.scouting.staging',
        app_activity: 'io.onesoil.scouting.MainActivity',
        logo: '//android.widget.ImageView[@content-desc="OneSoil logo"]',
        map: '//android.widget.FrameLayout[@content-desc="Showing a Map created with Mapbox. Scroll by dragging two fingers. Zoom by pinching two fingers."]',
        search_bottomsheet_field: '//android.widget.EditText[@text="Search for a field or location"]',
        search_bottomsheet_anchor: '//android.widget.TextView[contains(@text, "coordinates")]',
        search_bottomsheet_first_result: '//android.widget.SeekBar[@content-desc="Bottom Sheet handle, Drag up or down to extend or minimize the Bottom Sheet"]/../android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]', //nearest anchor without text
    },

    open_map() {
        I.startActivity(this.fields.app_package, this.fields.app_activity);
        I.waitForInvisible(this.fields.logo, 15);
        I.waitForElement(this.fields.search_bottomsheet_field);
    },
    search(location) {
        I.tap(this.fields.search_bottomsheet_field);
        I.waitForElement(this.fields.search_bottomsheet_anchor);
        I.fillField(this.fields.search_bottomsheet_field, location);
        I.waitForElement(this.fields.search_bottomsheet_first_result, 3);
        I.tap(this.fields.search_bottomsheet_first_result);
    },

    zoom_in(count) {
        for (let i = 0; i < count; i++) {
            I.tap('//android.view.ViewGroup[@resource-id="zoom-in-button"]');
        }
    },

    async tapOnCenterWithParam(x, y) {
        const value = await I.grabElementBoundingRect(this.fields.map);
        const sourceX = (parseInt(value['x']) + parseInt(value['width']) / 2) + x;
        const sourceY = (parseInt(value['y']) + parseInt(value['height']) / 2) + y;
        I.touchPerform([{
            action: 'tap',
            options: {
                x: sourceX,
                y: sourceY,
                count: 1
            }
        }]);
    }

}