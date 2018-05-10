import { Pipe, PipeTransform } from "@angular/core";
import { random } from "lodash";

@Pipe({
  name: "random"
})
export class RandomPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return random(value, args);
  }
}
