import { Pipe, PipeTransform } from "@angular/core";
import { methodOf } from "lodash";

@Pipe({
  name: "methodOf"
})
export class MethodOfPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return methodOf(value, args);
  }
}
