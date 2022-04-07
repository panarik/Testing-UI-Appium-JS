Feature('MainMap');

Scenario('MainMap - Search first field', async ({ I, onboarding_page }) => {
    onboarding_page.runOnboarding();

    //Search London.
    I.tap('//android.widget.EditText[@text="Search for a field or location"]');
    I.waitForElement('//android.widget.TextView[contains(@text, "coordinates")]');
    I.fillField('//android.widget.EditText[@text="Search for a field or location"]', 'London');
    I.waitForElement('//android.widget.SeekBar[@content-desc="Bottom Sheet handle, Drag up or down to extend or minimize the Bottom Sheet"]/../android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]');
    I.tap('//android.widget.SeekBar[@content-desc="Bottom Sheet handle, Drag up or down to extend or minimize the Bottom Sheet"]/../android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]');

    I.wait(5) // Wait 5 sec.

    // Zoom the map. х10
    for (let i = 0; i < 12; i++) {
        I.tap('//android.view.ViewGroup[@resource-id="zoom-in-button"]');
    }

    I.wait(5) // Wait 5 sec.

    //tap to center of map
    const value = await I.grabElementBoundingRect('//android.widget.FrameLayout[@content-desc="Showing a Map created with Mapbox. Scroll by dragging two fingers. Zoom by pinching two fingers."]');
    const sourceX = (parseInt(value['x']) + parseInt(value['width']) / 2) + 100;
    const sourceY = (parseInt(value['y']) + parseInt(value['height']) / 2) - 100;
    I.touchPerform([{
        action: 'tap',
        options: {
            x: sourceX,
            y: sourceY,
            count: 1
        }
    }]);

    pause();

    I.performSwipe({ x: 300, y: 1300 }, { x: 300, y: 300 });
});