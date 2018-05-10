import { Pipe, PipeTransform } from "@angular/core";
import { forEach } from "lodash";
@Pipe({
  name: "forEach"
})
export class ForEachPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return forEach(value, args);
  }
}
