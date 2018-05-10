import { Pipe, PipeTransform } from "@angular/core";
import { cloneDeepWith } from "lodash";
@Pipe({
  name: "cloneDeepWith"
})
export class CloneDeepWithPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return cloneDeepWith(value, args);
  }
}
