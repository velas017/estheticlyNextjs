import React from 'react'

type IconProps = {
  size?: number
  className?: string
  color?: string
  strokeWidth?: number
}

const base = ({
  size = 26,
  className,
  color = 'currentColor',
  strokeWidth = 1.8,
  children,
}: IconProps & { children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
)

export const HomeIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <path d="M3.5 12.2 13 4l9.5 8.2" />
    <path d="M5.5 11v9.2c0 .8.6 1.3 1.3 1.3h3.7v-5.5h5v5.5h3.7c.8 0 1.3-.5 1.3-1.3V11" />
  </>
)})

export const PrepIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <path d="M9 3h8l-1 5h-6L9 3Z" />
    <path d="M10 8c-2 3-3 6-3 9 0 3 2 6 6 6s6-3 6-6c0-3-1-6-3-9" />
  </>
)})

export const AftercareIcon = (p: IconProps) => base({ ...p, children: (
  <path d="M13 22s-8-4.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.5-8 11-8 11Z" />
)})

export const FAQIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <circle cx="13" cy="13" r="9" />
    <path d="M10 10.5a3 3 0 1 1 4.5 2.6c-.7.4-1.5.9-1.5 2" />
    <circle cx="13" cy="18" r="0.6" fill={p.color ?? 'currentColor'} />
  </>
)})

export const BookIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <rect x="4" y="6" width="18" height="16" rx="2.5" />
    <path d="M4 11h18M9 4v4M17 4v4" />
  </>
)})

export const AboutIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <circle cx="13" cy="9" r="4" />
    <path d="M5 22c1.5-4 4.5-6 8-6s6.5 2 8 6" />
  </>
)})

export const ContactIcon = (p: IconProps) => base({ ...p, children: (
  <path d="M5 6.5C5 5.7 5.7 5 6.5 5h3l1.5 4-2 1.5c1 2.5 3 4.5 5.5 5.5L16 19l4 1.5v3c0 .8-.7 1.5-1.5 1.5C11 25 1 15 1 7.5 1 6.7 1.7 6 2.5 6" />
)})

export const MailIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <rect x="3" y="6" width="20" height="14" rx="2.5" />
    <path d="m4 8 9 6 9-6" />
  </>
)})

export const PhoneIcon = (p: IconProps) => base({ ...p, children: (
  <path d="M5 5.5C5 4.7 5.7 4 6.5 4h3l1.5 4-2 1.5c1 2.5 3 4.5 5.5 5.5L16 13l4 1.5v3c0 .8-.7 1.5-1.5 1.5C11 19 5 13 5 5.5Z" />
)})

export const PinIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <path d="M13 22s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z" />
    <circle cx="13" cy="10" r="2.5" />
  </>
)})

export const ClockIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <circle cx="13" cy="13" r="9" />
    <path d="M13 8v5l3 2" />
  </>
)})

export const IGIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <rect x="4" y="4" width="18" height="18" rx="5" />
    <circle cx="13" cy="13" r="4" />
    <circle cx="18.5" cy="7.5" r="0.8" fill={p.color ?? 'currentColor'} stroke="none" />
  </>
)})

export const FBIcon = (p: IconProps) => base({ ...p, children: (
  <path d="M16.5 13H14v8h-3v-8H9v-3h2V8.2c0-2 1.2-3.2 3.4-3.2H17v3h-1.5c-.8 0-1 .4-1 1v1h2.5l-.5 3Z" />
)})

export const SparkIcon = (p: IconProps) => base({ ...p, children: (
  <path d="M13 3v6M13 17v6M3 13h6M17 13h6M6 6l4 4M16 16l4 4M20 6l-4 4M10 16l-4 4" />
)})

export const LeafIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <path d="M21 5c-9 0-15 5-15 12 0 2 1 4 2.5 4.5C9 13 14 8 21 5Z" />
    <path d="M5 21C8 14 14 8 21 5" />
  </>
)})

export const GiftcardIcon = (p: IconProps) => base({ ...p, children: (
  <>
    <rect x="3" y="7" width="20" height="14" rx="2" />
    <path d="M3 12h20M13 7v14M9 7c-2 0-3-1.5-3-2.5S7 3 8 3.5 13 7 13 7s3.5-3 4.5-3.5S20 3.5 20 4.5 19 7 17 7" />
  </>
)})

export const DropIcon = (p: IconProps) => base({ ...p, children: (
  <path d="M13 3c-4 6-7 9-7 13a7 7 0 0 0 14 0c0-4-3-7-7-13Z" />
)})

export const CheckIcon = (p: IconProps) => base({ ...p, strokeWidth: p.strokeWidth ?? 2, children: (
  <path d="m5 13 5 5L21 7" />
)})

export const CloseIcon = (p: IconProps) => base({ ...p, strokeWidth: p.strokeWidth ?? 2, children: (
  <path d="m7 7 12 12M19 7 7 19" />
)})
