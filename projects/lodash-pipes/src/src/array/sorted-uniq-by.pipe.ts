import { Pipe, PipeTransform } from "@angular/core";
import { sortedUniqBy } from "lodash";

@Pipe({
  name: "sortedUniqBy"
})
export class SortedUniqByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return sortedUniqBy(value, args);
  }
}
