import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableCrudExampleComponent } from './table-crud-example/table-crud-example.component';

const routes: Routes = [
  { path: 'crud', component: TableCrudExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
