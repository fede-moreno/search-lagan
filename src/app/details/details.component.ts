import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubApiService } from '../shared/services/github-api.service';
import { AppRoutes } from '../shared/enums/app-routes.enum';
import { take } from 'rxjs/operators';
import { Repository } from '../shared/models/repository.model';
import { repositoryTransformer } from '../shared/functions/repository.transfomer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  isLoading = true;
  repository: Repository | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private githubService: GithubApiService) {
  }

  ngOnInit(): void {
    const repositoryOwner = this.route.snapshot.paramMap.get('login');
    const repositoryName = this.route.snapshot.paramMap.get('name');
    if (repositoryOwner && repositoryName) {
      this.githubService.getRepository(repositoryOwner, repositoryName).pipe(take(1)).subscribe(
        (response) => {
          console.log(response);
          this.repository = repositoryTransformer(response);
          console.log(this.repository);
        },
        ((error) => {
          console.log(error.error.message);
          this.goHome();
        }),
        () => this.isLoading = false
      );
    } else {
      this.goHome();
    }
  }

  /**
   * Navigates to home page.
   */
  goHome(): void {
    this.router.navigate([`/${AppRoutes.HOME}`]);
  }

}
