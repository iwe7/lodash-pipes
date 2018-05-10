import { Pipe, PipeTransform } from "@angular/core";

import { merge } from "lodash";
@Pipe({
  name: "merge"
})
export class MergePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return merge(value, args);
  }
}
