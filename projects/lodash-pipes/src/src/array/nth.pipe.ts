import { Pipe, PipeTransform } from "@angular/core";
import { nth } from "lodash";

@Pipe({
  name: "nth"
})
export class NthPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return nth(value, args);
  }
}
