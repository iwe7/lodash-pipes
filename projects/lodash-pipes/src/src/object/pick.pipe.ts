import { Pipe, PipeTransform } from "@angular/core";
import { pick } from "lodash";

@Pipe({
  name: "pick"
})
export class PickPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return pick(value, ...args);
  }
}
