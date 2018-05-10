import { Pipe, PipeTransform } from "@angular/core";
import { at } from "lodash";
@Pipe({
  name: "at"
})
export class AtPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return at(value, args);
  }
}
