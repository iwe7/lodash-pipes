import { Pipe, PipeTransform } from "@angular/core";
import { cond } from "lodash";

@Pipe({
  name: "cond"
})
export class CondPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return cond(value);
  }
}
