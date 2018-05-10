import { Pipe, PipeTransform } from "@angular/core";
import { assignIn } from "lodash";
@Pipe({
  name: "assignIn"
})
export class AssignInPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return assignIn(value, args);
  }
}
