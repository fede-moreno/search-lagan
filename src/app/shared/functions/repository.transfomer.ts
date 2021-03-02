import { RepositoriesListApiResponse, Repository } from '../models/repository.model';

/**
 * Mapper for GetAllRepositories api response coming to our list of Repositories models.
 * If additional filtering or operations are needed (in the front-end) this is the place to do so.
 * @param response GetAllRepositories Api response JSON
 */
export function repositoriesTransformer(response: RepositoriesListApiResponse): Repository[] {
  const transformedResults: any[] = [];
  if (response && response.items && response.items.length) {
    response.items.forEach((r: any) => {
        transformedResults.push(repositoryTransformer(r));
    });
  }
  return transformedResults;
}

/**
 * Mapper for GetRepository api response to our Repository model
 * @param response GetRepository Api response JSON
 */
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
