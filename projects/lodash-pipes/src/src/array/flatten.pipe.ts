import { Pipe, PipeTransform } from "@angular/core";
import { flatten } from "lodash";

@Pipe({
  name: "flatten"
})
export class FlattenPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return flatten(value);
  }
}
