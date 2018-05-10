import { Pipe, PipeTransform } from "@angular/core";
import { pullAllWith } from "lodash";

@Pipe({
  name: "pullAllWith"
})
export class PullAllWithPipe implements PipeTransform {
  transform(value: any, args?: any, comparator?: any): any {
    return pullAllWith(value, args, comparator);
  }
}
