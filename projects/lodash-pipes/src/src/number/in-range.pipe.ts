import { Pipe, PipeTransform } from "@angular/core";
import { inRange } from "lodash";
@Pipe({
  name: "inRange"
})
export class InRangePipe implements PipeTransform {
  transform(value: any, start?: any, end?: any): any {
    return inRange(value, start, end);
  }
}
