import { Pipe, PipeTransform } from "@angular/core";
import { sortedLastIndexBy } from "lodash";

@Pipe({
  name: "sortedLastIndexBy"
})
export class SortedLastIndexByPipe implements PipeTransform {
  transform(value: any, args?: any, index?: any): any {
    return sortedLastIndexBy(value, args, index);
  }
}
