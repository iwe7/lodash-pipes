import { Pipe, PipeTransform } from "@angular/core";
import { isNumber } from "lodash";

@Pipe({
  name: "isNumber"
})
export class IsNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return isNumber(value);
  }
}
