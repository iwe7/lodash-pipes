import { Pipe, PipeTransform } from "@angular/core";
import { get } from "lodash";
@Pipe({
  name: "_get"
})
export class GetPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return get(value, args);
  }
}
