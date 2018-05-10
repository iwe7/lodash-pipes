import { Pipe, PipeTransform } from "@angular/core";
import { map } from "lodash";
@Pipe({
  name: "map"
})
export class MapPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return map(value, args);
  }
}
