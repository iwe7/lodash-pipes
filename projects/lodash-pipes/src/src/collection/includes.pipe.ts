import { Pipe, PipeTransform } from "@angular/core";
import { includes } from "lodash";
@Pipe({
  name: "includes"
})
export class IncludesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return includes(value, args);
  }
}
