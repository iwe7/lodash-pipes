import { Pipe, PipeTransform } from "@angular/core";
import { mapValues } from "lodash";

@Pipe({
  name: "mapValues"
})
export class MapValuesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return mapValues(value, args);
  }
}
