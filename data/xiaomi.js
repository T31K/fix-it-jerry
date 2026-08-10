export const xiaomiModels = [
  {
    name: "Redmi 13C",
    slug: "redmi-13c",
    year: 2023,
    screenType: "IPS LCD",
    screenSize: "6.74-inch",
    refreshRate: "90Hz",
    chipset: "MediaTek Helio G85",
    batteryMah: 5000,
    port: "USB-C",
    ipRating: "none",
    hasWirelessCharging: false,
    isFoldable: false,
    tier: "budget",
    isPro: false,
  },
  {
    name: "Redmi Note 12",
    slug: "redmi-note-12",
    year: 2023,
    screenType: "AMOLED",
    screenSize: "6.67-inch",
    refreshRate: "120Hz",
    chipset: "Snapdragon 685",
    batteryMah: 5000,
    port: "USB-C",
    ipRating: "IP53",
    hasWirelessCharging: false,
    isFoldable: false,
    tier: "budget",
    isPro: false,
  },
  {
    name: "Redmi Note 13",
    slug: "redmi-note-13",
    year: 2024,
    screenType: "AMOLED",
    screenSize: "6.67-inch",
    refreshRate: "120Hz",
    chipset: "Snapdragon 685",
    batteryMah: 5000,
    port: "USB-C",
    ipRating: "IP54",
    hasWirelessCharging: false,
    isFoldable: false,
    tier: "budget",
    isPro: false,
  },
  {
    name: "Redmi Note 13 Pro",
    slug: "redmi-note-13-pro",
    year: 2024,
    screenType: "AMOLED",
    screenSize: "6.67-inch",
    refreshRate: "120Hz",
    chipset: "MediaTek Helio G99-Ultra",
    batteryMah: 5100,
    port: "USB-C",
    ipRating: "IP54",
    hasWirelessCharging: false,
    isFoldable: false,
    tier: "mid",
    isPro: true,
  },
  {
    name: "Redmi Note 14",
    slug: "redmi-note-14",
    year: 2025,
    screenType: "AMOLED",
    screenSize: "6.67-inch",
    refreshRate: "120Hz",
    chipset: "MediaTek Dimensity 7025-Ultra",
    batteryMah: 5500,
    port: "USB-C",
    ipRating: "IP64",
    hasWirelessCharging: false,
    isFoldable: false,
    tier: "budget",
    isPro: false,
  },
  {
    name: "Redmi Note 14 Pro",
    slug: "redmi-note-14-pro",
    year: 2025,
    screenType: "AMOLED",
    screenSize: "6.67-inch",
    refreshRate: "120Hz",
    chipset: "MediaTek Dimensity 7300-Ultra",
    batteryMah: 5500,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: false,
    isFoldable: false,
    tier: "mid",
    isPro: true,
  },
  {
    name: "Poco X6 Pro",
    slug: "poco-x6-pro",
    year: 2024,
    screenType: "AMOLED",
    screenSize: "6.67-inch",
    refreshRate: "120Hz",
    chipset: "MediaTek Dimensity 8300-Ultra",
    batteryMah: 5000,
    port: "USB-C",
    ipRating: "IP54",
    hasWirelessCharging: false,
    isFoldable: false,
    tier: "mid",
    isPro: true,
  },
  {
    name: "Poco F6",
    slug: "poco-f6",
    year: 2024,
    screenType: "AMOLED",
    screenSize: "6.67-inch",
    refreshRate: "120Hz",
    chipset: "Snapdragon 8s Gen 3",
    batteryMah: 5000,
    port: "USB-C",
    ipRating: "IP64",
    hasWirelessCharging: false,
    isFoldable: false,
    tier: "mid",
    isPro: true,
  },
  {
    name: "Xiaomi 13T",
    slug: "xiaomi-13t",
    year: 2023,
    screenType: "AMOLED",
    screenSize: "6.67-inch",
    refreshRate: "144Hz",
    chipset: "MediaTek Dimensity 8200-Ultra",
    batteryMah: 5000,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: false,
    isFoldable: false,
    tier: "mid",
    isPro: false,
  },
  {
    name: "Xiaomi 14T Pro",
    slug: "xiaomi-14t-pro",
    year: 2024,
    screenType: "AMOLED",
    screenSize: "6.67-inch",
    refreshRate: "144Hz",
    chipset: "MediaTek Dimensity 9300+",
    batteryMah: 5000,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    tier: "flagship",
    isPro: true,
  },
  {
    name: "Xiaomi 14",
    slug: "xiaomi-14",
    year: 2024,
    screenType: "AMOLED",
    screenSize: "6.36-inch",
    refreshRate: "120Hz",
    chipset: "Snapdragon 8 Gen 3",
    batteryMah: 4610,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    tier: "flagship",
    isPro: true,
  },
  {
    name: "Xiaomi 15",
    slug: "xiaomi-15",
    year: 2025,
    screenType: "AMOLED",
    screenSize: "6.36-inch",
    refreshRate: "120Hz",
    chipset: "Snapdragon 8 Elite",
    batteryMah: 5240,
    port: "USB-C",
    ipRating: "IP68",
    hasWirelessCharging: true,
    isFoldable: false,
    tier: "flagship",
    isPro: true,
  },
];

