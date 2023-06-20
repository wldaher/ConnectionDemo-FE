// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// The environment can be determined by changing the configuration parameter when running ng serve.
// When ng serve is run with no configuration, development is used by default
// Examples:
// ng build --configuration local
// ng build --configuration development
// ng build --configuration production

export const environment = {
    production: false,
    apiUrl: 'https://localhost:7258' // This value is normally pulled from the Properties/launchSettings.json file's applicationUrl property.
    // For demo purposes, this file should not normally be used, therefore the apiUrl value is incorrect.
  };