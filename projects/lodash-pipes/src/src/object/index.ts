import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AssignInWithPipe } from "./assign-in-with.pipe";
import { AssignInPipe } from "./assign-in.pipe";
import { AssignWithPipe } from "./assign-with.pipe";
import { AssignPipe } from "./assign.pipe";
import { AtPipe } from "./at.pipe";
import { CreatePipe } from "./create.pipe";
import { DefaultsDeepPipe } from "./defaults-deep.pipe";
import { DefaultsPipe } from "./defaults.pipe";
import { EntriesInPipe } from "./entries-in.pipe";
import { EntriesPipe } from "./entries.pipe";

import { ExtendWithPipe } from "./extend-with.pipe";
import { ExtendPipe } from "./extend.pipe";
import { FindKeyPipe } from "./find-key.pipe";
import { FindLastKeyPipe } from "./find-last-key.pipe";
import { ForInRightPipe } from "./for-in-right.pipe";
import { ForInPipe } from "./for-in.pipe";
import { ForOwnRightPipe } from "./for-own-right.pipe";
import { ForOwnPipe } from "./for-own.pipe";
import { FunctionsInPipe } from "./functions-in.pipe";
import { FunctionsPipe } from "./functions.pipe";

import { GetPipe } from "./get.pipe";
import { HasInPipe } from "./has-in.pipe";
import { HasPipe } from "./has.pipe";
import { InvertByPipe } from "./invert-by.pipe";
import { InvertPipe } from "./invert.pipe";
import { InvokePipe } from "./invoke.pipe";
import { KeysInPipe } from "./keys-in.pipe";
import { KeysPipe } from "./keys.pipe";

import { MapKeysPipe } from "./map-keys.pipe";
import { MapValuesPipe } from "./map-values.pipe";
import { MergeWithPipe } from "./merge-with.pipe";
import { MergePipe } from "./merge.pipe";
import { OmitByPipe } from "./omit-by.pipe";
import { OmitPipe } from "./omit.pipe";
import { PickByPipe } from "./pick-by.pipe";
import { PickPipe } from "./pick.pipe";
import { ResultPipe } from "./result.pipe";
import { SetWithPipe } from "./set-with.pipe";
import { SetPipe } from "./set.pipe";
import { ToPairsInPipe } from "./to-pairs-in.pipe";
import { ToPairsPipe } from "./to-pairs.pipe";
import { TransformPipe } from "./transform.pipe";
import { UnsetPipe } from "./unset.pipe";
import { UpdateWithPipe } from "./update-with.pipe";
import { UpdatePipe } from "./update.pipe";
import { ValuesInPipe } from "./values-in.pipe";
import { ValuesPipe } from "./values.pipe";
export const ObjectPipes = [
  MapKeysPipe,
  MapValuesPipe,
  MergeWithPipe,
  MergePipe,
  OmitByPipe,
  OmitPipe,
  PickByPipe,
  PickPipe,
  ResultPipe,
  SetWithPipe,
  SetPipe,
  ToPairsInPipe,
  ToPairsPipe,
  TransformPipe,
  UnsetPipe,
  UpdateWithPipe,
  UpdatePipe,
  ValuesInPipe,
  ValuesPipe,
  GetPipe,
  HasInPipe,
  HasPipe,
  InvertPipe,
  InvertByPipe,
  KeysInPipe,
  KeysPipe,
  AssignInWithPipe,
  AssignInPipe,
  AssignWithPipe,
  AssignPipe,
  AtPipe,
  CreatePipe,
  DefaultsDeepPipe,
  DefaultsPipe,
  EntriesInPipe,
  EntriesPipe,
  ExtendWithPipe,
  ExtendPipe,
  FindKeyPipe,
  FindLastKeyPipe,
  ForInRightPipe,
  ForInPipe,
  ForOwnRightPipe,
  ForOwnPipe,
  FunctionsInPipe,
  FunctionsPipe,
  InvokePipe
];
@NgModule({
  imports: [CommonModule],
  declarations: [...ObjectPipes],
  exports: [...ObjectPipes]
})
export class PipesObjectModule {}

export { AssignInWithPipe } from "./assign-in-with.pipe";
export { AssignInPipe } from "./assign-in.pipe";
export { AssignWithPipe } from "./assign-with.pipe";
export { AssignPipe } from "./assign.pipe";
export { AtPipe } from "./at.pipe";
export { CreatePipe } from "./create.pipe";
export { DefaultsDeepPipe } from "./defaults-deep.pipe";
export { DefaultsPipe } from "./defaults.pipe";
export { EntriesInPipe } from "./entries-in.pipe";
export { EntriesPipe } from "./entries.pipe";

export { ExtendWithPipe } from "./extend-with.pipe";
export { ExtendPipe } from "./extend.pipe";
export { FindKeyPipe } from "./find-key.pipe";
export { FindLastKeyPipe } from "./find-last-key.pipe";
export { ForInRightPipe } from "./for-in-right.pipe";
export { ForInPipe } from "./for-in.pipe";
export { ForOwnRightPipe } from "./for-own-right.pipe";
export { ForOwnPipe } from "./for-own.pipe";
export { FunctionsInPipe } from "./functions-in.pipe";
export { FunctionsPipe } from "./functions.pipe";

export { GetPipe } from "./get.pipe";
export { HasInPipe } from "./has-in.pipe";
export { HasPipe } from "./has.pipe";
export { InvertByPipe } from "./invert-by.pipe";
export { InvertPipe } from "./invert.pipe";
export { InvokePipe } from "./invoke.pipe";
export { KeysInPipe } from "./keys-in.pipe";
export { KeysPipe } from "./keys.pipe";

export { MapKeysPipe } from "./map-keys.pipe";
export { MapValuesPipe } from "./map-values.pipe";
export { MergeWithPipe } from "./merge-with.pipe";
export { MergePipe } from "./merge.pipe";
export { OmitByPipe } from "./omit-by.pipe";
export { OmitPipe } from "./omit.pipe";
export { PickByPipe } from "./pick-by.pipe";
export { PickPipe } from "./pick.pipe";
export { ResultPipe } from "./result.pipe";
export { SetWithPipe } from "./set-with.pipe";
export { SetPipe } from "./set.pipe";
export { ToPairsInPipe } from "./to-pairs-in.pipe";
export { ToPairsPipe } from "./to-pairs.pipe";
export { TransformPipe } from "./transform.pipe";
export { UnsetPipe } from "./unset.pipe";
export { UpdateWithPipe } from "./update-with.pipe";
export { UpdatePipe } from "./update.pipe";
export { ValuesInPipe } from "./values-in.pipe";
export { ValuesPipe } from "./values.pipe";
