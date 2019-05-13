import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDividerModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MatDesignModule { }
