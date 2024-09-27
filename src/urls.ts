import { rindobornaSwishNumber } from "@/common"

// Swish URLs below.

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

export const swish = {
  member: rindobornaSwishURL({ amount: "200", message: "Årsmedlemsskap Rindöborna: Hushållets namn & mail" }),
  kiosk: rindobornaSwishURL({ message: "Rindögården Kiosk", edit: "amt" })
}

export default {
  home: "/",

  forVuxna: "/for-vuxna",

  engage: "/engagera-dig",
  belastningsregistret: "/engagera-dig/belastningsregistret",
  checklist: "/engagera-dig/checklista",

  faq: "/faq",

  external: {
    rindoborna: "http://www.rindoborna.se",
    facebook: "https://www.facebook.com/rindogarden",
    consentForm: "https://gnasweden.typeform.com/to/ap59Mwsl",

    polisen: {
      utdrag: "https://polisen.se/tjanster-tillstand/belastningsregistret/barn-annan-verksamhet/",
      kontroll: "https://etjanster.polisen.se/eregisterutdrag/kontroll"
    }
  }
}