import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CastArrayPipe } from "./cast-array.pipe";
import { CloneDeepWithPipe } from "./clone-deep-with.pipe";
import { CloneDeepPipe } from "./clone-deep.pipe";
import { CloneWithPipe } from "./clone-with.pipe";
import { ClonePipe } from "./clone.pipe";

import { ConformsToPipe } from "./conforms-to.pipe";
import { EqPipe } from "./eq.pipe";
import { GtPipe } from "./gt.pipe";
import { GtePipe } from "./gte.pipe";
import { IsArgumentsPipe } from "./is-arguments.pipe";

import { IsArrayBufferPipe } from "./is-array-buffer.pipe";
import { IsArrayLikeObjectPipe } from "./is-array-like-object.pipe";
import { IsArrayLikePipe } from "./is-array-like.pipe";
import { IsArrayPipe } from "./is-array.pipe";
import { IsBooleanPipe } from "./is-boolean.pipe";

import { IsBufferPipe } from "./is-buffer.pipe";
import { IsDatePipe } from "./is-date.pipe";
import { IsElementPipe } from "./is-element.pipe";
import { IsEmptyPipe } from "./is-empty.pipe";
import { IsEqualWithPipe } from "./is-equal-with.pipe";

import { IsEqualPipe } from "./is-equal.pipe";
import { IsErrorPipe } from "./is-error.pipe";
import { IsFinitePipe } from "./is-finite.pipe";
import { IsFunctionPipe } from "./is-function.pipe";
import { IsIntegerPipe } from "./is-integer.pipe";

import { IsLengthPipe } from "./is-length.pipe";
import { IsMapPipe } from "./is-map.pipe";
import { IsMatchWithPipe } from "./is-match-with.pipe";
import { IsMatchPipe } from "./is-match.pipe";
import { IsNaNPipe } from "./is-na-n.pipe";

import { IsNativePipe } from "./is-native.pipe";
import { IsNilPipe } from "./is-nil.pipe";
import { IsNullPipe } from "./is-null.pipe";
import { IsNumberPipe } from "./is-number.pipe";
import { IsObjectLikePipe } from "./is-object-like.pipe";

import { IsObjectPipe } from "./is-object.pipe";
import { IsPlainObjectPipe } from "./is-plain-object.pipe";
import { IsSetPipe } from "./is-set.pipe";
import { IsStringPipe } from "./is-string.pipe";
import { IsSymbolPipe } from "./is-symbol.pipe";

import { IsTypedArrayPipe } from "./is-typed-array.pipe";
import { IsUndefinedPipe } from "./is-undefined.pipe";
import { IsWeakMapPipe } from "./is-weak-map.pipe";
import { IsWeakSetPipe } from "./is-weak-set.pipe";
import { LtPipe } from "./lt.pipe";
import { LtePipe } from "./lte.pipe";
import { ToArrayPipe } from "./to-array.pipe";
import { ToFinitePipe } from "./to-finite.pipe";
import { ToIntegerPipe } from "./to-integer.pipe";

import { ToLengthPipe } from "./to-length.pipe";
import { ToNumberPipe } from "./to-number.pipe";
import { ToPlainObjectPipe } from "./to-plain-object.pipe";
import { ToSafeIntegerPipe } from "./to-safe-integer.pipe";
import { ToStringPipe } from "./to-string.pipe";
export const LangPipes = [
  CastArrayPipe,
  CloneDeepWithPipe,
  CloneDeepPipe,
  CloneWithPipe,
  ClonePipe,

  ConformsToPipe,
  EqPipe,
  GtPipe,
  GtePipe,
  IsArgumentsPipe,

  IsArrayBufferPipe,
  IsArrayLikeObjectPipe,
  IsArrayLikePipe,
  IsArrayPipe,
  IsBooleanPipe,

  IsBufferPipe,
  IsDatePipe,
  IsElementPipe,
  IsEmptyPipe,
  IsEqualWithPipe,

  IsEqualPipe,
  IsErrorPipe,
  IsFinitePipe,
  IsFunctionPipe,
  IsIntegerPipe,

  IsLengthPipe,
  IsMapPipe,
  IsMatchWithPipe,
  IsMatchPipe,
  IsNaNPipe,

  IsNativePipe,
  IsNilPipe,
  IsNullPipe,
  IsNumberPipe,
  IsObjectLikePipe,

  IsObjectPipe,
  IsPlainObjectPipe,
  IsSetPipe,
  IsStringPipe,
  IsSymbolPipe,

  IsTypedArrayPipe,
  IsUndefinedPipe,
  IsWeakMapPipe,
  IsWeakSetPipe,
  LtPipe,
  LtePipe,
  ToArrayPipe,
  ToFinitePipe,
  ToIntegerPipe,

  ToLengthPipe,
  ToNumberPipe,
  ToPlainObjectPipe,
  ToSafeIntegerPipe,
  ToStringPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...LangPipes],
  exports: [...LangPipes]
})
export class PipesLangModule {}
