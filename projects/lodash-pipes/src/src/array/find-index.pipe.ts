import { Pipe, PipeTransform } from "@angular/core";
import { findIndex } from "lodash";

@Pipe({
  name: "findIndex"
})
export class FindIndexPipe implements PipeTransform {
  transform(value: any, args?: any, _index?: any): any {
    return findIndex(value, args, _index);
  }
}
