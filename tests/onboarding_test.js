Feature('Onboarding');


Scenario('Onboarding - All screens', ({ I, onboarding_page }) => {
    onboarding_page.runOnboarding();
    I.tap('Skip tutorial');
});

Scenario('onboarding - skip', ({ I }) => {
});
