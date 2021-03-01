import { RepositoriesListApiResponse, Repository } from '../models/repository.model';

export function repositoriesTransformer(response: RepositoriesListApiResponse): Repository[] {
  const transformedResults: any[] = [];
  if (response && response.items && response.items.length) {
    response.items.forEach((r: any) => {
        transformedResults.push(repositoryTransformer(r));
    });
  }
  return transformedResults;
}

export function repositoryTransformer(response: any): Repository {
  return {
    name: response.name,
    owner: {
      avatarUrl: response.owner.avatar_url,
      name: response.owner.login
    },
    description: response.description,
    starsCount: response.stargazers_count
  };
}
