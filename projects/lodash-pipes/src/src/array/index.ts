import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChunkPipe } from "./chunk.pipe";
import { CompactPipe } from "./compact.pipe";
import { ConcatPipe } from "./concat.pipe";

import { DifferenceByPipe } from "./difference-by.pipe";
import { DifferenceWithPipe } from "./difference-with.pipe";
import { DifferencePipe } from "./difference.pipe";
import { DropRightWhilePipe } from "./drop-right-while.pipe";
import { DropRightPipe } from "./drop-right.pipe";
import { DropWhilePipe } from "./drop-while.pipe";
import { DropPipe } from "./drop.pipe";

import { FillPipe } from "./fill.pipe";
import { FindIndexPipe } from "./find-index.pipe";
import { FindLastIndexPipe } from "./find-last-index.pipe";
import { FlattenDeepPipe } from "./flatten-deep.pipe";
import { FlattenDepthPipe } from "./flatten-depth.pipe";
import { FlattenPipe } from "./flatten.pipe";
import { FromPairsPipe } from "./from-pairs.pipe";
import { HeadPipe } from "./head.pipe";
import { IndexOfPipe } from "./index-of.pipe";
import { InitialPipe } from "./initial.pipe";

import { IntersectionByPipe } from "./intersection-by.pipe";
import { IntersectionWithPipe } from "./intersection-with.pipe";
import { IntersectionPipe } from "./intersection.pipe";
import { JoinPipe } from "./join.pipe";
import { LastIndexOfPipe } from "./last-index-of.pipe";
import { LastPipe } from "./last.pipe";
import { NthPipe } from "./nth.pipe";
import { PullAllByPipe } from "./pull-all-by.pipe";
import { PullAllWithPipe } from "./pull-all-with.pipe";
import { PullAllPipe } from "./pull-all.pipe";
import { PullAtPipe } from "./pull-at.pipe";
import { PullPipe } from "./pull.pipe";

import { RemovePipe } from "./remove.pipe";
import { ReversePipe } from "./reverse.pipe";
import { SortedIndexByPipe } from "./sorted-index-by.pipe";
import { SortedIndexOfPipe } from "./sorted-index-of.pipe";
import { SortedIndexPipe } from "./sorted-index.pipe";
import { SortedLastIndexByPipe } from "./sorted-last-index-by.pipe";
import { SortedLastIndexOfPipe } from "./sorted-last-index-of.pipe";
import { SortedLastIndexPipe } from "./sorted-last-index.pipe";
import { SortedUniqByPipe } from "./sorted-uniq-by.pipe";
import { SortedUniqPipe } from "./sorted-uniq.pipe";
import { TailPipe } from "./tail.pipe";
import { TakeRightWhilePipe } from "./take-right-while.pipe";
import { TakeRightPipe } from "./take-right.pipe";

import { TakeWhilePipe } from "./take-while.pipe";
import { TakePipe } from "./take.pipe";
import { UnionByPipe } from "./union-by.pipe";
import { UnionWithPipe } from "./union-with.pipe";
import { UnionPipe } from "./union.pipe";
import { UniqWithPipe } from "./uniq-with.pipe";
import { UniqPipe } from "./uniq.pipe";
import { UnzipWithPipe } from "./unzip-with.pipe";
import { UnzipPipe } from "./unzip.pipe";
import { WithoutPipe } from "./without.pipe";
import { XorByPipe } from "./xor-by.pipe";
import { XorWithPipe } from "./xor-with.pipe";
import { XorPipe } from "./xor.pipe";
import { ZipObjectDeepPipe } from "./zip-object-deep.pipe";
import { ZipObjectPipe } from "./zip-object.pipe";
import { ZipWithPipe } from "./zip-with.pipe";
import { ZipPipe } from "./zip.pipe";
import { FirstPipe } from "./first.pipe";
import { SlicePipe } from './slice.pipe';
export const ArrayPipes = [
  ChunkPipe,
  CompactPipe,
  ConcatPipe,
  DifferenceByPipe,
  DifferenceWithPipe,
  DifferencePipe,
  DropRightWhilePipe,
  DropRightPipe,
  DropWhilePipe,
  DropPipe,
  FillPipe,
  FindIndexPipe,
  FindLastIndexPipe,
  FlattenDeepPipe,
  FlattenDepthPipe,
  FlattenPipe,
  FromPairsPipe,
  HeadPipe,
  IndexOfPipe,
  InitialPipe,
  IntersectionByPipe,
  IntersectionWithPipe,
  IntersectionPipe,
  JoinPipe,
  LastIndexOfPipe,
  LastPipe,
  NthPipe,
  PullAllByPipe,
  PullAllWithPipe,
  PullAllPipe,
  PullAtPipe,
  PullPipe,
  RemovePipe,
  ReversePipe,
  SortedIndexByPipe,
  SortedIndexOfPipe,
  SortedIndexPipe,
  SortedLastIndexByPipe,
  SortedLastIndexOfPipe,
  SortedLastIndexPipe,
  SortedUniqByPipe,
  SortedUniqPipe,
  TailPipe,
  TakeRightWhilePipe,
  TakeRightPipe,
  TakeWhilePipe,
  TakePipe,
  UnionByPipe,
  UnionWithPipe,
  UnionPipe,
  UniqWithPipe,
  UniqPipe,
  UnzipWithPipe,
  UnzipPipe,
  WithoutPipe,
  XorByPipe,
  XorWithPipe,
  XorPipe,
  ZipObjectDeepPipe,
  ZipObjectPipe,
  ZipWithPipe,
  ZipPipe,
  FirstPipe,
  SlicePipe,
  SlicePipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...ArrayPipes],
  exports: [...ArrayPipes]
})
export class PipesArrayModule {}

