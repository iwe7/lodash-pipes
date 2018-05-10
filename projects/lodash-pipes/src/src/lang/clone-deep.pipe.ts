import { Pipe, PipeTransform } from "@angular/core";
import { cloneDeep } from "lodash";
@Pipe({
  name: "cloneDeep"
})
export class CloneDeepPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return cloneDeep(value);
  }
}
