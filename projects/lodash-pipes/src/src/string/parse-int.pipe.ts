import { Pipe, PipeTransform } from "@angular/core";
import { camelCase } from "lodash";

@Pipe({
  name: "parseInt"
})
export class ParseIntPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return parseInt(value, args);
  }
}
