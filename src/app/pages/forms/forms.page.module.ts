import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { FormsPageRoutingModule } from '@pages/forms/forms.page-routing.module';

// Modules
import { SharedModule } from '@shared/shared.module';

// Components
import { FormsPageComponent } from '@pages/forms/forms.page.component';

// Subpages
import { FormTemplateComponent } from '@pages/forms/form-template/form-template.component';
import { FormControlComponent } from '@pages/forms/form-control/form-control.component';
import { FormGroupComponent } from '@pages/forms/form-group/form-group.component';
import { FormBuilderComponent } from '@pages/forms/form-builder/form-builder.component';

@NgModule({
  declarations: [
    FormsPageComponent,
    FormTemplateComponent,
    FormControlComponent,
    FormGroupComponent,
    FormBuilderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsPageRoutingModule
  ]
})
export class FormsPageModule {}
