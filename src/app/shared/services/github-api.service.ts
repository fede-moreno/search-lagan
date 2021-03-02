import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { repositoriesTransformer } from '../functions/repository.transfomer';
import { RepositoriesListApiResponse, Repository } from '../models/repository.model';

@Injectable()
export class GithubApiService {
 readonly apiGithubUrl = 'https://api.github.com';
 readonly githubHeaders: HttpHeaders = new HttpHeaders({Accept: 'application/vnd.github.v3+json'});

  constructor(private httpClient: HttpClient) {}

  /**
   *  Http get response for the repos that match.
   *  @param search Search value coming from the search box input.
   *  @param minimumStars Minimum quantity of stars that is currently configured under Settings.
   *  @returns Observable of the repositories that match the query.
   * More info: https://docs.github.com/en/github/searching-for-information-on-github/searching-for-repositories
   */
  getAllRepositories(search: string, minimumStars: number): Observable<Repository[]> {
    return this.httpClient.get<RepositoriesListApiResponse>(`${this.apiGithubUrl}/search/repositories?q=${search}+in:name+stars:>=${minimumStars}`,
      {headers: this.githubHeaders})
      .pipe(map((response: RepositoriesListApiResponse) => repositoriesTransformer(response)));
  }

  /**
   * Http get response for the repository details.
   * @param repositoryOwner Login name of the repository owner.
   * @param repositoryName Project/Repository name.
   * @returns Observable of the looked up repository.
   */
  getRepository(repositoryOwner: string, repositoryName: string): Observable<Repository> {
    return this.httpClient.get<Repository>(`${this.apiGithubUrl}/repos/${repositoryOwner}/${repositoryName}`,
      {headers: this.githubHeaders}) ;
  }
}
