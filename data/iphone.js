export const iphoneModels = [
  {
    name: "iPhone 11",
    slug: "11",
    year: 2019,
    screenType: "Liquid Retina LCD",
    screenSize: "6.1-inch",
    port: "Lightning",
    batteryMah: 3110,
    hasProMotion: false,
  },
  {
    name: "iPhone 12",
    slug: "12",
    year: 2020,
    screenType: "Super Retina XDR OLED",
    screenSize: "6.1-inch",
    port: "Lightning",
    batteryMah: 2815,
    hasProMotion: false,
  },
  {
    name: "iPhone 12 Pro",
    slug: "12-pro",
    year: 2020,
    screenType: "Super Retina XDR OLED",
    screenSize: "6.1-inch",
    port: "Lightning",
    batteryMah: 2815,
    hasProMotion: false,
  },
  {
    name: "iPhone 12 Pro Max",
    slug: "12-pro-max",
    year: 2020,
    screenType: "Super Retina XDR OLED",
    screenSize: "6.7-inch",
    port: "Lightning",
    batteryMah: 3687,
    hasProMotion: false,
  },
  {
    name: "iPhone 13",
    slug: "13",
    year: 2021,
    screenType: "Super Retina XDR OLED",
    screenSize: "6.1-inch",
    port: "Lightning",
    batteryMah: 3227,
    hasProMotion: false,
  },
  {
    name: "iPhone 13 Mini",
    slug: "13-mini",
    year: 2021,
    screenType: "Super Retina XDR OLED",
    screenSize: "5.4-inch",
    port: "Lightning",
    batteryMah: 2406,
    hasProMotion: false,
  },
  {
    name: "iPhone 13 Pro",
    slug: "13-pro",
    year: 2021,
    screenType: "Super Retina XDR ProMotion OLED",
    screenSize: "6.1-inch",
    port: "Lightning",
    batteryMah: 3095,
    hasProMotion: true,
  },
  {
    name: "iPhone 13 Pro Max",
    slug: "13-pro-max",
    year: 2021,
    screenType: "Super Retina XDR ProMotion OLED",
    screenSize: "6.7-inch",
    port: "Lightning",
    batteryMah: 4352,
    hasProMotion: true,
  },
  {
    name: "iPhone 14",
    slug: "14",
    year: 2022,
    screenType: "Super Retina XDR OLED",
    screenSize: "6.1-inch",
    port: "Lightning",
    batteryMah: 3279,
    hasProMotion: false,
  },
  {
    name: "iPhone 14 Pro",
    slug: "14-pro",
    year: 2022,
    screenType: "Super Retina XDR ProMotion OLED",
    screenSize: "6.1-inch",
    port: "Lightning",
    batteryMah: 3200,
    hasProMotion: true,
  },
  {
    name: "iPhone 14 Pro Max",
    slug: "14-pro-max",
    year: 2022,
    screenType: "Super Retina XDR ProMotion OLED",
    screenSize: "6.7-inch",
    port: "Lightning",
    batteryMah: 4323,
    hasProMotion: true,
  },
  {
    name: "iPhone 15",
    slug: "15",
    year: 2023,
    screenType: "Super Retina XDR OLED",
    screenSize: "6.1-inch",
    port: "USB-C",
    batteryMah: 3349,
    hasProMotion: false,
  },
  {
    name: "iPhone 15 Pro",
    slug: "15-pro",
    year: 2023,
    screenType: "Super Retina XDR ProMotion OLED",
    screenSize: "6.1-inch",
    port: "USB-C",
    batteryMah: 3274,
    hasProMotion: true,
  },
  {
    name: "iPhone 15 Pro Max",
    slug: "15-pro-max",
    year: 2023,
    screenType: "Super Retina XDR ProMotion OLED",
    screenSize: "6.7-inch",
    port: "USB-C",
    batteryMah: 4422,
    hasProMotion: true,
  },
  {
    name: "iPhone 16",
    slug: "16",
    year: 2024,
    screenType: "Super Retina XDR OLED",
    screenSize: "6.1-inch",
    port: "USB-C",
    batteryMah: 3561,
    hasProMotion: false,
  },
  {
    name: "iPhone 16 Pro",
    slug: "16-pro",
    year: 2024,
    screenType: "Super Retina XDR ProMotion OLED",
    screenSize: "6.3-inch",
    port: "USB-C",
    batteryMah: 3582,
    hasProMotion: true,
  },
  {
    name: "iPhone 16 Pro Max",
    slug: "16-pro-max",
    year: 2024,
    screenType: "Super Retina XDR ProMotion OLED",
    screenSize: "6.9-inch",
    port: "USB-C",
    batteryMah: 4685,
    hasProMotion: true,
  },
];

