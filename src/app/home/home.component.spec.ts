import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { GithubApiService } from '../shared/services/github-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterTestingModule,  ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ GithubApiService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check the repositories are empty and the ', () => {
    // This could be part of the service spec
    inject([GithubApiService], (injectedService: GithubApiService) => {
      expect(injectedService.githubHeaders).toBeDefined();
      expect(injectedService.apiGithubUrl).toBeDefined();
      expect(injectedService.getAllRepositories).toBeDefined();
    });
  });
});
