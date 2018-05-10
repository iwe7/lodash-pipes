import { Pipe, PipeTransform } from "@angular/core";
import { sortedIndex } from "lodash";

@Pipe({
  name: "sortedIndex"
})
export class SortedIndexPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return sortedIndex(value, args);
  }
}
