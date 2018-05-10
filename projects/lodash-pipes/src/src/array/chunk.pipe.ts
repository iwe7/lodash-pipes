import { Pipe, PipeTransform } from "@angular/core";
// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
import { chunk } from "lodash";
@Pipe({
  name: "chunk"
})
export class ChunkPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return chunk(value, args);
  }
}
