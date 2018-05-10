import { Pipe, PipeTransform } from "@angular/core";
import { update } from "lodash";

@Pipe({
  name: "update"
})
export class UpdatePipe implements PipeTransform {
  transform(value: any, args?: any, updater?: any): any {
    return update(value, args, updater);
  }
}
