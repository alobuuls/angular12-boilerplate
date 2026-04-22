import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

// Components
import { FormBuilderComponent } from '@pages/forms/form-builder/form-builder.component';

@Injectable({
  providedIn: 'root'
})
export class PendingChangesFormGuard implements CanDeactivate<FormBuilderComponent> {

  canDeactivate(component: FormBuilderComponent): boolean {
    // Si el formulario no se guardó, pregunta al usuario
    if ( !component.isFormCompanySaved ) return confirm('Tienes cambios sin guardar. ¿Seguro que quieres salir?');

    // Si ya se guardó, deja salir
    return true;
  }
}
