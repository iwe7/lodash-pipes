import { Pipe, PipeTransform } from "@angular/core";
import { isDate } from "lodash";

@Pipe({
  name: "isDate"
})
export class IsDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return isDate(value);
  }
}
