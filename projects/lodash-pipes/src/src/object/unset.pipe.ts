import { Pipe, PipeTransform } from "@angular/core";
import { unset } from "lodash";

@Pipe({
  name: "unset"
})
export class UnsetPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return unset(value, args);
  }
}
