import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCrudExampleComponent } from './table-crud-example.component';

describe('TableCrudExampleComponent', () => {
  let component: TableCrudExampleComponent;
  let fixture: ComponentFixture<TableCrudExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCrudExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCrudExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
