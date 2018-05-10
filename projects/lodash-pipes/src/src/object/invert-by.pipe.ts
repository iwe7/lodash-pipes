import { Pipe, PipeTransform } from "@angular/core";
import { invertBy } from "lodash";

@Pipe({
  name: "invertBy"
})
export class InvertByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return invertBy(value, args);
  }
}
