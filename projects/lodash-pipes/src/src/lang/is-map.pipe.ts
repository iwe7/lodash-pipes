import { Pipe, PipeTransform } from "@angular/core";
import { isMap } from "lodash";

@Pipe({
  name: "isMap"
})
export class IsMapPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return isMap(value);
  }
}
