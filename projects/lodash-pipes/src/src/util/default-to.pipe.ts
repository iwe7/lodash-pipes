import { Pipe, PipeTransform } from "@angular/core";
import { defaultTo } from "lodash";

@Pipe({
  name: "defaultTo"
})
export class DefaultToPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return defaultTo(value, args);
  }
}
