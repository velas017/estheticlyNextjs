export const contact = {
  email: 'amyly.esthetics@gmail.com',
  phone: '980.999.3115',
  phoneTel: '+19809993115',
  business: 'Sassy Salon',
  addressLine1: '7211 E Independence Blvd',
  addressLine2: 'Charlotte, NC 28227',
  appointmentNote: 'Appointment-based — no walk-ins.',
  shopUrl: 'https://glymedplus.com/launch/0507169',
  socials: {
    instagram: {
      handle: '@estheticlyskincare',
      url: 'https://www.instagram.com/estheticlyskincare/',
    },
    facebook: {
      handle: '@EstheticLY',
      url: 'https://www.facebook.com/profile.php?id=61564316234527',
    },
  },
} as const

export interface HoursRow {
  day: string
  open: string | null
  close: string | null
}

export const hours: HoursRow[] = [
  { day: 'Monday', open: null, close: null },
  { day: 'Tuesday', open: '10:30am', close: '7:00pm' },
  { day: 'Wednesday', open: '10:30am', close: '7:00pm' },
  { day: 'Thursday', open: null, close: null },
  { day: 'Friday', open: '10:00am', close: '5:00pm' },
  { day: 'Saturday', open: '10:00am', close: '5:00pm' },
  { day: 'Sunday', open: null, close: null },
]

export const hoursNote =
  'Hours may vary. After-hour appointments available upon request.'
