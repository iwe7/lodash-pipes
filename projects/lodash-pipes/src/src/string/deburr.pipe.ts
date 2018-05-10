import { Pipe, PipeTransform } from "@angular/core";
import { deburr } from "lodash";

@Pipe({
  name: "deburr"
})
export class DeburrPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return deburr(value);
  }
}
