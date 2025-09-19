import { smartphoneItems } from "./smartphone";
import { airpodsItems } from "./airpods";
import { ipodItems } from "./ipod";
import { applewatchItems } from "./applewatch";
import { laptopItems } from "./laptop";
import { desktopItems } from "./desktop";
import { nintendoswitchItems } from "./nintendoswitch";
import { tabletItems } from "./tablet";

const reviews = [
  {
    review: 'When every other phone repair shop gave on repairing my phone, this man was the only person who could help me repair. Thank you so much for help. Really appreciate it. Very prompt with response and patience to find out any issues. Highly recommended and reasonable price. ❤️1',
    link: 'https://share.google/jm7jtVz1Iaqypl0E4',
    name: 'Sithaarthan Vasu',
    rating: 5,
  },
  {
    review: 'Very friendly and nice guy. Price is reasonable. Service is very good. Phone repair was done professionally.',
    link: 'https://share.google/s9lobZuMs093dTYfF',
    name: 'Jayden K',
    rating: 5,
  },
  {
    review: "The guys here really know how to fix. Brought it to my regular shop when my laptop completely died (no power light, charge, screen) and it was left for more than a month attempting to troubleshoot and finally informed that it's not worth fixing because the motherboard is unstable. Fix-it-Jerry took it in and within a day found that it was the CPU was faulty and fixed it they did. Refer picture alive!! They are clear on timelines and very reasonable with charges. Highly recommend!",
    link: 'https://share.google/VfhzadUtNsfKWLdb7',
    name: 'Jen Jun Wong',
    rating: 5,
  },
  {
    review: 'Sent my iPhone 13 pro max to Fix It Jerry to replace the touchscreen for half the price of what Apple Store quoted to replace the entire LCD. They reassured me that the touchscreen can be replaced if the glass is cracked. Satisfied with the overall quality!',
    link: 'https://share.google/9CHGqBNGnVFUa5KW9',
    name: 'Sean',
    rating: 5,
  },
  {
    review: 'Excellent Service! Got my phone battery replaced today, and the whole process was quick, efficient, and hassle-free. The technician was professional, friendly, and explained everything clearly. My phone feels like new again! Highly recommend for anyone needing phone repairs or battery replacement.',
    link: 'https://share.google/T6J3RyQkJz1nJ6Ewz',
    name: 'L Yi Zhen',
    rating: 5,
  },
  {
    review: 'Always very careful with repairs, I really trust their service and always come back for repairs & battery changes too. My go-to shop every time.',
    link: 'https://share.google/6QgbPug0okOybaJNc',
    name: 'Larissa Lim',
    rating: 5,
  },
  {
    review: 'I’m a returning customer and always impressed with their service. Super responsive — replies usually within seconds! Very trustworthy and always able to solve whatever issue I have. Highly recommended!',
    link: 'https://share.google/VuQ9CjhXfhJt8nUJV',
    name: 'EminoreSow',
    rating: 5,
  },
  {
    review: 'This guys willing to go extra miles to make sure the devices is working fine. I have been his customer for few year. He help to change my phone battery and screen. Keep it up the good job :)',
    link: 'https://share.google/op0IQuTqf0edM9xt8',
    name: 'nicholas lee',
    rating: 5,
  },
  {
    review: 'Sent my laptop in for a battery issue and internal cleaning. The service was efficient, affordable, and done very well. Highly trustworthy and would definitely recommend!',
    link: 'https://share.google/TwSfcWzopYHaB5XxX',
    name: 'SHARVINA A/P K SELVAMANEY',
    rating: 5,
  },
  {
    review: 'Has been find around so long to fix my enook screen. Finally fix-it-jerry willing to take the task. My ebook is well repaired 😃. Helpful and price reasonable. Thanks for the service.',
    link: 'https://share.google/855urUCCJWHA3lkRU',
    name: 'Lim SY',
    rating: 5,
  },
  {
    review: 'I used Fix It Jerry when my iPhone screen broke and I needed a replacement urgently. He provided honest advice and was very transparent with the price options (cheaper than other options in the area too!) I gave him my phone at 9pm and it was ready to collect at 8am the next morning. I will definitely use his services in the future!',
    link: 'https://share.google/XK9N8vCO0YsQEBdDX',
    name: 'Amanda Hart',
    rating: 5,
  },
  {
    review: 'Very good service, fast with no issues and very reliable service from a very kind owner. Been through many battery changing services and was headache and many hidden fees, but not for this owner overall 5/5.',
    link: 'https://share.google/24f4PaY4LALwIEE2G',
    name: 'Khai 34',
    rating: 5,
  },
  {
    review: "Sent my Airpods in because the left side wasn't working although I charged it. Fix-It-Jerry found that it was a motherboard issue and also fixed the buzzer of my Airpods. Now it working like it always does. Service wise efficient and affordable too. Highly recommend.",
    link: 'https://share.google/8ASaRU7GtS3CMRllI',
    name: 'Lisa Koay EX',
    rating: 5,
  },
  {
    review: 'Many other shops refused to repair the SIM card reader on my device. But Fix It Jerry willingly repaired it for me. Thumbs up for his professionalism and also affordable charges!',
    link: 'https://share.google/a42Ax3A7ShbtQ4OWE',
    name: 'Eugene Soh',
    rating: 5,
  },
  {
    review: 'Honest and friendly technician. Jerry gave detailed explanation on my water damaged device, from diagnostic to repair. Overall a smooth process!',
    link: 'https://share.google/CljbjATHWEVLeVzkq',
    name: 'Yun Kai',
    rating: 5,
  },
  {
    review: 'Sent both my AirPods gen 2 and pro 1 to replace the batteries! Now it feels like a new one again. Glad to have used Jerry’s services. It wasn’t easy to find a place to replace AirPods batteries!!',
    link: 'https://share.google/57uQCzWK9aOuO9vpe',
    name: 'Jay',
    rating: 5,
  },
  {
    review: 'I recently had my AirPods repaired and I couldn’t be happier with the service. The whole process was smooth, fast, and very professional. My AirPods are now working perfectly, just like new. I got mine fixed it at a very reasonable price. Highly recommended to anyone who needs their AirPods repaired!',
    link: 'https://share.google/FDxl0gy89iVAZeqZB',
    name: 'Bernice Tay',
    rating: 5,
  },
  {
    review: 'Fix It Jerry has been my go-to repair solution since 2022. They have repaired several devices I own. And also recently bought a refurbished iPhone 11 from them. Highly recommended.',
    link: 'https://share.google/3Rw6yqaDh4eXgRS1y',
    name: 'Alibaba',
    rating: 5,
  },
  {
    review: 'Honest, straightforward and extremely straightforward. Will visit again in the near future! (Got my Apple Watch Fixed)',
    link: 'https://share.google/x5xZ7ajZHMhal5rM9',
    name: 'Andrew Lee',
    rating: 5,
  },
]
const r = [


];

