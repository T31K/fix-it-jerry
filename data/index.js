const reviews = [
  {
    content:
      "Nice and effective service provided by them. The owner is responsible and trustworthy 👍 He fixed my MSI laptop screen with reasonable price cause i accidentally dropped it and the screen cracked.",
    name: "Xin Yi",
    img_link:
      "https://scontent.fkul2-3.fna.fbcdn.net/v/t39.30808-1/283523950_1066851904206195_8578689390276874189_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=JMIgtnwIBc4Q7kNvgHMVBDd&_nc_zt=24&_nc_ht=scontent.fkul2-3.fna&_nc_gid=A9vZVfFyjYLKIVJcCpRA1hR&oh=00_AYDRSjGz-bVI5-jLIJ3wSxeY0p1QpScD2g_p6sPOxKy2Jw&oe=6786858B",
    review_link: "https://www.facebook.com/share/p/1AxyaWyCs5/",
  },
  {
    content: "Excellent customer service",
    name: "Renju Karukayil Abraham",
    img_link:
      "https://scontent.fkul2-4.fna.fbcdn.net/v/t39.30808-1/468873877_10162625980114122_1353397557366678940_n.jpg?stp=c0.7.200.200a_cp0_dst-jpg_s80x80_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=BBtoGR_4JUYQ7kNvgEIUPoM&_nc_zt=24&_nc_ht=scontent.fkul2-4.fna&_nc_gid=ALeM6T8hRjfsA6rrmHuWD3y&oh=00_AYCS_ywcx1-gy1eNR6DVocGyM0R_hXd0knVTNHpuUlx2ng&oe=678693B4",
    review_link: "https://www.facebook.com/share/p/1YB3KjWADT/",
  },
  {
    content:
      "Fortunately for me, they live nearby so dropping off / delivery of my Macbook Pro was super convenient. Felt very assured from the constant communication throughout the process, and happy to say that my Mac came back in a very good condition! FIJ would be my go-to for any repairs now 🙂",
    name: "Sara Jennavieve Chew ",
    img_link:
      "https://scontent.fkul2-3.fna.fbcdn.net/v/t39.30808-1/468086310_10230892929820385_5002660105252129809_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=AbuALpSXHzUQ7kNvgFfYIDf&_nc_zt=24&_nc_ht=scontent.fkul2-3.fna&_nc_gid=ATochNGBHTcPBiuemgkwVFp&oh=00_AYD3HXyuigFuTPUgVvFrTQ3Sd6QW9Sdsla8GS3ayzUWR-g&oe=67869D74",
    review_link: "https://www.facebook.com/share/p/14pNhE8zSq4/",
  },
  {
    content:
      "Having any problem with Apple product is a nightmare because of its  ecosystem and then the cost associsted with repair. It does comes with a price. So, my daughter’s Ipad went dead, unexpectedly, fully charged, turned off in morning and daughter came back from school, it wont turn on. And so showed it to Dr i device and as expected it was diagnosed with a motherboard issue and almost 40% the price of new one. So , i was thinking to get my daughter a new one, I remembered an i device repair expert in DPC. So i reached out to him, I thot he left dpc since I couldnt get reply on his Fb messenger. I checked again on dpc group, only to find its now a FB page Fix it jerry. and his clients have grown. So o messeged the business page , handed over ipad, in 1 day told me wat the actual issue was. Veryyyyy competitve price. And much better timeline. Got it yesterday evening. And it works fine , daughter is happy, we are happy. Thanks Jerry for your help. Will always recommend your services.",
    name: "音楽音楽 ",
    img_link:
      "https://scontent.fkul2-5.fna.fbcdn.net/v/t39.30808-1/262755500_10165843363690223_7321233469272889541_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=oJVqTazNZVAQ7kNvgFFswuE&_nc_zt=24&_nc_ht=scontent.fkul2-5.fna&_nc_gid=ARpvQZWRV_mDrHbyFwGmY9p&oh=00_AYAaZWS5wIr1cvIXmbir8EXXrpuCG0Jr4MB3eP-PwuffOA&oe=678690DB",
    review_link: "https://www.facebook.com/share/p/18kR6rafMZ/",
  },
  {
    content:
      "My daughter accidentally dropped her iPhone into the bathtub, causing it to go into recovery mode. Got Khye Mun’s contact from a friend, dropped it off on a Monday, and voilà! Fixed and collected on Thursday with all the data intact 😅 Loved that he kept me updated about the progress as well, very friendly and easy to deal with. Thanks again Jerry!",
    name: "Soo Yin",
    img_link:
      "https://scontent.fkul2-5.fna.fbcdn.net/v/t39.30808-1/368301812_10167937434360370_2317861947656052898_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=d5s9CZY_4C8Q7kNvgH28sZJ&_nc_zt=24&_nc_ht=scontent.fkul2-5.fna&_nc_gid=Az260ojx-Gnyvq4F-CYtHDD&oh=00_AYCPU2sbW-SpxJpCwSdshmlS_w-Rpj9qDsEoejIKerpAug&oe=67868FB7",

    review_link: "https://www.facebook.com/share/p/186Y2SrSiT/",
  },
];

