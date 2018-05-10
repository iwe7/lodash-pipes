import { Pipe, PipeTransform } from "@angular/core";
import { differenceWith } from "lodash";

@Pipe({
  name: "differenceWith"
})
export class DifferenceWithPipe implements PipeTransform {
  transform(value: any, args?: any, comparator?: any): any {
    return differenceWith(value, args, comparator);
  }
}
