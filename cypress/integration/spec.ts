import { RepositoryMock } from '../../src/app/shared/models/repository-mock.model';
import { selectors } from '../support/selectors';
import { initialSettings } from '../../src/app/settings/constants/initial-settings.const';

describe('Home Test', () => {

  it('checks flow from HomePage to Details', () => {
    cy.visit('/');
    cy.contains('Search Lagan');
    cy.intercept(`https://api.github.com/search/repositories?q=${RepositoryMock.name}**${initialSettings.minimumStars}`)
      .as('GETRepositories');
    cy.intercept(`https://api.github.com/repos/${RepositoryMock.owner.name}/${RepositoryMock.name}`)
      .as('GETRepository');
    cy.get(selectors.searchBoxInput).type(RepositoryMock.name);
    cy.wait('@GETRepositories');
    cy.get(selectors.resultContainer).find(selectors.resultRow).should('have.length', initialSettings.maxResults);
    cy.get(selectors.resultRowLabel).eq(2). // This position could change in time
    should('have.text', `${RepositoryMock.owner.name}/${RepositoryMock.name}`).click();
    cy.wait('@GETRepository');
    cy.get(selectors.detailsContentTitle).should('contain', RepositoryMock.name);
    cy.get(selectors.detailsContentSubtitle).should('contain', `by ${RepositoryMock.owner.name}`);
  });
});

