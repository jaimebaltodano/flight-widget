declare module "*.module.css"

declare module "flightMod" {
  type remarkOption="CANCELLED"|"ON TIME"|"DELAYED"
  type flightDef = {
    time: string;
    destination: string;
    flight: string;
    gate: string;
    remarks: remarkOption
  }
}

module.exports = {
  flightDef,
  remarkOption
}