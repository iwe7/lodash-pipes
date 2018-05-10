import { Pipe, PipeTransform } from "@angular/core";
import { conformsTo } from "lodash";
@Pipe({
  name: "conformsTo"
})
export class ConformsToPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return conformsTo(value, args);
  }
}
