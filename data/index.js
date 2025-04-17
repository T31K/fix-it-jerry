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
    content:
      "Excellent customer service. The staff was very friendly and helpful, and they went above and beyond to ensure my satisfaction. I highly recommend their services to anyone in need of repairs.",
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
  // {
  //   content:
  //     "Having any problem with Apple product is a nightmare because of its  ecosystem and then the cost associsted with repair. It does comes with a price. So, my daughter’s Ipad went dead, unexpectedly, fully charged, turned off in morning and daughter came back from school, it wont turn on. And so showed it to Dr i device and as expected it was diagnosed with a motherboard issue and almost 40% the price of new one. So , i was thinking to get my daughter a new one, I remembered an i device repair expert in DPC. So i reached out to him, I thot he left dpc since I couldnt get reply on his Fb messenger. I checked again on dpc group, only to find its now a FB page Fix it jerry. and his clients have grown. So o messeged the business page , handed over ipad, in 1 day told me wat the actual issue was. Veryyyyy competitve price. And much better timeline. Got it yesterday evening. And it works fine , daughter is happy, we are happy. Thanks Jerry for your help. Will always recommend your services.",
  //   name: "音楽音楽 ",
  //   img_link:
  //     "https://scontent.fkul2-5.fna.fbcdn.net/v/t39.30808-1/262755500_10165843363690223_7321233469272889541_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=oJVqTazNZVAQ7kNvgFFswuE&_nc_zt=24&_nc_ht=scontent.fkul2-5.fna&_nc_gid=ARpvQZWRV_mDrHbyFwGmY9p&oh=00_AYAaZWS5wIr1cvIXmbir8EXXrpuCG0Jr4MB3eP-PwuffOA&oe=678690DB",
  //   review_link: "https://www.facebook.com/share/p/18kR6rafMZ/",
  // },
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

