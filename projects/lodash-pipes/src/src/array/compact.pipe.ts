import { Pipe, PipeTransform } from "@angular/core";
import { compact } from "lodash";
@Pipe({
  name: "compact"
})
export class CompactPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return compact(value);
  }
}
