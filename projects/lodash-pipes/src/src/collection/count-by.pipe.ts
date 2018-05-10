import { Pipe, PipeTransform } from "@angular/core";
import { countBy } from "lodash";
@Pipe({
  name: "countBy"
})
export class CountByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return countBy(value, args);
  }
}
