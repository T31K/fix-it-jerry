export const ipadModels = [
  {
    name: "iPad 9th Gen",
    slug: "9th-gen",
    year: 2021,
    screenType: "Retina LCD",
    screenSize: "10.2-inch",
    port: "Lightning",
    batteryMah: 8557,
    hasProMotion: false,
    hasFaceId: false,
    chipset: "A13 Bionic",
  },
  {
    name: "iPad 10th Gen",
    slug: "10th-gen",
    year: 2022,
    screenType: "Liquid Retina LCD",
    screenSize: "10.9-inch",
    port: "USB-C",
    batteryMah: 7606,
    hasProMotion: false,
    hasFaceId: false,
    chipset: "A14 Bionic",
  },
  {
    name: "iPad Mini 6",
    slug: "mini-6",
    year: 2021,
    screenType: "Liquid Retina LCD",
    screenSize: "8.3-inch",
    port: "USB-C",
    batteryMah: 5124,
    hasProMotion: false,
    hasFaceId: false,
    chipset: "A15 Bionic",
  },
  {
    name: "iPad Air M1",
    slug: "air-m1",
    year: 2022,
    screenType: "Liquid Retina LCD",
    screenSize: "10.9-inch",
    port: "USB-C",
    batteryMah: 7606,
    hasProMotion: false,
    hasFaceId: false,
    chipset: "Apple M1",
  },
  {
    name: "iPad Air M2",
    slug: "air-m2",
    year: 2024,
    screenType: "Liquid Retina LCD",
    screenSize: "11-inch",
    port: "USB-C",
    batteryMah: 7607,
    hasProMotion: false,
    hasFaceId: false,
    chipset: "Apple M2",
  },
  {
    name: "iPad Air M2 13-inch",
    slug: "air-m2-13",
    year: 2024,
    screenType: "Liquid Retina LCD",
    screenSize: "13-inch",
    port: "USB-C",
    batteryMah: 10340,
    hasProMotion: false,
    hasFaceId: false,
    chipset: "Apple M2",
  },
  {
    name: "iPad Pro 11-inch M1",
    slug: "pro-11-m1",
    year: 2021,
    screenType: "Liquid Retina XDR",
    screenSize: "11-inch",
    port: "USB-C / Thunderbolt",
    batteryMah: 7538,
    hasProMotion: true,
    hasFaceId: true,
    chipset: "Apple M1",
  },
  {
    name: "iPad Pro 11-inch M2",
    slug: "pro-11-m2",
    year: 2022,
    screenType: "Liquid Retina XDR",
    screenSize: "11-inch",
    port: "USB-C / Thunderbolt",
    batteryMah: 7538,
    hasProMotion: true,
    hasFaceId: true,
    chipset: "Apple M2",
  },
  {
    name: "iPad Pro 11-inch M4",
    slug: "pro-11-m4",
    year: 2024,
    screenType: "Ultra Retina XDR OLED",
    screenSize: "11-inch",
    port: "USB-C / Thunderbolt",
    batteryMah: 7538,
    hasProMotion: true,
    hasFaceId: true,
    chipset: "Apple M4",
  },
  {
    name: "iPad Pro 12.9-inch M1",
    slug: "pro-12-m1",
    year: 2021,
    screenType: "Liquid Retina XDR (mini-LED)",
    screenSize: "12.9-inch",
    port: "USB-C / Thunderbolt",
    batteryMah: 10758,
    hasProMotion: true,
    hasFaceId: true,
    chipset: "Apple M1",
  },
  {
    name: "iPad Pro 12.9-inch M2",
    slug: "pro-12-m2",
    year: 2022,
    screenType: "Liquid Retina XDR (mini-LED)",
    screenSize: "12.9-inch",
    port: "USB-C / Thunderbolt",
    batteryMah: 10758,
    hasProMotion: true,
    hasFaceId: true,
    chipset: "Apple M2",
  },
  {
    name: "iPad Pro 13-inch M4",
    slug: "pro-13-m4",
    year: 2024,
    screenType: "Ultra Retina XDR OLED",
    screenSize: "13-inch",
    port: "USB-C / Thunderbolt",
    batteryMah: 10290,
    hasProMotion: true,
    hasFaceId: true,
    chipset: "Apple M4",
  },
];

