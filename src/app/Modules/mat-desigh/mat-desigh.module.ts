import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ MatCardModule, MatInputModule, MatButtonModule,
    MatFormFieldModule, MatSelectModule ]
})
export class MatDesighModule { }
