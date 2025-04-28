const nintendoswitchItems = {
  title: "Nintendo Switch",
  imgSrc: "/images/services/nintendo_switch.webp",
  description:
    "Water damage, power supply repair, charging port repair, LCD & touchscreen replacement, battery replacement, button replacement, OS installation, heatsink reapplication, general servicing",
  services: [
  // repair
  {
    service_type: "repair",
    service: "Water Damage",
    image: "/images/devices/smartphone/water_damage.webp",
    hash: "switch-water-damage",
    popular: true,
    title: "Nintendo Switch Water Damage Repair | Fix It Jerry",
    meta_description:
      "Dropped your Switch in water or spilled a drink on it? We repair water-damaged Nintendo Switch consoles and restore them to working condition.",
    sections: [
      {
        heading: "Common Symptoms of Water Damage",
        content: [
          "Switch won’t turn on at all.",
          "Flickering or black screen.",
          "Battery won’t charge.",
          "Touchscreen or buttons not responding."
        ]
      },
      {
        heading: "Our Repair Process",
        content: [
          "Disassemble and dry all internal parts.",
          "Ultrasonic cleaning of mainboard.",
          "Replace damaged ICs, battery or screen if necessary.",
          "Run full functionality tests after reassembly."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 250 - RM 700", "Time: 2 - 5 days"]
      }
    ]
  },
  {
    service_type: "repair",
    service: "Power Supply",
    image: "/images/devices/desktop/power_supply.webp",
    hash: "switch-power-supply",
    title: "Nintendo Switch Power Supply Repair | Fix It Jerry",
    meta_description:
      "Switch won’t power on or randomly shuts down? We repair or replace damaged power supply circuitry in your Nintendo Switch.",
    sections: [
      {
        heading: "Symptoms of Power IC or Power Supply Failure",
        content: [
          "No power even after charging overnight.",
          "Charging light doesn’t come on.",
          "Console turns on briefly then shuts off.",
          "Unusual heat during charging."
        ]
      },
      {
        heading: "How We Fix It",
        content: [
          "Inspect USB-C charging circuit and main power IC.",
          "Test internal battery and DC-in components.",
          "Replace or reball power IC (if required).",
          "Verify charging voltage and current draw."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 200 - RM 600", "Time: 1 - 3 days"]
      }
    ]
  },
  {
    service_type: "repair",
    service: "WiFi and Charging Port",
    image: "/images/devices/desktop/wifi.webp",
    hash: "switch-wifi-charging",
    title: "Nintendo Switch WiFi & Charging Port Repair | Fix It Jerry",
    meta_description:
      "Switch not connecting to WiFi or not charging? We repair faulty WiFi modules and damaged charging ports quickly.",
    sections: [
      {
        heading: "Common Issues",
        content: [
          "WiFi not detected or constantly drops signal.",
          "Charging only works when cable is angled.",
          "USB-C port feels loose or not responsive.",
          "Slow charging or no charge at all."
        ]
      },
      {
        heading: "Repair Steps",
        content: [
          "Diagnose and test WiFi chip and antenna.",
          "Desolder and replace damaged charging port.",
          "Check PCB traces and flex cables.",
          "Post-repair signal strength & charging test."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 200 - RM 500", "Time: 1 - 2 days"]
      }
    ]
  },
  {
    service_type: "repair",
    service: "Cartridge Slot",
    image: "/images/devices/smartphone/data_backup.webp",
    hash: "switch-cartridge-slot",
    title: "Nintendo Switch Cartridge Slot Repair | Fix It Jerry",
    meta_description:
      "Game not detected or stuck in slot? We fix and replace faulty Nintendo Switch cartridge readers and pins.",
    sections: [
      {
        heading: "When to Repair the Cartridge Slot",
        content: [
          "Game card not detected when inserted.",
          "‘Please remove and reinsert’ message keeps appearing.",
          "Cartridge stuck inside.",
          "Pins bent or damaged from forceful insert."
        ]
      },
      {
        heading: "Our Repair Process",
        content: [
          "Inspect and test cartridge reader pins.",
          "Replace cartridge slot flex board if needed.",
          "Clean and reseat cartridge contacts.",
          "Confirm multiple game card functionality post-repair."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 180 - RM 450", "Time: 1 - 2 days"]
      }
    ]
  },

  // replacement
  {
    service_type: "replacement",
    service: "LCD Screen / Touchscreen",
    hash: "switch-lcd-touchscreen",
    image: "/images/devices/nintendo_switch/lcd_screen.webp",
    popular: true,
    title: "Nintendo Switch Screen Replacement | Fix It Jerry",
    meta_description:
      "Cracked screen or unresponsive touch? We replace damaged Nintendo Switch LCD and touchscreen panels fast.",
    sections: [
      {
        heading: "Common Issues",
        content: [
          "Cracked or shattered display.",
          "Touchscreen not working properly.",
          "Black screen or flickering lines.",
          "Dead pixels or discoloration."
        ]
      },
      {
        heading: "What We Do",
        content: [
          "Carefully disassemble front panel.",
          "Remove and replace LCD and/or digitizer.",
          "Test brightness, touch, and resolution.",
          "Reapply sealing and reassemble console."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 280 - RM 650", "Time: 1 - 2 days"]
      }
    ]
  },
  {
    service_type: "replacement",
    service: "Housing",
    hash: "switch-housing",
    image: "/images/devices/nintendo_switch/housing.webp",
    title: "Nintendo Switch Housing Replacement | Fix It Jerry",
    meta_description:
      "Switch body cracked or scratched? We replace the entire outer shell, restoring your console’s look and durability.",
    sections: [
      {
        heading: "When to Replace Housing",
        content: [
          "Cracks or dents in the casing.",
          "Loose backplate or warped structure.",
          "Joy-Con rails feel misaligned.",
          "You want a new look (color swap)."
        ]
      },
      {
        heading: "How We Fix It",
        content: [
          "Disassemble and remove all internal components.",
          "Install new housing (top/bottom or full shell).",
          "Reassemble and test ports, buttons, and alignment.",
          "Ensure structural integrity and aesthetics."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 250 - RM 600", "Time: 1 - 2 days"]
      }
    ]
  },
  {
    service_type: "replacement",
    service: "Battery",
    hash: "switch-battery",
    popular: true,
    image: "/images/devices/smartphone/battery.webp",
    title: "Nintendo Switch Battery Replacement | Fix It Jerry",
    meta_description:
      "Battery draining fast or won’t charge? We replace old or swollen Nintendo Switch batteries safely and quickly.",
    sections: [
      {
        heading: "Signs of Battery Failure",
        content: [
          "Battery drains quickly even on standby.",
          "Switch shuts off unexpectedly.",
          "Battery swollen or heating during charge.",
          "Inconsistent battery percentage display."
        ]
      },
      {
        heading: "Our Process",
        content: [
          "Remove back cover and battery shield.",
          "Safely disconnect and replace battery.",
          "Test for charge cycles and voltage stability.",
          "Verify thermal safety post-installation."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 180 - RM 450", "Time: 1 - 2 hours"]
      }
    ]
  },
  {
    service_type: "replacement",
    service: "Joy-con Parts",
    hash: "switch-joycon-parts",
    image: "/images/devices/nintendo_switch/joycon_parts.webp",
    title: "Nintendo Switch Joy-Con Parts Replacement | Fix It Jerry",
    meta_description:
      "Drifting analogs or broken rails? We replace thumbsticks, rails, and internal Joy-Con parts to restore smooth gameplay.",
    sections: [
      {
        heading: "Common Joy-Con Issues",
        content: [
          "Analog stick drift.",
          "Buttons not registering.",
          "Connection issues with main console.",
          "Loose or broken Joy-Con rail locks."
        ]
      },
      {
        heading: "Fix Steps",
        content: [
          "Disassemble Joy-Con shell carefully.",
          "Replace analog sticks, rails, or internal PCBs.",
          "Reassemble and calibrate controls.",
          "Test responsiveness and charging."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 100 - RM 300 per Joy-Con", "Time: 1 - 2 hours"]
      }
    ]
  },
  {
    service_type: "replacement",
    service: "Fan",
    hash: "switch-fan",
    image: "/images/devices/laptop/fan.webp",
    title: "Nintendo Switch Fan Replacement | Fix It Jerry",
    meta_description:
      "Switch heating up or fan making noise? We replace damaged fans to restore proper cooling.",
    sections: [
      {
        heading: "Symptoms",
        content: [
          "Fan not spinning.",
          "Loud grinding or whirring noise.",
          "Overheating during gameplay.",
          "Fan error message on screen."
        ]
      },
      {
        heading: "Repair Process",
        content: [
          "Disassemble unit to access cooling module.",
          "Remove and replace faulty fan.",
          "Clean vents and apply thermal pads if needed.",
          "Run temperature and noise tests after reassembly."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 150 - RM 400", "Time: 1 - 2 hours"]
      }
    ]
  },
  {
    service_type: "replacement",
    service: "Mic & Speaker",
    hash: "switch-mic-speaker",
    image: "/images/devices/smartphone/mic_speaker.webp",
    title: "Nintendo Switch Mic & Speaker Replacement | Fix It Jerry",
    meta_description:
      "Sound too soft or mic not working? We replace faulty speakers or mics inside your Nintendo Switch.",
    sections: [
      {
        heading: "Symptoms",
        content: [
          "No sound or muffled audio.",
          "Voice chat mic not picking up sound.",
          "Buzzing or static from speaker.",
          "Inconsistent sound output."
        ]
      },
      {
        heading: "Fix Method",
        content: [
          "Open Switch shell and remove sound module.",
          "Replace damaged mic or speaker.",
          "Test for clarity and volume consistency.",
          "Run system sound diagnostics."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 180 - RM 450", "Time: 1 - 2 hours"]
      }
    ]
  },
  {
    service_type: "replacement",
    service: "WiFi & Charging Port",
    hash: "switch-wifi-charging-port",
    image: "/images/devices/smartphone/wifi_charging_port.webp",
    title: "Nintendo Switch WiFi & Charging Port Replacement | Fix It Jerry",
    meta_description:
      "Switch won’t connect to WiFi or charge properly? We replace worn-out WiFi modules and USB-C charging ports.",
    sections: [
      {
        heading: "Common Problems",
        content: [
          "USB-C port loose or damaged.",
          "Can’t connect to WiFi or low signal.",
          "WiFi or charging disconnects randomly.",
          "No charging light when plugged in."
        ]
      },
      {
        heading: "Repair Includes",
        content: [
          "Desolder and replace USB-C connector.",
          "Install new WiFi module (if needed).",
          "Reconnect antennas and test signal strength.",
          "Run charging and network tests post-repair."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 200 - RM 550", "Time: 1 - 2 days"]
      }
    ]
  },
  {
    service_type: "replacement",
    service: "Buttons",
    hash: "switch-buttons",
    image: "/images/devices/nintendo_switch/buttons.webp",
    title: "Nintendo Switch Button Replacement | Fix It Jerry",
    meta_description:
      "Sticky or unresponsive buttons? We replace A/B/X/Y, power, volume, and home buttons on your Switch.",
    sections: [
      {
        heading: "When to Replace Buttons",
        content: [
          "Buttons feel stuck or don’t register.",
          "You have to press hard for it to respond.",
          "Volume or power buttons not working.",
          "Rubber dome under button is worn."
        ]
      },
      {
        heading: "Our Process",
        content: [
          "Disassemble device to access button flex layer.",
          "Replace individual buttons or button module.",
          "Test for pressure, click, and responsiveness.",
          "Reassemble with button alignment calibration."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 150 - RM 400", "Time: 1 - 2 hours"]
      }
    ]
  },
  // upgrade

  {
    service_type: "upgrade",
    service: "General Servicing",
    hash: "switch-general-servicing",
    image: "/images/devices/laptop/general_servicing.webp",
    title: "Nintendo Switch General Servicing | Fix It Jerry",
    meta_description:
      "Switch running hot or slow? We provide general cleaning, diagnostics, and performance servicing for your Nintendo Switch.",
    sections: [
      {
        heading: "When You Need Servicing",
        content: [
          "Haven’t cleaned the Switch in over a year.",
          "Fan noise is louder than usual.",
          "Switch heats up during simple gameplay.",
          "Ports or buttons feel sticky or unresponsive."
        ]
      },
      {
        heading: "What’s Included",
        content: [
          "Open up and clean internal dust from fan and vents.",
          "Inspect and reseat internal components.",
          "Check Joy-Con rails, buttons, and USB-C port.",
          "Performance diagnostics and stability test."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 100 - RM 250", "Time: 1 - 2 hours"]
      }
    ]
  },
  {
    service_type: "upgrade",
    service: "Data Backup & Recovery",
    hash: "switch-data-recovery",
    image: "/images/devices/laptop/data_backup.webp",
    title: "Nintendo Switch Data Backup & Recovery | Fix It Jerry",
    meta_description:
      "Need to back up or recover lost game saves and user data? We safely recover and store your Nintendo Switch data.",
    sections: [
      {
        heading: "When This Is Needed",
        content: [
          "Switch system is corrupted or won’t boot.",
          "You need to transfer game saves to a new console.",
          "Lost important screenshots or videos.",
          "Need full backup before reformatting or repair."
        ]
      },
      {
        heading: "Our Recovery Method",
        content: [
          "Diagnose internal NAND or SD card access.",
          "Backup user data to cloud or external storage.",
          "Use advanced tools to extract files from dead systems.",
          "Optional: Migrate data to another Switch."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 250 - RM 700", "Time: 1 hour – 2 days"]
      }
    ]
  },
  {
    service_type: "upgrade",
    service: "Installation and Reformat",
    hash: "switch-installation-reformat",
    image: "/images/devices/smartphone/installation_reformat.webp",
    title: "Nintendo Switch OS Reinstallation | Fix It Jerry",
    meta_description:
      "Switch stuck in a boot loop or system error? We reinstall the Nintendo Switch OS and restore it to factory condition.",
    sections: [
      {
        heading: "When to Reinstall OS",
        content: [
          "Switch stuck on boot screen or logo.",
          "Frequent crashing or corrupt system.",
          "After NAND swap or repair.",
          "Resetting before selling the device."
        ]
      },
      {
        heading: "What We Do",
        content: [
          "Enter recovery mode (RCM) and reflash OS.",
          "Wipe corrupted data and cache.",
          "Optionally back up user data first.",
          "Ensure full boot and UI functionality after reset."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 150 - RM 400", "Time: 1 - 2 hours"]
      }
    ]
  },
  {
    service_type: "upgrade",
    service: "Heatsink Reapplication",
    hash: "switch-heatsink-repaste",
    image: "/images/devices/laptop/heatsink.webp",
    title: "Nintendo Switch Heatsink & Thermal Paste Service | Fix It Jerry",
    meta_description:
      "Switch heating too much or shutting down mid-game? We reapply thermal paste to keep your console cool and running smooth.",
    sections: [
      {
        heading: "Signs You Need This",
        content: [
          "Switch feels unusually hot near the vent.",
          "Fan is always at max speed.",
          "System shuts down during long sessions.",
          "You’ve never repasted your Switch before."
        ]
      },
      {
        heading: "Service Steps",
        content: [
          "Open the device and remove the heatsink.",
          "Clean off old thermal paste carefully.",
          "Apply fresh premium thermal compound.",
          "Run thermal tests after reassembly."
        ]
      },
      {
        heading: "Cost & Turnaround",
        content: ["Cost: RM 120 - RM 300", "Time: 1 hour"]
      }
    ]
  }

]
};

export { nintendoswitchItems };