export const iphoneServices = [
  {
    slug: "screen-replacement",
    name: "Screen Replacement",
    image: "/images/devices/smartphone/lcd_screen.webp",
    getTitle: (model) =>
      `${model.name} Screen Replacement in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `Cracked ${model.name} screen? Fix It Jerry replaces ${model.screenType} displays in Kuala Lumpur. Fast, affordable & reliable. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `When Does Your ${model.name} Need a Screen Replacement?`,
        content: [
          "Cracked or shattered glass with sharp edges.",
          "Black screen even though the phone powers on.",
          "Dead pixels, lines, or colour distortion on the display.",
          "Unresponsive or ghost touches after a drop.",
          `Flickering or dim ${model.screenType} display that won't adjust.`,
        ],
      },
      {
        heading: `About the ${model.name} Display`,
        content: `The ${model.name} uses a ${model.screenSize} ${model.screenType} display${model.hasProMotion ? " with 120Hz ProMotion for ultra-smooth scrolling" : ""}. A genuine-quality replacement ensures colour accuracy, touch sensitivity, and brightness are fully restored.`,
      },
      {
        heading: `Our ${model.name} Screen Replacement Process`,
        content: [
          `Premium ${model.screenType} panel — not cheap aftermarket glass.`,
          "Full disassembly with precision tools to avoid damaging internals.",
          "Touch calibration and True Tone testing after installation.",
          "Dust sealing and frame alignment before reassembly.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 300 – RM 1,200", "Turnaround: 1–2 hours"],
      },
    ],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    image: "/images/devices/smartphone/battery.webp",
    getTitle: (model) =>
      `${model.name} Battery Replacement in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `${model.name} battery draining fast or shutting off randomly? Fix It Jerry replaces iPhone batteries in KL fast & affordable. Book online today.`,
    getSections: (model) => [
      {
        heading: `Signs Your ${model.name} Battery Needs Replacing`,
        content: [
          "Phone shuts off at 20–30% battery remaining.",
          "Battery percentage jumps or drops suddenly.",
          "Device runs hot during normal use or charging.",
          "Battery health below 80% in Settings > Battery.",
          "Phone swollen or back panel feels raised.",
        ],
      },
      {
        heading: `${model.name} Battery Specs`,
        content: `The ${model.name} comes with a ${model.batteryMah}mAh battery. Over time, lithium-ion cells degrade — typically losing significant capacity after 500 charge cycles. A fresh battery restores original all-day performance.`,
      },
      {
        heading: "Our Battery Replacement Process",
        content: [
          "Battery health diagnostic before and after replacement.",
          "Safe removal using heat and non-invasive tools — no damage to housing.",
          "High-quality replacement cell with proper capacity rating.",
          `${model.port} port and charging circuit check included.`,
          "Post-repair thermal and charge-cycle test.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 180 – RM 600", "Turnaround: 30 minutes – 1 hour"],
      },
    ],
  },
  {
    slug: "back-glass-repair",
    name: "Back Glass Repair",
    image: "/images/devices/smartphone/backglass.webp",
    getTitle: (model) =>
      `${model.name} Back Glass Repair in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `Shattered ${model.name} back glass? Fix It Jerry repairs and replaces iPhone back panels in Kuala Lumpur. Affordable & fast. Book online today.`,
    getSections: (model) => [
      {
        heading: `Why Repair Your ${model.name} Back Glass?`,
        content: [
          "Sharp cracks that cut your hands during use.",
          "Compromised wireless charging performance.",
          "Water and dust resistance (IP rating) reduced.",
          "Reduces resale value significantly.",
          "Aesthetics — looks broken and unprofessional.",
        ],
      },
      {
        heading: `${model.name} Back Glass Replacement Process`,
        content: [
          "Precision laser separation or cold separation method — no force.",
          "Full adhesive residue removal from frame.",
          "New back panel applied with UV-cure adhesive.",
          "Camera lens and wireless charging coil integrity check.",
          "Final water resistance re-seal.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 200 – RM 600", "Turnaround: 1–3 hours"],
      },
    ],
  },
  {
    slug: "charging-port-repair",
    name: "Charging Port Repair",
    image: "/images/devices/smartphone/wifi_charging_port.webp",
    getTitle: (model) =>
      `${model.name} Charging Port Repair in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `${model.name} not charging properly? Fix It Jerry repairs ${model.port} charging ports in KL fast. Affordable & reliable. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `${model.name} Charging Port Issues`,
        content: [
          `${model.port} cable only works at certain angles.`,
          "Cable falls out or doesn't click in securely.",
          "Phone shows 'not charging' or charges intermittently.",
          "Debris or lint blocking the port.",
          "No charge detection at all.",
        ],
      },
      {
        heading: `About the ${model.name} ${model.port} Port`,
        content: `The ${model.name} uses a ${model.port} port for charging and data transfer. ${model.port === "USB-C" ? "USB-C supports faster data speeds and charging — keeping it in good condition matters." : "Lightning connectors are prone to lint buildup and pin damage over time — professional cleaning or replacement restores full function."}`,
      },
      {
        heading: "Our Repair Process",
        content: [
          "Port inspection under magnification for debris, corrosion, or bent pins.",
          "Ultrasonic cleaning for clogged ports.",
          "Full port desoldering and replacement if damaged beyond cleaning.",
          "Multi-point charging and data-transfer test post-repair.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 180 – RM 650", "Turnaround: 1–2 hours"],
      },
    ],
  },
  {
    slug: "camera-repair",
    name: "Camera Repair",
    image: "/images/devices/smartphone/camera.webp",
    getTitle: (model) =>
      `${model.name} Camera Repair in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `${model.name} camera blurry, black screen, or not opening? Fix It Jerry repairs iPhone cameras in KL. Fast & affordable. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `${model.name} Camera Problems We Fix`,
        content: [
          "Camera app opens to a black screen.",
          "Photos are blurry, out of focus, or won't auto-focus.",
          "Camera crashes or freezes the app.",
          "Front camera not working for Face ID or selfies.",
          "Cracked camera lens glass causing blurry images.",
        ],
      },
      {
        heading: "Camera Replacement Process",
        content: [
          "Individual camera module testing — front, rear, and ultra-wide.",
          "Safe flex cable removal and inspection.",
          "OEM-quality camera module installation.",
          `Focus, zoom, and video stability test on ${model.name} post-repair.`,
          "Face ID functionality verified after front camera work.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 220 – RM 700", "Turnaround: 1–2 hours"],
      },
    ],
  },
  {
    slug: "water-damage-repair",
    name: "Water Damage Repair",
    image: "/images/devices/smartphone/water_damage.webp",
    getTitle: (model) =>
      `${model.name} Water Damage Repair in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `Dropped your ${model.name} in water? Fix It Jerry provides expert water damage repair in KL. Fast diagnostics & component-level repair. Book now.`,
    getSections: (model) => [
      {
        heading: `What to Do First If Your ${model.name} Gets Wet`,
        content: [
          "Power off immediately — do not press the power button repeatedly.",
          "Do NOT plug it in to charge — this causes short circuits.",
          "Avoid rice — it doesn't absorb internal moisture effectively.",
          "Bring it in as soon as possible — corrosion starts within hours.",
        ],
      },
      {
        heading: `${model.name} Water Damage Symptoms`,
        content: [
          "Won't turn on or keeps restarting.",
          "Screen flickering, discolouration, or black display.",
          "No sound or muffled speaker.",
          "Charging issues or no charge detection.",
          "SIM not detected or weak signal.",
        ],
      },
      {
        heading: "How We Repair Water Damage",
        content: [
          "Ultrasonic cleaning to remove corrosion and mineral deposits.",
          "Component-level inspection under microscope.",
          "IC chip repair or replacement if corroded — Power IC, Audio IC, Baseband IC.",
          "Battery and charging port replacement if water-affected.",
          "Full function test after repair.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 200 – RM 800", "Turnaround: 1–3 days"],
      },
    ],
  },
  {
    slug: "speaker-mic-repair",
    name: "Speaker & Mic Repair",
    image: "/images/devices/smartphone/mic_speaker.webp",
    getTitle: (model) =>
      `${model.name} Speaker & Mic Repair in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `${model.name} speaker not working or mic not picking up sound? Fix It Jerry repairs iPhone speakers & mics in KL fast. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `${model.name} Speaker & Mic Issues We Fix`,
        content: [
          "No sound during calls — caller can't hear you.",
          "Loudspeaker crackling or cutting out.",
          "Voice memos or videos record with no audio.",
          "Ear speaker too quiet even at max volume.",
          "Mic not working with Siri or third-party apps.",
        ],
      },
      {
        heading: "Repair Process",
        content: [
          "Individual mic and speaker module testing.",
          "Mesh cleaning — dust and debris removal from speaker grills.",
          "Flex cable inspection for tears or corrosion.",
          "OEM speaker or mic module replacement if faulty.",
          "Call and audio recording test after repair.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 150 – RM 500", "Turnaround: 30 minutes – 2 hours"],
      },
    ],
  },
];
