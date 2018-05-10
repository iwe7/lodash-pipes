import { Pipe, PipeTransform } from "@angular/core";
import { hasIn } from "lodash";

@Pipe({
  name: "hasIn"
})
export class HasInPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return hasIn(value, args);
  }
}
