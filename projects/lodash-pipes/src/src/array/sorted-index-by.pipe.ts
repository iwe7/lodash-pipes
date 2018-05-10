import { Pipe, PipeTransform } from "@angular/core";
import { sortedIndexBy } from "lodash";

@Pipe({
  name: "sortedIndexBy"
})
export class SortedIndexByPipe implements PipeTransform {
  transform(value: any, args?: any, index?: any): any {
    return sortedIndexBy(value, args, index);
  }
}
