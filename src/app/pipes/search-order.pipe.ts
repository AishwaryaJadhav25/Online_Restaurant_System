import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchOrder'
})
export class SearchOrderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val?.order_id === (args)) ||
        (val?.payment_mode?.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
        (val?.payment_status?.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
        (val?.restaurant?.restaurant_nm?.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
        (val?.total_amount?.toString()?.includes(args)) ||
        (val?.date?.toString()?.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
        (val?.status?.status_name.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
        (val?.customer?.first_nm?.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
        (val?.customer?.last_nm?.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
      return rVal;
    })

  }

}