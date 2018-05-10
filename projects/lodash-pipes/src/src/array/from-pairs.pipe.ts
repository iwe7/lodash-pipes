import { Pipe, PipeTransform } from "@angular/core";
import { fromPairs } from "lodash";

@Pipe({
  name: "fromPairs"
})
export class FromPairsPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return fromPairs(value);
  }
}
