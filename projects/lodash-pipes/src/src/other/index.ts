import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DeepEqualPipe } from "./deep-equal.pipe";
import { DeepExtendPipe } from "./deep-extend.pipe";
import { ToBooleanPipe } from "./to-boolean";
import { UuidV1Pipe } from "./uuid-v1.pipe";
import { UuidV3Pipe } from "./uuid-v3.pipe";
import { UuidV4Pipe } from "./uuid-v4.pipe";
import { UuidV5Pipe } from "./uuid-v5.pipe";
import { YeastPipe } from "./yeast.pipe";

export const OtherPipes = [
  DeepEqualPipe,
  DeepExtendPipe,
  ToBooleanPipe,
  UuidV1Pipe,
  UuidV3Pipe,
  UuidV4Pipe,
  UuidV5Pipe,
  YeastPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...OtherPipes],
  exports: [...OtherPipes]
})
export class PipesOtherModule {}

export { DeepEqualPipe } from "./deep-equal.pipe";
export { DeepExtendPipe } from "./deep-extend.pipe";
export { ToBooleanPipe, toBoolean } from "./to-boolean";
export { UuidV1Pipe } from "./uuid-v1.pipe";
export { UuidV3Pipe } from "./uuid-v3.pipe";
export { UuidV4Pipe } from "./uuid-v4.pipe";
export { UuidV5Pipe } from "./uuid-v5.pipe";
export { YeastPipe, yeast } from "./yeast.pipe";
