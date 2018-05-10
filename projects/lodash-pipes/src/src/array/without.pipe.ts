import { Pipe, PipeTransform } from "@angular/core";
import { without } from "lodash";

@Pipe({
  name: "without"
})
export class WithoutPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return without(value, args);
  }
}
