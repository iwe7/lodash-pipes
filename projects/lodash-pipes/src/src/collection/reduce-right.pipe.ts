import { Pipe, PipeTransform } from "@angular/core";
import { reduceRight } from "lodash";

@Pipe({
  name: "reduceRight"
})
export class ReduceRightPipe implements PipeTransform {
  transform(value: any, args?: any, accumulator?: any): any {
    return reduceRight(value, args, accumulator);
  }
}
