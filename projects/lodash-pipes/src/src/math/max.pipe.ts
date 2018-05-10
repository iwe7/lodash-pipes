import { Pipe, PipeTransform } from "@angular/core";
import { max } from "lodash";
@Pipe({
  name: "max"
})
export class MaxPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return max(value);
  }
}
