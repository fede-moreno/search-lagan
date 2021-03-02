
# SearchLagan - Technical challenge

1. A **search page** served at the root with a typeahead functionality that autocompletes Github’s
repositories, just as npmjs.com does using GitHub’s REST API (as a service). This page will
have a customizable background colour and a search filter that can be configured under the
/settings page described in (4). Each result row should include (in the same fashion as the
npmjs.com website):
    1. Name of the project.
    1. Description of the project.
    1. Number of stars the project has.

1. A **details page** served under `/project/<name_of_the_project>` for a specific repository that
has been clicked in the search page’s results (1). The details to be displayed under this page
are:
    1. Name of the project.
    1. Name of the owner.
    1. Description of the project.
    1. The owner’s avatar image.
    1. Number of stars.
1. A **settings singleton injectable** that retains the following options to configure:
    1. The background color of the search page (1).
    1. The option to filter out repositories that have less than a specified start count.
1. A lazy loaded **settings page** served under /settings where you can configure the general
settings for the application specified in (3). This is only the graphical interface to alter the
application settings’ values.

## Criteria:
- Some mockups will be included. You don’t have to overcommit to the look. Just get a similar
distribution of the elements and it will be fine.
- Exploiting Typescript classes (models) and interfaces helps developers know what they are
dealing with, makes maintenance and implementation much easier.
- Leverage of the ReactiveX’s (RxJS) features will be appreciated.
- We encourage documenting your code using the JSDoc style docstrings.js.

## Plus (optional):
- Persist settings changes using cookies.
- A very minimal clean UI with Boostrap would seduce us.
- Writing 1 unit test.
- (very optional) Running CompoDoc and providing the auto-generated documentation.

## Resources:
- Github’s REST API: https://docs.github.com/en/rest
- JSDoc: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
- Bootstrap: https://getbootstrap.com/

# For Development 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
