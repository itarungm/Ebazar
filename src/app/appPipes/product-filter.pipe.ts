import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any {
    if(value.length === 0){
      return value;
    }
      return value.filter(checkSearchItem);

      function checkSearchItem(search){
        return search.name.toLowerCase().indexOf(searchTerm.toLowerCase())-1
      }
  }

}