const repairItems = [
  {
    title: "Smartphone",
    imgSrc: "/images/services/phone.webp",
    description:
      "Water damage, power supply, network & connectivity, audio IC, backlight IC, charging IC, touch IC, Face ID, Touch ID, LCD, touchscreen, battery, camera, back glass",
    services: [
      // ================================== repair ==================================
      // ================================== repair ==================================
      // ================================== repair ==================================
      // ================================== repair ==================================
      {
        service_type: "repair",
        service: "Water damage/CPU Damage",
        hash: "water-damage",
        title: "Smartphone Water Damage Repair | Fix It Jerry",
        image: "/images/devices/smartphone/water_damage.webp",
        meta_description:
          "Dropped your phone in water? Fix It Jerry provides expert smartphone water damage repair services. Fast, reliable, and affordable repairs. Contact us today!",
        sections: [
          {
            heading: "What is Water Damage?",
            content:
              "Water can enter the phone and damage internal components. Symptoms include screen flickering, overheating, no sound, charging issues, and unresponsive touch.",
          },
          {
            heading: "Common Issues with Water Damage",
            content: [
              "Phone won’t turn on or keeps restarting.",
              "Touchscreen stops working or behaves erratically.",
              "No sound or muffled speakers.",
              "Charging issues (slow charging, not charging, overheating).",
              "No SIM detection, weak signal, or Wi-Fi/Bluetooth failures.",
              "Display issues (flickering, black screen, discoloration).",
              "Touch ID/Face ID not working.",
            ],
          },
          {
            heading: "What to Do After Water Damage",
            content: [
              "Power Off Immediately – Prevents short circuits.",
              "Do NOT Charge – Charging may worsen the damage.",
              "Dry the Phone – Use silica gel packets or a vacuum (avoid rice, as dust can get inside).",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs Water Damage",
            content: [
              "Component-Level Repair – Identifying and replacing corroded parts.",
              "Ultrasonic Cleaning – Deep cleaning to remove residue and corrosion.",
              "Battery & Charging Port Replacement – If damaged due to water exposure.",
              "IC Repairs – If chips like Power IC, Baseband IC, or Audio IC are affected.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 200 - RM 800", "Turnaround Time: 1-3 days."],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Power IC",
        hash: "power-ic",
        title: "Smartphone Power IC Repair | Fix It Jerry",
        image: "/images/devices/smartphone/power_ic.webp",
        meta_description:
          "Phone not turning on or randomly shutting down? Fix It Jerry provides expert Power IC repair services to restore stable performance.",
        sections: [
          {
            heading: "What is a Power IC?",
            content:
              "The Power IC (integrated circuit) controls power distribution in your phone. A faulty IC can cause boot loops, overheating, and shutdowns.",
          },
          {
            heading: "Common Symptoms of Power IC Failure",
            content: [
              "Phone doesn’t turn on or only turns on when plugged in.",
              "Sudden restarts or boot loops.",
              "Overheating even when idle.",
              "Battery drains quickly or charges erratically.",
            ],
          },
          {
            heading: "Recommended Actions",
            content: [
              "Avoid using fast chargers from unknown brands.",
              "Stop charging if the phone heats excessively.",
              "Bring in the device for circuit-level inspection.",
            ],
          },
          {
            heading: "How We Fix It",
            content: [
              "Component testing and replacement of faulty Power IC.",
              "Reinforcement of battery circuitry and solder joints.",
              "Battery and charging port assessment.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 200 - RM 600", "Time: 1 - 2 days"],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Baseband IC",
        hash: "baseband-ic",
        title: "Smartphone Baseband IC Repair | Fix It Jerry",
        image: "/images/devices/smartphone/baseband_ic.webp",
        meta_description:
          "No signal or mobile network issues? Fix It Jerry repairs Baseband ICs to restore full network functionality.",
        sections: [
          {
            heading: "What is the Baseband IC?",
            content:
              "The Baseband IC handles mobile signal, calling, SIM detection and network connection. It’s crucial for cellular communication.",
          },
          {
            heading: "Symptoms of Baseband IC Failure",
            content: [
              "No signal or service despite SIM being inserted.",
              "SIM not detected or keeps disconnecting.",
              "Can’t make or receive calls.",
              "4G/LTE or mobile data not working.",
            ],
          },
          {
            heading: "Quick Checks Before Repair",
            content: [
              "Try another SIM card.",
              "Check for software updates.",
              "Toggle Airplane mode on/off.",
            ],
          },
          {
            heading: "How We Fix It",
            content: [
              "Chip-level soldering and replacement of Baseband IC.",
              "Signal path and antenna inspection.",
              "Software reprogramming if needed.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 250 - RM 700", "Time: 1 - 2 days"],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Audio IC",
        hash: "audio-ic",
        title: "Smartphone Audio IC Repair | Fix It Jerry",
        image: "/images/devices/smartphone/audio_ic.webp",
        meta_description:
          "No sound during calls or mic not working? We specialize in Audio IC repair for smartphones with sound and voice issues.",
        sections: [
          {
            heading: "What is the Audio IC?",
            content:
              "The Audio IC manages audio input/output functions like mic, speaker, and headphones. Damage leads to no sound or recording failures.",
          },
          {
            heading: "Common Symptoms",
            content: [
              "No mic function during calls.",
              "Voice memos  don’t record.",
              "Can’t hear callers or vice versa.",
              "Speaker or earphones work intermittently.",
            ],
          },
          {
            heading: "Before Repair",
            content: [
              "Test mic with voice recorder.",
              "Use headphones to isolate internal audio issues.",
              "Check for any recent drops or water exposure.",
            ],
          },
          {
            heading: "Our Repair Process",
            content: [
              "Chip-level diagnostics.",
              "Audio IC replacement with micro-soldering.",
              "Mic/speaker port testing.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 200 - RM 650", "Time: 1 day"],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Backlight IC",
        hash: "backlight-ic",
        title: "Smartphone Backlight IC Repair | Fix It Jerry",
        image: "/images/devices/smartphone/backlight_ic.webp",
        meta_description:
          "Display turns on but screen is dark? Our Backlight IC repair restores your smartphone’s screen visibility quickly.",
        sections: [
          {
            heading: "What is Backlight IC?",
            content:
              "The Backlight IC powers the screen brightness. If it fails, the screen stays dark even though the phone is on.",
          },
          {
            heading: "Symptoms",
            content: [
              "Black screen but phone is vibrating or playing sounds.",
              "Screen is visible only under bright light.",
              "Backlight flickers randomly.",
            ],
          },
          {
            heading: "What You Can Try First",
            content: [
              "Shine flashlight at screen to check for faint display.",
              "Avoid DIY screen pressure techniques.",
              "Bring in immediately to avoid worsening damage.",
            ],
          },
          {
            heading: "How We Fix It",
            content: [
              "Micro-soldering replacement of Backlight IC.",
              "Connector inspection and reballing if needed.",
              "Brightness calibration and testing.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 180 - RM 600", "Time: 1 - 2 days"],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Charging IC",
        hash: "charging-ic",
        title: "Smartphone Charging IC Repair | Fix It Jerry",
        image: "/images/devices/smartphone/charging_ic.webp",
        meta_description:
          "Phone not charging properly or overheating while charging? Get your Charging IC repaired today by Fix It Jerry!",
        sections: [
          {
            heading: "What is the Charging IC?",
            content:
              "The Charging IC controls voltage flow during charging. It protects your phone’s battery and motherboard.",
          },
          {
            heading: "Issues Caused by Faulty Charging IC",
            content: [
              "Phone heats up while charging.",
              "Phone doesn’t charge or charges slowly.",
              "Inconsistent charging or auto-shutdown.",
            ],
          },
          {
            heading: "What to Avoid",
            content: [
              "Using third-party chargers.",
              "Continuing to charge when phone overheats.",
              "DIY port cleaning (may short-circuit board).",
            ],
          },
          {
            heading: "Our Fix",
            content: [
              "Remove and replace damaged Charging IC chip.",
              "Port and circuit diagnostics.",
              "Post-repair voltage regulation tests.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 200 - RM 700", "Time: 1 - 2 days"],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Touch IC",
        hash: "touch-ic",
        title: "Smartphone Touch IC Repair | Fix It Jerry",
        image: "/images/devices/smartphone/touch_ic.webp",
        meta_description:
          "Touchscreen not responding or acting weird? Our Touch IC repair restores accurate screen functionality fast.",
        sections: [
          {
            heading: "What is Touch IC?",
            content:
              "The Touch IC detects your finger input and relays it to the processor. It’s essential for a responsive screen.",
          },
          {
            heading: "Symptoms of Touch IC Issues",
            content: [
              "No response when touching screen.",
              "Random ghost touches.",
              "Only part of the screen works.",
              "Swipe gestures don’t register.",
            ],
          },
          {
            heading: "What to Try Before Repair",
            content: [
              "Restart your phone.",
              "Check screen protector or case.",
              "If problem persists, it’s likely hardware-related.",
            ],
          },
          {
            heading: "Fix Process",
            content: [
              "Touch IC inspection and replacement.",
              "Board-level diagnostics.",
              "Post-repair calibration for accuracy.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 250 - RM 750", "Time: 1 - 2 days"],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Face ID & Touch ID malfunction",
        hash: "face-id-touch-id",
        title: "Face ID & Touch ID Repair | Fix It Jerry",
        image: "/images/devices/smartphone/face_id.webp",
        meta_description:
          "Biometric security not working? Fix It Jerry provides Face ID and Touch ID repairs to restore quick and secure access.",
        sections: [
          {
            heading: "What Causes Biometric Failures?",
            content:
              "Face ID and Touch ID rely on dedicated sensors and chips. Hardware damage or misalignment can lead to failures.",
          },
          {
            heading: "Common Issues",
            content: [
              "Face ID not available or setup fails.",
              "Touch ID doesn’t register or is slow.",
              "Authentication works intermittently.",
            ],
          },
          {
            heading: "Tips Before Repair",
            content: [
              "Try re-registering your face or fingerprint.",
              "Update iOS/Android to latest version.",
              "Reset Face/Touch ID settings.",
            ],
          },
          {
            heading: "Repair Approach",
            content: [
              "Sensor recalibration and cable inspection.",
              "Component-level replacement if needed.",
              "Secure Enclave sync check for Apple devices.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 300 - RM 900", "Time: 2 - 3 days"],
          },
        ],
      },
      // ================================== replacement ==================================
      // ================================== replacement ==================================
      // ================================== replacement ==================================
      // ================================== replacement ==================================
      {
  service_type: "replacement",
  service: "LCD Screen / Touchscreen",
  hash: "lcd-screen-touchscreen",
  title: "Smartphone Screen Replacement | Fix It Jerry",
  image: "/images/devices/smartphone/lcd_screen.webp",
  meta_description:
    "Cracked or unresponsive screen? Fix It Jerry offers fast and affordable smartphone LCD & touchscreen replacement using premium parts.",
  sections: [
    {
      heading: "When Do You Need a Screen Replacement?",
      content: [
        "Cracked glass or shattered display.",
        "Unresponsive touch or ghost touches.",
        "Black screen even when phone is on.",
        "Lines, dead pixels, or flickering screen.",
      ],
    },
    {
      heading: "Our Screen Replacement Process",
      content: [
        "Careful screen disassembly and cleanup.",
        "Premium LCD and digitizer replacement.",
        "Touch sensitivity testing and calibration.",
        "Dust sealing and frame alignment.",
      ],
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 300 - RM 1200", "Time: 1 - 2 hours"],
    },
  ],
      },
      {
        service_type: "replacement",
        service: "Housing",
        hash: "housing",
        title: "Smartphone Housing Replacement | Fix It Jerry",
        image: "/images/devices/smartphone/housing.webp",
        meta_description:
          "Phone looking beat up? Fix It Jerry offers full smartphone housing replacements for a fresh look and restored durability.",
        sections: [
          {
            heading: "Signs You Need a Housing Replacement",
            content: [
              "Dented or cracked phone frame.",
              "Back panel won’t stay in place.",
              "Loose edges or compromised water resistance.",
              "Buttons feel stuck or misaligned.",
            ],
          },
          {
            heading: "How We Replace the Housing",
            content: [
              "Full disassembly of internal components.",
              "Transfer of logic board, battery, and camera.",
              "New housing installation and resealing.",
              "Button & port realignment and testing.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 250 - RM 800", "Time: 1 - 2 days"],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Battery",
        hash: "battery",
        title: "Smartphone Battery Replacement | Fix It Jerry",
        image: "/images/devices/smartphone/battery.webp",
        meta_description:
          "Battery drains too fast or shuts off suddenly? Get a premium battery replacement at Fix It Jerry today.",
        sections: [
          {
            heading: "When to Replace Your Battery",
            content: [
              "Phone shuts off even when it shows 20-30%.",
              "Battery percentage jumps randomly.",
              "Device gets hot during normal use.",
              "Battery has expanded or looks swollen.",
            ],
          },
          {
            heading: "Our Battery Swap Procedure",
            content: [
              "Battery health check and diagnostics.",
              "Removal using non-invasive tools.",
              "New battery installation with premium cells.",
              "Post-repair charging & thermal tests.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 180 - RM 600", "Time: 30 minutes - 1 hour"],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Camera",
        hash: "camera",
        title: "Smartphone Camera Replacement | Fix It Jerry",
        image: "/images/devices/smartphone/camera.webp",
        meta_description:
          "Blurry photos or camera not opening? Fix It Jerry replaces front or rear smartphone cameras with precision and care.",
        sections: [
          {
            heading: "Camera Replacement Needed If...",
            content: [
              "Camera app shows black screen.",
              "Photos are blurry or won’t focus.",
              "Camera won’t open or crashes the app.",
              "Cracks or scratches on camera glass.",
            ],
          },
          {
            heading: "Our Replacement Process",
            content: [
              "Camera module testing and identification.",
              "Safe removal and flex cable inspection.",
              "New OEM camera installation.",
              "Focus and clarity test post-repair.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 220 - RM 700", "Time: 1 - 2 hours"],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Backglass",
        hash: "backglass",
        title: "Smartphone Back Glass Replacement | Fix It Jerry",
        image: "/images/devices/smartphone/backglass.webp",
        meta_description:
          "Cracked or shattered back glass? Restore your phone's sleek look with a safe backglass replacement at Fix It Jerry.",
        sections: [
          {
            heading: "Why Replace the Backglass?",
            content: [
              "Sharp cracks that can cut fingers.",
              "Affects wireless charging performance.",
              "Waterproofing compromised.",
              "Looks broken and reduces resale value.",
            ],
          },
          {
            heading: "How We Replace Back Glass",
            content: [
              "Precision heating and separation (no force).",
              "Glass adhesive residue removal.",
              "Laser machine or cold separation method.",
              "New glass application with adhesive curing.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 200 - RM 600", "Time: 1 - 3 hours"],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Mic & Speaker",
        hash: "mic-speaker",
        title: "Smartphone Mic & Speaker Replacement | Fix It Jerry",
        image: "/images/devices/smartphone/mic_speaker.webp",
        meta_description:
          "Can’t hear during calls or voice not detected? Fix It Jerry replaces faulty mics and speakers quickly and affordably.",
        sections: [
          {
            heading: "Common Mic/Speaker Problems",
            content: [
              "Others can’t hear you during calls.",
              "No sound from speaker or crackling noise.",
              "Voice memos or videos don’t capture sound.",
              "Ear speaker too soft even at max volume.",
            ],
          },
          {
            heading: "Repair Steps",
            content: [
              "Component testing for mic and earpiece.",
              "Dust/debris removal from mesh.",
              "Mic/speaker module swap with OEM parts.",
              "Sound test after replacement.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 150 - RM 500", "Time: 30 minutes - 2 hours"],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "WiFi & Charging Port",
        hash: "charging-port",
        title: "Charging Port & WiFi Antenna Replacement | Fix It Jerry",
        image: "/images/devices/smartphone/wifi_charging_port.webp",
        meta_description:
          "Charging problems or no WiFi? We replace your smartphone’s charging port and antenna modules with precision.",
        sections: [
          {
            heading: "When to Replace This",
            content: [
              "Charging only works at certain angles.",
              "Cable won’t stay plugged in.",
              "WiFi shows weak signal or drops frequently.",
              "Phone won’t detect charger at all.",
            ],
          },
          {
            heading: "Replacement Process",
            content: [
              "Charging port desoldering & board cleanup.",
              "Connector and antenna flex replacement.",
              "Multi-point charging & WiFi signal test.",
              "Frame reseating and waterproofing tape.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 180 - RM 650", "Time: 1 - 2 hours"],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Home Button / Side Buttons",
        hash: "buttons",
        title: "Smartphone Button Replacement | Fix It Jerry",
        image: "/images/devices/smartphone/home_button.webp",
        meta_description:
          "Power button not working? Volume buttons stuck? We replace smartphone home, power, and volume buttons efficiently.",
        sections: [
          {
            heading: "Symptoms of Button Failure",
            content: [
              "Power button is stuck or unresponsive.",
              "Home button doesn’t click or trigger anything.",
              "Volume buttons only work sometimes.",
              "Fingerprint sensor on home button doesn’t work.",
            ],
          },
          {
            heading: "Button Replacement Process",
            content: [
              "Open device to access button cable and bracket.",
              "Replace flex cable or button mechanism.",
              "Fingerprint calibration (if applicable).",
              "Function test post-installation.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 160 - RM 500", "Time: 1 - 2 hours"],
          },
        ],
      },
      // ================================== upgrade ==================================
      // ================================== upgrade ==================================
      // ================================== upgrade ==================================
      // ================================== upgrade ==================================
      {
      service_type: "upgrade",
      service: "Storage Upgrade",
      hash: "storage-upgrade",
      title: "Smartphone Storage Upgrade | Fix It Jerry",
      image: "/images/devices/smartphone/storage_upgrade.webp",
      meta_description:
        "Running out of space? Fix It Jerry upgrades your smartphone’s internal storage so you can store more and perform faster.",
      sections: [
        {
          heading: "Why Upgrade Storage?",
          content: [
            "Constant 'Storage Full' notifications.",
            "Lag during app installs or updates.",
            "Can’t take photos or record videos due to lack of space.",
          ],
        },
        {
          heading: "How We Upgrade Your Storage",
          content: [
            "Internal storage chip upgrade (for eligible models).",
            "MicroSD setup and configuration.",
            "Data backup and safe transfer.",
            "System optimization after expansion.",
          ],
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 200 - RM 800", "Time: 2 - 4 hours"],
        },
      ],
      },
      {
  service_type: "upgrade",
  service: "Installation and Reformat",
  hash: "os-installation",
  title: "Smartphone OS, App & Software Installation | Fix It Jerry",
  image: "/images/devices/smartphone/installation_reformat.webp",
  meta_description:
    "Slow phone? Buggy apps? Fix It Jerry formats and installs OS, apps, and software to give your phone a fresh start.",
  sections: [
    {
      heading: "When to Reformat & Reinstall",
      content: [
        "Phone is slow or unresponsive.",
        "Malware or app crashing issues.",
        "Want a clean fresh system setup.",
      ],
    },
    {
      heading: "Our Process",
      content: [
        "Back up important data (if accessible).",
        "Reformat and clean OS install.",
        "Install essential apps or your preferred software.",
        "Optimize system for performance.",
      ],
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 100 - RM 300", "Time: 1 - 2 hours"],
    },
  ],
      },
      {
        service_type: "upgrade",
        service: "General Servicing",
        hash: "general-servicing",
        title: "Smartphone General Servicing | Fix It Jerry",
        image: "/images/devices/smartphone/general_servicing.webp",
        meta_description:
          "Dusty ports? Sluggish performance? Fix It Jerry offers general servicing for your smartphone to keep it running smooth.",
        sections: [
          {
            heading: "What’s Included in General Servicing",
            content: [
              "Cleaning of charging ports and speaker grills.",
              "Removal of dust and debris from internals.",
              "Thermal paste reapplication (if needed).",
              "Performance check and light diagnostics.",
            ],
          },
          {
            heading: "Best Time to Get Servicing",
            content: [
              "Phone heats up even during idle use.",
              "Buttons feel sticky or ports loose.",
              "Device hasn’t been opened in over 2 years.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 80 - RM 250", "Time: 1 - 2 hours"],
          },
        ],
      },
      {
        service_type: "upgrade",
        service: "Apple ID Bypass",
        hash: "apple-id-bypass",
        title: "Apple ID Bypass Service | Fix It Jerry",
        image: "/images/devices/smartphone/apple_id_bypass.webp",
        meta_description:
          "Locked out of your device due to forgotten Apple ID? Fix It Jerry provides professional Apple ID bypass solutions for eligible devices.",
        sections: [
          {
            heading: "When You Need This",
            content: [
              "You forgot the Apple ID password.",
              "Bought a second-hand phone that’s still locked.",
              "Device is stuck on Activation Lock screen.",
            ],
          },
          {
            heading: "Our Approach",
            content: [
              "We verify rightful ownership documentation.",
              "Use secure bypass software (only for eligible iPhones).",
              "Ensure device is usable post-bypass.",
              "We do NOT support stolen devices.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 250 - RM 850", "Time: 1 - 3 days"],
          },
        ],
      },
      {
        service_type: "upgrade",
        service: "Data Backup & Recovery",
        hash: "data-recovery",
        title: "Data Backup & Recovery | Fix It Jerry",
        image: "/images/devices/smartphone/data_backup.webp",
        meta_description:
          "Accidentally deleted files or can't access phone data? Fix It Jerry provides full data backup and recovery services.",
        sections: [
          {
            heading: "Why You Might Need Recovery",
            content: [
              "You accidentally deleted important files.",
              "Phone is stuck in bootloop or can't turn on.",
              "Screen is broken and data is inaccessible.",
            ],
          },
          {
            heading: "How We Recover It",
            content: [
              "We attempt NAND-level recovery (if needed).",
              "Use advanced data extraction tools.",
              "Clone data to new device or drive.",
              "Encrypt and export data to USB or cloud.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 300 - RM 1200", "Time: 2 hours - 3 days"],
          },
        ],
      }
    ],
  },
  {
    title: "Airpods",
    imgSrc: "/images/services/airpods.webp",
    description:
      "Battery replacement, charging case repair, firmware updates, general servicing, connectivity issues",
    services: [
      {
        service_type: "replacement",
        service: "Battery",
        hash: "battery",
        title: "AirPods Battery Replacement | Fix It Jerry",
        meta_description:
          "Experiencing short battery life on your AirPods? Fix It Jerry offers fast and reliable battery replacement for AirPods. Book your repair today!",
        sections: [
          {
            heading: "What is an AirPods Battery Replacement?",
            content:
              "AirPods batteries degrade over time, leading to reduced listening time, connectivity drops, or failure to charge. Replacing the batteries restores performance and longevity.",
          },
          {
            heading: "Common Signs You Need a Battery Replacement",
            content: [
              "Battery life has significantly decreased.",
              "One or both AirPods don’t hold a charge.",
              "Charging case doesn’t fully charge the AirPods.",
              "AirPods shut off randomly during use.",
            ],
          },
          {
            heading: "What to Do If Your AirPods Battery Is Failing",
            content: [
              "Check if your AirPods firmware is up to date.",
              "Reset your AirPods and re-pair with your device.",
              "Try charging with a different cable and adapter.",
              "If issues persist, battery replacement is recommended.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces AirPods Batteries",
            content: [
              "Battery Testing – We assess each pod and the charging case individually.",
              "Battery Swap – Replacing degraded cells with high-quality components.",
              "Post-Replacement Testing – Ensuring charge cycles and connectivity work properly.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: ["Cost: RM 180 - RM 400", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Charging case",
        slug: "services/repair/airpods/charging-case",
        title: "AirPods Charging Case Repair | Fix It Jerry",
        meta_description:
          "Is your AirPods charging case not working properly? Fix It Jerry offers expert repairs for AirPods charging cases. Fast diagnostics and affordable repairs!",
        sections: [
          {
            heading: "What is a Charging Case Issue?",
            content:
              "The charging case is responsible for powering and storing your AirPods. Issues with the case can prevent charging, syncing, or even proper storage.",
          },
          {
            heading: "Common Charging Case Problems",
            content: [
              "Case not charging or showing no lights.",
              "One AirPod charges but the other doesn’t.",
              "Loose or broken lightning/USB-C port.",
              "Case overheats while charging.",
            ],
          },
          {
            heading: "What to Do Before Repair",
            content: [
              "Try cleaning the contacts inside the case and the port.",
              "Use a different charging cable and wall adapter.",
              "Reset the AirPods and test again.",
              "If the issue continues, it may require a repair or port replacement.",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs Charging Cases",
            content: [
              "Port Repair – Fixing loose or broken lightning/USB-C ports.",
              "Connector Cleaning – Removing corrosion or debris inside the case.",
              "Battery & Board Check – Diagnosing internal components for failure.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 150 - RM 350", "Turnaround Time: 1-2 days."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "General servicing",
        slug: "services/repair/airpods/general-servicing",
        title: "AirPods General Servicing & Firmware Updates | Fix It Jerry",
        meta_description:
          "Need help updating your AirPods firmware or cleaning them up? Fix It Jerry provides thorough AirPods servicing and software updates.",
        sections: [
          {
            heading: "What is AirPods General Servicing?",
            content:
              "Servicing includes firmware updates, cleaning, performance tuning, and checking for hardware issues. This can restore performance and prevent future problems.",
          },
          {
            heading: "Common Reasons for Servicing",
            content: [
              "Sound imbalance or low volume.",
              "Microphone issues during calls.",
              "Frequent disconnections or lag.",
              "Outdated firmware affecting performance.",
            ],
          },
          {
            heading: "What to Do Before Servicing",
            content: [
              "Check for firmware updates via your iPhone settings.",
              "Try cleaning your AirPods with a soft brush.",
              "Reset your AirPods and re-pair them.",
              "If problems persist, bring them in for a full servicing.",
            ],
          },
          {
            heading: "How Fix It Jerry Performs Servicing",
            content: [
              "Firmware Update – Ensuring software is up to date.",
              "Component Cleaning – Safe cleaning of speaker mesh and microphones.",
              "Diagnostic Test – Ensuring both pods and the case function properly.",
            ],
          },
          {
            heading: "Service Cost & Turnaround Time",
            content: ["Cost: RM 100 - RM 250", "Turnaround Time: 1 hour."],
          },
        ],
      },
    ],
  },
  {
    title: "iPod",
    imgSrc: "/images/services/ipod.webp",
    description:
      "Battery replacement, screen repair, button replacement, storage upgrade, OS installation",
    services: [
      {
        service_type: "replacement",
        service: "Battery",
        slug: "services/replacement/ipod/battery",
        title: "iPod Battery Replacement | Fix It Jerry",
        meta_description:
          "Battery dying fast or iPod not turning on? Fix It Jerry offers professional iPod battery replacements using high-quality components. Fast turnaround!",
        sections: [
          {
            heading: "What is a Battery Replacement?",
            content:
              "Over time, iPod batteries degrade, leading to reduced usage time or sudden shutdowns. Replacing the battery restores original performance.",
          },
          {
            heading: "Common Signs You Need a Battery Replacement",
            content: [
              "iPod dies quickly even after full charge.",
              "Device only works when plugged in.",
              "Swollen battery or warped casing.",
              "Battery percentage jumps or freezes.",
            ],
          },
          {
            heading: "What to Do Before Replacing the Battery",
            content: [
              "Back up your data if possible.",
              "Avoid using the iPod if the battery is swollen.",
              "Do not attempt to remove the battery yourself.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces iPod Batteries",
            content: [
              "Battery Health Check – Assessing wear levels.",
              "Safe Removal – Opening the casing without damaging internals.",
              "New Battery Installation – Using premium-grade cells.",
              "Full Test – Verifying charge/discharge cycles after install.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: ["Cost: RM 150 - RM 400", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "LCD/touch screen",
        slug: "services/replacement/ipod/lcd",
        title: "iPod LCD Screen Replacement | Fix It Jerry",
        meta_description:
          "Cracked or unresponsive iPod screen? Fix It Jerry offers fast and affordable LCD screen replacements for iPods. Restore your display today!",
        sections: [
          {
            heading: "What is an LCD Screen Replacement?",
            content:
              "The LCD handles visuals and touch input. Physical damage or malfunction may require a full screen replacement to restore proper functionality.",
          },
          {
            heading: "Common Issues That Require Screen Replacement",
            content: [
              "Cracks or shattered glass.",
              "Unresponsive or erratic touch.",
              "Dead pixels or colored lines.",
              "Flickering or black screen.",
            ],
          },
          {
            heading: "What to Do Before Screen Replacement",
            content: [
              "Back up your data to iTunes or iCloud.",
              "Avoid pressing on the damaged screen.",
              "Bring in the device for assessment.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces LCD Screens",
            content: [
              "Damage Assessment – Confirming the issue isn't internal.",
              "Full Screen Assembly Replacement – Not just the glass.",
              "Adhesion & Sealing – Ensuring dust and water resistance.",
              "Calibration – Ensuring smooth touch response post-repair.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: ["Cost: RM 250 - RM 700", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Button",
        slug: "services/replacement/ipod/button",
        title: "iPod Button Repair | Fix It Jerry",
        meta_description:
          "Is your iPod’s home or volume button stuck or unresponsive? Fix It Jerry specializes in iPod button repairs with quick service and affordable pricing.",
        sections: [
          {
            heading: "What is a Button Replacement?",
            content:
              "Button issues include unresponsive or physically stuck controls. We restore button functionality with part replacements and flex cable repairs.",
          },
          {
            heading: "Common Signs You Need a Button Repair",
            content: [
              "Home button doesn’t respond to presses.",
              "Volume buttons stuck or not clicking.",
              "Power button fails to wake or lock the iPod.",
            ],
          },
          {
            heading: "What to Do Before Repair",
            content: [
              "Try a restart to rule out software lag.",
              "Check for dirt or obstruction in the button crevices.",
              "Avoid pressing forcefully to prevent internal damage.",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs iPod Buttons",
            content: [
              "Button & Flex Cable Replacement – Ensures full responsiveness.",
              "Cleaning & Alignment – Fixing debris or misaligned buttons.",
              "Post-Test – Ensuring every button responds correctly.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 100 - RM 300", "Turnaround Time: 1 hour."],
          },
        ],
      },
      {
        service_type: "upgrade",
        service: "Storage upgrade",
        slug: "services/upgrade/ipod/storage-upgrade",
        title: "iPod Storage Upgrade | Fix It Jerry",
        meta_description:
          "Running out of space on your iPod? Fix It Jerry offers storage upgrades to give your device more room for music and media.",
        sections: [
          {
            heading: "What is a Storage Upgrade?",
            content:
              "We increase your iPod’s storage capacity, allowing you to store more songs, podcasts, and files. Ideal for users running out of space.",
          },
          {
            heading: "Common Signs You Need More Storage",
            content: [
              "'Storage Almost Full' warnings constantly.",
              "Unable to download new songs or files.",
              "Sluggish performance due to limited space.",
            ],
          },
          {
            heading: "What to Do Before Upgrading",
            content: [
              "Back up all your media to a computer.",
              "Delete unused content to temporarily free space.",
              "Schedule a time for the upgrade to avoid data loss.",
            ],
          },
          {
            heading: "How Fix It Jerry Performs Storage Upgrades",
            content: [
              "Compatibility Check – Ensuring your model supports upgrades.",
              "Storage Swap – Replacing with larger SSD/flash module.",
              "Data Migration – Retaining your music and settings if possible.",
            ],
          },
          {
            heading: "Upgrade Cost & Turnaround Time",
            content: ["Cost: RM 300 - RM 800", "Turnaround Time: 2-3 hours."],
          },
        ],
      },
      {
        service_type: "installation",
        service: "OS installation",
        slug: "services/installation/ipod/os-installation",
        title: "iPod OS Installation | Fix It Jerry",
        meta_description:
          "Need your iPod software reinstalled or updated? Fix It Jerry provides OS installation services for smooth performance and app compatibility.",
        sections: [
          {
            heading: "What is an OS Installation?",
            content:
              "Reinstalling or updating the operating system can resolve software glitches, lag, and restore functionality after corruption or resets.",
          },
          {
            heading: "When You Might Need It",
            content: [
              "iPod is stuck in a boot loop or recovery mode.",
              "Software is outdated and apps aren’t working.",
              "System crashes or frequent freezing.",
              "Failed firmware updates.",
            ],
          },
          {
            heading: "What to Do Before OS Installation",
            content: [
              "Ensure your data is backed up if the device is accessible.",
              "Note down any login credentials you’ll need post-reset.",
            ],
          },
          {
            heading: "How Fix It Jerry Performs OS Installation",
            content: [
              "Diagnostic – Ensuring the issue is OS-related.",
              "Installation – Flashing the correct firmware version.",
              "Testing – Verifying full system functionality after update.",
            ],
          },
          {
            heading: "Installation Cost & Turnaround Time",
            content: ["Cost: RM 80 - RM 200", "Turnaround Time: 1 hour."],
          },
        ],
      },
    ],
  },
  {
    title: "Apple Watch",
    imgSrc: "/images/services/apple_watch.webp",
    description:
      "Battery replacement, screen repair, sensor issues, OS troubleshooting, data recovery",
    services: [
      {
        service_type: "replacement",
        service: "Battery",
        slug: "services/replacement/apple-watch/battery",
        title: "Apple Watch Battery Replacement | Fix It Jerry",
        meta_description:
          "Is your Apple Watch battery draining too fast or not charging? Fix It Jerry offers fast and professional Apple Watch battery replacement services.",
        sections: [
          {
            heading: "What is an Apple Watch Battery Replacement?",
            content:
              "Apple Watch batteries degrade over time, resulting in shorter usage times, unexpected shutdowns, or charging issues. A battery replacement restores your watch’s longevity and reliability.",
          },
          {
            heading: "Signs You Need a Battery Replacement",
            content: [
              "Battery life is significantly shorter than before.",
              "Watch gets warm or hot while charging.",
              "Apple Watch shuts down randomly.",
              "Device only turns on when connected to charger.",
            ],
          },
          {
            heading: "What to Do Before Replacement",
            content: [
              "Back up your Apple Watch via your iPhone.",
              "Unpair the watch from your phone before service.",
              "Don’t attempt to open or pry the device yourself.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces the Battery",
            content: [
              "Battery Health Check – Testing cycle count and condition.",
              "Careful Disassembly – Using proper tools to avoid screen damage.",
              "High-Quality Battery Swap – Installing reliable replacements.",
              "Full Functionality Test – Ensuring normal performance post-replacement.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: ["Cost: RM 180 - RM 400", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "LCD/touchscreen",
        slug: "services/replacement/apple-watch/lcd",
        title: "Apple Watch Screen Replacement | Fix It Jerry",
        meta_description:
          "Cracked or unresponsive Apple Watch screen? Fix It Jerry offers expert screen replacement for all Apple Watch models. Fast, clean, and affordable service.",
        sections: [
          {
            heading: "What is an Apple Watch LCD Replacement?",
            content:
              "A cracked or malfunctioning Apple Watch screen affects both display and touch functions. LCD replacements restore both visuals and usability.",
          },
          {
            heading: "When You Need a Screen Replacement",
            content: [
              "Cracked or shattered display.",
              "Touch input not working or misfiring.",
              "Black screen or dead pixels.",
              "Display flickering or dim.",
            ],
          },
          {
            heading: "What to Do Before Getting It Replaced",
            content: [
              "Unpair your watch from your iPhone.",
              "Back up health and activity data to iCloud.",
              "Avoid using the watch with exposed internals.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces Apple Watch Screens",
            content: [
              "Screen Diagnosis – Confirming internal damage.",
              "Precision Screen Removal – No damage to surrounding case.",
              "New LCD Installation – Using factory-grade replacements.",
              "Waterproof Sealing – Maintaining durability after repair.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: ["Cost: RM 250 - RM 800", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
           {
        service_type: "replacement",
        service: "LCD/touchscreen",
        slug: "services/replacement/apple-watch/lcd",
        title: "Apple Watch Screen Replacement | Fix It Jerry",
        meta_description:
          "Cracked or unresponsive Apple Watch screen? Fix It Jerry offers expert screen replacement for all Apple Watch models. Fast, clean, and affordable service.",
        sections: [
          {
            heading: "What is an Apple Watch LCD Replacement?",
            content:
              "A cracked or malfunctioning Apple Watch screen affects both display and touch functions. LCD replacements restore both visuals and usability.",
          },
          {
            heading: "When You Need a Screen Replacement",
            content: [
              "Cracked or shattered display.",
              "Touch input not working or misfiring.",
              "Black screen or dead pixels.",
              "Display flickering or dim.",
            ],
          },
          {
            heading: "What to Do Before Getting It Replaced",
            content: [
              "Unpair your watch from your iPhone.",
              "Back up health and activity data to iCloud.",
              "Avoid using the watch with exposed internals.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces Apple Watch Screens",
            content: [
              "Screen Diagnosis – Confirming internal damage.",
              "Precision Screen Removal – No damage to surrounding case.",
              "New LCD Installation – Using factory-grade replacements.",
              "Waterproof Sealing – Maintaining durability after repair.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: ["Cost: RM 250 - RM 800", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
    ],
  },
  {
    title: "Tablet",
    imgSrc: "/images/services/ipad.webp",
    description:
      "Water damage, power supply, network & connectivity, audio IC, backlight IC, charging IC, touch IC, Face ID, Touch ID, LCD, touchscreen, battery, camera, back glass",
    services: [
      {
        service_type: "repair",
        service: "Water damage",
        slug: "services/repair/smartphone/water-damage",
        title: "Smartphone Water Damage Repair | Fix It Jerry",
        meta_description:
          "Dropped your phone in water? Fix It Jerry provides expert smartphone water damage repair services. Fast, reliable, and affordable repairs. Contact us today!",
        sections: [
          {
            heading: "What is Water Damage?",
            content:
              "Water can enter the phone and damage internal components. Symptoms include screen flickering, overheating, no sound, charging issues, and unresponsive touch.",
          },
          {
            heading: "Common Issues with Water Damage",
            content: [
              "Phone won’t turn on or keeps restarting.",
              "Touchscreen stops working or behaves erratically.",
              "No sound or muffled speakers.",
              "Charging issues (slow charging, not charging, overheating).",
              "No SIM detection, weak signal, or Wi-Fi/Bluetooth failures.",
              "Display issues (flickering, black screen, discoloration).",
              "Touch ID/Face ID not working.",
            ],
          },
          {
            heading: "What to Do After Water Damage",
            content: [
              "Power Off Immediately – Prevents short circuits.",
              "Do NOT Charge – Charging may worsen the damage.",
              "Dry the Phone – Use silica gel packets or a vacuum (avoid rice, as dust can get inside).",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs Water Damage",
            content: [
              "Component-Level Repair – Identifying and replacing corroded parts.",
              "Ultrasonic Cleaning – Deep cleaning to remove residue and corrosion.",
              "Battery & Charging Port Replacement – If damaged due to water exposure.",
              "IC Repairs – If chips like Power IC, Baseband IC, or Audio IC are affected.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 200 - RM 800", "Turnaround Time: 1-3 days."],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Power supply",
        slug: "services/repair/smartphone/power-supply",
        title: "Smartphone Power Supply Repair | Fix It Jerry",
        meta_description:
          "Is your smartphone not turning on or shutting down randomly? Fix It Jerry provides expert power supply repair services. Get fast and affordable repairs today!",
        sections: [
          {
            heading: "What is a Power Supply Issue?",
            content:
              "The power supply unit in a smartphone regulates and distributes power to all components. If it's faulty, your phone may not charge, turn on, or may shut down unexpectedly.",
          },
          {
            heading: "Common Issues with Power Supply Failure",
            content: [
              "Phone does not turn on at all.",
              "Random shutdowns or restarts.",
              "Overheating while charging or using the phone.",
              "Battery drains quickly despite full charge.",
              "Phone only turns on when plugged into a charger.",
              "Charging port feels loose or unresponsive.",
            ],
          },
          {
            heading: "What to Do If Your Phone Has Power Supply Issues",
            content: [
              "Try using a different charger and cable to rule out accessories.",
              "Perform a hard reset to check if it’s a software issue.",
              "Check the charging port for dust or debris and clean it gently.",
              "If the phone still won’t turn on, seek professional repair to prevent further damage.",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs Power Supply Issues",
            content: [
              "Component-Level Diagnosis – Checking the motherboard and power ICs for faults.",
              "Charging Port Repair or Replacement – Fixing loose or damaged charging ports.",
              "Battery Connector & Circuit Repair – Ensuring power is properly delivered to components.",
              "Power IC Replacement – Replacing faulty power management chips if necessary.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 250 - RM 900", "Turnaround Time: 1-2 days."],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Network issue",
        slug: "services/repair/smartphone/network-issue",
        title: "Smartphone Network Issue Repair | Fix It Jerry",
        meta_description:
          "Experiencing no signal, weak network, or dropped calls? Fix It Jerry offers expert smartphone network issue repair. Get fast and reliable service today!",
        sections: [
          {
            heading: "What are Network Issues?",
            content:
              "Network issues can arise from faulty hardware, software bugs, or SIM-related problems. A malfunctioning Baseband IC, damaged antennas, or misconfigured settings can lead to poor or no network reception.",
          },
          {
            heading: "Common Network Problems in Smartphones",
            content: [
              "No service or SIM card not detected.",
              "Weak signal even in areas with strong network coverage.",
              "Frequent call drops or poor call quality.",
              "Wi-Fi or Bluetooth won't turn on or keeps disconnecting.",
              "Cannot connect to mobile data (4G/5G not working).",
              "Airplane mode stuck or network unavailable error.",
            ],
          },
          {
            heading: "What to Do If Your Phone Has Network Issues",
            content: [
              "Restart your phone to refresh network connections.",
              "Toggle Airplane mode on and off to reset the network.",
              "Remove and reinsert the SIM card to check for connection issues.",
              "Check if the issue persists with a different SIM card.",
              "Update your phone’s software to fix potential bugs.",
              "If the problem persists, seek professional diagnosis and repair.",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs Network Issues",
            content: [
              "Baseband IC Repair – Fixing or replacing faulty network processing chips.",
              "SIM Card Slot Repair – Resolving loose or broken SIM connectors.",
              "Antenna Circuit Fix – Checking and replacing damaged antennas for better signal strength.",
              "Firmware & Software Troubleshooting – Reflashing corrupted baseband software to restore connectivity.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 200 - RM 850", "Turnaround Time: 1-2 days."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "LCD/touchscreen",
        slug: "services/replacement/smartphone/lcd",
        title: "Smartphone LCD Screen Replacement | Fix It Jerry",
        meta_description:
          "Cracked or unresponsive screen? Fix It Jerry offers fast and affordable smartphone LCD screen replacement. High-quality parts and expert service!",
        sections: [
          {
            heading: "What is an LCD Screen Replacement?",
            content:
              "The LCD (Liquid Crystal Display) is responsible for displaying images on your phone. Damage to the LCD can cause dead pixels, lines, or a completely black screen, requiring a full replacement.",
          },
          {
            heading: "Common Issues That Require LCD",
            content: [
              "Cracked or shattered screen.",
              "Unresponsive touch or ghost touch.",
              "Black screen despite the phone being on.",
              "Vertical or horizontal lines on the display.",
              "Flickering or dim screen.",
              "Dead pixels or screen discoloration.",
            ],
          },
          {
            heading: "What to Do If Your LCD is Damaged",
            content: [
              "Avoid applying pressure on the screen to prevent further damage.",
              "Do not attempt to use the phone if the screen is unresponsive.",
              "If possible, back up important data before bringing it for repair.",
              "Seek professional LCD replacement to restore full functionality.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces LCD Screens",
            content: [
              "High-Quality LCD Replacement – We use only premium parts for durability.",
              "Screen Calibration – Ensuring touch responsiveness after replacement.",
              "Adhesive Sealing – Proper installation to prevent dust and moisture entry.",
              "Frame Alignment – Checking for any structural damage around the display.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: [
              "Cost: RM 300 - RM 1200 (Depending on phone model)",
              "Turnaround Time: 1-2 hours.",
            ],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Battery",
        slug: "services/replacement/smartphone/battery",
        title: "Smartphone Battery Replacement | Fix It Jerry",
        meta_description:
          "Is your phone’s battery draining fast or not charging properly? Fix It Jerry offers professional smartphone battery replacement with high-quality parts and quick service!",
        sections: [
          {
            heading: "What is a Battery Replacement?",
            content:
              "Over time, smartphone batteries degrade, leading to poor battery life, unexpected shutdowns, or charging issues. Replacing the battery restores optimal performance and extends your phone’s lifespan.",
          },
          {
            heading: "Common Signs You Need a Battery",
            content: [
              "Battery drains quickly even with minimal use.",
              "Phone shuts down unexpectedly, even when battery percentage is high.",
              "Swollen battery causing the back cover to lift.",
              "Phone gets excessively hot during use or charging.",
              "Battery percentage jumps up or down randomly.",
              "Phone only turns on when plugged in.",
            ],
          },
          {
            heading: "What to Do If Your Battery is Draining Fast",
            content: [
              "Check if any background apps are consuming excessive power.",
              "Enable power-saving mode to extend battery life temporarily.",
              "Try using a different charging cable and adapter.",
              "Avoid using the phone while charging to prevent overheating.",
              "If issues persist, a professional battery replacement is recommended.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces Your Battery",
            content: [
              "Battery Health Diagnosis – Checking battery cycles and overall condition.",
              "Safe Battery Removal – Carefully removing the old battery without damaging components.",
              "Premium Replacement Battery – Using high-quality, long-lasting batteries.",
              "Post-Replacement Testing – Ensuring battery performance and proper charging functionality.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: [
              "Cost: RM 180 - RM 600 (Depending on phone model)",
              "Turnaround Time: 30 minutes - 1 hour.",
            ],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Housing",
        slug: "services/replacement/smartphone/battery",
        title: "Smartphone Battery Replacement | Fix It Jerry",
        meta_description:
          "Is your phone’s battery draining fast or not charging properly? Fix It Jerry offers professional smartphone battery replacement with high-quality parts and quick service!",
        sections: [
          {
            heading: "What is a Battery Replacement?",
            content:
              "Over time, smartphone batteries degrade, leading to poor battery life, unexpected shutdowns, or charging issues. Replacing the battery restores optimal performance and extends your phone’s lifespan.",
          },
          {
            heading: "Common Signs You Need a Battery",
            content: [
              "Battery drains quickly even with minimal use.",
              "Phone shuts down unexpectedly, even when battery percentage is high.",
              "Swollen battery causing the back cover to lift.",
              "Phone gets excessively hot during use or charging.",
              "Battery percentage jumps up or down randomly.",
              "Phone only turns on when plugged in.",
            ],
          },
          {
            heading: "What to Do If Your Battery is Draining Fast",
            content: [
              "Check if any background apps are consuming excessive power.",
              "Enable power-saving mode to extend battery life temporarily.",
              "Try using a different charging cable and adapter.",
              "Avoid using the phone while charging to prevent overheating.",
              "If issues persist, a professional battery replacement is recommended.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces Your Battery",
            content: [
              "Battery Health Diagnosis – Checking battery cycles and overall condition.",
              "Safe Battery Removal – Carefully removing the old battery without damaging components.",
              "Premium Replacement Battery – Using high-quality, long-lasting batteries.",
              "Post-Replacement Testing – Ensuring battery performance and proper charging functionality.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: [
              "Cost: RM 180 - RM 600 (Depending on phone model)",
              "Turnaround Time: 30 minutes - 1 hour.",
            ],
          },
        ],
      },
      // /////
      {
        service_type: "upgrade",
        service: "Storage Upgrade",
        slug: "services/upgrade/smartphone/os-upgrade",
        title: "Smartphone OS Upgrade Service | Fix It Jerry",
        meta_description:
          "Looking to upgrade your phone’s operating system? Fix It Jerry offers professional OS upgrade services for better performance, security, and new features!",
        sections: [
          {
            heading: "What is an OS Upgrade?",
            content:
              "An OS (Operating System) upgrade updates your smartphone’s software to a newer version, providing better performance, improved security, and new features.",
          },
          {
            heading: "Common Reasons to Upgrade Your OS",
            content: [
              "Your current OS version is outdated and no longer supported.",
              "Newer apps require a more recent OS version.",
              "Security vulnerabilities in older software versions.",
              "Performance issues like lagging, freezing, or slow app launches.",
              "New features and improvements available in the latest OS.",
            ],
          },
          {
            heading: "What to Do Before Upgrading Your OS",
            content: [
              "Back up all important data to prevent data loss.",
              "Ensure your phone has at least 50% battery or is plugged in.",
              "Check if your phone model is compatible with the latest OS.",
              "Free up storage space for a smooth upgrade process.",
              "Verify internet connection stability for uninterrupted downloads.",
            ],
          },
          {
            heading: "How Fix It Jerry Performs OS Upgrades",
            content: [
              "Compatibility Check – Ensuring your device supports the latest OS version.",
              "Data Backup Assistance – Helping you back up important files before upgrading.",
              "OS Installation – Secure and error-free installation of the new software.",
              "Post-Upgrade Optimization – Configuring settings for smooth performance.",
            ],
          },
          {
            heading: "Upgrade Cost & Turnaround Time",
            content: [
              "Cost: RM 80 - RM 300 (Depending on phone model)",
              "Turnaround Time: 30 minutes - 2 hours.",
            ],
          },
        ],
      },
      {
        service_type: "upgrade",
        service: "General Servicing",
        slug: "services/upgrade/smartphone/performance-boost",
        title: "Smartphone Performance Boost Service | Fix It Jerry",
        meta_description:
          "Is your smartphone running slow or lagging? Fix It Jerry offers professional performance boost services to enhance speed, optimize storage, and improve efficiency!",
        sections: [
          {
            heading: "What is a Performance Boost?",
            content:
              "A performance boost optimizes your smartphone’s speed and responsiveness by clearing unnecessary data, optimizing settings, and upgrading components if necessary.",
          },
          {
            heading: "Common Signs Your Phone Needs a Performance Boost",
            content: [
              "Apps take a long time to open or crash frequently.",
              "The phone lags or freezes during use.",
              "Insufficient storage warnings despite deleting files.",
              "Battery drains faster than usual due to background processes.",
              "Overheating while performing basic tasks.",
            ],
          },
          {
            heading: "What to Do Before a Performance Boost",
            content: [
              "Back up your important files to avoid data loss.",
              "Uninstall unused apps to free up storage.",
              "Check for pending software updates.",
              "Restart your phone to see if temporary lag issues resolve.",
              "If the problem persists, professional optimization is needed.",
            ],
          },
          {
            heading: "How Fix It Jerry Boosts Your Phone's Performance",
            content: [
              "Storage Optimization – Clearing junk files and unnecessary cache.",
              "Software Optimization – Adjusting system settings for speed improvement.",
              "Hardware Inspection – Checking battery, RAM, and processor performance.",
              "OS & App Updates – Ensuring all software is up-to-date and bug-free.",
            ],
          },
          {
            heading: "Upgrade Cost & Turnaround Time",
            content: [
              "Cost: RM 100 - RM 500 (Depending on optimization level)",
              "Turnaround Time: 1 - 3 hours.",
            ],
          },
        ],
      },
      {
        service_type: "upgrade",
        service: "OS installation",
        slug: "services/upgrade/smartphone/storage-upgrade",
        title: "Smartphone Storage Upgrade Service | Fix It Jerry",
        meta_description:
          "Running out of storage on your phone? Fix It Jerry offers professional smartphone storage upgrade services to expand capacity and improve performance!",
        sections: [
          {
            heading: "What is a Storage Upgrade?",
            content:
              "A storage upgrade increases your smartphone's internal storage capacity, allowing you to store more apps, photos, videos, and files without performance slowdowns.",
          },
          {
            heading: "Common Signs You Need a Storage Upgrade",
            content: [
              "Frequent 'Storage Almost Full' warnings.",
              "Cannot install new apps due to low space.",
              "Phone slows down due to limited storage availability.",
              "Camera unable to take photos/videos due to insufficient space.",
              "Difficulty saving files or downloading updates.",
            ],
          },
          {
            heading: "What to Do Before Upgrading Your Storage",
            content: [
              "Back up all important files to avoid data loss.",
              "Uninstall unused apps to free up storage.",
              "Move photos, videos, and large files to cloud storage or an SD card.",
              "Check if your device supports storage expansion via microSD card.",
              "If storage is still insufficient, a professional storage upgrade is needed.",
            ],
          },
          {
            heading: "How Fix It Jerry Upgrades Your Phone’s Storage",
            content: [
              "Storage Expansion – Installing a larger capacity storage chip (for supported models).",
              "MicroSD Card Installation – Setting up and optimizing external storage expansion.",
              "Data Transfer & Backup – Ensuring no data is lost during the upgrade process.",
              "Performance Optimization – Configuring new storage for smooth operation.",
            ],
          },
          {
            heading: "Upgrade Cost & Turnaround Time",
            content: [
              "Cost: RM 200 - RM 800 (Depending on upgrade option)",
              "Turnaround Time: 2 - 4 hours.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Laptop",
    imgSrc: "/images/services/macbook.webp",
    description:
      "Water damage repair, Power supply repair, Network issue repair, Screen replacement, Battery replacement, Keyboard replacement, Hinge replacement, Storage upgrade, General servicing, OS installation",
    services: [
      {
        service_type: "repair",
        service: "Water damage",
        slug: "services/repair/laptop/water-damage",
        title: "Laptop Water Damage Repair | Fix It Jerry",
        meta_description:
          "Spilled water on your laptop? Fix It Jerry provides professional laptop water damage repair services with deep cleaning and component-level diagnostics.",
        sections: [
          {
            heading: "What is Water Damage?",
            content:
              "Liquids can cause short circuits or corrosion on your laptop’s motherboard and components. Acting fast is critical to prevent permanent damage.",
          },
          {
            heading: "Common Signs of Water Damage",
            content: [
              "Laptop doesn’t turn on or restarts randomly.",
              "Keyboard or trackpad stops working.",
              "Screen flickers or won’t display properly.",
              "Unusual sounds or overheating.",
            ],
          },
          {
            heading: "What to Do After Spilling Water",
            content: [
              "Power off the laptop immediately.",
              "Do not attempt to charge it.",
              "Keep it upside down to drain excess liquid.",
              "Bring it in for professional cleaning and diagnostics ASAP.",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs Water-Damaged Laptops",
            content: [
              "Component-Level Diagnosis – Identifying corroded parts.",
              "Ultrasonic Cleaning – Deep cleaning of affected components.",
              "Board Repair or Replacement – Fixing or replacing damaged circuits.",
              "Full System Testing – Ensuring all functions are restored.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 250 - RM 1000", "Turnaround Time: 2-4 days."],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Power supply",
        slug: "services/repair/laptop/power-supply",
        title: "Laptop Power Supply Repair | Fix It Jerry",
        meta_description:
          "Laptop not powering on or randomly shutting down? Fix It Jerry offers expert power supply repair for all laptop models. Fast turnaround and reliable service.",
        sections: [
          {
            heading: "What is a Power Supply Repair?",
            content:
              "Your laptop’s power supply delivers electricity to all internal parts. Damage or failure can cause your laptop to stop functioning entirely.",
          },
          {
            heading: "Common Power Supply Issues",
            content: [
              "Laptop doesn't power on.",
              "Battery doesn't charge.",
              "Laptop shuts down when charger is removed.",
              "Power jack feels loose or damaged.",
            ],
          },
          {
            heading: "What to Do If You Suspect a Power Issue",
            content: [
              "Try another charger or adapter.",
              "Check for LED indicators or battery light.",
              "Don’t force the power jack if it feels loose.",
              "Bring in the laptop for testing and diagnostics.",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs Power Supply Issues",
            content: [
              "DC Jack Repair – Fixing broken or loose charging ports.",
              "Power Circuit Diagnosis – Checking motherboard power components.",
              "Battery Connector Fix – Ensuring power flows properly.",
              "Power Management IC Replacement – Fixing faulty chips.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 200 - RM 600", "Turnaround Time: 1-2 days."],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Network issue",
        slug: "services/repair/laptop/network",
        title: "Laptop Network Issue Repair | Fix It Jerry",
        meta_description:
          "Wi-Fi or Bluetooth not working on your laptop? Fix It Jerry provides quick and affordable network issue diagnostics and repair for all brands.",
        sections: [
          {
            heading: "What Are Laptop Network Issues?",
            content:
              "Network issues can prevent your laptop from connecting to Wi-Fi or Bluetooth, often due to driver errors, antenna damage, or faulty hardware.",
          },
          {
            heading: "Common Network Problems",
            content: [
              "Wi-Fi won't connect or drops frequently.",
              "Bluetooth not pairing or disappears from settings.",
              "No network adapters detected.",
              "Slow internet despite strong signal.",
            ],
          },
          {
            heading: "What to Try Before Bringing It In",
            content: [
              "Restart your laptop and router.",
              "Update your network drivers.",
              "Test with another Wi-Fi network.",
              "If problems persist, professional repair is needed.",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs Network Issues",
            content: [
              "Driver Reinstallation – Fixing corrupted or outdated drivers.",
              "Wi-Fi Card Replacement – Swapping out failing adapters.",
              "Antenna Repair – Reconnecting or replacing broken antennas.",
              "OS Troubleshooting – Resolving software conflicts.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 180 - RM 500", "Turnaround Time: 1-2 days."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Screen",
        slug: "services/replacement/laptop/screen",
        title: "Laptop Screen Replacement | Fix It Jerry",
        meta_description:
          "Broken or flickering laptop screen? Fix It Jerry provides screen replacement services with fast turnaround and high-quality parts.",
        sections: [
          {
            heading: "What is a Laptop Screen Replacement?",
            content:
              "If your screen is cracked, showing lines, or has display issues, it likely needs full panel replacement. We use original-grade components for your laptop model.",
          },
          {
            heading: "Signs You Need a Screen Replacement",
            content: [
              "Cracks, black spots, or screen flickering.",
              "Lines across the display.",
              "No image but backlight is working.",
              "Unusual screen colors or brightness issues.",
            ],
          },
          {
            heading: "How We Replace Laptop Screens",
            content: [
              "Damage Diagnosis – Confirming panel and cable status.",
              "Panel Replacement – Matching model with compatible screens.",
              "Display Calibration – Ensuring color accuracy and brightness.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 300 - RM 1000", "Turnaround Time: 1-2 days."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Battery",
        slug: "services/replacement/laptop/battery",
        title: "Laptop Battery Replacement | Fix It Jerry",
        meta_description:
          "Battery draining fast or not charging? Fix It Jerry offers quick and reliable laptop battery replacements with warranty.",
        sections: [
          {
            heading: "What is a Battery Replacement?",
            content:
              "Laptop batteries wear out after a few hundred charge cycles. Replacing it restores your laptop’s portability and performance.",
          },
          {
            heading: "Common Battery Issues",
            content: [
              "Battery drains quickly or doesn't charge.",
              "Laptop shuts down when unplugged.",
              "Swollen battery bulging the chassis.",
              "Laptop only works when plugged in.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces Batteries",
            content: [
              "Battery Health Assessment – Measuring cycle count and wear.",
              "Safe Removal – Avoiding damage to connectors.",
              "New Battery Install – Using quality certified replacements.",
              "Post-Check – Verifying charge and safety sensors.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 200 - RM 600", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Keyboard",
        slug: "services/replacement/laptop/keyboard",
        title: "Laptop Keyboard Replacement | Fix It Jerry",
        meta_description:
          "Sticky, unresponsive, or missing keys? Fix It Jerry offers laptop keyboard replacements for all major brands. Quick and reliable service.",
        sections: [
          {
            heading: "When You Need a Keyboard Replacement",
            content: [
              "Certain keys don’t respond or double-type.",
              "Liquid spill caused keyboard to stop working.",
              "Keys are physically missing or broken.",
            ],
          },
          {
            heading: "How We Replace Your Laptop Keyboard",
            content: [
              "Full Keyboard Removal – For both top-case and individual styles.",
              "Internal Cable Connection – Proper reconnection for functionality.",
              "Key Testing – Ensuring all keys register properly.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 180 - RM 400", "Turnaround Time: 2-3 hours."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Hinge",
        slug: "services/replacement/laptop/hinge",
        title: "Laptop Hinge Repair | Fix It Jerry",
        meta_description:
          "Is your laptop screen wobbling or not closing properly? Fix It Jerry provides sturdy and secure hinge repair or replacement services.",
        sections: [
          {
            heading: "What is a Hinge Repair?",
            content:
              "Laptop hinges can loosen, break, or snap from daily use or accidental drops. We repair or replace hinges to ensure smooth screen movement and structural integrity.",
          },
          {
            heading: "Signs You Need a Hinge Fix",
            content: [
              "Screen wobbles or doesn’t stay upright.",
              "Creaking or grinding when opening.",
              "Visible cracks around the hinge area.",
              "Laptop can’t fully open or close properly.",
            ],
          },
          {
            heading: "How We Fix Laptop Hinges",
            content: [
              "Tightening Loose Hinges – Simple adjustments if no breakage.",
              "Hinge Replacement – Installing new hinges for damaged units.",
              "Chassis Reinforcement – Fixing cracked casing around the hinge.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 180 - RM 350", "Turnaround Time: 2-4 hours."],
          },
        ],
      },
      {
        service_type: "upgrade",
        service: "Storage upgrade",
        slug: "services/upgrade/laptop/storage",
        title: "Laptop Storage Upgrade | Fix It Jerry",
        meta_description:
          "Running out of space or need faster performance? Fix It Jerry offers SSD and HDD storage upgrades for laptops. Speed up your system today!",
        sections: [
          {
            heading: "What is a Storage Upgrade?",
            content:
              "We replace your old hard drive or SSD with a higher capacity or faster one — increasing speed, storage, and responsiveness.",
          },
          {
            heading: "Upgrade Benefits",
            content: [
              "Faster boot and load times.",
              "More room for apps, files, and media.",
              "Better reliability with modern SSDs.",
            ],
          },
          {
            heading: "How We Upgrade Storage",
            content: [
              "Drive Compatibility Check – Ensuring your laptop supports the upgrade.",
              "Data Backup – Preserving your files before upgrade.",
              "New Drive Install – SSD or larger HDD installation.",
              "OS Clone or Fresh Install – Based on customer preference.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 250 - RM 800", "Turnaround Time: 2-4 hours."],
          },
        ],
      },
      {
        service_type: "upgrade",
        service: "General servicing",
        slug: "services/upgrade/laptop/servicing",
        title: "Laptop General Servicing | Fix It Jerry",
        meta_description:
          "Laptop feeling slow or getting hot? Fix It Jerry offers thorough laptop servicing to clean, optimize, and refresh your system inside out.",
        sections: [
          {
            heading: "What Is General Servicing?",
            content:
              "General servicing includes cleaning the internal fans, reapplying thermal paste, optimizing the OS, and running diagnostics to keep your laptop running smooth.",
          },
          {
            heading: "Included in This Service",
            content: [
              "Dust & fan cleaning.",
              "Thermal paste reapplication.",
              "Startup and performance optimization.",
              "Hardware diagnostics and health check.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 150 - RM 400", "Turnaround Time: 2-4 hours."],
          },
        ],
      },
      {
        service_type: "installation",
        service: "OS installation",
        slug: "services/installation/laptop/os-installation",
        title: "Laptop OS Installation | Fix It Jerry",
        meta_description:
          "Need Windows or macOS reinstalled? Fix It Jerry offers clean OS installs for laptops, including backup, format, and post-setup.",
        sections: [
          {
            heading: "What is an OS Installation?",
            content:
              "We perform clean operating system installations to remove bloatware, fix software issues, or upgrade to the latest version.",
          },
          {
            heading: "Included in the Service",
            content: [
              "Data backup (if needed).",
              "Disk formatting.",
              "OS installation (Windows/macOS/Linux).",
              "Driver and update setup.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 100 - RM 250", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
    ],
  },
  {
    title: "Desktop",
    imgSrc: "/images/services/desktop.webp",
    description:
      "Water damage repair, Power supply repair, GPU repair, Fan replacement, Storage upgrade, Custom build assembly, OS installation, Heatsink reapplication, General servicing",
    services: [
      {
        service_type: "repair",
        service: "Water damage",
        slug: "services/repair/desktop/water-damage",
        title: "Desktop Water Damage Repair | Fix It Jerry",
        meta_description:
          "Spilled liquid into your PC? Fix It Jerry provides desktop water damage repair with component-level cleaning and restoration. Fast and professional service.",
        sections: [
          {
            heading: "What is Desktop Water Damage?",
            content:
              "Liquids can short-circuit the motherboard, GPU, PSU, or storage drives in a desktop. Immediate repair is crucial to prevent permanent failure.",
          },
          {
            heading: "Common Signs of Water Damage",
            content: [
              "PC won’t power on.",
              "Smoke or burning smell from components.",
              "Random shutdowns or freezing.",
              "Corrosion on ports or connectors.",
            ],
          },
          {
            heading: "What to Do Immediately",
            content: [
              "Turn off the power supply immediately.",
              "Do NOT try to turn it back on.",
              "Bring it in for cleaning and diagnostics ASAP.",
            ],
          },
          {
            heading: "How We Repair Water-Damaged Desktops",
            content: [
              "Board Cleaning – Ultrasonic cleaning of corroded areas.",
              "Component Testing – Check motherboard, GPU, RAM, PSU.",
              "Replace Damaged Parts – Power ICs, RAM slots, etc.",
              "Thermal Paste Reapplication – After deep cleaning.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 200 - RM 900", "Turnaround Time: 1-3 days."],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Power supply",
        slug: "services/repair/desktop/power-supply",
        title: "Desktop Power Supply Repair | Fix It Jerry",
        meta_description:
          "PC not powering up or randomly shutting off? Fix It Jerry offers expert desktop power supply repairs and replacements. Reliable and safe solutions.",
        sections: [
          {
            heading: "What is a Power Supply Repair?",
            content:
              "The PSU (Power Supply Unit) distributes electricity to your PC's components. A faulty PSU can lead to startup failures or random shutdowns.",
          },
          {
            heading: "Common PSU Problems",
            content: [
              "No power or sudden shutdowns.",
              "Visible sparks or burning smell.",
              "Fan in PSU not spinning.",
              "Inconsistent power output to components.",
            ],
          },
          {
            heading: "How We Fix It",
            content: [
              "PSU Testing – Checking voltage output and connectors.",
              "Fuse & Capacitor Replacement – Common internal failures.",
              "Full PSU Swap – Replacing with suitable wattage PSU.",
              "Cable Management – Ensuring stable power flow.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 150 - RM 500", "Turnaround Time: 1-2 days."],
          },
        ],
      },
      {
        service_type: "repair",
        service: "GPU",
        slug: "services/repair/desktop/gpu",
        title: "Desktop GPU Repair | Fix It Jerry",
        meta_description:
          "Having graphical glitches or your GPU isn’t detected? Fix It Jerry offers GPU diagnostics, cleaning, reballing, and repair for desktop PCs.",
        sections: [
          {
            heading: "What is GPU Repair?",
            content:
              "The GPU handles all graphics processing. GPU failure can cause no display, crashes, or artifacts on-screen.",
          },
          {
            heading: "Common GPU Issues",
            content: [
              "No display on boot.",
              "Driver crashes or BSOD.",
              "Visual artifacts during use.",
              "Fans spinning but GPU not detected.",
            ],
          },
          {
            heading: "How We Fix Your GPU",
            content: [
              "Thermal Rework – Reapplying thermal paste or pads.",
              "Deep Cleaning – Clearing out dust and debris.",
              "Reballing or Solder Fixes – On-chip repairs if needed.",
              "Firmware Updates – Flashing corrupted GPU BIOS.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 200 - RM 700", "Turnaround Time: 2-3 days."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Fan",
        slug: "services/replacement/desktop/fan",
        title: "Desktop Fan Replacement | Fix It Jerry",
        meta_description:
          "Is your desktop overheating or making loud noises? Fix It Jerry offers fan replacements to keep your PC cool and quiet.",
        sections: [
          {
            heading: "What is Fan Replacement?",
            content:
              "Cooling fans help manage internal temperatures. If they fail, your system may overheat or shut down.",
          },
          {
            heading: "Common Signs of Fan Issues",
            content: [
              "Unusual noise from inside the case.",
              "Frequent overheating.",
              "Fans not spinning.",
              "PC shuts down during high load.",
            ],
          },
          {
            heading: "What We Do",
            content: [
              "Fan Testing – Confirming failure or low RPM.",
              "Replacement – Matching fan type (CPU, case, GPU).",
              "Thermal Paste – Reapplying if replacing CPU fan.",
              "Cable Routing – Clean internal wiring after install.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 80 - RM 300", "Turnaround Time: 1 hour."],
          },
        ],
      },
      {
        service_type: "upgrade",
        service: "Storage upgrade",
        slug: "services/upgrade/desktop/storage",
        title: "Desktop Storage Upgrade | Fix It Jerry",
        meta_description:
          "Out of space or want faster load times? Fix It Jerry upgrades your desktop with SSDs or large-capacity HDDs for blazing performance.",
        sections: [
          {
            heading: "Why Upgrade Storage?",
            content:
              "Adding or replacing a drive improves speed and expands your file capacity. SSDs significantly speed up boot and app load times.",
          },
          {
            heading: "Upgrade Options",
            content: [
              "SATA SSD for fast storage.",
              "NVMe for ultra-fast boot and app loading.",
              "HDDs for large-capacity backups.",
              "Dual-drive systems for speed + storage balance.",
            ],
          },
          {
            heading: "How We Do It",
            content: [
              "Drive Compatibility Check.",
              "OS Cloning or Fresh Install.",
              "Data Migration (if needed).",
              "Mounting and Cable Routing.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 200 - RM 800", "Turnaround Time: 2-3 hours."],
          },
        ],
      },
      {
        service_type: "installation",
        service: "Custom build",
        slug: "services/installation/desktop/custom-build",
        title: "Custom PC Build Assembly | Fix It Jerry",
        meta_description:
          "Want a custom gaming or workstation PC? Fix It Jerry builds custom desktops tailored to your needs. Expert assembly and cable management included.",
        sections: [
          {
            heading: "What is Custom PC Assembly?",
            content:
              "Whether you're a gamer, creator, or developer, we help you build a custom PC with the right components — optimized for performance and budget.",
          },
          {
            heading: "Included in Our Custom Build Service",
            content: [
              "Full PC assembly from provided or sourced parts.",
              "Optimal airflow and thermal layout.",
              "Cable management and tie-downs.",
              "BIOS setup and OS installation (optional).",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 250 - RM 600", "Turnaround Time: 1-2 days."],
          },
        ],
      },
      {
        service_type: "installation",
        service: "OS installation",
        slug: "services/installation/desktop/os",
        title: "Desktop OS Installation | Fix It Jerry",
        meta_description:
          "Need Windows, Linux, or macOS installed on your desktop? Fix It Jerry offers clean and professional OS installation services with drivers setup.",
        sections: [
          {
            heading: "What’s Included",
            content: [
              "Disk formatting and OS install.",
              "Driver installation and testing.",
              "Basic updates and antivirus (on request).",
              "Backup (optional).",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 80 - RM 200", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
      {
        service_type: "installation",
        service: "Heatsink reapplication",
        slug: "services/installation/desktop/heatsink",
        title: "Heatsink Reapplication | Fix It Jerry",
        meta_description:
          "Experiencing high temps or fan noise? Fix It Jerry re-applies thermal paste and reseats your heatsink for optimal cooling.",
        sections: [
          {
            heading: "Why Reapply Thermal Paste?",
            content:
              "Old thermal paste can dry out, leading to poor heat transfer and higher CPU temps. Reapplication helps restore proper cooling.",
          },
          {
            heading: "How We Do It",
            content: [
              "Clean off old thermal paste from CPU/GPU.",
              "Apply high-quality thermal compound.",
              "Reseat heatsink with correct pressure.",
              "Test temps before and after service.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: [
              "Cost: RM 60 - RM 150",
              "Turnaround Time: 30 mins - 1 hour.",
            ],
          },
        ],
      },
      {
        service_type: "installation",
        service: "General servicing",
        slug: "services/installation/desktop/servicing",
        title: "Desktop General Servicing | Fix It Jerry",
        meta_description:
          "Slow, hot, or noisy desktop? Fix It Jerry provides comprehensive desktop servicing, cleaning, optimization, and system tune-ups.",
        sections: [
          {
            heading: "What’s Included in General Servicing?",
            content: [
              "Internal cleaning (dust and debris removal).",
              "Fan and airflow optimization.",
              "Thermal paste renewal (if needed).",
              "Software cleanup and OS optimization.",
            ],
          },
          {
            heading: "Cost & Turnaround",
            content: ["Cost: RM 100 - RM 300", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
    ],
  },
  {
    title: "Nintendo Switch",
    imgSrc: "/images/services/nintendo_switch.webp",
    description:
      "Water damage repair, Power supply repair, Wifi and charging port replacement, LCD/touchscreen replacement, Battery replacement, Buttons replacement, OS installation, Heatsink reapplication, General servicing",
    services: [
      {
        service_type: "repair",
        service: "Water damage",
        slug: "services/repair/nintendo-switch/water-damage",
        title: "Nintendo Switch Water Damage Repair | Fix It Jerry",
        meta_description:
          "Dropped your Switch in water? Fix It Jerry provides expert Nintendo Switch water damage repair, deep cleaning, and component restoration.",
        sections: [
          {
            heading: "What is Water Damage?",
            content:
              "Water exposure can cause internal corrosion or short circuits on the motherboard, battery, and screen. Prompt repair is essential to avoid permanent damage.",
          },
          {
            heading: "Common Signs of Water Damage",
            content: [
              "Won’t turn on or keeps restarting.",
              "Unresponsive buttons or touchscreen.",
              "No audio or distorted sound.",
              "Charging or battery issues after water contact.",
            ],
          },
          {
            heading: "What to Do Immediately",
            content: [
              "Power off your Switch immediately.",
              "Do not try to charge or turn it back on.",
              "Bring it in for diagnostics and cleaning ASAP.",
            ],
          },
          {
            heading: "How We Repair Water Damage",
            content: [
              "Ultrasonic Cleaning – Deep clean of all internals.",
              "Component Testing – Identify what needs replacement.",
              "Board-Level Repair – Fix or replace corroded parts.",
            ],
          },
          {
            heading: "Cost & Turnaround Time",
            content: ["Cost: RM 200 - RM 600", "Turnaround Time: 2-3 days."],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Power supply",
        slug: "services/repair/nintendo-switch/power-supply",
        title: "Nintendo Switch Power Supply Repair | Fix It Jerry",
        meta_description:
          "Nintendo Switch not turning on or charging? Fix It Jerry provides power supply repair and diagnostics to restore power safely.",
        sections: [
          {
            heading: "What is a Power Supply Repair?",
            content:
              "The power delivery system in your Switch includes the charging IC, battery connector, and USB-C port. Issues here can stop your console from charging or turning on.",
          },
          {
            heading: "Symptoms of Power Supply Failure",
            content: [
              "Not turning on even with a working charger.",
              "Overheating while plugged in.",
              "Battery stuck at 1% or won’t charge.",
            ],
          },
          {
            heading: "How We Fix It",
            content: [
              "Charging Port & IC Check – Ensuring clean, stable current.",
              "Power Rail Diagnosis – Testing internal voltage pathways.",
              "Board-Level Fixes – Replacing damaged connectors or chips.",
            ],
          },
          {
            heading: "Cost & Turnaround Time",
            content: ["Cost: RM 200 - RM 500", "Turnaround Time: 1-2 days."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Wifi and charging port",
        slug: "services/replacement/nintendo-switch/wifi-charging-port",
        title:
          "Nintendo Switch Wi-Fi & Charging Port Replacement | Fix It Jerry",
        meta_description:
          "Wi-Fi not connecting or Switch not charging? Fix It Jerry offers fast and reliable replacement of Wi-Fi antennas and USB-C charging ports.",
        sections: [
          {
            heading: "When You Need This Replacement",
            content: [
              "Switch won’t connect to Wi-Fi or loses signal frequently.",
              "Charging cable feels loose or doesn’t connect.",
              "USB-C port is damaged or unresponsive.",
            ],
          },
          {
            heading: "What We Replace",
            content: [
              "USB-C Charging Port – Full port desolder and replacement.",
              "Wi-Fi Antennas – Swap or reseat broken antenna cables.",
              "ICs (if needed) – Charging controller or network chips.",
            ],
          },
          {
            heading: "Cost & Turnaround Time",
            content: ["Cost: RM 180 - RM 400", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "LCD/touchscreen",
        slug: "services/replacement/nintendo-switch/lcd-touchscreen",
        title: "Nintendo Switch LCD & Touchscreen Replacement | Fix It Jerry",
        meta_description:
          "Cracked screen or unresponsive touch? Fix It Jerry offers LCD and touchscreen replacements for Nintendo Switch with high-quality parts.",
        sections: [
          {
            heading: "Common Screen Issues",
            content: [
              "Cracked or shattered glass.",
              "Dead pixels or color problems.",
              "Touch not responding.",
              "Black or flickering screen.",
            ],
          },
          {
            heading: "What We Do",
            content: [
              "Full Display Assembly Replacement.",
              "Touch Digitizer Replacement (if needed).",
              "Screen Calibration & Testing.",
            ],
          },
          {
            heading: "Cost & Turnaround Time",
            content: ["Cost: RM 250 - RM 600", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Battery",
        slug: "services/replacement/nintendo-switch/battery",
        title: "Nintendo Switch Battery Replacement | Fix It Jerry",
        meta_description:
          "Battery draining fast or not holding charge? Fix It Jerry offers professional Nintendo Switch battery replacement using high-quality cells.",
        sections: [
          {
            heading: "When to Replace the Battery",
            content: [
              "Switch dies quickly even at 100%.",
              "Battery percentage stuck or jumps.",
              "Bulging battery or backplate separating.",
            ],
          },
          {
            heading: "How We Replace It",
            content: [
              "Battery Health Check.",
              "Safe Removal & Proper Adhesive Use.",
              "High-Quality Replacement Cells.",
              "Post-Replacement Testing & Charging Cycle Checks.",
            ],
          },
          {
            heading: "Cost & Turnaround Time",
            content: ["Cost: RM 180 - RM 350", "Turnaround Time: 1 hour."],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Buttons",
        slug: "services/replacement/nintendo-switch/buttons",
        title: "Nintendo Switch Button Replacement | Fix It Jerry",
        meta_description:
          "Joy-Con or Switch buttons not working? Fix It Jerry provides button repair and replacements for all Nintendo Switch controls.",
        sections: [
          {
            heading: "Symptoms of Button Failure",
            content: [
              "Sticky, unresponsive, or jammed buttons.",
              "Button inputs not registering properly.",
              "Joy-Con buttons misfiring or lagging.",
            ],
          },
          {
            heading: "How We Repair Buttons",
            content: [
              "Individual Button Module Replacement.",
              "Internal Flex Cable Repair.",
              "Joy-Con Shell or Rubber Dome Replacements.",
            ],
          },
          {
            heading: "Cost & Turnaround Time",
            content: ["Cost: RM 150 - RM 300", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
      {
        service_type: "installation",
        service: "OS installation",
        slug: "services/installation/nintendo-switch/os-installation",
        title: "Nintendo Switch OS Installation & Reset | Fix It Jerry",
        meta_description:
          "System acting weird or full of errors? Fix It Jerry offers Nintendo Switch OS reinstallation and full reformat services for a fresh start.",
        sections: [
          {
            heading: "When OS Installation Is Needed",
            content: [
              "Frequent system crashes or lag.",
              "Corrupted firmware or update failure.",
              "Preparing console for resale or clean reset.",
            ],
          },
          {
            heading: "Included in This Service",
            content: [
              "Backup (optional).",
              "Factory Reset or System Restore.",
              "Firmware Reinstallation.",
              "Post-Setup & Testing.",
            ],
          },
          {
            heading: "Cost & Turnaround Time",
            content: ["Cost: RM 80 - RM 200", "Turnaround Time: 1 hour."],
          },
        ],
      },
      {
        service_type: "installation",
        service: "Heatsink reapplication",
        slug: "services/installation/nintendo-switch/heatsink",
        title: "Nintendo Switch Heatsink Reapplication | Fix It Jerry",
        meta_description:
          "Overheating or fan running loud? Fix It Jerry re-applies thermal paste on your Nintendo Switch to restore proper cooling.",
        sections: [
          {
            heading: "Why Reapply Thermal Paste?",
            content:
              "Old or dried thermal paste reduces heat transfer, causing thermal throttling or excessive fan noise.",
          },
          {
            heading: "What We Do",
            content: [
              "Remove motherboard & heatsink assembly.",
              "Clean old paste thoroughly.",
              "Apply new premium-grade thermal compound.",
              "Reassemble and test temperature performance.",
            ],
          },
          {
            heading: "Cost & Turnaround Time",
            content: ["Cost: RM 80 - RM 180", "Turnaround Time: 1 hour."],
          },
        ],
      },
      {
        service_type: "installation",
        service: "General servicing",
        slug: "services/installation/nintendo-switch/servicing",
        title: "Nintendo Switch General Servicing | Fix It Jerry",
        meta_description:
          "Slow performance or strange behavior? Fix It Jerry provides full Nintendo Switch servicing — internal cleaning, diagnostics, and performance tuning.",
        sections: [
          {
            heading: "What’s Included",
            content: [
              "Internal dust removal.",
              "Fan cleaning & lubrication.",
              "Thermal paste reapplication (if needed).",
              "Firmware & system checkup.",
            ],
          },
          {
            heading: "Cost & Turnaround Time",
            content: ["Cost: RM 100 - RM 250", "Turnaround Time: 1-2 hours."],
          },
        ],
      },
    ],
  },
];

export { reviews, features, randomUsp, repairItems };
