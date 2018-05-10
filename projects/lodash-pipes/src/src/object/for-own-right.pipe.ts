import { Pipe, PipeTransform } from "@angular/core";

import { forOwnRight } from "lodash";

@Pipe({
  name: "forOwnRight"
})
export class ForOwnRightPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return forOwnRight(value, args);
  }
}
