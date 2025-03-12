import type {Config} from "@jest/types";

const config: Config.InitialOptions = {
    collectCoverage:true,
    preset: "ts-jest",
    clearMocks:true,
    testTimeout:25000,
    verbose:true,
    roots: ["<rootDir>/test"],
    coverageDirectory: "./coverage",
    testEnvironment:"node",
    coverageReporters: ["cobertura","clover","json","lcov","text"],
    setupFiles:["<rootDir>/test/setEnvVars.ts"],
    collectCoverageFrom:["<rootDir>/src/**/*.ts"]
}

export default config;