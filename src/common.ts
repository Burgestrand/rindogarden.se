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

function rindobornaSwishURL({ amount, message, edit }: { amount?: string, message: string, edit?: string }) {
  const swishSearchParams = new URLSearchParams({
    sw: rindobornaSwishNumber.replace(/ /g, ""),
    cur: "SEK",
    msg: message,
    edit: edit ?? "amt,msg",
    src: "qr",
  })

  if (amount) swishSearchParams.set("amt", amount);

  return "https://app.swish.nu/1/p/sw/?" + swishSearchParams.toString().replace(/\+/g, "%20")
}

export const rindobornaSwishMemberURL = rindobornaSwishURL({ amount: "200", message: "Årsmedlemsskap Rindöborna: Hushållets namn & mail" })
export const rindobornaSwishKioskURL = rindobornaSwishURL({ amount: null, message: "Rindögården Kiosk", edit: "amt" })
