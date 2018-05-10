import { Pipe, PipeTransform } from "@angular/core";
import { forInRight } from "lodash";

@Pipe({
  name: "forInRight"
})
export class ForInRightPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return forInRight(value, args);
  }
}
