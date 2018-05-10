import { Pipe, PipeTransform } from "@angular/core";
import { partition } from "lodash";

@Pipe({
  name: "partition"
})
export class PartitionPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return partition(value, args);
  }
}
