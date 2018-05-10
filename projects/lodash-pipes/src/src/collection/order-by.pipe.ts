import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from "lodash";
@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(args);
    return orderBy(value, ...args);
  }
}
