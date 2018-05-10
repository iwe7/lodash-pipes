import { Pipe, PipeTransform } from "@angular/core";
import yeast from "yeast";

@Pipe({
  name: "yeast"
})
export class YeastPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return yeast();
  }
}

export { yeast };
