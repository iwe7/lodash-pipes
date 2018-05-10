import { Pipe, PipeTransform } from "@angular/core";
import { omit } from "lodash";

@Pipe({
  name: "omit"
})
export class OmitPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return omit(value, ...args);
  }
}
