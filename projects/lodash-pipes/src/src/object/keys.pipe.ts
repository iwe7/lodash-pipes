import { Pipe, PipeTransform } from "@angular/core";
import { keys } from "lodash";

@Pipe({
  name: "keys"
})
export class KeysPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return keys(value);
  }
}
