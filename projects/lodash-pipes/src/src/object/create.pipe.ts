import { Pipe, PipeTransform } from "@angular/core";
import { create } from "lodash";
@Pipe({
  name: "create"
})
export class CreatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return create(value, args);
  }
}
