import { flightDef, remarkOption } from "flightMod";

export const remarkLabels:Array<remarkOption> = ["CANCELLED","ON TIME","DELAYED"];
export const cities: Array<string> =["OMAN","LONDON","DUBAI","FRANKFURT", "TOKYO","MEXICO", "DALLAS", "GUATEMALA","QUEBEC","QUITO","CORDOBA","MONTEVIDEO","CARACAS","PANAMA","BAHIA","SEVILLA"];
export const flights: Array<flightDef> = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME",
  },
  {
    time: "12:39",
    destination: "LONDON",
    flight: "CL 320",
    gate: "C 31",
    remarks: "CANCELLED",
  },
  {
    time: "13:21",
    destination: "DUBAI",
    flight: "DBX 201",
    gate: "A 19",
    remarks: "CANCELLED",
  },
  {
    time: "14:01",
    destination: "FRANKFURT",
    flight: "FR 402",
    gate: "B 02",
    remarks: "ON TIME",
  },
  {
    time: "15:22",
    destination: "TOKYO",
    flight: "TK 211",
    gate: "A 32",
    remarks: "DELAYED",
  },
];
