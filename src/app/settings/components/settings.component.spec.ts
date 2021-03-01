import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { initialSettings } from '../constants/initial-settings.const';
import { SettingsStateService } from '../services/settings-state.service';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  const selectors = {
    backgroundColorInput: '.Settings-container-row input[data-cy="backgroundColorInput"]',
    minimumStars: '.Settings-container-row input[data-cy="minimumStarsInput"]',
    maxResults: '.Settings-container-row input[data-cy="maxResultsInput"]',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [{
        provide: SettingsStateService,
        useValue: {
          state: initialSettings
      } }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check the form is loaded with the initialSettings', () => {
    const hostElement = fixture.nativeElement;
    expect(hostElement.querySelector(selectors.backgroundColorInput).value).toEqual(initialSettings.backgroundColor);
    expect(hostElement.querySelector(selectors.minimumStars).value).toEqual(initialSettings.minimumStars.toString());
    expect(hostElement.querySelector(selectors.maxResults).value).toEqual(initialSettings.maxResults.toString());
  });
});
