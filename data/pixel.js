export const pixelModels = [
  {
    name: "Pixel 6",
    slug: "6",
    year: 2021,
    screenType: "AMOLED",
    screenSize: "6.4-inch",
    refreshRate: "90Hz",
    chipset: "Google Tensor",
    batteryMah: 4614,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    isPro: false,
  },
  {
    name: "Pixel 6 Pro",
    slug: "6-pro",
    year: 2021,
    screenType: "LTPO AMOLED",
    screenSize: "6.7-inch",
    refreshRate: "120Hz",
    chipset: "Google Tensor",
    batteryMah: 5003,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    isPro: true,
  },
  {
    name: "Pixel 6a",
    slug: "6a",
    year: 2022,
    screenType: "AMOLED",
    screenSize: "6.1-inch",
    refreshRate: "60Hz",
    chipset: "Google Tensor",
    batteryMah: 4410,
    port: "USB-C",
    ipRating: "IP67",
    hasWirelessCharging: false,
    isFoldable: false,
    isPro: false,
  },
  {
    name: "Pixel 7",
    slug: "7",
    year: 2022,
    screenType: "AMOLED",
    screenSize: "6.3-inch",
    refreshRate: "90Hz",
    chipset: "Google Tensor G2",
    batteryMah: 4355,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    isPro: false,
  },
  {
    name: "Pixel 7 Pro",
    slug: "7-pro",
    year: 2022,
    screenType: "LTPO AMOLED",
    screenSize: "6.7-inch",
    refreshRate: "120Hz",
    chipset: "Google Tensor G2",
    batteryMah: 5000,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    isPro: true,
  },
  {
    name: "Pixel 7a",
    slug: "7a",
    year: 2023,
    screenType: "AMOLED",
    screenSize: "6.1-inch",
    refreshRate: "90Hz",
    chipset: "Google Tensor G2",
    batteryMah: 4385,
    port: "USB-C",
    ipRating: "IP67",
    hasWirelessCharging: true,
    isFoldable: false,
    isPro: false,
  },
  {
    name: "Pixel 8",
    slug: "8",
    year: 2023,
    screenType: "AMOLED",
    screenSize: "6.2-inch",
    refreshRate: "120Hz",
    chipset: "Google Tensor G3",
    batteryMah: 4575,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    isPro: false,
  },
  {
    name: "Pixel 8 Pro",
    slug: "8-pro",
    year: 2023,
    screenType: "LTPO AMOLED",
    screenSize: "6.7-inch",
    refreshRate: "120Hz",
    chipset: "Google Tensor G3",
    batteryMah: 5050,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    isPro: true,
  },
  {
    name: "Pixel 8a",
    slug: "8a",
    year: 2024,
    screenType: "AMOLED",
    screenSize: "6.1-inch",
    refreshRate: "120Hz",
    chipset: "Google Tensor G3",
    batteryMah: 4492,
    port: "USB-C",
    ipRating: "IP67",
    hasWirelessCharging: true,
    isFoldable: false,
    isPro: false,
  },
  {
    name: "Pixel 9",
    slug: "9",
    year: 2024,
    screenType: "AMOLED",
    screenSize: "6.3-inch",
    refreshRate: "120Hz",
    chipset: "Google Tensor G4",
    batteryMah: 4700,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    isPro: false,
  },
  {
    name: "Pixel 9 Pro",
    slug: "9-pro",
    year: 2024,
    screenType: "LTPO AMOLED",
    screenSize: "6.3-inch",
    refreshRate: "120Hz",
    chipset: "Google Tensor G4",
    batteryMah: 4700,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    isPro: true,
  },
  {
    name: "Pixel 9 Pro Fold",
    slug: "9-pro-fold",
    year: 2024,
    screenType: "LTPO AMOLED",
    screenSize: "8.0-inch inner / 6.3-inch cover",
    refreshRate: "120Hz",
    chipset: "Google Tensor G4",
    batteryMah: 4650,
    port: "USB-C",
    ipRating: "IPX8",
    hasWirelessCharging: true,
    isFoldable: true,
    isPro: true,
  },
];

