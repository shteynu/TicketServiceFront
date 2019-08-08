

import { CommonModule } from '@angular/common';
import {MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule,
  MatTableModule, MatGridListModule} from '@angular/material';


import {NgModule} from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ MatCardModule, MatInputModule, MatButtonModule,
    MatFormFieldModule, MatSelectModule, MatTableModule, MatGridListModule]
})
export class MatDesighModule { }
