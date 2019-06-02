import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ MatCardModule, MatInputModule, MatButtonModule,
    MatFormFieldModule, MatSelectModule, MatTableModule ]
})
export class MatDesighModule { }
