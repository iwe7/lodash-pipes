import { Pipe, PipeTransform } from "@angular/core";
import { gte } from "lodash";

@Pipe({
  name: "gte"
})
export class GtePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return gte(value, args);
  }
}