export const pixelServices = [
  {
    slug: "screen-replacement",
    name: "Screen Replacement",
    image: "/images/devices/smartphone/lcd_screen.webp",
    getTitle: (model) =>
      `${model.name} Screen Replacement in KL | Fix It Jerry`,
    getMetaDescription: (model) =>
      `Cracked ${model.name} screen? We replace ${model.screenType} displays at ${model.refreshRate} in Kuala Lumpur. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `Signs your ${model.name} screen needs replacing`,
        content: [
          "Cracked glass, even if the display underneath still lights up.",
          "Touch not responding in certain areas or registering ghost taps.",
          "Green lines, purple tint, or flickering that won't go away after a restart.",
          model.isFoldable
            ? "Crease getting worse or inner display showing dead spots along the fold."
            : "Black patches spreading from the edge of an impact point.",
          `Display working but ${model.refreshRate} smoothness is gone, stuck at a lower refresh rate.`,
        ],
      },
      {
        heading: `About the ${model.name} display`,
        content: `The ${model.name} has a ${model.screenSize} ${model.screenType} panel running at ${model.refreshRate}. ${model.isPro && !model.isFoldable ? "The LTPO tech means the refresh rate scales down to save battery, so if yours is stuck at 60Hz after a drop, the display controller may be damaged." : model.isFoldable ? "This is a foldable with two separate displays. The inner 8-inch screen uses ultra-thin glass over the OLED, which is more fragile than a standard slab phone. The cover display is a regular flat panel and easier to replace on its own." : "Standard AMOLED, no curved edges on the non-Pro models, which actually makes replacement slightly easier."} Powered by the ${model.chipset}. The fingerprint sensor is under the display, so it needs recalibration after any screen swap.`,
      },
      {
        heading: "How we handle it",
        content: [
          `Full ${model.screenType} display assembly replacement, not just the outer glass.`,
          model.isFoldable
            ? "Inner and cover displays assessed separately. We replace only what's broken."
            : "Heat separation to lift the old panel without stressing the frame.",
          "Under-display fingerprint sensor tested and recalibrated.",
          "Display adhesive resealed to maintain the original dust and water resistance.",
          `Full touch test across the entire screen at ${model.refreshRate} before handover.`,
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          model.isFoldable
            ? "Inner display: RM 1,200 - RM 2,000 | Cover display: RM 400 - RM 700"
            : model.isPro
            ? "Cost: RM 500 - RM 900"
            : model.name.includes("a")
            ? "Cost: RM 300 - RM 500"
            : "Cost: RM 400 - RM 700",
          model.isFoldable
            ? "Turnaround: 2-4 hours"
            : "Turnaround: 1-2 hours",
        ],
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
      `${model.name} battery draining fast? We replace Pixel batteries in KL. Same-day service. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `${model.name} battery not lasting like it used to?`,
        content: [
          "Drains to 20% by lunchtime with normal use.",
          "Phone shuts off with battery still showing charge.",
          "Takes way longer to charge than when it was new.",
          "Battery percentage jumps around or drops suddenly.",
          "Phone gets uncomfortably warm during regular tasks.",
          "Back panel feels like it's pushing outward. That's a swollen battery. Don't ignore it.",
        ],
      },
      {
        heading: `${model.name} battery details`,
        content: `The ${model.name} has a ${model.batteryMah}mAh cell. ${model.isPro ? "Pro models push harder on the display and processing side, so battery wear shows up faster if you're a heavy user." : "The a-series and standard Pixels are efficient, but two years of daily charging still takes a toll."} Google rates Pixel batteries for about 800 full cycles before noticeable degradation. ${model.hasWirelessCharging ? "Wireless charging generates more heat than wired, which speeds up long-term wear if that's your main charging method." : "This model doesn't have wireless charging, so all the charge cycling goes through the USB-C port."}`,
      },
      {
        heading: "What the replacement involves",
        content: [
          model.isFoldable
            ? "The Fold requires extra care because the hinge mechanism sits near the battery."
            : "Back panel removed with heat to release the adhesive.",
          "Old battery disconnected and carefully pulled from the adhesive strips.",
          "New battery seated, connected, and secured.",
          "Back panel resealed with fresh adhesive to maintain water resistance.",
          "Charge cycle test and battery health check before handover.",
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          model.isFoldable
            ? "Cost: RM 250 - RM 400"
            : model.isPro
            ? "Cost: RM 180 - RM 300"
            : "Cost: RM 150 - RM 250",
          "Turnaround: 45 minutes - 1.5 hours",
        ],
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
      `${model.name} USB-C port not working? We fix Pixel charging issues in Kuala Lumpur. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `${model.name} charging port acting up?`,
        content: [
          "Cable wobbles or falls out of the USB-C port.",
          "Only charges if you hold the cable at a certain angle.",
          "Charges slowly or not at all, even with the original charger.",
          "Phone doesn't recognize USB accessories or file transfer.",
          "Lint or debris visible inside the port.",
        ],
      },
      {
        heading: "Port or cable? We check first",
        content: `Before replacing anything on your ${model.name}, we test with known-good cables and chargers. Plenty of charging problems come down to a worn cable or a weak charger. If the port itself has bent pins, corrosion, or physical damage, we swap the charging daughter board. ${model.hasWirelessCharging ? "If your USB-C port is dead but you need the phone working today, wireless charging can keep you going while we order parts." : "Since this model doesn't support wireless charging, a dead port means no charging at all, so don't wait on this one."}`,
      },
      {
        heading: "What the repair looks like",
        content: [
          "Port inspected under magnification for bent pins, debris, or corrosion.",
          "Compressed air and careful cleaning if it's just lint buildup.",
          "USB-C daughter board replacement if the port is physically damaged.",
          `Back panel resealed to maintain ${model.ipRating} water resistance.`,
          "Charging speed and data transfer tested with multiple cables.",
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          "Cleaning only: RM 30 - RM 50",
          model.isFoldable
            ? "Port board replacement: RM 200 - RM 350"
            : "Port board replacement: RM 120 - RM 250",
          "Turnaround: 30 minutes - 1 hour",
        ],
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
      `Water damaged ${model.name}? We do ultrasonic board cleaning and component repair in KL. The faster you bring it in, the better the odds.`,
    getSections: (model) => [
      {
        heading: "Stop. Do this first.",
        content: [
          "Power it off now. Don't check if it still works.",
          "Don't charge it. That's how you short the board.",
          "Shake water out of the USB-C port gently.",
          "Don't put it in rice. That's a myth that wastes time.",
          "Get it to a repair shop the same day. Corrosion starts within hours.",
        ],
      },
      {
        heading: `What water does to a ${model.name}`,
        content: `Your ${model.name} is rated ${model.ipRating}, which helps with brief splashes, but it's not a guarantee. ${model.ipRating === "IP67" ? "IP67 means 1 metre depth for 30 minutes in lab conditions. Real life isn't a lab. Pool chemicals, salt water, and soap all break down the seals faster." : "IP68 handles deeper submersion in theory, but the seals degrade over time, especially after drops."} ${model.isFoldable ? "Foldables are extra vulnerable because the hinge creates additional entry points for liquid." : ""} The ${model.chipset} board uses tiny BGA components that corrode fast once moisture gets in.`,
      },
      {
        heading: "How we approach it",
        content: [
          "Full teardown. Board, battery, display connections, all of it separated.",
          "Ultrasonic cleaning of the main board to dissolve corrosion at the component level.",
          "Microscope inspection for shorted or corroded chips.",
          `Component-level microsoldering if any ${model.chipset} board ICs are damaged.`,
          "Battery replaced if liquid reached the cell (swelling risk).",
          "Everything tested before reassembly.",
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          "Ultrasonic cleaning only: RM 150 - RM 250",
          "With component repair: RM 300 - RM 800",
          "Turnaround: 1-3 days depending on damage",
        ],
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
      `Cracked ${model.name} back glass? We replace Pixel back panels in KL without damaging internals. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `${model.name} back glass cracked?`,
        content: [
          "Shattered back panel from a drop, even with a case on.",
          "Cracks spreading from the camera bar area.",
          model.hasWirelessCharging
            ? "Wireless charging stopped working after a back impact."
            : "Back panel feels loose or rattles.",
          "Glass shards coming off when you remove the case.",
          `Worried about losing ${model.ipRating} water resistance from the cracks.`,
        ],
      },
      {
        heading: `Why Pixel back glass matters`,
        content: `The ${model.name} back panel is glued on and sits directly over the battery and ${model.hasWirelessCharging ? "wireless charging coil" : "internal components"}. ${model.isFoldable ? "On the Fold, the back glass is part of the outer shell that protects the hinge mechanism, so cracks here are more than cosmetic." : "Pixels have that distinctive camera bar that runs across the back. Cracks near the bar can let dust into the camera housing over time."} A cracked back also kills the ${model.ipRating} seal, so any future liquid exposure goes straight to the internals.`,
      },
      {
        heading: "What we do",
        content: [
          "Heat applied to soften the adhesive holding the back panel.",
          "Old glass carefully lifted without disturbing the battery or internals.",
          model.hasWirelessCharging
            ? "Wireless charging coil inspected and repositioned if needed."
            : "Internal components inspected for any impact damage.",
          "New back panel fitted with fresh adhesive.",
          `${model.ipRating} seal restored as close to factory as possible.`,
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          model.isFoldable
            ? "Cost: RM 300 - RM 500"
            : model.isPro
            ? "Cost: RM 200 - RM 350"
            : "Cost: RM 150 - RM 280",
          "Turnaround: 1-2 hours",
        ],
      },
    ],
  },
];
