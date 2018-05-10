import { Pipe, PipeTransform } from "@angular/core";
import { assignWith } from "lodash";
@Pipe({
  name: "assignWith"
})
export class AssignWithPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return assignWith(value, args);
  }
}
