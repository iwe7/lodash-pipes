import { Pipe, PipeTransform } from "@angular/core";
import { isEqualWith } from "lodash";

@Pipe({
  name: "isEqualWith"
})
export class IsEqualWithPipe implements PipeTransform {
  transform(value: any, args?: any, fn?: any): any {
    return isEqualWith(value, args, fn);
  }
}
