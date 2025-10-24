import { getCollection, render } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { Temporal } from "@js-temporal/polyfill";

const locale = "sv-SE";
const timeZone = "Europe/Stockholm";

type OriginalEvent = CollectionEntry<"events">;
export type Event = OriginalEvent & {
  id: string;
  date: Temporal.PlainDate;
  time: Temporal.PlainTime;
  duration: Temporal.Duration;
  missingAdults: number;
  url: string;
} & {
  slug: string;
  render: () => ReturnType<typeof render>;
};

async function augment(event: OriginalEvent): Promise<Event> {
  const date = Temporal.PlainDate.from(event.id);
  const time = Temporal.PlainTime.from(event.data.time);
  const duration = Temporal.Duration.from(event.data.duration);
  const requiredAdults = event.data.requiredAdults;
  const missingAdults = Math.max(requiredAdults - event.data.adults.length, 0);
  const url = `/events/${event.id}`;
  const copy = Object.create(event);
  const id = `event:${date.toString()}`;
  const newEvent = Object.assign(copy, {
    id,
    slug: event.id,
    date,
    time,
    duration,
    url,
    missingAdults,
    render: () => render(event),
  }) as Event;
  return newEvent;
}

function compare(a: Event, b: Event) {
  return Temporal.PlainDate.compare(a.date, b.date);
}

export async function list() {
  const collection = await getCollection("events");
  const events = await Promise.all(collection.map(augment));
  events.sort(compare);
  return events;
}

export async function getEventsByAdult(adultId: string) {
  const allEvents = await list();
  return allEvents.filter((event) =>
    event.data.adults.some((adult) => adult.id === adultId),
  );
}

export const timestamp = {
  iso: (event: Event) =>
    event.date
      .toZonedDateTime({ timeZone, plainTime: event.time })
      .toString({ timeZoneName: "never" }),
  full: (event: Event) => `${date.full(event)}, kl. ${time.full(event)}`,
};

type Custom = (object: {
  date: Temporal.PlainDate;
  locale: string;
  timeZone: string;
}) => any;

export const isPast = (event: Event) =>
  Temporal.PlainDate.compare(event.date, Temporal.Now.plainDateISO()) < 0;

export const date = {
  full: (event: Event) =>
    event.date.toLocaleString(locale, { dateStyle: "full" }),
  short: (event: Event) =>
    event.date.toLocaleString(locale, { dateStyle: "short" }),
  shortMonth: (event: Event) =>
    event.date.toLocaleString(locale, { month: "short" }).replace(/\.$/, ""),
  custom: (event: Event, fn: Custom) =>
    fn({ date: event.date, locale, timeZone }),
};

export const time = {
  full: (event: Event) => {
    const from = event.time;
    const to = from.add(event.duration);
    return `${from.toLocaleString(locale, { timeStyle: "short" })} - ${to.toLocaleString(locale, { timeStyle: "short" })}`;
  },
  tiny: (event: Event) => {
    const from = event.time;
    const to = from.add(event.duration);
    const ljust = (n: number) => n.toString().padStart(2, "0");

    if (from.minute === 0 && to.minute === 0) {
      return `${from.hour}-${to.hour}`;
    } else {
      return `${from.hour}:${ljust(from.minute)}-${to.hour}:${ljust(to.minute)}`;
    }
  },
};
