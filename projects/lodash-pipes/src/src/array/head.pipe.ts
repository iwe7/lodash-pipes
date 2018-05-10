import { Pipe, PipeTransform } from "@angular/core";
import { head } from "lodash";

@Pipe({
  name: "head"
})
export class HeadPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return head(value);
  }
}