export const ipadServices = [
  {
    slug: "screen-replacement",
    name: "Screen Replacement",
    image: "/images/devices/tablet/lcd_screen.webp",
    getTitle: (model) =>
      `${model.name} Screen Replacement in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `Cracked ${model.name} screen? We replace ${model.screenType} displays in Kuala Lumpur — same-day for most models. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `Is your ${model.name} screen due for a replacement?`,
        content: [
          "Cracked or shattered glass, even if touch still works fine.",
          "Black screen but the iPad still makes sounds or vibrates.",
          "Dead zones where touch stops registering.",
          "Lines, discolouration, or bleed spreading across the display.",
          `Flickering ${model.screenType} panel that won't settle.`,
        ],
      },
      {
        heading: `About the ${model.name} display`,
        content: `The ${model.name} runs a ${model.screenSize} ${model.screenType} panel${model.hasProMotion ? " with 120Hz ProMotion" : ""}. ${model.hasFaceId ? "Face ID sits along the top edge, so the sensors need careful realignment during any screen repair — skip that step and Face ID stops working." : "Touch ID is in the home or top button, separate from the display, so it's unaffected by screen work."} The whole thing is driven by the ${model.chipset}.`,
      },
      {
        heading: "How we do the repair",
        content: [
          `Full ${model.screenType} display assembly swap — not just the glass on top.`,
          "Heat separation to lift the broken screen without stressing the internals.",
          model.hasFaceId ? "Face ID sensor realignment and function check after the new panel goes in." : "Touch ID tested and confirmed working before we close it up.",
          "Apple Pencil compatibility checked where the model supports it.",
          "Touch accuracy tested across every corner of the screen before you leave.",
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          model.screenSize.includes("12.9") || model.screenSize.includes("13")
            ? "Cost: RM 800 – RM 1,200"
            : model.name.includes("Pro")
            ? "Cost: RM 600 – RM 1,000"
            : model.name.includes("Mini")
            ? "Cost: RM 350 – RM 550"
            : "Cost: RM 300 – RM 700",
          "Turnaround: 1–3 hours",
        ],
      },
    ],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    image: "/images/devices/tablet/battery.webp",
    getTitle: (model) =>
      `${model.name} Battery Replacement in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `${model.name} battery dying too fast? We replace iPad batteries in KL — same-day for most models. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `Your ${model.name} battery might be done if…`,
        content: [
          "It drains noticeably faster than it used to.",
          "The iPad cuts off randomly with charge still showing.",
          "A full charge takes ages or never quite reaches 100%.",
          "The percentage jumps or nosedives without warning.",
          "The back gets warm just from regular use.",
          "The screen is starting to lift away from the frame — that's a swollen battery. Bring it in soon.",
        ],
      },
      {
        heading: `${model.name} battery details`,
        content: `The ${model.name} has a ${model.batteryMah}mAh battery — considerably bigger than what's in any iPhone, which is part of why iPad batteries last so long but also why the job is more involved. It's glued to the chassis underneath the display, so the screen has to come off before we can get to it.`,
      },
      {
        heading: "What the replacement involves",
        content: [
          "Screen removed with heat to release the adhesive without cracking it.",
          "Old battery disconnected and pulled from its adhesive strips.",
          "New battery seated, connected, and secured with fresh adhesive.",
          "Screen reattached and sealed back down.",
          "Charge cycle run and battery health confirmed before handover.",
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          model.screenSize.includes("12.9") || model.screenSize.includes("13")
            ? "Cost: RM 350 – RM 600"
            : model.name.includes("Mini")
            ? "Cost: RM 250 – RM 400"
            : "Cost: RM 280 – RM 500",
          "Turnaround: 1–2 hours",
        ],
      },
    ],
  },
  {
    slug: "charging-port-repair",
    name: "Charging Port Repair",
    image: "/images/devices/tablet/wifi_charging_port.webp",
    getTitle: (model) =>
      `${model.name} Charging Port Repair in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `${model.name} not charging or port feels loose? We fix iPad charging ports in Kuala Lumpur. Fast turnaround. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `Charging issues with the ${model.name}`,
        content: [
          `${model.port} cable is loose or won't stay in.`,
          "Only charges when held at a specific angle.",
          "Charging is very slow or cuts in and out.",
          "Nothing happens at all when plugged in.",
          "Port looks bent, corroded, or physically damaged.",
        ],
      },
      {
        heading: "Worth checking before assuming the worst",
        content: `iPads spend a lot of time in bags — school bags, laptop bags, those grocery bags that somehow end up carrying everything. Lint and debris pack into the ${model.port} port gradually, and a blocked port behaves exactly like a broken one. We clean it out first. Honestly, that fixes it more often than people expect. If the port itself is actually damaged, we replace the full assembly.`,
      },
      {
        heading: "What we do",
        content: [
          "Port inspected under magnification for debris, corrosion, and physical damage.",
          "Cleaned out with compressed air and precision tools.",
          `Full ${model.port} port assembly replaced if cleaning doesn't clear it.`,
          "Charging speed and data transfer confirmed after the repair.",
        ],
      },
      {
        heading: "Pricing & time",
        content: ["Cost: RM 200 – RM 400", "Turnaround: 1–2 hours"],
      },
    ],
  },
  {
    slug: "water-damage-repair",
    name: "Water Damage Repair",
    image: "/images/devices/tablet/water_damage.webp",
    getTitle: (model) =>
      `${model.name} Water Damage Repair in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `Dropped your ${model.name} in water? We do iPad water damage repair in KL — ultrasonic cleaning and board-level work. Bring it in fast.`,
    getSections: (model) => [
      {
        heading: "Do this right now",
        content: [
          "Turn it off. Don't try to charge it.",
          "Stop pressing buttons to see if it responds.",
          "Don't put it in rice. It does nothing useful and burns time.",
          "Dry the outside and bring it in as soon as you can.",
          "Every hour matters with water damage — the corrosion starts quickly.",
        ],
      },
      {
        heading: `Signs of water damage on the ${model.name}`,
        content: [
          "Won't turn on, or loops on the Apple logo.",
          "Screen flickering, random ghost touches, or dead zones.",
          "Speakers sound muffled or blown out.",
          "Charging problems or the device getting hot for no reason.",
          "Face ID or Touch ID suddenly stopped working.",
        ],
      },
      {
        heading: "How we approach it",
        content: [
          "Full disassembly and ultrasonic cleaning of the logic board.",
          "Microscope inspection for corroded traces and shorted components.",
          "IC replacement where needed — power IC, charging IC, and similar.",
          "Battery inspected and swapped out if water got to it.",
          "Everything tested before the device goes back together.",
        ],
      },
      {
        heading: "Pricing & time",
        content: ["Cost: RM 250 – RM 700", "Turnaround: 1–3 days"],
      },
    ],
  },
  {
    slug: "camera-repair",
    name: "Camera Repair",
    image: "/images/devices/tablet/camera.webp",
    getTitle: (model) =>
      `${model.name} Camera Repair in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `${model.name} camera black, blurry, or dead? We fix iPad cameras in Kuala Lumpur — front and rear. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `Camera problems we see on the ${model.name}`,
        content: [
          "Camera app opens to a black screen.",
          "Photos are blurry and won't lock focus.",
          "Front camera not showing up for FaceTime or video calls.",
          "Cracked or badly scratched camera lens.",
          "Rear flash stopped firing.",
        ],
      },
      {
        heading: "What the repair looks like",
        content: [
          "Front and rear camera modules tested individually.",
          "Flex cables checked for tears or water damage.",
          "Faulty camera module swapped with a tested replacement.",
          model.hasFaceId ? "Face ID verified after any front camera work — the two are closely linked." : "Front camera alignment checked and confirmed after the repair.",
          "Photo and video quality tested before handover.",
        ],
      },
      {
        heading: "Pricing & time",
        content: ["Cost: RM 200 – RM 600", "Turnaround: 1–2 hours"],
      },
    ],
  },
];
