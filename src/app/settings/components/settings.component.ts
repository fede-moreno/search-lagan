import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../../shared/enums/app-routes.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsStateService } from '../services/settings-state.service';
import { initialSettings } from '../constants/initial-settings.const';
import { hexColorValidator } from '../../shared/functions/hex-color.validator';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsFormGroup: FormGroup;

  constructor(private router: Router,
              private settingsStateService: SettingsStateService) {
    this.settingsFormGroup = new FormGroup({
      backgroundColor: new FormControl(null, [Validators.required, hexColorValidator()]),
      minimumStars: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10000)]),
      maxResults: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)])
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

  /**
   * Resets the form to its initial settings.
   */
  resetSettings(): void {
    this.settingsFormGroup.patchValue(initialSettings);
  }
}
