import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddPipe } from "./add.pipe";
import { CeilPipe } from "./ceil.pipe";
import { DividePipe } from "./divide.pipe";
import { FloorPipe } from "./floor.pipe";
import { MaxByPipe } from "./max-by.pipe";
import { MaxPipe } from "./max.pipe";
import { MeanByPipe } from "./mean-by.pipe";
import { MeanPipe } from "./mean.pipe";
import { MinByPipe } from "./min-by.pipe";
import { MinPipe } from "./min.pipe";
import { MultiplyPipe } from "./multiply.pipe";
import { RoundPipe } from "./round.pipe";
import { SubtractPipe } from "./subtract.pipe";
import { SumByPipe } from "./sum-by.pipe";
import { SumPipe } from "./sum.pipe";
export const MathPipes = [
  AddPipe,
  CeilPipe,
  DividePipe,
  FloorPipe,
  MaxByPipe,
  MaxPipe,
  MeanByPipe,
  MeanPipe,
  MinByPipe,
  MinPipe,
  MultiplyPipe,
  RoundPipe,
  SubtractPipe,
  SumByPipe,
  SumPipe
];
@NgModule({
  imports: [CommonModule],
  declarations: [...MathPipes],
  exports: [...MathPipes]
})
export class PipesMathModule {}
export { AddPipe } from "./add.pipe";
export { CeilPipe } from "./ceil.pipe";
export { DividePipe } from "./divide.pipe";
export { FloorPipe } from "./floor.pipe";
export { MaxByPipe } from "./max-by.pipe";
export { MaxPipe } from "./max.pipe";
export { MeanByPipe } from "./mean-by.pipe";
export { MeanPipe } from "./mean.pipe";
export { MinByPipe } from "./min-by.pipe";
export { MinPipe } from "./min.pipe";
export { MultiplyPipe } from "./multiply.pipe";
export { RoundPipe } from "./round.pipe";
export { SubtractPipe } from "./subtract.pipe";
export { SumByPipe } from "./sum-by.pipe";
export { SumPipe } from "./sum.pipe";
