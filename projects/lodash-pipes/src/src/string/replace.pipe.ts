import { Pipe, PipeTransform } from "@angular/core";
import { replace } from "lodash";

@Pipe({
  name: "replace"
})
export class ReplacePipe implements PipeTransform {
  transform(value: any, args?: any, p?: any): any {
    return replace(value, args, p);
  }
}