const features = [
  {
    title: "Global Expertise",
    feature:
      "Technicians with extensive knowledge of international phone models",
  },
  {
    title: "Quick Turnaround",
    feature:
      "Efficient repairs to minimize downtime and get your phone back quickly",
  },
  {
    title: "Affordable Pricing",
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

const repairItems = [
  {
    title: "Smartphone",
    imgSrc: "/images/services/phone.webp",
    description:
      "Water damage, power supply, network & connectivity, audio IC, backlight IC, charging IC, touch IC, Face ID, Touch ID, LCD, touchscreen, battery, camera, back glass",
    services: [
      { service_type: "repair", service: "Water damage" },
      { service_type: "repair", service: "Power supply" },
      { service_type: "repair", service: "Network issue" },
      { service_type: "replacement", service: "LCD" },
      { service_type: "replacement", service: "Touchscreen" },
      { service_type: "replacement", service: "Battery" },
      { service_type: "upgrade", service: "OS upgrade" },
      { service_type: "upgrade", service: "Performance boost" },
      { service_type: "upgrade", service: "Storage upgrade" },
      { service_type: "installation", service: "Software install" },
      { service_type: "installation", service: "OS setup" },
      { service_type: "installation", service: "App install" },
    ],
  },
  {
    title: "Airpods",
    imgSrc: "/images/services/airpods.webp",
    description:
      "Apple, Samsung, Microsoft, Lenovo, Huawei, Asus, Google, Acer, Dell, HP, Sony, Xiaomi, Alcatel, LG",
    services: [
      { service_type: "repair", service: "Connectivity repair" },
      { service_type: "repair", service: "Battery service" },
      { service_type: "repair", service: "Firmware update" },
      { service_type: "replacement", service: "Earbud replacement" },
      { service_type: "replacement", service: "Battery" },
      { service_type: "replacement", service: "Charging case" },
      { service_type: "upgrade", service: "Firmware upgrade" },
      { service_type: "upgrade", service: "Audio tuning" },
      { service_type: "upgrade", service: "Performance tweak" },
      { service_type: "installation", service: "Device pairing" },
      { service_type: "installation", service: "App configuration" },
      { service_type: "installation", service: "Software update" },
    ],
  },
  {
    title: "iPod",
    imgSrc: "/images/services/ipod.webp",
    description:
      "Apple, Dell, HP, Lenovo, Asus, Acer, Microsoft, MSI, Razer, Samsung, LG, Toshiba, Huawei, Google, Alienware",
    services: [
      { service_type: "repair", service: "Screen repair" },
      { service_type: "repair", service: "Battery fix" },
      { service_type: "repair", service: "Button repair" },
      { service_type: "replacement", service: "LCD replacement" },
      { service_type: "replacement", service: "Battery replacement" },
      { service_type: "replacement", service: "Speaker replacement" },
      { service_type: "upgrade", service: "Software upgrade" },
      { service_type: "upgrade", service: "Hardware upgrade" },
      { service_type: "upgrade", service: "Storage upgrade" },
      { service_type: "installation", service: "OS install" },
      { service_type: "installation", service: "Software setup" },
      { service_type: "installation", service: "App install" },
    ],
  },
  {
    title: "Apple Watch",
    imgSrc: "/images/services/apple_watch.webp",
    description:
      "Operating System, Software Installation, Data Recovery, Virus and Malware Removal",
    services: [
      { service_type: "repair", service: "Sensor repair" },
      { service_type: "repair", service: "Battery service" },
      { service_type: "repair", service: "Display repair" },
      { service_type: "replacement", service: "Screen replacement" },
      { service_type: "replacement", service: "Battery replacement" },
      { service_type: "replacement", service: "Strap replacement" },
      { service_type: "upgrade", service: "Firmware upgrade" },
      { service_type: "upgrade", service: "Performance boost" },
      { service_type: "upgrade", service: "Feature upgrade" },
      { service_type: "installation", service: "App install" },
      { service_type: "installation", service: "OS configuration" },
      { service_type: "installation", service: "Device setup" },
    ],
  },
  {
    title: "Tablet",
    imgSrc: "/images/services/ipad.webp",
    description:
      "Operating System, Software Installation, Data Recovery, Virus and Malware Removal",
    services: [
      { service_type: "repair", service: "Screen repair" },
      { service_type: "repair", service: "Battery fix" },
      { service_type: "repair", service: "Button repair" },
      { service_type: "replacement", service: "LCD replacement" },
      { service_type: "replacement", service: "Battery replacement" },
      { service_type: "replacement", service: "Housing fix" },
      { service_type: "upgrade", service: "OS upgrade" },
      { service_type: "upgrade", service: "Speed boost" },
      { service_type: "upgrade", service: "Storage upgrade" },
      { service_type: "installation", service: "Software install" },
      { service_type: "installation", service: "App setup" },
      { service_type: "installation", service: "Driver install" },
    ],
  },
  {
    title: "Laptop",
    imgSrc: "/images/services/macbook.webp",
    description:
      "Operating System, Software Installation, Data Recovery, Virus and Malware Removal",
    services: [
      { service_type: "repair", service: "Keyboard fix" },
      { service_type: "repair", service: "Fan repair" },
      { service_type: "repair", service: "Screen repair" },
      { service_type: "replacement", service: "Battery replacement" },
      { service_type: "replacement", service: "Keyboard swap" },
      { service_type: "replacement", service: "Hinge replacement" },
      { service_type: "upgrade", service: "RAM upgrade" },
      { service_type: "upgrade", service: "SSD upgrade" },
      { service_type: "upgrade", service: "GPU upgrade" },
      { service_type: "installation", service: "OS install" },
      { service_type: "installation", service: "Driver setup" },
      { service_type: "installation", service: "Software install" },
    ],
  },
  {
    title: "Nintendo Switch",
    imgSrc: "/images/services/nintendo_switch.webp",
    description:
      "Operating System, Software Installation, Data Recovery, Virus and Malware Removal",
    services: [
      { service_type: "repair", service: "Joy-Con repair" },
      { service_type: "repair", service: "Screen fix" },
      { service_type: "repair", service: "Battery repair" },
      { service_type: "replacement", service: "Screen swap" },
      { service_type: "replacement", service: "Battery replacement" },
      { service_type: "replacement", service: "Button repair" },
      { service_type: "upgrade", service: "Firmware upgrade" },
      { service_type: "upgrade", service: "Performance boost" },
      { service_type: "upgrade", service: "Storage upgrade" },
      { service_type: "installation", service: "System update" },
      { service_type: "installation", service: "Software install" },
      { service_type: "installation", service: "Configuration" },
    ],
  },
  {
    title: "Desktop",
    imgSrc: "/images/services/desktop.webp",
    description:
      "Operating System, Software Installation, Data Recovery, Virus and Malware Removal",
    services: [
      { service_type: "repair", service: "Power supply fix" },
      { service_type: "repair", service: "Fan repair" },
      { service_type: "repair", service: "Diagnostics" },
      { service_type: "replacement", service: "Motherboard" },
      { service_type: "replacement", service: "PSU replacement" },
      { service_type: "replacement", service: "Hard drive swap" },
      { service_type: "upgrade", service: "RAM upgrade" },
      { service_type: "upgrade", service: "SSD upgrade" },
      { service_type: "upgrade", service: "GPU upgrade" },
      { service_type: "installation", service: "OS install" },
      { service_type: "installation", service: "Driver install" },
      { service_type: "installation", service: "Software setup" },
    ],
  },
];

export { reviews, features, randomUsp, repairItems };
