import { Pipe, PipeTransform } from "@angular/core";
import { defaultsDeep } from "lodash";
@Pipe({
  name: "defaultsDeep"
})
export class DefaultsDeepPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return defaultsDeep(value, ...args);
  }
}
