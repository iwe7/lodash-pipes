import { Pipe, PipeTransform } from "@angular/core";
import { flatMapDeep } from "lodash";

@Pipe({
  name: "flatMapDeep"
})
export class FlatMapDeepPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return flatMapDeep(value, args);
  }
}
