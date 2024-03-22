import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitContentComponent } from './unit-content.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    UnitContentComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule
  ]
})
export class UnitContentModule { }
