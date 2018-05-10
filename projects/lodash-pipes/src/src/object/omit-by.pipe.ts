import { Pipe, PipeTransform } from "@angular/core";
import { omitBy } from "lodash";

@Pipe({
  name: "omitBy"
})
export class OmitByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return omitBy(value, args);
  }
}
