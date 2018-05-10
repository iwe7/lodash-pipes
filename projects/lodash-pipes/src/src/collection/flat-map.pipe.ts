import { Pipe, PipeTransform } from "@angular/core";
import { flatMap } from "lodash";

@Pipe({
  name: "flatMap"
})
export class FlatMapPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return flatMap(value, args);
  }
}
