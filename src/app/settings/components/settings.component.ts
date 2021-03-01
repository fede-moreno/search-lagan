import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../../shared/enums/app-routes.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { SettingsStateService } from '../services/settings-state.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsFormGroup: FormGroup;

  constructor(private router: Router,
              private settingsStateService: SettingsStateService) {
    // TODO add form validations
    this.settingsFormGroup = new FormGroup({
      backgroundColor: new FormControl(),
      minimumStars: new FormControl(),
      maxResults: new FormControl()
    });
  }

  ngOnInit(): void {
    this.settingsFormGroup.patchValue(this.settingsStateService.state);
  }

  /**
   * Navigates to home page.
   */
  goHome(): void {
    this.router.navigate([`/${AppRoutes.HOME}`]);
  }

  /**
   * Saves settings into the store (SettingsStateService) and navigates to the home page.
   */
  saveSettings(): void {
    this.settingsStateService.update(this.settingsFormGroup.value);
    this.goHome();
  }
}