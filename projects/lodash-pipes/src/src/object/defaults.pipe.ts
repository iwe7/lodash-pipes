import { Pipe, PipeTransform } from "@angular/core";
import { defaults } from "lodash";

@Pipe({
  name: "defaults"
})
export class DefaultsPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return defaults(value, ...args);
  }
}
