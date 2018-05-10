import { Pipe, PipeTransform } from "@angular/core";
import { matchesProperty } from "lodash";

@Pipe({
  name: "matchesProperty"
})
export class MatchesPropertyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return matchesProperty(value, args);
  }
}
