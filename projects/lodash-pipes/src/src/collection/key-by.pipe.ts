import { Pipe, PipeTransform } from "@angular/core";
import { keyBy } from "lodash";
@Pipe({
  name: "keyBy"
})
export class KeyByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return keyBy(value, args);
  }
}
