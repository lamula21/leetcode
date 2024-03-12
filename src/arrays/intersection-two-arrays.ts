/**
 * 349. Intersection of Two Arrays
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 *
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * Explanation: [4,9] is also accepted.
 */

function intersection(nums1: number[], nums2: number[]): number[] {
	const set1 = new Set(nums1)
	const set2 = new Set(nums2)
	const result = new Set<number>()

	for (const value of set2) {
		if (set1.has(value)) result.add(value)
	}
	return [...result]
}
