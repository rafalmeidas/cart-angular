import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
