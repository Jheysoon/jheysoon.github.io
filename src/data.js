export const profile = {
  name: 'Jayson L. Martinez',
  handle: '@jheysoon',
  role: 'Full Stack & Mobile Developer',
  tagline: 'Focused on React, React Native and NestJS with TypeScript. Based in the Philippines.',
  badge: 'Open Source Enthusiast',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Jheysoon', icon: 'github' },
  { label: 'Facebook', href: 'https://www.facebook.com/jayson.martinez.359126', icon: 'facebook' },
]

export const skills = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Mobile', items: ['React Native', 'Android', 'iOS'] },
  { title: 'Backend', items: ['NestJS', 'Node.js', 'PHP', 'Laravel', 'MySQL'] },
]

export const featuredProject = {
  name: 'Landers Superstore',
  description:
    'Online shopping for the Landers Superstore membership chain: browse local and imported products, pay with several methods and get same-day delivery in Metro Manila and Cebu.',
  tags: ['web', 'android', 'ios'],
  links: [
    { label: 'Website', href: 'https://www.landers.ph/', icon: 'globe' },
    { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.snapmart.landers&hl=en', icon: 'play' },
    { label: 'App Store', href: 'https://apps.apple.com/us/app/landers-superstore/id1480948945', icon: 'apple' },
  ],
  // Official App Store screenshots.
  screenshots: [
    { src: '/img/landers/screen-1.jpg', alt: 'Landers app product listing with add to cart' },
    { src: '/img/landers/screen-2.jpg', alt: 'Landers app digital membership card' },
    { src: '/img/landers/screen-3.jpg', alt: 'Landers app rewards hub with rebates and vouchers' },
    { src: '/img/landers/screen-4.jpg', alt: 'Landers app checkout payment methods' },
  ],
}

export const projects = [
  {
    name: 'react-native-mlkit-ocr-v2',
    description: 'React Native wrapper for Google ML Kit Text Recognition v2.',
    tags: ['react-native', 'ml-kit', 'ocr'],
    href: 'https://github.com/Jheysoon/react-native-mlkit-ocr-v2',
  },
]
