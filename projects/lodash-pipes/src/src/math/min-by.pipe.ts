import { Pipe, PipeTransform } from "@angular/core";
import { minBy } from "lodash";

@Pipe({
  name: "minBy"
})
export class MinByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return minBy(value, args);
  }
}
