import { Pipe, PipeTransform } from "@angular/core";
import { unionBy } from "lodash";

@Pipe({
  name: "unionBy"
})
export class UnionByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return unionBy(value, args);
  }
}
