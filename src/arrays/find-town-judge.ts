export function findJudge(n: number, trust: number[][]): number {
	if (trust.length === 0 && n === 1) return 1

	const map = new Map<number, number>()
	const followersmap = new Map<number, number>()

	for (let [a, b] of trust) {
		if (!map.has(a)) map.set(a, 0)
		if (!map.has(b)) map.set(b, 0)
		if (!followersmap.has(b)) followersmap.set(b, 0)

		const prev = map.get(a)!
		map.set(a, prev + 1)

		const prev_b = followersmap.get(b)!
		followersmap.set(b, prev_b + 1)
	}

	for (let [key, value] of map) {
		if (value === 0 && followersmap.get(key) === n - 1) return key
	}

	return -1
}
