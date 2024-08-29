/* eslint-disable no-unused-vars */
import {createStore, createEvent, sample} from 'effector'
const typecheck = '{global}'
// trigger types
type DataExact = {c: number; d: string}
type DataSrc = {c: number}
type DataClk = {d: string}

// fn return types
type Exact = {a: number; b: string}
type ExactBad = {a: string; b: string}
type Narrow = {a: number}
type ExactNullable = {a: number; b: string} | null
type ExactNarrow = {a: number; b: string} | {a: number}
type ExactBadNarrow = {a: string; b: string} | {a: number}
type ExactExactBad = {a: number; b: string} | {a: string; b: string}

const exact = createEvent<{a: number; b: string}>()
const exactBad = createEvent<{a: string; b: string}>()
const narrow = createEvent<{a: number}>()
const exactNullable = createEvent<{a: number; b: string} | null>()
const exactNarrow = createEvent<{a: number; b: string} | {a: number}>()
const exactBadNarrow = createEvent<{a: string; b: string} | {a: number}>()
const exactExactBad = createEvent<
  {a: number; b: string} | {a: string; b: string}
>()

const clockExact = createEvent<{c: number; d: string}>()
const clockExactBad = createEvent<{c: string; d: string}>()
const clockNarrow = createEvent<{c: number}>()
const clockExactNullable = createEvent<{c: number; d: string} | null>()
const clockExactNarrow = createEvent<{c: number; d: string} | {c: number}>()
const clockExactBadNarrow = createEvent<{c: string; d: string} | {c: number}>()
const clockExactExactBad = createEvent<
  {c: number; d: string} | {c: string; d: string}
>()

const dataClock = createEvent<{d: string}>()

const $c = createStore<number>(0)
const $d = createStore<string>('')

