import { Pipe, PipeTransform } from "@angular/core";
import { eachRight } from "lodash";

@Pipe({
  name: "eachRight"
})
export class EachRightPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return eachRight(value, args);
  }
}
