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

const faq = [
  {
    question: "What is Fix It Jerry?",
    answer: [
      "Fix It Jerry is your trusted repair service for smartphones, laptops, tablets, and more.",
      "We specialize in high-quality repairs with fast turnaround times.",
      "From screen replacements to motherboard fixes, we've got you covered.",
    ],
  },
  {
    question: "What devices do you repair?",
    answer: [
      "We repair smartphones, tablets, laptops, desktop computers, gaming consoles, and more.",
      "Whether it's an iPhone, Android, MacBook, or Nintendo Switch, we can fix it.",
      "If you're unsure, contact us for a free assessment.",
    ],
  },
  {
    question: "How long does a repair take?",
    answer: [
      "Repair times vary depending on the issue.",
      "Screen replacements and battery swaps can be done within an hour.",
      "More complex repairs, like motherboard fixes, may take 1-3 days.",
    ],
  },
  {
    question: "Do you use original parts?",
    answer: [
      "We use high-quality parts that match or exceed OEM standards.",
      "Original and aftermarket options are available based on your budget and preference.",
      "Every part we use is tested for performance and durability.",
    ],
  },
  {
    question: "How much do repairs cost?",
    answer: [
      "Repair costs depend on the issue and device model.",
      "We offer transparent pricing with no hidden fees.",
      "Get a free quote by contacting us.",
    ],
  },
  {
    question: "Do you offer data recovery?",
    answer: [
      "Yes! We specialize in data recovery for hard drives, SSDs, and mobile devices.",
      "If your device isn’t powering on, we may still be able to retrieve your data.",
      "Contact us for a diagnostic and recovery options.",
    ],
  },
  {
    question: "Can I upgrade my laptop or PC?",
    answer: [
      "Absolutely! We offer RAM, SSD, and GPU upgrades for better performance.",
      "Upgrading to an SSD can make your device significantly faster.",
      "Bring your computer in, and we’ll recommend the best upgrade options.",
    ],
  },
  {
    question: "Is my personal data safe during repairs?",
    answer: [
      "Yes! Your privacy is a top priority.",
      "We do not access or share personal files during repairs.",
      "For added security, we recommend backing up your data before service.",
    ],
  },
  {
    question: "Where do will you repair the device?",
    answer: [
      "We do both onsite and offsite repairs.",
      "We recommend contacting us and we'll come pickup the device.",
    ],
  },
  {
    question: "How do I book a repair?",
    answer: [
      "Booking a repair is easy! You can contact us via phone, WhatsApp, or our website.",
      "Walk-ins are welcome, but scheduling an appointment ensures faster service.",
      "Tell us the issue, and we’ll guide you through the next steps.",
    ],
  },
];

export { reviews, faq };
