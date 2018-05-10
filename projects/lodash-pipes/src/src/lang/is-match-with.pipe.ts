import { Pipe, PipeTransform } from "@angular/core";
import { isMatchWith } from "lodash";

@Pipe({
  name: "isMatchWith"
})
export class IsMatchWithPipe implements PipeTransform {
  transform(value: any, args?: any, customizer?: any): any {
    return isMatchWith(value, args, customizer);
  }
}
