import { Pipe, PipeTransform } from "@angular/core";
import { words } from "lodash";

@Pipe({
  name: "words"
})
export class WordsPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return words(value, args);
  }
}
