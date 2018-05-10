import { Pipe, PipeTransform } from "@angular/core";
import { lowerCase } from "lodash";

@Pipe({
  name: "lowerCase"
})
export class LowerCasePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return lowerCase(value);
  }
}
