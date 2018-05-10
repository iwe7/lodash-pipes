import { Pipe, PipeTransform } from "@angular/core";
import { updateWith } from "lodash";

@Pipe({
  name: "updateWith"
})
export class UpdateWithPipe implements PipeTransform {
  transform(value: any, args?: any, updater?: any, customizer?: any): any {
    return updateWith(value, args, updater, customizer);
  }
}
