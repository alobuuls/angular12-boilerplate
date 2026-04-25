import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { PendingChangesFormGuard } from '@guards/pending-changes-form.guard';

// Components
import { FormsPageComponent } from '@pages/forms/forms.page.component';
import { FormTemplateComponent } from '@pages/forms/form-template/form-template.component';
import { FormControlComponent } from '@pages/forms/form-control/form-control.component';
import { FormGroupComponent } from '@pages/forms/form-group/form-group.component';
import { FormBuilderComponent } from '@pages/forms/form-builder/form-builder.component';

const routesForms: Routes = [
  {
    path: '',
    component: FormsPageComponent,
    children: [
      {
        path: 'ng-model',
        component: FormTemplateComponent
      },

      {
        path: 'control',
        component: FormControlComponent
      },

      {
        path: 'group',
        component: FormGroupComponent
      },

      {
        path: 'builder',
        component: FormBuilderComponent,
        canDeactivate: [PendingChangesFormGuard]
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ng-model'
      },

      {
        path: '**',
        redirectTo: 'ng-model'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesForms)],
  exports: [RouterModule]
})
export class FormsPageRoutingModule {}
