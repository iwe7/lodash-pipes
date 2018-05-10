import { Pipe, PipeTransform } from "@angular/core";
import { template } from "lodash";

@Pipe({
  name: "template"
})
export class TemplatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return template(value, args);
  }
}
