import { Pipe, PipeTransform } from "@angular/core";
import { ceil } from "lodash";
@Pipe({
  name: "ceil"
})
export class CeilPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return ceil(value);
  }
}
