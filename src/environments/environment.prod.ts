// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// from angular.json, line 51
// "fileReplacements": [
//   {
//     "replace": "src/environments/environment.ts",
//     "with": "src/environments/environment.prod.ts"
//   }
// ],

// The environment can be determined by changing the configuration parameter when running ng serve.
// When ng serve is run with no configuration, development is used by default
// Examples:
// ng build --configuration local
// ng build --configuration development
// ng build --configuration production

export const environment = {
    production: true,
    apiUrl: 'https://localhost:7256' // This value should match the production environment's url.  It may not be found in a configuration file for the server code.
  };