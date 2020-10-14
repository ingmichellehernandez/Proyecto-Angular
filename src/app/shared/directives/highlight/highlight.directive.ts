import { Directive, ElementRef } from '@angular/core'; // se importa "ElementRef" modificara el comportamiento por defecto del DOM

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef // inyección de dependencia
  ) {
    element.nativeElement.style.backgroundColor = 'purple'; // esto lo usamos en el titulo del producto en product.component.html
    }
}