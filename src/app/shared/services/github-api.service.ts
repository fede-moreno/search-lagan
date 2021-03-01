import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { repositoriesTransformer } from '../functions/repository.transfomer';
import { Repository } from '../models/repository.model';

@Injectable()
export class GithubApiService {
 readonly apiGithubUrl = 'https://api.github.com';
 readonly githubHeaders: HttpHeaders = new HttpHeaders({Accept: 'application/vnd.github.v3+json'});

  constructor(private httpClient: HttpClient) {}

  // https://docs.github.com/en/github/searching-for-information-on-github/searching-for-repositories
  getAllRepositories(search: string, minimumStars: number): Observable<Repository[] | null> {
    // TODO create typed model for response
    return this.httpClient.get(`${this.apiGithubUrl}/search/repositories?q=${search}+in:name+stars:>=${minimumStars}`,
      {headers: this.githubHeaders})
      .pipe(map((response: any) => repositoriesTransformer(response)));
  }

  getRepository(repositoryOwner: string, repositoryName: string): Observable<Repository> {
    return this.httpClient.get<Repository>(`${this.apiGithubUrl}/repos/${repositoryOwner}/${repositoryName}`,
      {headers: this.githubHeaders}) ;
  }
}
