import { Pipe, PipeTransform } from "@angular/core";
import { initial } from "lodash";

@Pipe({
  name: "initial"
})
export class InitialPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return initial(value);
  }
}
