import { Pipe, PipeTransform } from "@angular/core";
import { isEqual } from "lodash";

@Pipe({
  name: "isEqual"
})
export class IsEqualPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return isEqual(value, args);
  }
}
