Feature('service');

Scenario('service - app installed', ({ I }) => {
    I.seeAppIsNotInstalled("io.onesoil.scouting.staging");
    I.installApp('C:/Users/user/Documents/PROJECTS/JSAppiumTests/resources/app-staging.apk');
    I.seeAppIsInstalled("io.onesoil.scouting.staging");
});
