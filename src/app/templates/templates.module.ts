import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { MatIconModule } from '@angular/material/icon';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [ToolbarComponent, MainComponent],
  exports: [ToolbarComponent, MainComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
  ],
})
export class TemplatesModule {}
