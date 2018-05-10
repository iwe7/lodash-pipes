import { Pipe, PipeTransform } from "@angular/core";
import { set } from "lodash";

@Pipe({
  name: "set"
})
export class SetPipe implements PipeTransform {
  transform(value: any, args?: any, val?: any): any {
    return set(value, args, val);
  }
}