const features = [
  {
    title: "Affordable Prices",
    feature: "Quality repairs at affordable prices with no crazy markup",
  },
  {
    title: "Quick Turnaround",
    feature:
      "Efficient repairs to minimize downtime and get your phone back quickly",
  },
  {
    title: "Transparent Pricing",
    feature: "Competitive rates tailored for the local community",
  },
  {
    title: "Genuine Parts",
    feature: "Authentic components sourced from trusted local suppliers",
  },
  {
    title: "Comprehensive Services",
    feature: "Repair solutions for a wide range of phone issues",
  },
  {
    title: "Community Trust",
    feature: "A reputation built on reliability and customer satisfaction",
  },
];

const randomUsp = [
  "Fix water damage",
  "Replace power supply",
  "Repair network",
  "Fix audio IC",
  "Replace backlight",
  "Repair charging IC",
  "Fix touch IC",
  "Repair Face ID",
  "Replace charging port",
  "Install software",
  "Backup data",
  "Repair trackpad",
  "Fix hinge",
  "Replace Wi-Fi card",
  "Repair top casing",
  "Repair bottom casing",
  "Upgrade RAM",
  "Upgrade SSD",
  "Reapply heatsink",
];

// At the top of the file, add these imports:

// Then replace the repairItems array (around line 97) with:
const repairItems = [
  smartphoneItems,
  airpodsItems,
  ipodItems,
  applewatchItems,
  laptopItems,
  desktopItems,
  nintendoswitchItems,
  tabletItems,
];

export { reviews, features, randomUsp, repairItems };
