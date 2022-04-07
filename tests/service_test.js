Feature('Service');

Scenario('Service - Install and open app', ({ I }) => {
    I.seeAppIsNotInstalled('io.onesoil.scouting.staging');
    I.installApp('C:/Users/user/Documents/PROJECTS/JSAppiumTests/resources/app-staging.apk');
    I.seeAppIsInstalled('io.onesoil.scouting.staging');
    I.startActivity('io.onesoil.scouting.staging', 'io.onesoil.scouting.MainActivity');
    I.seeCurrentActivityIs('io.onesoil.scouting.MainActivity');
    I.openNotifications(); // Open notifications panel.
    let settings = I.grabSettings();
    console.log(settings)
}).tag('@install');
