/**
 * Common variables and utilities, and config.
 */

export const consentFormURL = "https://gnasweden.typeform.com/to/ap59Mwsl"

export const workgroup = [
  { name: "Kim Burgestrand", email: "kim@burgestrand.se" },
  { name: "Anna-Lena M.W." },
  { name: "Sandra B." },
]

export const email = "rindogarden@gmail.com"
export const facebookURL = "https://www.facebook.com/rindogarden"
export const rindobornaURL = "http://www.rindoborna.se"
export const rindobornaSwishNumber = "123 232 44 99"

const swishSearchParams = new URLSearchParams({
  sw: rindobornaSwishNumber.replace(/ /g, ""),
  amt: "200",
  cur: "SEK",
  msg: "Årsmedlemsskap Rindöborna: Hushållets namn & mail",
  edit: "amt,msg",
  src: "qr",
})

export const rindobornaSwishURL = "https://app.swish.nu/1/p/sw/?" + swishSearchParams.toString().replace(/\+/g, "%20")
