import { expect } from "@playwright/test";

export function expectSortedDesc(values: number[]) {
  const sorted = [...values].sort((a, b) => b - a);
  expect(values).toEqual(sorted);
}

export function expectSortedAsc(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  expect(values).toEqual(sorted);
}
