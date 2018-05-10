import { Pipe, PipeTransform } from "@angular/core";
import { uniqWith } from "lodash";

@Pipe({
  name: "unionWith"
})
export class UnionWithPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return uniqWith(value, args);
  }
}
