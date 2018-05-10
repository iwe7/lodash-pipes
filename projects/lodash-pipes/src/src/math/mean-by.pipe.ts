import { Pipe, PipeTransform } from "@angular/core";
import { meanBy } from "lodash";

@Pipe({
  name: "meanBy"
})
export class MeanByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return meanBy(value, args);
  }
}
