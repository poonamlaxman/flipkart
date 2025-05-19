import { Pipe, PipeTransform } from '@angular/core';
import { log } from 'node:console';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value:any,searchfilter:any): any {
  return value.filter((e:any)=>{
    return e.category.toLowerCase().indexOf(searchfilter) > -1  

  })
    
  }

}
