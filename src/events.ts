import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'
import { Temporal } from "@js-temporal/polyfill"

const locale = 'sv-SE'
const timeZone = 'Europe/Stockholm'

type OriginalEvent = CollectionEntry<'events'>
export type Event = OriginalEvent & {
  date: Temporal.PlainDate,
  time: Temporal.PlainTime,
  duration: Temporal.Duration,
  missingAdults: number,
  url: string
}

async function augment(event: OriginalEvent): Promise<Event> {
  const date = Temporal.PlainDate.from(event.slug)
  const time = Temporal.PlainTime.from(event.data.time)
  const duration = Temporal.Duration.from(event.data.duration)
  const missingAdults = Math.max(2 - event.data.adults.length, 0)
  const url = `/events/${event.slug}`
  const copy = Object.create(event)
  return Object.assign(copy, { date, time, duration, url, missingAdults }) as Event
}

function compare(a: Event, b: Event) {
  return Temporal.PlainDate.compare(a.date, b.date)
}

export async function list() {
  const collection = await getCollection('events')
  const events = await Promise.all(collection.map(augment))
  events.sort(compare)
  return events
}

export const timestamp = {
  iso: (event: Event) => event.date.toZonedDateTime({ timeZone, plainTime: event.time }).toString({ timeZoneName: 'never' }),
  full: (event: Event) => `${date.full(event)}, kl. ${time.full(event)}`
}

type Custom = (object: { date: Temporal.PlainDate, locale: string, timeZone: string }) => any;

export const date = {
  full: (event: Event) => event.date.toLocaleString(locale, { dateStyle: "full" }),
  short: (event: Event) => event.date.toLocaleString(locale, { dateStyle: "short" }),
  shortMonth: (event: Event) => event.date.toLocaleString(locale, { month: "short" }).replace(/\.$/, ''),
  custom: (event: Event, fn: Custom) => fn({ date: event.date, locale, timeZone })
}

export const time = {
  full: (event: Event) => {
    const from = event.time
    const to = from.add(event.duration)
    return `${from.toLocaleString(locale, { timeStyle: "short" })} - ${to.toLocaleString(locale, { timeStyle: "short" })}`
  },
  tiny: (event: Event) => {
    const from = event.time
    const to = from.add(event.duration)

    if (from.minute === 0 && to.minute === 0) {
      return `${from.hour}-${to.hour}`
    } else {
      return `${from.hour}:${from.minute}-${to.hour}:${to.minute}`
    }
  }
}
