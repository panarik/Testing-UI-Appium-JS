Feature('1-service');

Scenario('1-Service - Install and open app', ({ I,  onboarding_page}) => {
    onboarding_page.installApp();
    I.startActivity('io.onesoil.scouting.staging', 'io.onesoil.scouting.MainActivity');
    I.seeCurrentActivityIs('io.onesoil.scouting.MainActivity');
    let settings = I.grabSettings();
    console.log(settings)
}).tag('@install');
