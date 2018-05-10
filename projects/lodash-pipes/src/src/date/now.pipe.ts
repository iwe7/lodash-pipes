import { Pipe, PipeTransform } from "@angular/core";
import { now } from "lodash";

@Pipe({
  name: "now"
})
export class NowPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return now();
  }
}
