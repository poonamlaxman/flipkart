import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableclick]'
})
export class DisableclickDirective {

  constructor() { }
//  @HostListener('document:copy')
//  oncopy(event:ClipboardEvent){
//   event.preventDefault()
//  }
//  @HostListener('document:paste')
//  onpast(event:ClipboardEvent){
//   event.preventDefault()
//  }

}
