import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchCR'
})
export class SearchCRPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val?.order_id === (args)) ||
        (val?.feedback_id === (args)) ||
        (val?.restaurant?.restaurant_nm?.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
        (val?.rating?.toString() === (args)) ||
        (val?.date?.toString()?.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
        (val?.customer?.first_nm?.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
        (val?.customer?.last_nm?.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
      return rVal;
    })

  }

}