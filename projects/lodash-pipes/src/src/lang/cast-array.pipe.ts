import { Pipe, PipeTransform } from "@angular/core";
// 如果 value 不是数组, 那么强制转为数组。
import { castArray } from "lodash";
@Pipe({
  name: "_castArray"
})
export class CastArrayPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return castArray(value);
  }
}
