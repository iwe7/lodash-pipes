import { Pipe, PipeTransform } from "@angular/core";
import { bindAll } from "lodash";
@Pipe({
  name: "bindAll"
})
export class BindAllPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return bindAll(value, args);
  }
}
