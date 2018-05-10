import { Pipe, PipeTransform } from "@angular/core";
import { result } from "lodash";

@Pipe({
  name: "result"
})
export class ResultPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return result(value, args);
  }
}
