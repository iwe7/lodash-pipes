import { Pipe, PipeTransform } from "@angular/core";
import { isNull } from "lodash";

@Pipe({
  name: "isNull"
})
export class IsNullPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return isNull(value);
  }
}
