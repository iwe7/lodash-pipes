import { Pipe, PipeTransform } from "@angular/core";
import { mapKeys } from "lodash";

@Pipe({
  name: "mapKeys"
})
export class MapKeysPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return mapKeys(value, args);
  }
}
