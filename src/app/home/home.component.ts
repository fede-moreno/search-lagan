import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../shared/enums/app-routes.enum';
import { SettingsStateService } from '../settings/services/settings-state.service';
import { GithubApiService } from '../shared/services/github-api.service';
import { FormControl } from '@angular/forms';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Repository } from '../shared/models/repository.model';
import { of } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundColor = '';
  searchFormControl: FormControl = new FormControl('');
  repositories: Repository[] = [];
  isLoading = false;

  constructor(private router: Router,
              private settingsStateService: SettingsStateService,
              private githubService: GithubApiService) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.settingsStateService.state.backgroundColor;
    this.searchFormControl.valueChanges.pipe(
      debounceTime(500),
      mergeMap((searchValue) => {
        this.repositories = [];
        if (this.isSearchEmpty(searchValue)) {
          return of(null);
        }
        this.isLoading = true;
        return this.githubService.getAllRepositories(searchValue, this.settingsStateService.state.minimumStars);
      }), untilDestroyed(this))
      .subscribe((response) => {
        if (response) {
          this.isLoading = false;
          const maxResults: number = this.settingsStateService.state.maxResults;
          this.repositories = response.length > maxResults ? response.slice(0, maxResults) : response;
        }
      });
  }

  clearSearch(): void {
    this.repositories = [];
    this.searchFormControl.setValue('', {emitEvent: false});
  }

  goToSettings(): void {
    this.router.navigate([`/${AppRoutes.SETTINGS}`]);
  }

  goToDetails(repository: Repository): void {
    this.router.navigate([`/${AppRoutes.DETAILS}/${repository.owner.name}/${repository.name}`]);
  }

  isSearchEmpty(searchValue: string): boolean {
    return !searchValue.trim().length;
}
}
