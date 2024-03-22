import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FacultyComponent } from './faculty.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

let translations: any = { "TEST": "This is a test" };

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

describe('FacultyComponent', () => {
  let component: FacultyComponent;
  let fixture: ComponentFixture<FacultyComponent>;
  let translate: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: FakeLoader }
        })
      ],
    });
    fixture = TestBed.createComponent(FacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    translate = TestBed.inject(TranslateService);
  });

  afterEach(() => {
    translations = { "TEST": "This is a test" };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should use the default language by default", () => {
    translate.setDefaultLang('en');
    translate.setTranslation('en', { "TEST": "This is a test" });

    translate.get('TEST').subscribe((res: string) => {
      expect(res).toEqual('This is a test');
    });
  });

});
