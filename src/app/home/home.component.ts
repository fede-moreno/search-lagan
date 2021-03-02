import { Component, OnInit } from '@angular/core';
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
        if (this.isSearchEmpty) {
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

  /**
   * Check if the search is an empty string
   *  @returns boolean
   */
  get isSearchEmpty(): boolean {
    return !this.searchFormControl.value.trim().length;
  }

  /**
   * Clears the results(repositories) and theinput search box in the template while resetting the formControl
   * without emitting the event, so it doesn't trigger the valueChanges subscription.
   */
  clearSearch(): void {
    this.repositories = [];
    this.searchFormControl.setValue('', {emitEvent: false});
  }

  /**
   * Navigates to Settings
   */
  goToSettings(): void {
    this.router.navigate([`/${AppRoutes.SETTINGS}`]);
  }
  /**
   * Navigates to the details page for the repository
   * @param repository The clicked repository to open its details
   */
  goToDetails(repository: Repository): void {
    this.router.navigate([`/${AppRoutes.DETAILS}/${repository.owner.name}/${repository.name}`]);
  }
}
