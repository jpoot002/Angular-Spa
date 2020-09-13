import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaldato]'
})
export class ResaldatoDirective {

  constructor(private elementref:ElementRef) {
  }

  @Input("appResaldato") nuevoColor:string;

  @HostListener('mouseenter')mouseEntro(){
    this.resaltar(this.nuevoColor || 'yellow')
  }

  @HostListener('mouseleave')mouseSalio(){
    this.resaltar(null);
  }

  private resaltar (color:string){
    this.elementref.nativeElement.style.backgroundColor=color;
  }
}
