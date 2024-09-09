import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		name: "OldschoolJS",
		benchmark: {
			include: ["bench/**/*.bench.ts"],
		},
		include: ["test/**/*.test.ts"],
		coverage: {
			provider: "v8",
			include: ["src"],
			reporter: ["text"],
			exclude: [
				"src/simulation/monsters/**/*.ts",
				"src/simulation/misc/**/*.ts",
				"src/simulation/subtables/**/*.ts",
				"src/simulation/clues/**/*.ts",
				"src/simulation/openables/**/*.ts",
				"src/structures/Collection.ts",
			],
		},
		isolate: false,
		poolOptions: {
			threads: {
				minThreads: 10,
				maxThreads: 20,
				singleThread: false,
			},
		},
	},
});
