import { Pipe, PipeTransform } from "@angular/core";
import { constant } from "lodash";
@Pipe({
  name: "constant"
})
export class ConstantPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return constant(value);
  }
}
