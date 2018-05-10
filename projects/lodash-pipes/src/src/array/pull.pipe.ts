import { Pipe, PipeTransform } from "@angular/core";
import { pull } from "lodash";

@Pipe({
  name: "pull"
})
export class PullPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return pull(value, args);
  }
}
