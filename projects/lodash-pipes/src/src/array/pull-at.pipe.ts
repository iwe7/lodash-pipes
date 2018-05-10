import { Pipe, PipeTransform } from "@angular/core";
import { pullAt } from "lodash";

@Pipe({
  name: "pullAt"
})
export class PullAtPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return pullAt(value, args);
  }
}
