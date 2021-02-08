import { isConstructorDeclaration } from "typescript";

export class CovidReport {
    population: number;
    day: Date;
    time: Date;
    newCases: string;
    active: number;
    critical: number;
    recovered: number;
    confirmed: number;
    deaths: number;
    newDeaths: string;
    tests: number;

    constructor(population: number, day: Date, time: Date, newCases: string, active: number, critical: number, 
        recovered: number, confirmed: number, deaths: number, newDeaths: string, tests: number) {
        this.population = population;
        this.day = day;
        this.time = time;
        this.newCases = newCases;
        this.active = active;
        this.critical = critical;
        this.recovered = recovered;
        this.confirmed = confirmed;
        this.deaths = deaths;
        this.newDeaths = newDeaths;
        this.tests = tests;
    }
}