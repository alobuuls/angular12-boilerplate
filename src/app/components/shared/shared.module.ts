import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ShBtnComponent } from '@shared/sh-btn/sh-btn.component';
import { ShLoaderComponent } from '@shared/sh-loader/sh-loader.component';
import { ShTitleComponent } from '@shared/sh-title/sh-title.component';

// Pipes
import { EllipsisPipe } from '@pipes/ellipsis.pipe';

const COMPONENTS = [ShBtnComponent, ShLoaderComponent, ShTitleComponent];
const PIPES = [EllipsisPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...COMPONENTS,
    ...PIPES
  ]
})
export class SharedModule {}
