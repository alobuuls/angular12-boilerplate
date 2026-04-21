import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'ellipsis',
  pure: true // pipe puro: solo se ejecuta cuando cambian los inputs (mejor rendimiento)
})
export class EllipsisPipe implements PipeTransform {

  // transform es el método obligatorio de todo pipe
  // value: valor que recibe el pipe
  // limit: número máximo de caracteres (por defecto 20)
  // symbol: símbolo que se repetirá al final (por defecto '.')
  transform(value: string | null | undefined, limit: number = 20, symbol: string = '.'): string {
    // validación: si no hay valor, retorna string vacío para evitar errores en el template
    if (!value) return '';

    // aseguramos que siempre trabajamos con string
    const text = value.toString();

    // validación: si el límite es inválido
    if (limit <= 0) return '';

    // si el texto es más corto que el límite, se retorna tal cual (no se modifica)
    if (text.length <= limit) return text;

    // lógica principal:
    // corta el texto hasta el límite y agrega 3 símbolos al final
    // ejemplo: "Hola mundo largo" → "Hola mundo..."
    return `${text.substring(0, limit)}${symbol.repeat(3)}`;
  }

}
