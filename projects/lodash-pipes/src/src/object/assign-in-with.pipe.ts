import { Pipe, PipeTransform } from "@angular/core";
import { assignInWith } from "lodash";
@Pipe({
  name: "assignInWith"
})
export class AssignInWithPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return assignInWith(value, args);
  }
}