export const xiaomiServices = [
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
          model.screenType === "IPS LCD"
            ? "Backlight bleeding, dark blotches, or lines across the LCD after a knock."
            : "Green lines, purple tint, or flickering that won't go away after a restart.",
          "Black patches spreading from the edge of an impact point.",
          `Display working but ${model.refreshRate} smoothness is gone, stuck at a lower refresh rate.`,
        ],
      },
      {
        heading: `About the ${model.name} display`,
        content: `The ${model.name} has a ${model.screenSize} ${model.screenType} panel running at ${model.refreshRate}. ${
          model.screenType === "IPS LCD"
            ? "This is one of the few current Redmi phones still on an LCD rather than AMOLED, so the whole assembly (glass, digitiser and backlit LCD) is replaced as one unit. The fingerprint reader is a side-mounted capacitive sensor built into the power button, so a screen swap doesn't need any fingerprint recalibration."
            : model.tier === "flagship"
            ? `This is a flagship-grade AMOLED with fine brightness and colour tuning, driven by the ${model.chipset}. The fingerprint sensor is bonded under the panel, so it always needs recalibration after a display swap.`
            : `A Redmi/Poco AMOLED at ${model.refreshRate}, a big step up from the LCD panels on entry Redmi phones. The under-display fingerprint sensor sits beneath the AMOLED, so it needs recalibration after any screen replacement.`
        } Powered by the ${model.chipset}.`,
      },
      {
        heading: "How we handle it",
        content: [
          `Full ${model.screenType} display assembly replacement, not just the outer glass.`,
          "Heat separation to lift the old panel without stressing the frame.",
          model.screenType === "IPS LCD"
            ? "Side-mounted fingerprint button re-tested after the swap."
            : "Under-display fingerprint sensor tested and recalibrated on AMOLED models.",
          "Display adhesive resealed to maintain the original dust and water resistance.",
          `Full touch test across the entire screen at ${model.refreshRate} before handover.`,
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          model.tier === "flagship"
            ? "Cost: RM 450 - RM 800"
            : model.tier === "mid"
            ? "Cost: RM 300 - RM 500"
            : "Cost: RM 180 - RM 320",
          "Turnaround: 1-2 hours",
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
      `${model.name} battery draining fast? We replace Xiaomi, Redmi and Poco batteries in KL. Same-day service. Walk in or book online.`,
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
        content: `The ${model.name} has a ${model.batteryMah}mAh cell. ${
          model.tier === "flagship"
            ? "Flagship Xiaomi phones push hard on the display and the Snapdragon chip, so battery wear shows up faster if you're a heavy user."
            : model.tier === "mid"
            ? "The Redmi Note Pro and Poco line pair big batteries with fast MediaTek and Snapdragon chips, and Xiaomi's aggressive fast charging speeds up long-term wear over a couple of years."
            : "Entry Redmi phones ship with large batteries and modest chips, so they last well, but two years of daily charging still takes a toll."
        } Xiaomi rates its cells for roughly 800 full charge cycles before noticeable degradation. ${
          model.hasWirelessCharging
            ? "Wireless charging generates more heat than wired, which speeds up long-term wear if that's your main charging method."
            : "This model doesn't have wireless charging, so all the charge cycling runs through the USB-C port."
        }`,
      },
      {
        heading: "What the replacement involves",
        content: [
          "Back panel removed with heat to release the adhesive.",
          "Old battery disconnected and carefully pulled from the adhesive strips.",
          "New battery seated, connected, and secured.",
          "Back panel resealed with fresh adhesive to maintain water resistance.",
          "Charge cycle test and battery health check before handover.",
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          model.tier === "flagship"
            ? "Cost: RM 200 - RM 320"
            : model.tier === "mid"
            ? "Cost: RM 150 - RM 250"
            : "Cost: RM 120 - RM 200",
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
      `${model.name} USB-C port not working? We fix Xiaomi, Redmi and Poco charging issues in Kuala Lumpur. Walk in or book online.`,
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
        content: `Before replacing anything on your ${model.name}, we test with known-good cables and chargers. Plenty of charging problems come down to a worn cable or a weak charger, and Xiaomi's fast charging is fussy about which brick you use. If the port itself has bent pins, corrosion, or physical damage, we swap the charging daughter board. ${
          model.hasWirelessCharging
            ? "If your USB-C port is dead but you need the phone working today, wireless charging can keep you going while we order parts."
            : "Since this model doesn't support wireless charging, a dead port means no charging at all, so don't wait on this one."
        }`,
      },
      {
        heading: "What the repair looks like",
        content: [
          "Port inspected under magnification for bent pins, debris, or corrosion.",
          "Compressed air and careful cleaning if it's just lint buildup.",
          "USB-C daughter board replacement if the port is physically damaged.",
          model.ipRating === "none"
            ? "Back panel resealed to keep dust and splashes out."
            : `Back panel resealed to maintain ${model.ipRating} water resistance.`,
          "Charging speed and data transfer tested with multiple cables.",
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          "Cleaning only: RM 30 - RM 50",
          "Port board replacement: RM 100 - RM 220",
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
        content: `${
          model.ipRating === "none"
            ? `Your ${model.name} has no official IP rating, so treat any liquid contact as an emergency, there's nothing sealing the internals.`
            : `Your ${model.name} is rated ${model.ipRating}, which helps with brief splashes, but it's not a guarantee.`
        } ${
          model.ipRating === "IP53" || model.ipRating === "IP54"
            ? "That splash rating only covers light sprays, not submersion, and pool chemicals, salt water, and soap all break down the seals faster."
            : model.ipRating === "IP68" || model.ipRating === "IP64"
            ? "Higher IP ratings handle deeper exposure in theory, but the seals degrade over time, especially after drops."
            : "Real life isn't a lab, and everyday exposure wears any seal down fast."
        } The ${model.chipset} board uses tiny BGA components that corrode fast once moisture gets in.`,
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
      `Cracked ${model.name} back glass? We replace Xiaomi, Redmi and Poco back panels in KL without damaging internals. Walk in or book online.`,
    getSections: (model) => [
      {
        heading: `${model.name} back glass cracked?`,
        content: [
          "Shattered back panel from a drop, even with a case on.",
          "Cracks spreading from the camera module area.",
          model.hasWirelessCharging
            ? "Wireless charging stopped working after a back impact."
            : "Back panel feels loose or rattles.",
          "Glass shards coming off when you remove the case.",
          model.ipRating === "none"
            ? "Worried about dust and splashes getting in through the cracks."
            : `Worried about losing ${model.ipRating} water resistance from the cracks.`,
        ],
      },
      {
        heading: `Why Xiaomi back glass matters`,
        content: `The ${model.name} back panel is glued on and sits directly over the battery and ${
          model.hasWirelessCharging ? "wireless charging coil" : "internal components"
        }. ${
          model.tier === "flagship"
            ? "Flagship Xiaomi phones use a large camera island, and cracks near the module can let dust into the lenses over time."
            : "Redmi and Poco phones pack a big camera bump into the corner, and cracks near it can let dust into the camera housing over time."
        } ${
          model.ipRating === "none"
            ? "A cracked back also removes what little dust and splash protection the phone had."
            : `A cracked back also kills the ${model.ipRating} seal, so any future liquid exposure goes straight to the internals.`
        }`,
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
          model.ipRating === "none"
            ? "Dust and splash resistance restored as close to factory as possible."
            : `${model.ipRating} seal restored as close to factory as possible.`,
        ],
      },
      {
        heading: "Pricing & time",
        content: [
          model.tier === "flagship"
            ? "Cost: RM 200 - RM 380"
            : model.tier === "mid"
            ? "Cost: RM 150 - RM 300"
            : "Cost: RM 120 - RM 220",
          "Turnaround: 1-2 hours",
        ],
      },
    ],
  },
];
