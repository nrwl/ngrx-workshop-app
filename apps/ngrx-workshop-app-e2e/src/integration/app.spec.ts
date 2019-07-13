import { getGreeting } from '../support/app.po';

describe('ngrx-workshop-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ngrx-workshop-app!');
  });
});
