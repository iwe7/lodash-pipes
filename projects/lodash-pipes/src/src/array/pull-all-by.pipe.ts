import { Pipe, PipeTransform } from "@angular/core";
import { pullAllBy } from "lodash";

@Pipe({
  name: "pullAllBy"
})
export class PullAllByPipe implements PipeTransform {
  transform(value: any, args?: any, interatee?: any): any {
    return pullAllBy(value, args, interatee);
  }
}
