import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './unit/unit.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.gurd';
import { TopicUnitComponent } from './topic-unit.component';


const routes: Routes = [
  {
    path: 'unit',
    component: UnitComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    UnitComponent,
    TopicUnitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TopicUnitModule { }
