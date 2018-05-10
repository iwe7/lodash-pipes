import { Pipe, PipeTransform } from "@angular/core";
import { mergeWith } from "lodash";

@Pipe({
  name: "mergeWith"
})
export class MergeWithPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return mergeWith(value, ...args);
  }
}
