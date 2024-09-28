"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LarransBigChestFish = exports.LarransSmallChestFish = exports.BrimstoneChestFish = void 0;
exports.chanceOfFish = chanceOfFish;
function chanceOfFish(fishLvl, low, high) {
    const num1 = (low * (99 - fishLvl)) / 98;
    const num2 = (high * (fishLvl - 1)) / 98;
    const chanceOfSuccess = (num1 + num2 + 1) / 256;
    return chanceOfSuccess * 100;
}
exports.BrimstoneChestFish = [
    {
        item: "Raw manta ray",
        qty: [80, 160],
        low: -10,
        high: 20,
        req: 31,
    },
    {
        item: "Raw sea turtle",
        qty: [80, 200],
        low: -10,
        high: 50,
        req: 17,
    },
    {
        item: "Raw shark",
        qty: [100, 250],
        low: -60,
        high: 140,
        req: 27,
    },
    {
        item: "Raw monkfish",
        qty: [100, 300],
        low: 0,
        high: 170,
        req: 1,
    },
    {
        item: "Raw swordfish",
        qty: [100, 300],
        low: 30,
        high: 200,
        req: 1,
    },
    {
        item: "Raw lobster",
        qty: [100, 350],
        low: 70,
        high: 270,
        req: 1,
    },
    {
        item: "Raw tuna",
        qty: [100, 350],
        low: 225,
        high: 324,
        req: 1,
    },
];
exports.LarransSmallChestFish = [
    {
        item: "Raw manta ray",
        qty: [81, 177],
        low: -10,
        high: 20,
        req: 31,
    },
    {
        item: "Raw sea turtle",
        qty: [81, 177],
        low: -10,
        high: 50,
        req: 17,
    },
    {
        item: "Raw shark",
        qty: [126, 250],
        low: -60,
        high: 140,
        req: 27,
    },
    {
        item: "Raw monkfish",
        qty: [162, 297],
        low: 0,
        high: 170,
        req: 1,
    },
    {
        item: "Raw swordfish",
        qty: [113, 264],
        low: 30,
        high: 200,
        req: 1,
    },
    {
        item: "Raw lobster",
        qty: [163, 342],
        low: 70,
        high: 270,
        req: 1,
    },
    {
        item: "Raw tuna",
        qty: [112, 307],
        low: 225,
        high: 324,
        req: 1,
    },
];
exports.LarransBigChestFish = [
    {
        item: "Raw manta ray",
        qty: [120, 240],
        low: -10,
        high: 20,
        req: 31,
    },
    {
        item: "Raw sea turtle",
        qty: [120, 300],
        low: -10,
        high: 50,
        req: 17,
    },
    {
        item: "Raw shark",
        qty: [150, 375],
        low: -60,
        high: 140,
        req: 27,
    },
    {
        item: "Raw monkfish",
        qty: [150, 450],
        low: 0,
        high: 170,
        req: 1,
    },
    {
        item: "Raw swordfish",
        qty: [150, 450],
        low: 30,
        high: 200,
        req: 1,
    },
    {
        item: "Raw lobster",
        qty: [150, 525],
        low: 70,
        high: 270,
        req: 1,
    },
    {
        item: "Raw tuna",
        qty: [150, 525],
        low: 225,
        high: 324,
        req: 1,
    },
];
