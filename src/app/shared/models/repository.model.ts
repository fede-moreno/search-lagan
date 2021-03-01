export interface Repository {
  name: string;
  owner: Owner;
  description?: string;
  starsCount: number;
}

export interface Owner {
  name: string;
  avatarUrl: string;
}

export interface RepositoriesListApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: any[]; // TODO create model for RepositoryApiResponse
}
