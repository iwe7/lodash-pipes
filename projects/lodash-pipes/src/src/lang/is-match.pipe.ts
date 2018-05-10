import { Pipe, PipeTransform } from "@angular/core";
import { isMatch } from "lodash";

@Pipe({
  name: "isMatch"
})
export class IsMatchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return isMatch(value, args);
  }
}
