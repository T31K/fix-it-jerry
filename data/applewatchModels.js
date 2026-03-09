export const appleWatchModels = [
  {
    slug: "series-6",
    name: "Apple Watch Series 6",
    shortName: "Series 6",
    year: 2020,
    screenSize: "40mm / 44mm",
    screenType: "Always-On LTPO OLED",
    hasAlwaysOn: true,
    hasCellular: true,
    caseMaterial: "Aluminium / Stainless Steel / Titanium",
    port: "Magnetic charging",
    batteryMah: 303,
  },
  {
    slug: "series-7",
    name: "Apple Watch Series 7",
    shortName: "Series 7",
    year: 2021,
    screenSize: "41mm / 45mm",
    screenType: "Always-On LTPO OLED",
    hasAlwaysOn: true,
    hasCellular: true,
    caseMaterial: "Aluminium / Stainless Steel / Titanium",
    port: "Magnetic Fast Charging",
    batteryMah: 309,
  },
  {
    slug: "series-8",
    name: "Apple Watch Series 8",
    shortName: "Series 8",
    year: 2022,
    screenSize: "41mm / 45mm",
    screenType: "Always-On LTPO2 OLED",
    hasAlwaysOn: true,
    hasCellular: true,
    caseMaterial: "Aluminium / Stainless Steel",
    port: "Magnetic Fast Charging",
    batteryMah: 309,
  },
  {
    slug: "series-9",
    name: "Apple Watch Series 9",
    shortName: "Series 9",
    year: 2023,
    screenSize: "41mm / 45mm",
    screenType: "Always-On LTPO2 OLED",
    hasAlwaysOn: true,
    hasCellular: true,
    caseMaterial: "Aluminium / Stainless Steel",
    port: "Magnetic Fast Charging",
    batteryMah: 308,
  },
  {
    slug: "ultra",
    name: "Apple Watch Ultra",
    shortName: "Ultra",
    year: 2022,
    screenSize: "49mm",
    screenType: "Always-On LTPO2 OLED",
    hasAlwaysOn: true,
    hasCellular: true,
    caseMaterial: "Titanium",
    port: "Magnetic Fast Charging",
    batteryMah: 542,
  },
  {
    slug: "ultra-2",
    name: "Apple Watch Ultra 2",
    shortName: "Ultra 2",
    year: 2023,
    screenSize: "49mm",
    screenType: "Always-On LTPO2 OLED (3000 nits)",
    hasAlwaysOn: true,
    hasCellular: true,
    caseMaterial: "Titanium",
    port: "Magnetic Fast Charging",
    batteryMah: 564,
  },
  {
    slug: "se-2",
    name: "Apple Watch SE (2nd Gen)",
    shortName: "SE 2",
    year: 2022,
    screenSize: "40mm / 44mm",
    screenType: "LTPO OLED",
    hasAlwaysOn: false,
    hasCellular: true,
    caseMaterial: "Aluminium",
    port: "Magnetic charging",
    batteryMah: 245,
  },
];

