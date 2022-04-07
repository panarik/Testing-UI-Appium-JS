Feature('MainMap');

Scenario('MainMap - Search first field', async ({ I, onboarding_page, main_page }) => {
    
    

    // Prestep.
    onboarding_page.runOnboarding();

    // Step 1: Search London.
    main_page.search('London');

    // Step 2.1: Zoom the map for search first field.
    main_page.zoom_in(13);

    I.performSwipe({ x: 600, y: 500 }, { x: 200, y: 500 }); //custom swipe left.
    I.performSwipe({ x: 500, y: 400 }, { x: 500, y: 800 }); //custom swipe down.

    // Step 2.2: Tap on first field.
    main_page.tapOnCenterWithParam(0, 0);

});