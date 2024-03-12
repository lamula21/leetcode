import { describe, it, expect } from "@jest/globals"
import { findJudge } from "../find-town-judge"

console.time("findjudge")
describe("find-town-judge", () => {
	it("test1: should return 3", () => {
		const N = 3
		const trust = [
			[1, 3],
			[2, 3],
		]
		expect(findJudge(N, trust)).toBe(3)
	})

	it("test2: should return -1", () => {
		const N = 3
		const trust = [
			[1, 3],
			[2, 3],
			[3, 1],
		]
		expect(findJudge(N, trust)).toBe(-1)
	})

	it("test3: should return 3", () => {
		const N = 4
		const trust = [
			[1, 3],
			[1, 4],
			[2, 3],
			[2, 4],
			[4, 3],
		]
		expect(findJudge(N, trust)).toBe(3)
	})

	it("test4: should return -1", () => {
		const N = 0
		const trust: number[][] = []
		expect(findJudge(N, trust)).toBe(-1)
	})

	it("test5: should return 2", () => {
		const N = 2
		const trust = [[1, 2]]
		expect(findJudge(N, trust)).toBe(2)
	})

	it("test6: should return -1", () => {
		expect(
			findJudge(3, [
				[1, 2],
				[2, 3],
			])
		).toBe(-1)
	})

	it("test7: should return 3", () => {
		expect(
			findJudge(4, [
				[1, 3],
				[1, 4],
				[2, 3],
				[2, 4],
				[4, 3],
			])
		).toBe(3)
	})

	it("test8: should return -1", () => {
		expect(findJudge(2, [])).toBe(-1)
	})
})

console.timeEnd("findjudge")
