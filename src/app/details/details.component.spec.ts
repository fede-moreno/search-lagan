import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GithubApiService } from '../shared/services/github-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ GithubApiService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    inject([GithubApiService], (injectedService: GithubApiService) => {
      expect(injectedService.githubHeaders).toBeDefined();
      expect(injectedService.apiGithubUrl).toBeDefined();
      expect(injectedService.getRepository).toBeDefined();
    });
  });
});
