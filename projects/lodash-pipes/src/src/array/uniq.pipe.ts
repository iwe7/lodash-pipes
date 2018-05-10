import { Pipe, PipeTransform } from "@angular/core";
import { uniq } from "lodash";

@Pipe({
  name: "uniq"
})
export class UniqPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return uniq(value);
  }
}
