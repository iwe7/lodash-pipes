import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CountByPipe } from "./count-by.pipe";
import { EachRightPipe } from "./each-right.pipe";
import { EachPipe } from "./each.pipe";
import { EveryPipe } from "./every.pipe";
import { FilterPipe } from "./filter.pipe";
import { FindLastPipe } from "./find-last.pipe";
import { FindPipe } from "./find.pipe";
import { FlatMapDeepPipe } from "./flat-map-deep.pipe";
import { FlatMapDepthPipe } from "./flat-map-depth.pipe";
import { FlatMapPipe } from "./flat-map.pipe";
import { ForEachRightPipe } from "./for-each-right.pipe";
import { ForEachPipe } from "./for-each.pipe";
import { GroupByPipe } from "./group-by.pipe";

import { IncludesPipe } from "./includes.pipe";
import { InvokeMapPipe } from "./invoke-map.pipe";
import { KeyByPipe } from "./key-by.pipe";
import { MapPipe } from "./map.pipe";
import { OrderByPipe } from "./order-by.pipe";
import { PartitionPipe } from "./partition.pipe";
import { ReduceRightPipe } from "./reduce-right.pipe";
import { ReducePipe } from "./reduce.pipe";
import { RejectPipe } from "./reject.pipe";
import { SampleSizePipe } from "./sample-size.pipe";
import { SamplePipe } from "./sample.pipe";
import { ShufflePipe } from "./shuffle.pipe";
import { SizePipe } from "./size.pipe";
import { SomePipe } from "./some.pipe";
import { SortByPipe } from "./sort-by.pipe";
export const pipes = [
  CountByPipe,
  EachRightPipe,
  EachPipe,
  EveryPipe,
  FilterPipe,
  FindLastPipe,
  FindPipe,
  FlatMapDeepPipe,
  FlatMapDepthPipe,
  FlatMapPipe,
  ForEachRightPipe,
  ForEachPipe,
  GroupByPipe,

  IncludesPipe,
  InvokeMapPipe,
  KeyByPipe,
  MapPipe,
  OrderByPipe,
  PartitionPipe,
  ReduceRightPipe,
  ReducePipe,
  RejectPipe,
  SampleSizePipe,
  SamplePipe,
  ShufflePipe,
  SizePipe,
  SomePipe,
  SortByPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...pipes],
  exports: [...pipes]
})
export class PipesCollectionModule {}


export { CountByPipe } from "./count-by.pipe";
export { EachRightPipe } from "./each-right.pipe";
export { EachPipe } from "./each.pipe";
export { EveryPipe } from "./every.pipe";
export { FilterPipe } from "./filter.pipe";
export { FindLastPipe } from "./find-last.pipe";
export { FindPipe } from "./find.pipe";
export { FlatMapDeepPipe } from "./flat-map-deep.pipe";
export { FlatMapDepthPipe } from "./flat-map-depth.pipe";
export { FlatMapPipe } from "./flat-map.pipe";
export { ForEachRightPipe } from "./for-each-right.pipe";
export { ForEachPipe } from "./for-each.pipe";
export { GroupByPipe } from "./group-by.pipe";

export { IncludesPipe } from "./includes.pipe";
export { InvokeMapPipe } from "./invoke-map.pipe";
export { KeyByPipe } from "./key-by.pipe";
export { MapPipe } from "./map.pipe";
export { OrderByPipe } from "./order-by.pipe";
export { PartitionPipe } from "./partition.pipe";
export { ReduceRightPipe } from "./reduce-right.pipe";
export { ReducePipe } from "./reduce.pipe";
export { RejectPipe } from "./reject.pipe";
export { SampleSizePipe } from "./sample-size.pipe";
export { SamplePipe } from "./sample.pipe";
export { ShufflePipe } from "./shuffle.pipe";
export { SizePipe } from "./size.pipe";
export { SomePipe } from "./some.pipe";
export { SortByPipe } from "./sort-by.pipe";
