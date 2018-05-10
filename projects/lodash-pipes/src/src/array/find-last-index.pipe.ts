import { Pipe, PipeTransform } from "@angular/core";
import { findLastIndex } from "lodash";

@Pipe({
  name: "findLastIndex"
})
export class FindLastIndexPipe implements PipeTransform {
  transform(value: any, args?: any, _index?: any): any {
    return findLastIndex(value, args, _index);
  }
}
