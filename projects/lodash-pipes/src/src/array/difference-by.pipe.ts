import { Pipe, PipeTransform } from "@angular/core";
import { differenceBy } from "lodash";

@Pipe({
  name: "differenceBy"
})
export class DifferenceByPipe implements PipeTransform {
  transform(value: any, args?: any, iteratee?: any): any {
    return differenceBy(value, args, iteratee);
  }
}
