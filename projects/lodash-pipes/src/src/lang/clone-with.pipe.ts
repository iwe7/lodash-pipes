import { Pipe, PipeTransform } from "@angular/core";
import { cloneWith } from "lodash";
@Pipe({
  name: "cloneWith"
})
export class CloneWithPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return cloneWith(value, args);
  }
}
