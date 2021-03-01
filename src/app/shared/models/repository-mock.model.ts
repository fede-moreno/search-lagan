import { Repository } from './repository.model';

export const RepositoryMock: Repository = {
  name: 'Hello-World',
  owner: {
    name: 'octocat',
    avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4'
  },
  description: 'My first repository on GitHub!',
  starsCount: 1620
};
