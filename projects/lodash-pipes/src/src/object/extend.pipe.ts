import { Pipe, PipeTransform } from "@angular/core";
import { extend } from "lodash";

@Pipe({
  name: "extend"
})
export class ExtendPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return extend(value, ...args);
  }
}