export { ChunkPipe } from "./chunk.pipe";
export { CompactPipe } from "./compact.pipe";
export { ConcatPipe } from "./concat.pipe";

export { DifferenceByPipe } from "./difference-by.pipe";
export { DifferenceWithPipe } from "./difference-with.pipe";
export { DifferencePipe } from "./difference.pipe";
export { DropRightWhilePipe } from "./drop-right-while.pipe";
export { DropRightPipe } from "./drop-right.pipe";
export { DropWhilePipe } from "./drop-while.pipe";
export { DropPipe } from "./drop.pipe";

export { FillPipe } from "./fill.pipe";
export { FindIndexPipe } from "./find-index.pipe";
export { FindLastIndexPipe } from "./find-last-index.pipe";
export { FlattenDeepPipe } from "./flatten-deep.pipe";
export { FlattenDepthPipe } from "./flatten-depth.pipe";
export { FlattenPipe } from "./flatten.pipe";
export { FromPairsPipe } from "./from-pairs.pipe";
export { HeadPipe } from "./head.pipe";
export { IndexOfPipe } from "./index-of.pipe";
export { InitialPipe } from "./initial.pipe";

export { IntersectionByPipe } from "./intersection-by.pipe";
export { IntersectionWithPipe } from "./intersection-with.pipe";
export { IntersectionPipe } from "./intersection.pipe";
export { JoinPipe } from "./join.pipe";
export { LastIndexOfPipe } from "./last-index-of.pipe";
export { LastPipe } from "./last.pipe";
export { NthPipe } from "./nth.pipe";
export { PullAllByPipe } from "./pull-all-by.pipe";
export { PullAllWithPipe } from "./pull-all-with.pipe";
export { PullAllPipe } from "./pull-all.pipe";
export { PullAtPipe } from "./pull-at.pipe";
export { PullPipe } from "./pull.pipe";

export { RemovePipe } from "./remove.pipe";
export { ReversePipe } from "./reverse.pipe";
export { SortedIndexByPipe } from "./sorted-index-by.pipe";
export { SortedIndexOfPipe } from "./sorted-index-of.pipe";
export { SortedIndexPipe } from "./sorted-index.pipe";
export { SortedLastIndexByPipe } from "./sorted-last-index-by.pipe";
export { SortedLastIndexOfPipe } from "./sorted-last-index-of.pipe";
export { SortedLastIndexPipe } from "./sorted-last-index.pipe";
export { SortedUniqByPipe } from "./sorted-uniq-by.pipe";
export { SortedUniqPipe } from "./sorted-uniq.pipe";
export { TailPipe } from "./tail.pipe";
export { TakeRightWhilePipe } from "./take-right-while.pipe";
export { TakeRightPipe } from "./take-right.pipe";

export { TakeWhilePipe } from "./take-while.pipe";
export { TakePipe } from "./take.pipe";
export { UnionByPipe } from "./union-by.pipe";
export { UnionWithPipe } from "./union-with.pipe";
export { UnionPipe } from "./union.pipe";
export { UniqWithPipe } from "./uniq-with.pipe";
export { UniqPipe } from "./uniq.pipe";
export { UnzipWithPipe } from "./unzip-with.pipe";
export { UnzipPipe } from "./unzip.pipe";
export { WithoutPipe } from "./without.pipe";
export { XorByPipe } from "./xor-by.pipe";
export { XorWithPipe } from "./xor-with.pipe";
export { XorPipe } from "./xor.pipe";
export { ZipObjectDeepPipe } from "./zip-object-deep.pipe";
export { ZipObjectPipe } from "./zip-object.pipe";
export { ZipWithPipe } from "./zip-with.pipe";
export { ZipPipe } from "./zip.pipe";
