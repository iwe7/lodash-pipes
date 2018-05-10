import { Pipe, PipeTransform } from "@angular/core";
import { assign } from "lodash";
@Pipe({
  name: "assign"
})
export class AssignPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return assign(value, args);
  }
}
