/**
 * Repository model with only the fields needed
 */
export interface Repository {
  name: string;
  owner: Owner;
  description?: string;
  starsCount: number;
}

/**
 * Repository Owner model with name and avatar
 */
export interface Owner {
  name: string;
  avatarUrl: string;
}

/**
 * Model for the api response from /search/repos
 */
export interface RepositoriesListApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: any[]; // TODO create model for RepositoryApiResponse
}