const $dataExact = createStore<{c: number; d: string}>({c: 0, d: ''})
const $dataSrc = createStore<{c: number}>({c: 0})
describe('assert fn args', () => {
  describe('assert fn args', () => {
    test('assert fn args (should pass)', () => {
      //prettier-ignore
      {
        sample({clock:clockExact, target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})         })
        sample({source:$dataExact    , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})         })
        sample({source:{c: $c, d: $d}, target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})         })
        sample({source:$dataSrc      , clock:dataClock , target:exact, fn:({c}: DataSrc, {d}: DataClk) => ({a: c, b: d})})
        sample({source:{c: $c}       , clock:dataClock , target:exact, fn:({c}: DataSrc, {d}: DataClk) => ({a: c, b: d})})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('assert fn args (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({clock:clockExactBad                           , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:clockNarrow                             , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:clockExactNullable                      , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:clockExactNarrow                        , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:clockExactBadNarrow                     , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:clockExactExactBad                      , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExact,clockExactBad]              , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExact,clockNarrow]                , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExact,clockExactNullable]         , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExact,clockExactNarrow]           , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExact,clockExactBadNarrow]        , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExact,clockExactExactBad]         , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExactBad,clockExactNullable]      , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExactBad,clockExactNarrow]        , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExactBad,clockExactBadNarrow]     , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExactBad,clockExactExactBad]      , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockNarrow,clockExactBad]             , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockNarrow,clockExactNullable]        , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockNarrow,clockExactBadNarrow]       , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockNarrow,clockExactExactBad]        , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExactNullable,clockExactBadNarrow], target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExactNarrow,clockExactNullable]   , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExactNarrow,clockExactBadNarrow]  , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExactExactBad,clockExactNullable] , target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
        //@ts-expect-error
        sample({clock:[clockExactExactBad,clockExactBadNarrow], target:exact, fn:({c, d}: DataExact) => ({a: c, b: d})})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: string; d: string; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: string; d: string; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
                Types of property 'c' are incompatible.
                  Type 'string' is not assignable to type 'number'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Property 'd' is missing in type '{ c: number; }' but required in type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | null) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | null) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | null' is not assignable to type 'DataExact'.
                Type 'null' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: number; }' is not assignable to type 'DataExact'.
                Property 'd' is missing in type '{ c: number; }' but required in type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: string; d: string; } | { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: string; d: string; } | { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: string; d: string; } | { c: number; }' is not assignable to type 'DataExact'.
                Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
                  Types of property 'c' are incompatible.
                    Type 'string' is not assignable to type 'number'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: string; d: string; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: string; d: string; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: string; d: string; }' is not assignable to type 'DataExact'.
                Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
                  Types of property 'c' are incompatible.
                    Type 'string' is not assignable to type 'number'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: string; d: string; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: string; d: string; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: string; d: string; }' is not assignable to type 'DataExact'.
                Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: number; }' is not assignable to type 'DataExact'.
                Type '{ c: number; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: number; d: string; } | null) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: number; d: string; } | null) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: number; d: string; } | null' is not assignable to type 'DataExact'.
                Type 'null' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: number; d: string; } | { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: number; d: string; } | { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: number; d: string; } | { c: number; }' is not assignable to type 'DataExact'.
                Type '{ c: number; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: string; d: string; } | { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: string; d: string; } | { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: string; d: string; } | { c: number; }' is not assignable to type 'DataExact'.
                Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: number; d: string; } | { c: string; d: string; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: number; d: string; } | { c: string; d: string; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: number; d: string; } | { c: string; d: string; }' is not assignable to type 'DataExact'.
                Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: string; d: string; } | { c: number; d: string; } | null) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: string; d: string; } | { c: number; d: string; } | null) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: string; d: string; } | { c: number; d: string; } | null' is not assignable to type 'DataExact'.
                Type 'null' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: string; d: string; } | { c: number; d: string; } | { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: string; d: string; } | { c: number; d: string; } | { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: string; d: string; } | { c: number; d: string; } | { c: number; }' is not assignable to type 'DataExact'.
                Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: string; d: string; } | { c: string; d: string; } | { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: string; d: string; } | { c: string; d: string; } | { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: string; d: string; } | { c: string; d: string; } | { c: number; }' is not assignable to type 'DataExact'.
                Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: string; d: string; } | { c: number; d: string; } | { c: string; d: string; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: string; d: string; } | { c: number; d: string; } | { c: string; d: string; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: string; d: string; } | { c: number; d: string; } | { c: string; d: string; }' is not assignable to type 'DataExact'.
                Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: string; d: string; } | { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: string; d: string; } | { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: string; d: string; } | { c: number; }' is not assignable to type 'DataExact'.
                Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; } | { c: number; d: string; } | null) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; } | { c: number; d: string; } | null) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; } | { c: number; d: string; } | null' is not assignable to type 'DataExact'.
                Type 'null' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; } | { c: string; d: string; } | { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; } | { c: string; d: string; } | { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; } | { c: string; d: string; } | { c: number; }' is not assignable to type 'DataExact'.
                Type '{ c: number; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; } | { c: number; d: string; } | { c: string; d: string; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; } | { c: number; d: string; } | { c: string; d: string; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; } | { c: number; d: string; } | { c: string; d: string; }' is not assignable to type 'DataExact'.
                Type '{ c: number; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: string; d: string; } | { c: number; } | null) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: string; d: string; } | { c: number; } | null) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: string; d: string; } | { c: number; } | null' is not assignable to type 'DataExact'.
                Type 'null' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: number; d: string; } | { c: number; } | null) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: number; d: string; } | { c: number; } | null) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: number; d: string; } | { c: number; } | null' is not assignable to type 'DataExact'.
                Type 'null' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: number; } | { c: string; d: string; } | { c: number; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: number; } | { c: string; d: string; } | { c: number; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: number; } | { c: string; d: string; } | { c: number; }' is not assignable to type 'DataExact'.
                Type '{ c: number; }' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: number; d: string; } | { c: number; d: string; } | { c: string; d: string; } | null) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: number; d: string; } | { c: number; d: string; } | { c: string; d: string; } | null) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: number; d: string; } | { c: number; d: string; } | { c: string; d: string; } | null' is not assignable to type 'DataExact'.
                Type 'null' is not assignable to type 'DataExact'.
        Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '((clk: { c: string; d: string; } | { c: number; } | { c: number; d: string; } | { c: string; d: string; }) => any) & (({ c, d }: DataExact) => { a: number; b: string; })'.
          Type '({ c, d }: DataExact) => { a: number; b: string; }' is not assignable to type '(clk: { c: string; d: string; } | { c: number; } | { c: number; d: string; } | { c: string; d: string; }) => any'.
            Types of parameters '__0' and 'clk' are incompatible.
              Type '{ c: string; d: string; } | { c: number; } | { c: number; d: string; } | { c: string; d: string; }' is not assignable to type 'DataExact'.
                Type '{ c: string; d: string; }' is not assignable to type 'DataExact'.
        "
      `)
    })
  })
})
describe('bad fn', () => {
  test('bad fn (should fail)', () => {
    //prettier-ignore
    {
      //@ts-expect-error
      sample({clock:clockExact, target:exact, fn:null})
      //@ts-expect-error
      sample({source:$dataExact    , target:exact, fn:null})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:exact, fn:null})
      //@ts-expect-error
      sample({source:$dataSrc      , clock:dataClock , target:exact, fn:null})
      //@ts-expect-error
      sample({source:{c: $c}       , clock:dataClock , target:exact, fn:null})
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Type 'EventCallable<{ c: number; d: string; }>' is not assignable to type 'never'.
      Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'never'.
      Type 'null' is not assignable to type 'never'.
      Type 'StoreWritable<{ c: number; d: string; }>' is not assignable to type 'never'.
      Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'never'.
      Type 'null' is not assignable to type 'never'.
      Type '{ c: StoreWritable<number>; d: StoreWritable<string>; }' is not assignable to type 'never'.
      Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'never'.
      Type 'null' is not assignable to type 'never'.
      Type 'StoreWritable<{ c: number; }>' is not assignable to type 'never'.
      Type 'EventCallable<{ d: string; }>' is not assignable to type 'never'.
      Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'never'.
      Type 'null' is not assignable to type 'never'.
      Type '{ c: StoreWritable<number>; }' is not assignable to type 'never'.
      Type 'EventCallable<{ d: string; }>' is not assignable to type 'never'.
      Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'never'.
      Type 'null' is not assignable to type 'never'.
      "
    `)
  })
})
describe('clock exact', () => {
  test('clock exact (should pass)', () => {
    //prettier-ignore
    {
      sample({clock:clockExact, target:exact                        , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:exactNullable                , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:exactNarrow                  , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:exactExactBad                , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:[exact,narrow]               , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:[exact,exactNullable]        , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:[exact,exactNarrow]          , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:[exact,exactExactBad]        , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:[narrow,exactNullable]       , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:[narrow,exactExactBad]       , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:[exactNarrow,exactNullable]  , fn:({c, d}) => ({a: c, b: d})})
      sample({clock:clockExact, target:[exactExactBad,exactNullable], fn:({c, d}) => ({a: c, b: d})})
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      no errors
      "
    `)
  })
  test('clock exact (should fail)', () => {
    //prettier-ignore
    {
      //@ts-expect-error
      sample({clock:clockExact, target:exactBad                      , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:narrow                        , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:exactBadNarrow                , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[exact,exactBad]              , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[exact,exactBadNarrow]        , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[exactBad,exactNullable]      , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[exactBad,exactNarrow]        , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[exactBad,exactBadNarrow]     , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[exactBad,exactExactBad]      , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[narrow,exactBad]             , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[narrow,exactBadNarrow]       , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[exactNullable,exactBadNarrow], fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[exactNarrow,exactBadNarrow]  , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({clock:clockExact, target:[exactExactBad,exactBadNarrow], fn:({c, d}) => ({a: c, b: d})})
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; b: string; }'.
            Type 'null' is not assignable to type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: number; b: string; }'.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; b: string; }'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      "
    `)
  })
})
test('clock exact bad (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({clock:clockExact, target:exact                         , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:narrow                        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:exactNullable                 , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:exactNarrow                   , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBad]              , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,narrow]                , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNullable]         , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNarrow]           , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBadNarrow]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactExactBad]         , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNullable]      , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNarrow]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactBad]             , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactNullable]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactBadNarrow]       , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactExactBad]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNullable,exactBadNarrow], fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNarrow,exactNullable]   , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNarrow,exactBadNarrow]  , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactExactBad,exactNullable] , fn:({d}) => ({a: "no", b: d})})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    "
  `)
})
test('clock narrow (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({clock:clockExact, target:exact                         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:exactBad                      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:exactNullable                 , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:exactExactBad                 , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBad]              , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,narrow]                , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNullable]         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNarrow]           , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBadNarrow]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactExactBad]         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNullable]      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNarrow]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactBadNarrow]     , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactExactBad]      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactBad]             , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactNullable]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactExactBad]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNullable,exactBadNarrow], fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNarrow,exactNullable]   , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactExactBad,exactNullable] , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactExactBad,exactBadNarrow], fn:({c}) => ({a: c})})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    "
  `)
})
test('clock exact nullable (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({clock:clockExact, target:exact                         , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:exactBad                      , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:narrow                        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:exactNarrow                   , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:exactBadNarrow                , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:exactExactBad                 , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBad]              , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,narrow]                , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNullable]         , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNarrow]           , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBadNarrow]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactExactBad]         , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNullable]      , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNarrow]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactBadNarrow]     , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactExactBad]      , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactBad]             , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactNullable]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactBadNarrow]       , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactExactBad]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNarrow,exactBadNarrow]  , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactExactBad,exactNullable] , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactExactBad,exactBadNarrow], fn:({c, d}): ExactNullable => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactNullable' is not assignable to type '{ a: number; b: string; }'.
      Type 'null' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type 'ExactNullable'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type 'ExactNullable'.
          Type '{ a: string; b: string; }' is not assignable to type 'ExactNullable'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type 'ExactNullable'.
          Type '{ a: string; b: string; }' is not assignable to type 'ExactNullable'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; b: string; } | null; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    "
  `)
})
test('clock exact / narrow (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({clock:clockExact, target:exact                         , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:exactBad                      , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:exactNullable                 , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:exactExactBad                 , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBad]              , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,narrow]                , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNullable]         , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNarrow]           , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBadNarrow]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactExactBad]         , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNullable]      , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNarrow]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactBadNarrow]     , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactExactBad]      , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactBad]             , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactNullable]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactExactBad]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactExactBad,exactNullable] , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactExactBad,exactBadNarrow], fn:({c, d}): ExactNarrow => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactNarrow' is not assignable to type '{ a: number; b: string; }'.
      Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; }' is not assignable to type 'ExactNarrow'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type 'ExactNarrow'.
          Type 'null' is not assignable to type 'ExactNarrow'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type 'ExactNarrow'.
          Type '{ a: string; b: string; }' is not assignable to type 'ExactNarrow'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type 'ExactNarrow'.
          Type '{ a: string; b: string; }' is not assignable to type 'ExactNarrow'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    "
  `)
})
test('clock exact bad / narrow (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({clock:clockExact, target:exact                         , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:exactNullable                 , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBad]              , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,narrow]                , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNullable]         , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNarrow]           , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBadNarrow]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactExactBad]         , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNullable]      , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNarrow]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactBad]             , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactNullable]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactExactBad]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactExactBad,exactNullable] , fn:({c, d}): ExactBadNarrow => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
        Types of property 'a' are incompatible.
          Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type 'ExactBadNarrow'.
          Type 'null' is not assignable to type 'ExactBadNarrow'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: string; b: string; }'.
      Type '{ a: number; }' is not assignable to type '{ a: number; b: string; } | { a: string; b: string; }'.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; } | { a: number; }'.
        Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: number; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: number; }'.
        Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
          Types of property 'a' are incompatible.
            Type 'string' is not assignable to type 'number'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: string; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }'.
      Type '{ a: number; }' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }'.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: string; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: string; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; } | { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    "
  `)
})
test('clock exact / exact bad (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({clock:clockExact, target:exact                         , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:narrow                        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:exactNullable                 , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:exactNarrow                   , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBad]              , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,narrow]                , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNullable]         , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactNarrow]           , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactBadNarrow]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exact,exactExactBad]         , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNullable]      , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactBad,exactNarrow]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactBad]             , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactNullable]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactBadNarrow]       , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[narrow,exactExactBad]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactNarrow,exactBadNarrow]  , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({clock:clockExact, target:[exactExactBad,exactNullable] , fn:({c, d}): ExactExactBad => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactExactBad' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
        Types of property 'a' are incompatible.
          Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
      Types of property '__' are incompatible.
        Type '{ a: number; }' is not assignable to type 'ExactExactBad'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type 'ExactExactBad'.
          Type 'null' is not assignable to type 'ExactExactBad'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type 'ExactExactBad'.
          Type '{ a: number; }' is not assignable to type 'ExactExactBad'.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type 'ExactExactBad'.
          Type '{ a: number; }' is not assignable to type 'ExactExactBad'.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    "
  `)
})
describe('source exact', () => {
  test('source exact (should pass)', () => {
    //prettier-ignore
    {
      sample({source:$dataExact    , target:exact                        , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:exactNullable                , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:exactNarrow                  , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:exactExactBad                , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:[exact,narrow]               , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:[exact,exactNullable]        , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:[exact,exactNarrow]          , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:[exact,exactExactBad]        , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:[narrow,exactNullable]       , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:[narrow,exactExactBad]       , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:[exactNarrow,exactNullable]  , fn:({c, d}) => ({a: c, b: d})})
      sample({source:$dataExact    , target:[exactExactBad,exactNullable], fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:exact                        , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:exactNullable                , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:exactNarrow                  , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:exactExactBad                , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:[exact,narrow]               , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:[exact,exactNullable]        , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:[exact,exactNarrow]          , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:[exact,exactExactBad]        , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:[narrow,exactNullable]       , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:[narrow,exactExactBad]       , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:[exactNarrow,exactNullable]  , fn:({c, d}) => ({a: c, b: d})})
      sample({source:{c: $c, d: $d}, target:[exactExactBad,exactNullable], fn:({c, d}) => ({a: c, b: d})})
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      no errors
      "
    `)
  })
  test('source exact (should fail)', () => {
    //prettier-ignore
    {
      //@ts-expect-error
      sample({source:$dataExact    , target:exactBad                      , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:narrow                        , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:exactBadNarrow                , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[exact,exactBad]              , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[exact,exactBadNarrow]        , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[exactBad,exactNullable]      , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[exactBad,exactNarrow]        , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[exactBad,exactBadNarrow]     , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[exactBad,exactExactBad]      , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[narrow,exactBad]             , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[narrow,exactBadNarrow]       , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[exactNullable,exactBadNarrow], fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[exactNarrow,exactBadNarrow]  , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataExact    , target:[exactExactBad,exactBadNarrow], fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:exactBad                      , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:narrow                        , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:exactBadNarrow                , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[exact,exactBad]              , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[exact,exactBadNarrow]        , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[exactBad,exactNullable]      , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[exactBad,exactNarrow]        , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[exactBad,exactBadNarrow]     , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[exactBad,exactExactBad]      , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[narrow,exactBad]             , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[narrow,exactBadNarrow]       , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[exactNullable,exactBadNarrow], fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[exactNarrow,exactBadNarrow]  , fn:({c, d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c, d: $d}, target:[exactExactBad,exactBadNarrow], fn:({c, d}) => ({a: c, b: d})})
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; b: string; }'.
            Type 'null' is not assignable to type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: number; b: string; }'.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; b: string; }'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; b: string; }'.
            Type 'null' is not assignable to type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: number; b: string; }'.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; b: string; }'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      "
    `)
  })
})
test('source exact bad (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataExact    , target:exact                         , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:narrow                        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactNullable                 , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactNarrow                   , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBad]              , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,narrow]                , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNullable]         , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNarrow]           , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBadNarrow]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactExactBad]         , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNullable]      , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNarrow]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactBad]             , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactNullable]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactBadNarrow]       , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactExactBad]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNullable,exactBadNarrow], fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNarrow,exactNullable]   , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNarrow,exactBadNarrow]  , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactExactBad,exactNullable] , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exact                         , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:narrow                        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactNullable                 , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactNarrow                   , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBad]              , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,narrow]                , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNullable]         , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNarrow]           , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBadNarrow]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactExactBad]         , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNullable]      , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNarrow]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactBad]             , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactNullable]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactBadNarrow]       , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactExactBad]        , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNullable,exactBadNarrow], fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNarrow,exactNullable]   , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNarrow,exactBadNarrow]  , fn:({d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactExactBad,exactNullable] , fn:({d}) => ({a: "no", b: d})})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    "
  `)
})
test('source narrow (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataExact    , target:exact                         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactBad                      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactNullable                 , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactExactBad                 , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBad]              , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,narrow]                , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNullable]         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNarrow]           , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBadNarrow]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactExactBad]         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNullable]      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNarrow]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactBadNarrow]     , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactExactBad]      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactBad]             , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactNullable]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactExactBad]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNullable,exactBadNarrow], fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNarrow,exactNullable]   , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactExactBad,exactNullable] , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactExactBad,exactBadNarrow], fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exact                         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactBad                      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactNullable                 , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactExactBad                 , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBad]              , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,narrow]                , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNullable]         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNarrow]           , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBadNarrow]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactExactBad]         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNullable]      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNarrow]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactBadNarrow]     , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactExactBad]      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactBad]             , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactNullable]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactExactBad]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNullable,exactBadNarrow], fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNarrow,exactNullable]   , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactExactBad,exactNullable] , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactExactBad,exactBadNarrow], fn:({c}) => ({a: c})})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    "
  `)
})
test('source exact nullable (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataExact    , target:exact                         , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactBad                      , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:narrow                        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactNarrow                   , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactBadNarrow                , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactExactBad                 , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBad]              , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,narrow]                , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNullable]         , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNarrow]           , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBadNarrow]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactExactBad]         , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNullable]      , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNarrow]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactBadNarrow]     , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactExactBad]      , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactBad]             , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactNullable]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactBadNarrow]       , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactExactBad]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNarrow,exactBadNarrow]  , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactExactBad,exactNullable] , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactExactBad,exactBadNarrow], fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exact                         , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactBad                      , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:narrow                        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactNarrow                   , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactBadNarrow                , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactExactBad                 , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBad]              , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,narrow]                , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNullable]         , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNarrow]           , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBadNarrow]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactExactBad]         , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNullable]      , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNarrow]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactBadNarrow]     , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactExactBad]      , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactBad]             , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactNullable]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactBadNarrow]       , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactExactBad]        , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNarrow,exactBadNarrow]  , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactExactBad,exactNullable] , fn:({c, d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactExactBad,exactBadNarrow], fn:({c, d}): ExactNullable => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactNullable' is not assignable to type '{ a: number; b: string; }'.
      Type 'null' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; b: string; } | null; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'ExactNullable' is not assignable to type '{ a: number; b: string; }'.
      Type 'null' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: number; b: string; } | { a: number; b: string; } | null; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    "
  `)
})
test('source exact / narrow (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataExact    , target:exact                         , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactBad                      , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactNullable                 , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactExactBad                 , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBad]              , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,narrow]                , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNullable]         , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNarrow]           , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBadNarrow]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactExactBad]         , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNullable]      , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNarrow]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactBadNarrow]     , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactExactBad]      , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactBad]             , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactNullable]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactExactBad]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactExactBad,exactNullable] , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactExactBad,exactBadNarrow], fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exact                         , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactBad                      , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactNullable                 , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactExactBad                 , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBad]              , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,narrow]                , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNullable]         , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNarrow]           , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBadNarrow]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactExactBad]         , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNullable]      , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNarrow]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactBadNarrow]     , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactExactBad]      , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactBad]             , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactNullable]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactExactBad]        , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactExactBad,exactNullable] , fn:({c, d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactExactBad,exactBadNarrow], fn:({c, d}): ExactNarrow => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactNarrow' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: number; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'ExactNarrow' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: number; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    "
  `)
})
test('source exact bad / narrow (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataExact    , target:exact                         , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactNullable                 , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBad]              , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,narrow]                , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNullable]         , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNarrow]           , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBadNarrow]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactExactBad]         , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNullable]      , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNarrow]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactBad]             , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactNullable]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactExactBad]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactExactBad,exactNullable] , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exact                         , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactNullable                 , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBad]              , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,narrow]                , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNullable]         , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNarrow]           , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBadNarrow]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactExactBad]         , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNullable]      , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNarrow]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactBad]             , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactNullable]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactExactBad]        , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactExactBad,exactNullable] , fn:({c, d}): ExactBadNarrow => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: string; b: string; }'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: number; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: string; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: string; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: string; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; } | { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: string; b: string; }'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: number; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: number; b: string; } | { a: string; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: string; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: string; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: number; } | { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    "
  `)
})
test('source exact / exact bad (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataExact    , target:exact                         , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:narrow                        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactNullable                 , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:exactNarrow                   , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBad]              , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,narrow]                , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNullable]         , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactNarrow]           , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactBadNarrow]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exact,exactExactBad]         , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNullable]      , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactBad,exactNarrow]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactBad]             , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactNullable]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactBadNarrow]       , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[narrow,exactExactBad]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactNarrow,exactBadNarrow]  , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataExact    , target:[exactExactBad,exactNullable] , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exact                         , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:narrow                        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactNullable                 , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:exactNarrow                   , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBad]              , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,narrow]                , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNullable]         , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactNarrow]           , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactBadNarrow]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exact,exactExactBad]         , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNullable]      , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactBad,exactNarrow]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactBad]             , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactNullable]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactBadNarrow]       , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[narrow,exactExactBad]        , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNullable,exactBadNarrow], fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNarrow,exactNullable]   , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactNarrow,exactBadNarrow]  , fn:({c, d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c, d: $d}, target:[exactExactBad,exactNullable] , fn:({c, d}): ExactExactBad => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactExactBad' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'ExactExactBad' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; readonly d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    "
  `)
})
describe('source and clock exact', () => {
  test('source and clock exact (should pass)', () => {
    //prettier-ignore
    {
      sample({source:$dataSrc, clock:dataClock, target:exact                        , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:exactNullable                , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:exactNarrow                  , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:exactExactBad                , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:[exact,narrow]               , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:[exact,exactNullable]        , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:[exact,exactNarrow]          , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:[exact,exactExactBad]        , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:[narrow,exactNullable]       , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:[narrow,exactExactBad]       , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactNullable]  , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactNullable], fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:exact                        , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:exactNullable                , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:exactNarrow                  , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:exactExactBad                , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:[exact,narrow]               , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:[exact,exactNullable]        , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:[exact,exactNarrow]          , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:[exact,exactExactBad]        , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:[narrow,exactNullable]       , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:[narrow,exactExactBad]       , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactNullable]  , fn:({c}, {d}) => ({a: c, b: d})})
      sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactNullable], fn:({c}, {d}) => ({a: c, b: d})})
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      no errors
      "
    `)
  })
  test('source and clock exact (should fail)', () => {
    //prettier-ignore
    {
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:exactBad                      , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:narrow                        , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:exactBadNarrow                , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[exact,exactBad]              , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactBadNarrow]     , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactExactBad]      , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBad]             , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBadNarrow]       , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactBadNarrow]  , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactBadNarrow], fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:exactBad                      , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:narrow                        , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:exactBadNarrow                , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[exact,exactBad]              , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactBadNarrow]     , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactExactBad]      , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBad]             , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBadNarrow]       , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactBadNarrow]  , fn:({c}, {d}) => ({a: c, b: d})})
      //@ts-expect-error
      sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactBadNarrow], fn:({c}, {d}) => ({a: c, b: d})})
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; b: string; }'.
            Type 'null' is not assignable to type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: number; b: string; }'.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; b: string; }'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; b: string; }'.
            Type 'null' is not assignable to type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: number; b: string; }'.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; b: string; }'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
            Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
              Types of property 'a' are incompatible.
                Type 'string' is not assignable to type 'number'.
      Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        Types of property '__' are incompatible.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
      Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
        The types of '__.a' are incompatible between these types.
          Type 'string' is not assignable to type 'number'.
      "
    `)
  })
})
test('source and clock exact bad (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exact                         , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:narrow                        , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactNullable                 , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactNarrow                   , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBad]              , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,narrow]                , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNullable]         , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNarrow]           , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBadNarrow]        , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactExactBad]         , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNullable]      , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNarrow]        , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBad]             , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactNullable]        , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBadNarrow]       , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactExactBad]        , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNullable,exactBadNarrow], fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactNullable]   , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactBadNarrow]  , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactNullable] , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exact                         , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:narrow                        , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactNullable                 , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactNarrow                   , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBad]              , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,narrow]                , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNullable]         , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNarrow]           , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBadNarrow]        , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactExactBad]         , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNullable]      , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNarrow]        , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBad]             , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactNullable]        , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBadNarrow]       , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactExactBad]        , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNullable,exactBadNarrow], fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactNullable]   , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactBadNarrow]  , fn:(_, {d}) => ({a: "no", b: d})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactNullable] , fn:(_, {d}) => ({a: "no", b: d})})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: string; b: string; }'.
          Property 'b' is missing in type '{ a: number; }' but required in type '{ a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: string; b: string; }'.
          Type '{ a: number; b: string; }' is not assignable to type '{ a: string; b: string; }'.
            Types of property 'a' are incompatible.
              Type 'number' is not assignable to type 'string'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: string; b: string; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: string; b: string; }'.
          Type 'null' is not assignable to type '{ a: string; b: string; }'.
    "
  `)
})
test('source and clock narrow (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exact                         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactBad                      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactNullable                 , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactExactBad                 , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBad]              , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,narrow]                , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNullable]         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNarrow]           , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactExactBad]         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactBadNarrow]     , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactExactBad]      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBad]             , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactNullable]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactExactBad]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactNullable]   , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactNullable] , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactBadNarrow], fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exact                         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactBad                      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactNullable                 , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactExactBad                 , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBad]              , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,narrow]                , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNullable]         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNarrow]           , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactExactBad]         , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactBadNarrow]     , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactExactBad]      , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBad]             , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactNullable]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactExactBad]        , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactNullable]   , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactNullable] , fn:({c}) => ({a: c})})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactBadNarrow], fn:({c}) => ({a: c})})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }) => { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }) => { a: number; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }) => { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }) => { a: number; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      The types of '__.a' are incompatible between these types.
        Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | null' is not assignable to type '{ a: number; }'.
          Type 'null' is not assignable to type '{ a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: number; b: string; } | { a: string; b: string; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<{ a: number; }>'.
      Types of property '__' are incompatible.
        Type '{ a: string; b: string; } | { a: number; }' is not assignable to type '{ a: number; }'.
          Type '{ a: string; b: string; }' is not assignable to type '{ a: number; }'.
            Types of property 'a' are incompatible.
              Type 'string' is not assignable to type 'number'.
    "
  `)
})
test('source and clock exact nullable (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exact                         , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactBad                      , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:narrow                        , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactNarrow                   , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactBadNarrow                , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactExactBad                 , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBad]              , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,narrow]                , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNullable]         , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNarrow]           , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactExactBad]         , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactBadNarrow]     , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactExactBad]      , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBad]             , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactNullable]        , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBadNarrow]       , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactExactBad]        , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactNullable]   , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactBadNarrow]  , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactNullable] , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactBadNarrow], fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exact                         , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactBad                      , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:narrow                        , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactNarrow                   , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactBadNarrow                , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactExactBad                 , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBad]              , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,narrow]                , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNullable]         , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNarrow]           , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactExactBad]         , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactBadNarrow]     , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactExactBad]      , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBad]             , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactNullable]        , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBadNarrow]       , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactExactBad]        , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactNullable]   , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactBadNarrow]  , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactNullable] , fn:({c}, {d}): ExactNullable => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactBadNarrow], fn:({c}, {d}): ExactNullable => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactNullable' is not assignable to type '{ a: number; b: string; }'.
      Type 'null' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: number; b: string; } | null; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'ExactNullable' is not assignable to type '{ a: number; b: string; }'.
      Type 'null' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: number; b: string; } | null; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNullable>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNullable>'.
    "
  `)
})
test('source and clock exact / narrow (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exact                         , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactBad                      , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactNullable                 , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactExactBad                 , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBad]              , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,narrow]                , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNullable]         , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNarrow]           , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactExactBad]         , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactBadNarrow]     , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactExactBad]      , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBad]             , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactNullable]        , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactExactBad]        , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactNullable]   , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactNullable] , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactBadNarrow], fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exact                         , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactBad                      , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactNullable                 , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactExactBad                 , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBad]              , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,narrow]                , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNullable]         , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNarrow]           , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactExactBad]         , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactBadNarrow]     , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactExactBad]      , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBad]             , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactNullable]        , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactExactBad]        , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactNullable]   , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactNullable] , fn:({c}, {d}): ExactNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactBadNarrow], fn:({c}, {d}): ExactNarrow => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactNarrow' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: number; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'ExactNarrow' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: number; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: string; b: string; }>' is not assignable to type 'Unit<ExactNarrow>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactNarrow>'.
    "
  `)
})
test('source and clock exact bad / narrow (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exact                         , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactNullable                 , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBad]              , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,narrow]                , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNullable]         , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNarrow]           , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactExactBad]         , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBad]             , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactNullable]        , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactExactBad]        , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactNullable]   , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactNullable] , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exact                         , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactNullable                 , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBad]              , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,narrow]                , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNullable]         , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNarrow]           , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactExactBad]         , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBad]             , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactNullable]        , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactExactBad]        , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactNullable]   , fn:({c}, {d}): ExactBadNarrow => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactNullable] , fn:({c}, {d}): ExactBadNarrow => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: string; b: string; }'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: number; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: string; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }, args_1: { d: string; }) => { a: string; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }, args_1: { d: string; }) => { a: string; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }, args_1: { d: string; }) => { a: number; } | { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: string; b: string; }'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: number; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: string; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'ExactBadNarrow' is not assignable to type '{ a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }, args_1: { d: string; }) => { a: string; b: string; } | { a: number; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }, args_1: { d: string; }) => { a: string; b: string; } | { a: number; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }, args_1: { d: string; }) => { a: number; } | { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactBadNarrow>'.
    "
  `)
})
test('source and clock exact / exact bad (should fail)', () => {
  //prettier-ignore
  {
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exact                         , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:narrow                        , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactNullable                 , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:exactNarrow                   , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBad]              , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,narrow]                , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNullable]         , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactNarrow]           , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exact,exactExactBad]         , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBad]             , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactNullable]        , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactBadNarrow]       , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[narrow,exactExactBad]        , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactNullable]   , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactNarrow,exactBadNarrow]  , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:$dataSrc, clock:dataClock, target:[exactExactBad,exactNullable] , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exact                         , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:narrow                        , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactNullable                 , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:exactNarrow                   , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBad]              , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,narrow]                , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNullable]         , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactNarrow]           , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactBadNarrow]        , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exact,exactExactBad]         , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNullable]      , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactBad,exactNarrow]        , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBad]             , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactNullable]        , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactBadNarrow]       , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[narrow,exactExactBad]        , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNullable,exactBadNarrow], fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactNullable]   , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactNarrow,exactBadNarrow]  , fn:({c}, {d}): ExactExactBad => null as any})
    //@ts-expect-error
    sample({source:{c: $c} , clock:dataClock, target:[exactExactBad,exactNullable] , fn:({c}, {d}): ExactExactBad => null as any})
  }
  expect(typecheck).toMatchInlineSnapshot(`
    "
    Type 'ExactExactBad' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'ExactExactBad' is not assignable to type '{ a: number; b: string; }'.
      Type '{ a: string; b: string; }' is not assignable to type '{ a: number; b: string; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (args_0: { readonly c: number; }, args_1: { d: string; }) => { a: number; b: string; } | { a: number; b: string; } | { a: string; b: string; }; error: \\"fn result should extend target type\\"; }'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: string; b: string; } | { a: number; }>' is not assignable to type 'Unit<ExactExactBad>'.
    Type 'EventCallable<{ a: number; b: string; } | null>' is not assignable to type 'Unit<ExactExactBad>'.
    "
  `)
})
