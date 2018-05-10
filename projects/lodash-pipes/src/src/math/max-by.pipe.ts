import { Pipe, PipeTransform } from "@angular/core";
import { maxBy } from "lodash";
@Pipe({
  name: "maxBy"
})
export class MaxByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return maxBy(value, args);
  }
}
