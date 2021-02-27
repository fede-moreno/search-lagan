# search-lagan - Technical challenge

1. Asearch page served at the root with a typeahead functionality that autocompletes Github’s
repositories, just as npmjs.com does using GitHub’s REST API (as a service). This page will
have a customizable background colour and a search filter that can be configured under the
/settings page described in (4). Each result row should include (in the same fashion as the
npmjs.com website):
    1. Name of the project.
    1. Description of the project.
    1. Number of stars the project has.
1. A details page served under /project/<name_of_the_project> for a specific repository that
has been clicked in the search page’s results (1). The details to be displayed under this page
are:
    1. Name of the project.
    1. Name of the owner.
    1. Description of the project.
    1. The owner’s avatar image.
    1. Number of stars.
1. A settings singleton injectable that retains the following options to configure:
    1. The background color of the search page (1).
    1. The option to filter out repositories that have less than a specified start count.
1. A lazy loaded settings page served under /settings where you can configure the general
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
