import { Pipe, PipeTransform } from "@angular/core";
import { method } from "lodash";

@Pipe({
  name: "method"
})
export class MethodPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return method(value, args);
  }
}
