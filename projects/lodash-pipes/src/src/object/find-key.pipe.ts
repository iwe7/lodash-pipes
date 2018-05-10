import { Pipe, PipeTransform } from "@angular/core";
import { findKey } from "lodash";

@Pipe({
  name: "findKey"
})
export class FindKeyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return findKey(value, args);
  }
}
