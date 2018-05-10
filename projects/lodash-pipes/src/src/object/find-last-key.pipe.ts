import { Pipe, PipeTransform } from "@angular/core";
import { findLastKey } from "lodash";

@Pipe({
  name: "findLastKey"
})
export class FindLastKeyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return findLastKey(value, args);
  }
}
