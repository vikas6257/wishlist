import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

const MaterialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatDividerModule,
  MatDialogModule,
  MatMenuModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class AngularMaterialModule { }
