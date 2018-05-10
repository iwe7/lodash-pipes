import { Pipe, PipeTransform } from "@angular/core";
import { has } from "lodash";

@Pipe({
  name: "has"
})
export class HasPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return has(value, args);
  }
}
