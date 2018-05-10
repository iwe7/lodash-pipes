import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CamelCasePipe } from "./camel-case.pipe";
import { CapitalizePipe } from "./capitalize.pipe";
import { DeburrPipe } from "./deburr.pipe";
import { EndsWithPipe } from "./ends-with.pipe";
import { EscapeRegExpPipe } from "./escape-reg-exp.pipe";
import { EscapePipe } from "./escape.pipe";
import { KebabCasePipe } from "./kebab-case.pipe";
import { LowerCasePipe } from "./lower-case.pipe";
import { LowerFirstPipe } from "./lower-first.pipe";
import { PadEndPipe } from "./pad-end.pipe";

import { PadStartPipe } from "./pad-start.pipe";
import { PadPipe } from "./pad.pipe";
import { ParseIntPipe } from "./parse-int.pipe";
import { RepeatPipe } from "./repeat.pipe";
import { ReplacePipe } from "./replace.pipe";
import { SnakeCasePipe } from "./snake-case.pipe";
import { SplitPipe } from "./split.pipe";
import { StartCasePipe } from "./start-case.pipe";
import { StartsWithPipe } from "./starts-with.pipe";
import { TemplatePipe } from "./template.pipe";

import { ToLowerPipe } from "./to-lower.pipe";
import { ToUpperPipe } from "./to-upper.pipe";
import { TrimEndPipe } from "./trim-end.pipe";
import { TrimStartPipe } from "./trim-start.pipe";
import { TrimPipe } from "./trim.pipe";
import { TruncatePipe } from "./truncate.pipe";
import { UnescapePipe } from "./unescape.pipe";
import { UpperCasePipe } from "./upper-case.pipe";
import { UpperFirstPipe } from "./upper-first.pipe";
import { WordsPipe } from "./words.pipe";
export const StringPipes = [
  CamelCasePipe,
  CapitalizePipe,
  DeburrPipe,
  EndsWithPipe,
  EscapeRegExpPipe,
  EscapePipe,
  KebabCasePipe,
  LowerCasePipe,
  LowerFirstPipe,
  PadEndPipe,

  PadStartPipe,
  PadPipe,
  ParseIntPipe,
  RepeatPipe,
  ReplacePipe,
  SnakeCasePipe,
  SplitPipe,
  StartCasePipe,
  StartsWithPipe,
  TemplatePipe,

  ToLowerPipe,
  ToUpperPipe,
  TrimEndPipe,
  TrimStartPipe,
  TrimPipe,
  TruncatePipe,
  UnescapePipe,
  UpperCasePipe,
  UpperFirstPipe,
  WordsPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...StringPipes],
  exports: [...StringPipes]
})
export class PipesStringModule {}

export { CamelCasePipe } from "./camel-case.pipe";
export { CapitalizePipe } from "./capitalize.pipe";
export { DeburrPipe } from "./deburr.pipe";
export { EndsWithPipe } from "./ends-with.pipe";
export { EscapeRegExpPipe } from "./escape-reg-exp.pipe";
export { EscapePipe } from "./escape.pipe";
export { KebabCasePipe } from "./kebab-case.pipe";
export { LowerCasePipe } from "./lower-case.pipe";
export { LowerFirstPipe } from "./lower-first.pipe";
export { PadEndPipe } from "./pad-end.pipe";

export { PadStartPipe } from "./pad-start.pipe";
export { PadPipe } from "./pad.pipe";
export { ParseIntPipe } from "./parse-int.pipe";
export { RepeatPipe } from "./repeat.pipe";
export { ReplacePipe } from "./replace.pipe";
export { SnakeCasePipe } from "./snake-case.pipe";
export { SplitPipe } from "./split.pipe";
export { StartCasePipe } from "./start-case.pipe";
export { StartsWithPipe } from "./starts-with.pipe";
export { TemplatePipe } from "./template.pipe";

export { ToLowerPipe } from "./to-lower.pipe";
export { ToUpperPipe } from "./to-upper.pipe";
export { TrimEndPipe } from "./trim-end.pipe";
export { TrimStartPipe } from "./trim-start.pipe";
export { TrimPipe } from "./trim.pipe";
export { TruncatePipe } from "./truncate.pipe";
export { UnescapePipe } from "./unescape.pipe";
export { UpperCasePipe } from "./upper-case.pipe";
export { UpperFirstPipe } from "./upper-first.pipe";
export { WordsPipe } from "./words.pipe";