export const appleWatchServices = [
  {
    slug: "screen-replacement",
    name: "Screen Replacement",
    image: "/images/devices/apple_watch/lcd_screen.webp",
    getTitle: (model) =>
      `${model.name} Screen Replacement in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `Cracked or unresponsive ${model.name} display? We replace ${model.screenType} screens for the ${model.screenSize} ${model.shortName} in Kuala Lumpur. Fast turnaround, OEM-grade parts.`,
    getSections: (model) => [
      {
        heading: "Signs You Need a Screen Replacement",
        content: [
          "Cracked or shattered front glass.",
          "Unresponsive touch — taps not registering.",
          `${model.hasAlwaysOn ? "Always-On display" : "Display"} flickering or showing dead pixels.`,
          "Screen detaching or lifting from the case.",
          "Black screen despite the watch powering on.",
        ],
      },
      {
        heading: "Our Repair Process",
        content: [
          `Carefully open the ${model.shortName} using heat-safe tools.`,
          `Remove the damaged ${model.screenType} display assembly.`,
          "Install a new OEM-grade screen with full touch calibration.",
          "Re-seal the watch and test for water resistance and display accuracy.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: [
          `Cost: RM 280 – RM ${model.slug.includes("ultra") ? "900" : "650"}`,
          "Time: 1 – 2 business days",
          "Warranty: 30-day parts and labour",
        ],
      },
    ],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    image: "/images/devices/apple_watch/battery.webp",
    getTitle: (model) =>
      `${model.name} Battery Replacement in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `${model.name} battery dying fast or swelling? We replace the ${model.batteryMah}mAh battery and restore all-day battery life. Walk-in or appointment available in KL.`,
    getSections: (model) => [
      {
        heading: "Symptoms of a Failing Battery",
        content: [
          "Battery drains within a few hours of a full charge.",
          "Screen lifting or separating — caused by a swollen battery.",
          "Watch shuts down randomly during the day.",
          `${model.shortName} won't power on without the charger connected.`,
          "Battery health below 80% in Settings.",
        ],
      },
      {
        heading: "Our Replacement Process",
        content: [
          `Open the ${model.shortName} carefully using heat to soften the adhesive.`,
          "Remove the old battery without damaging the OLED display.",
          `Install a fresh ${model.batteryMah}mAh-equivalent battery.`,
          "Recalibrate the power cycle and run charge/discharge tests.",
          "Re-seal and confirm ${model.port} charging works correctly.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: [
          `Cost: RM 180 – RM ${model.slug.includes("ultra") ? "550" : "450"}`,
          "Time: 1 – 2 hours (same day)",
          "Warranty: 30-day parts and labour",
        ],
      },
    ],
  },
  {
    slug: "crown-button-repair",
    name: "Digital Crown & Button Repair",
    image: "/images/devices/apple_watch/lcd_screen.webp",
    getTitle: (model) =>
      `${model.name} Digital Crown & Button Repair KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `${model.name} Digital Crown stuck, grinding, or unresponsive? We repair the Digital Crown, side button, and action button so your ${model.shortName} responds perfectly again.`,
    getSections: (model) => [
      {
        heading: "Common Button Issues",
        content: [
          "Digital Crown feels stiff, gritty, or doesn't click.",
          "Crown rotation doesn't scroll — haptic feedback missing.",
          "Side button stuck or not registering presses.",
          model.slug.includes("ultra")
            ? "Action button unresponsive or stuck."
            : "Crown not activating Siri or waking the display.",
        ],
      },
      {
        heading: "What We Fix",
        content: [
          "Deep-clean Digital Crown mechanism to remove dust and debris.",
          "Replace Digital Crown assembly if internal parts are damaged.",
          "Repair or replace the side button and its flex cable.",
          model.slug.includes("ultra")
            ? "Repair action button mechanism unique to the Ultra."
            : "Restore haptic engine feedback linked to the Crown.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: [
          "Cost: RM 150 – RM 380",
          "Time: Same day – 1 business day",
          "Warranty: 30-day parts and labour",
        ],
      },
    ],
  },
  {
    slug: "water-damage-repair",
    name: "Water Damage Repair",
    image: "/images/devices/apple_watch/lcd_screen.webp",
    getTitle: (model) =>
      `${model.name} Water Damage Repair KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `Even water-resistant ${model.name} watches can suffer water damage from deep submersion or a failed seal. We inspect, clean, and restore your ${model.shortName} in Kuala Lumpur.`,
    getSections: (model) => [
      {
        heading: "Even Water-Resistant Watches Need Repair",
        content: [
          `The ${model.shortName} has a water-resistance rating, but seals degrade over time.`,
          "Cracks from drops compromise water resistance before submersion.",
          "Saltwater, chlorine, and soaps accelerate seal degradation.",
          "Symptoms: display glitches, speaker crackling, or charging failure after water exposure.",
        ],
      },
      {
        heading: "Our Water Damage Process",
        content: [
          "Open the watch and assess corrosion on the logic board.",
          "Ultrasonic clean corroded components to remove mineral deposits.",
          "Replace damaged seals and gaskets for water resistance.",
          "Test display, Digital Crown, sensors, and charging post-repair.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: [
          "Cost: RM 180 – RM 500 (depends on severity)",
          "Time: 2 – 3 business days",
          "Note: Free diagnostics — no fix, no charge.",
        ],
      },
    ],
  },
  {
    slug: "charging-repair",
    name: "Charging Repair",
    image: "/images/devices/apple_watch/battery.webp",
    getTitle: (model) =>
      `${model.name} Not Charging? Repair in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `${model.name} not charging or connecting to ${model.port}? We diagnose and repair charging coils, logic board faults, and port damage so your ${model.shortName} powers up reliably.`,
    getSections: (model) => [
      {
        heading: "Why Your Apple Watch Won't Charge",
        content: [
          `Dirty or corroded ${model.port} contact points.`,
          "Damaged wireless charging coil inside the watch.",
          "Logic board charging IC failure.",
          "Software glitch preventing charge recognition.",
          "Faulty charging puck (try a different charger first).",
        ],
      },
      {
        heading: "Our Repair Approach",
        content: [
          "Clean the magnetic charging contacts on the watch.",
          "Test with a known-good charger to isolate hardware vs. software.",
          "Open watch and inspect the charging coil and flex cables.",
          "Replace the charging coil assembly if damaged.",
          "Repair or reball the charging IC on the logic board if required.",
        ],
      },
      {
        heading: "Cost & Turnaround",
        content: [
          "Cost: RM 120 – RM 380",
          "Time: Same day – 2 business days",
          "Warranty: 30-day parts and labour",
        ],
      },
    ],
  },
];
