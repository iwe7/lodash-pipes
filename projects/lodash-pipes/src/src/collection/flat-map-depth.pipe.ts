import { Pipe, PipeTransform } from "@angular/core";
import { flatMapDepth } from "lodash";

@Pipe({
  name: "flatMapDepth"
})
export class FlatMapDepthPipe implements PipeTransform {
  transform(value: any, args?: any, depth?: any): any {
    return flatMapDepth(value, args, depth);
  }
}
