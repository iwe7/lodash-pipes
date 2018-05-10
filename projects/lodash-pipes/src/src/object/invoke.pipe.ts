import { Pipe, PipeTransform } from "@angular/core";
import { invoke } from "lodash";

@Pipe({
  name: "invoke"
})
export class InvokePipe implements PipeTransform {
  transform(value: any, path?: any, ...args): any {
    return invoke(value, path, ...args);
  }
}
