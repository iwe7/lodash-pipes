import { Pipe, PipeTransform } from "@angular/core";
import { groupBy } from "lodash";
@Pipe({
  name: "groupBy"
})
export class GroupByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return groupBy(value, args);
  }
}
