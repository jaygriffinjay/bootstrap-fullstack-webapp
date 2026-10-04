import assert from "node:assert/strict"
import { test } from "node:test"
import { cn } from "./utils.ts"

test("cn merges conflicting Tailwind classes", () => {
  assert.equal(cn("px-2 py-1", "px-4"), "py-1 px-4")
})

test("cn includes conditional classes", () => {
  assert.equal(cn("font-medium", true && "text-sm"), "font-medium text-sm")
})
