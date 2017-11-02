import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercomplain'
})
export class FiltercomplainPipe implements PipeTransform {

 
  transform(items: any[], searchText2: string): any[] {
    if(!items) return [];
    if(!searchText2) return items;
searchText2 = searchText2.toLowerCase();
return items.filter( it => {
      return it.complain.toLowerCase().includes(searchText2); 
    });
   }
}