import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomejournalgalleryComponent } from './homejournalgallery.component';

describe('HomejournalgalleryComponent', () => {
  let component: HomejournalgalleryComponent;
  let fixture: ComponentFixture<HomejournalgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomejournalgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomejournalgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
