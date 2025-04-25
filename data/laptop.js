const laptopItems = {
  title: "Laptop",
  imgSrc: "/images/services/macbook.webp",
  description:
    "Water damage, power supply, network issues, screen replacement, battery replacement, keyboard replacement, hinge repair, storage upgrade, general servicing, OS installation",
  services: [
    /// ==== REPAIR ====
    /// ==== REPAIR ====
    /// ==== REPAIR ====
    /// ==== REPAIR ====

    {
      service_type: "repair",
      service: "Water damage/CPU Damage",
      hash: "water-damage",
      popular: true,
      title: "Laptop Water Damage Repair | Fix It Jerry",
      meta_description:
        "Spilled liquid on your laptop? Our expert water damage repair service can save your device and data. Fast and reliable service.",
      sections: [
        {
          heading: "Laptop Water Damage Repair",
          content:
            "Liquid spills can cause immediate and long-term damage to laptops. Our specialized repair addresses both visible and hidden damage to prevent future issues.",
        },
        {
          heading: "Common Water Damage Symptoms",
          content: [
            "Laptop won't power on or shuts down randomly.",
            "Keyboard keys not working or sticky.",
            "Screen flickering or display issues.",
            "Trackpad malfunctioning.",
            "Strange noises from fans or components.",
          ],
        },
        {
          heading: "Our Repair Process",
          content: [
            "Complete disassembly and inspection.",
            "Ultrasonic cleaning of components.",
            "Corrosion treatment and prevention.",
            "Component-level repairs and replacements.",
            "Thorough testing before reassembly.",
          ],
        },
        {
          heading: "What to Do If Your Laptop Gets Wet",
          content: [
            "Power off immediately and remove the battery if possible.",
            "Disconnect all cables and peripherals.",
            "Turn laptop upside down to drain excess liquid.",
            "Do NOT use a hair dryer or put in rice.",
            "Bring to us as soon as possible for professional treatment.",
          ],
        },
        {
          heading: "Repair Cost & Turnaround Time",
          content: ["Cost: RM 300 - RM 1200", "Turnaround Time: 3-7 days."],
        },
      ],
    },
    {
      service_type: "repair",
      service: "Power IC",
      hash: "power-ic",
      title: "Laptop Power IC Repair | Fix It Jerry",
      meta_description:
        "Laptop won’t turn on? It could be the Power IC. We specialize in laptop power IC repair to restore stable power flow and functionality.",
      sections: [
        {
          heading: "What is a Power IC?",
          content:
            "The Power IC manages power distribution across components. Failure can prevent your laptop from turning on or cause shutdowns.",
        },
        {
          heading: "Common Symptoms",
          content: [
            "No response when pressing the power button.",
            "Laptop only works when plugged in.",
            "Sudden shutdowns during use.",
            "Battery not charging or charging erratically.",
          ],
        },
        {
          heading: "How We Fix It",
          content: [
            "Diagnostic testing of power rails.",
            "Desolder and replace faulty IC chips.",
            "Reflow or reball power controller if needed.",
            "Post-repair voltage stability testing.",
          ],
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 250 - RM 700", "Time: 2 - 4 days"],
        },
      ],
    },
    {
      service_type: "repair",
      service: "Baseband IC",
      hash: "baseband-ic",
      title: "Laptop Baseband IC Repair | Fix It Jerry",
      meta_description:
        "Laptop showing no Wi-Fi or cellular signal? Our baseband IC repair service restores network and connectivity functions.",
      sections: [
        {
          heading: "What is the Baseband IC?",
          content:
            "This chip handles communication like Wi-Fi, Bluetooth, and LTE (on cellular-enabled models).",
        },
        {
          heading: "Symptoms of Baseband IC Failure",
          content: [
            "No Wi-Fi networks detected.",
            "Bluetooth not working.",
            "Intermittent network drops.",
            "SIM card not detected (LTE models).",
          ],
        },
        {
          heading: "Our Repair Approach",
          content: [
            "Network controller diagnostics.",
            "Chip reflow or reballing.",
            "Replacement of baseband IC if needed.",
            "Antenna and trace testing.",
          ],
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 300 - RM 800", "Time: 2 - 5 days"],
        },
      ],
    },
    {
      service_type: "repair",
      service: "Audio IC",
      hash: "audio-ic",
      title: "Laptop Audio IC Repair | Fix It Jerry",
      meta_description:
        "Laptop speakers or mic not working? Our Audio IC repair service solves sound-related issues effectively.",
      sections: [
        {
          heading: "What is the Audio IC?",
          content:
            "The Audio IC manages audio output and input through internal and external ports.",
        },
        {
          heading: "Common Issues",
          content: [
            "No sound from speakers.",
            "Microphone not picking up voice.",
            "Audio jack not responding.",
            "Distorted or crackling sound.",
          ],
        },
        {
          heading: "Repair Process",
          content: [
            "Run audio diagnostics.",
            "Inspect and replace Audio IC chip.",
            "Test speaker and mic lines.",
            "Calibrate sound drivers post-repair.",
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
      service: "Charging IC",
      hash: "charging-ic",
      title: "Laptop Charging IC Repair | Fix It Jerry",
      meta_description:
        "Laptop not charging properly? We repair or replace charging ICs to restore safe and stable power.",
      sections: [
        {
          heading: "Why It Matters",
          content:
            "The Charging IC regulates current from the charger. Damage can prevent charging or overheat the battery.",
        },
        {
          heading: "Common Symptoms",
          content: [
            "Laptop doesn’t charge at all.",
            "Battery percentage doesn’t increase.",
            "Overheating during charging.",
            "Loose or unstable charging behavior.",
          ],
        },
        {
          heading: "How We Fix It",
          content: [
            "Testing voltage input/output on the logic board.",
            "Replace damaged charging controller IC.",
            "Inspect charging port and battery interface.",
            "Run post-repair charging diagnostics.",
          ],
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 250 - RM 750", "Time: 2 - 3 days"],
        },
      ],
    },
    {
      service_type: "repair",
      service: "Backlight IC",
      hash: "backlight-ic",
      title: "Laptop Backlight IC Repair | Fix It Jerry",
      meta_description:
        "Laptop screen turns on but stays black? It could be the backlight IC. We repair it to restore screen visibility.",
      sections: [
        {
          heading: "What is the Backlight IC?",
          content:
            "It powers the backlight LEDs on your laptop’s display. If it fails, screen may remain black despite the device being on.",
        },
        {
          heading: "Common Symptoms",
          content: [
            "Black screen with faint image when shining flashlight.",
            "Display works on external monitor but not on laptop.",
            "Backlight flickers or dims randomly.",
          ],
        },
        {
          heading: "Fix Process",
          content: [
            "Disassemble display housing.",
            "Replace faulty Backlight IC.",
            "Inspect FPC connectors and display cable.",
            "Test and calibrate brightness levels.",
          ],
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 220 - RM 650", "Time: 2 - 4 days"],
        },
      ],
    },
    {
      service_type: "repair",
      service: "GPU",
      hash: "gpu-repair",
      title: "Laptop GPU Repair | Fix It Jerry",
      meta_description:
        "Seeing glitches, crashes, or overheating? Our GPU repair service handles graphics chip failures on laptops.",
      sections: [
        {
          heading: "When You Need GPU Repair",
          content: [
            "Screen glitches or artifacts during use.",
            "Laptop crashes while gaming or rendering.",
            "No display or stuck on boot screen.",
            "Overheating and loud fan noise.",
          ],
        },
        {
          heading: "Our GPU Repair Steps",
          content: [
            "Thermal paste reapplication and cleanup.",
            "Reflow or reball GPU chip.",
            "Replace VRAM or graphics chip (if needed).",
            "Test under load with benchmark tools.",
          ],
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 350 - RM 950", "Time: 3 - 7 days"],
        },
      ],
    },
    /// ==== REPLACEMENT ====
    /// ==== REPLACEMENT ====
    /// ==== REPLACEMENT ====
    /// ==== REPLACEMENT ====
    /// ==== REPLACEMENT ====
    {
  service_type: "replacement",
  service: "LCD Screen",
  hash: "lcd-screen",
  popular: true,
  title: "Laptop LCD Screen Replacement | Fix It Jerry",
  meta_description:
    "Cracked or black laptop screen? Fix It Jerry replaces damaged LCD screens fast with top quality panels.",
  sections: [
    {
      heading: "When to Replace Your LCD Screen",
      content: [
        "Visible cracks or black spots on screen.",
        "Display doesn't turn on or flickers.",
        "Dead pixels, lines, or discoloration.",
        "Touchscreen not responsive (for touchscreen models)."
      ]
    },
    {
      heading: "Our Replacement Process",
      content: [
        "Screen diagnosis to confirm panel failure.",
        "Careful removal of damaged screen.",
        "Install high-quality compatible LCD panel.",
        "Full display and brightness calibration."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 300 - RM 950", "Time: 1 - 3 days"]
    }
  ]
},
{
  service_type: "replacement",
  service: "Top & Bottom Casing / Hinge",
  hash: "casing-hinge",
  title: "Laptop Casing & Hinge Replacement | Fix It Jerry",
  meta_description:
    "Broken laptop casing or loose hinges? We replace top and bottom casings, restore hinges, and bring your device back to sturdy shape.",
  sections: [
    {
      heading: "Why Replace Laptop Casing or Hinges?",
      content: [
        "Laptop doesn’t close properly or hinge feels loose.",
        "Cracks or gaps around screen or bottom panel.",
        "Casing broken near ports or fan vents.",
        "Device feels unstable when opening/closing."
      ]
    },
    {
      heading: "Replacement Process",
      content: [
        "Remove all internal components safely.",
        "Replace top and/or bottom casing with OEM parts.",
        "Reinforce or replace broken hinges.",
        "Reassemble and perform hinge pressure testing."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 250 - RM 750", "Time: 2 - 4 days"]
    }
  ]
},
{
  service_type: "replacement",
  service: "Battery",
  hash: "battery",
  popular: true,
  title: "Laptop Battery Replacement | Fix It Jerry",
  meta_description:
    "Battery not holding charge? We replace your laptop’s battery to restore reliable, long-lasting power.",
  sections: [
    {
      heading: "Signs You Need a Battery Replacement",
      content: [
        "Battery drains extremely fast.",
        "Laptop shuts down even with charge remaining.",
        "Battery swollen or overheating.",
        "Charger must always be plugged in."
      ]
    },
    {
      heading: "Our Battery Swap Process",
      content: [
        "Run battery health diagnostics.",
        "Safely disconnect and remove old battery.",
        "Install a brand new compatible battery.",
        "Test charging and runtime after replacement."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 200 - RM 600", "Time: 1 - 2 hours"]
    }
  ]
},
{
  service_type: "replacement",
  service: "Fan",
  hash: "fan",
  title: "Laptop Fan Replacement | Fix It Jerry",
  meta_description:
    "Laptop overheating or making loud noise? We replace damaged or faulty fans to restore cooling performance.",
  sections: [
    {
      heading: "Signs Your Laptop Fan Needs Replacement",
      content: [
        "Loud grinding or rattling noise.",
        "Laptop heats up quickly during use.",
        "Fan not spinning at all.",
        "Overheating and automatic shutdowns."
      ]
    },
    {
      heading: "Our Replacement Process",
      content: [
        "Open laptop and locate faulty fan.",
        "Remove dust and thermal debris.",
        "Replace with new high-quality fan.",
        "Apply fresh thermal paste and test temperatures."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 150 - RM 450", "Time: 1 - 2 hours"]
    }
  ]
},
{
  service_type: "replacement",
  service: "Keyboard & Trackpad",
  hash: "keyboard-trackpad",
  title: "Laptop Keyboard & Trackpad Replacement | Fix It Jerry",
  meta_description:
    "Keys not responding or trackpad acting up? Fix It Jerry replaces faulty keyboards and trackpads with precision.",
  sections: [
    {
      heading: "When to Replace Keyboard or Trackpad",
      content: [
        "Unresponsive or stuck keys.",
        "Trackpad lag or erratic cursor movement.",
        "Liquid damage on keyboard area.",
        "Missing keys or uneven click pressure."
      ]
    },
    {
      heading: "Our Replacement Procedure",
      content: [
        "Full disassembly to access keyboard module.",
        "Install new keyboard and/or trackpad.",
        "Reconnect flex cables and secure screws.",
        "Test typing, gestures, and sensitivity."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 200 - RM 700", "Time: 2 - 3 hours"]
    }
  ]
},
{
  service_type: "replacement",
  service: "Mic & Speaker",
  hash: "mic-speaker",
  title: "Laptop Mic & Speaker Replacement | Fix It Jerry",
  meta_description:
    "Can’t hear sound or your mic isn’t picking up voice? We replace internal laptop speakers and microphones for crystal-clear communication.",
  sections: [
    {
      heading: "When to Replace Mic or Speaker",
      content: [
        "No sound from speakers even at max volume.",
        "Distorted or crackling audio.",
        "Microphone doesn’t detect voice input.",
        "Headphone jack works but internal audio doesn’t."
      ]
    },
    {
      heading: "Replacement Process",
      content: [
        "Open laptop and disconnect mic/speaker modules.",
        "Clean surrounding mesh or dust blockages.",
        "Install new mic and speaker components.",
        "Test sound clarity and volume after repair."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 180 - RM 500", "Time: 1 - 2 hours"]
    }
  ]
},
{
  service_type: "replacement",
  service: "WiFi & Charging Port",
  hash: "wifi-charging-port",
  title: "Laptop WiFi & Charging Port Replacement | Fix It Jerry",
  meta_description:
    "Laptop can’t charge or keeps disconnecting from WiFi? We replace damaged charging ports and WiFi cards for stable performance.",
  sections: [
    {
      heading: "When to Replace These Components",
      content: [
        "Charger only works at certain angles.",
        "Laptop doesn’t detect charger or charges slowly.",
        "WiFi disconnects often or doesn’t detect networks.",
        "Broken or loose charging jack."
      ]
    },
    {
      heading: "Our Repair Steps",
      content: [
        "Inspect charging and WiFi circuitry.",
        "Replace faulty DC jack or USB-C charging port.",
        "Swap out damaged WiFi module or antenna cable.",
        "Conduct power and connectivity tests post-repair."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 200 - RM 650", "Time: 2 - 3 hours"]
    }
  ]
},
{
  service_type: "replacement",
  service: "Camera",
  hash: "camera",
  title: "Laptop Camera Replacement | Fix It Jerry",
  meta_description:
    "Blurry or non-functional webcam? Fix It Jerry replaces faulty laptop cameras for clear video calls and meetings.",
  sections: [
    {
      heading: "When to Replace Your Laptop Camera",
      content: [
        "Camera not detected by the system.",
        "Blurry, pixelated, or dark image.",
        "Camera light turns on but no image appears.",
        "Loose or broken webcam module."
      ]
    },
    {
      heading: "Our Replacement Process",
      content: [
        "Diagnose camera connectivity and driver status.",
        "Disassemble bezel and remove old camera module.",
        "Install new high-res compatible webcam.",
        "Test with video call apps and adjust focus if needed."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 150 - RM 450", "Time: 1 - 2 hours"]
    }
  ]
},
////////  UPGRADE //////////
{
  service_type: "upgrade",
  service: "Storage/SSD Upgrade",
  hash: "storage-upgrade",
  title: "Laptop SSD & Storage Upgrade | Fix It Jerry",
  meta_description:
    "Running out of space or experiencing slow speeds? We upgrade your laptop’s SSD or hard drive for faster performance and more storage.",
  sections: [
    {
      heading: "When You Need a Storage Upgrade",
      content: [
        "Laptop runs slow or takes long to boot.",
        "Insufficient space for apps and files.",
        "Frequent 'Disk Full' notifications.",
        "Hard drive clicking or showing errors."
      ]
    },
    {
      heading: "Upgrade Process",
      content: [
        "Assess compatibility and options (SATA/NVMe).",
        "Clone existing data (optional).",
        "Install new SSD/HDD with fresh thermal padding.",
        "Test speed and storage functionality."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 200 - RM 750", "Time: 1 - 2 hours"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "RAM Upgrade",
  hash: "ram-upgrade",
  title: "Laptop RAM Upgrade | Fix It Jerry",
  meta_description:
    "Is your laptop lagging or freezing? Upgrade your RAM for better multitasking and smoother performance.",
  sections: [
    {
      heading: "Why Upgrade RAM?",
      content: [
        "Apps take forever to open or switch.",
        "Frequent freezing or crashing.",
        "You work with design, video, or heavy multitasking.",
        "Laptop has only 4GB or 8GB of RAM."
      ]
    },
    {
      heading: "Upgrade Process",
      content: [
        "Determine max supported RAM and type.",
        "Install new RAM sticks with anti-static tools.",
        "Run memory diagnostics.",
        "Ensure stability under multitasking load."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 150 - RM 600", "Time: 30 mins - 1 hour"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "Installation and Reformat",
  hash: "installation-reformat",
  title: "Laptop OS & Software Installation | Fix It Jerry",
  meta_description:
    "Need a clean slate? We format and reinstall your OS, apps, and drivers to get your laptop running like new.",
  sections: [
    {
      heading: "When You Should Reformat",
      content: [
        "System is extremely slow or buggy.",
        "Virus infection or software corruption.",
        "You want a clean, fresh setup.",
        "Selling or repurposing the laptop."
      ]
    },
    {
      heading: "What’s Included",
      content: [
        "Backup important data (if required).",
        "Wipe and reinstall OS (Windows/macOS/Linux).",
        "Install drivers and basic apps.",
        "Performance tuning after setup."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 100 - RM 300", "Time: 1 - 2 hours"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "Heatsink Reapplication",
  hash: "heatsink-repaste",
  title: "Laptop Heatsink Reapplication | Fix It Jerry",
  meta_description:
    "Laptop overheating or fan constantly running? We clean and reapply thermal paste to restore cooling efficiency.",
  sections: [
    {
      heading: "Why Reapply Heatsink Paste?",
      content: [
        "Laptop gets hot quickly under normal use.",
        "Fan constantly spinning at high speed.",
        "Thermal paste dried out or degraded over time.",
        "Used for gaming or editing tasks."
      ]
    },
    {
      heading: "Service Includes",
      content: [
        "Disassemble CPU/GPU heatsink module.",
        "Clean off old thermal paste safely.",
        "Apply high-quality thermal compound.",
        "Reassemble and run temperature tests."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 120 - RM 300", "Time: 1 - 2 hours"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "General Servicing",
  hash: "general-servicing",
  title: "Laptop General Servicing | Fix It Jerry",
  meta_description:
    "Keep your laptop running smoothly. We provide full internal cleaning, diagnostics, and light tune-ups.",
  sections: [
    {
      heading: "What’s Included",
      content: [
        "Internal dust removal (fans, vents, ports).",
        "Thermal cleanup and fan inspection.",
        "Port and connection stability check.",
        "Full performance diagnostics report."
      ]
    },
    {
      heading: "When to Service",
      content: [
        "Laptop feels slow even with light usage.",
        "Heats up faster than usual.",
        "Hasn’t been serviced in 1+ years.",
        "Ports or buttons feel off."
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
  service: "Apple ID Bypass",
  hash: "apple-id-bypass",
  title: "MacBook Apple ID Bypass | Fix It Jerry",
  meta_description:
    "Locked out of your MacBook due to iCloud? We provide Apple ID bypass solutions for eligible models with proof of ownership.",
  sections: [
    {
      heading: "When You Might Need This",
      content: [
        "Forgot Apple ID password or can’t recover it.",
        "Bought a second-hand MacBook that’s locked.",
        "Stuck on iCloud activation screen.",
        "Can’t reset macOS due to Find My Mac lock."
      ]
    },
    {
      heading: "Our Approach",
      content: [
        "Verify proof of ownership (receipt, ID, or invoice).",
        "Check eligibility based on model and macOS version.",
        "Perform secure bypass or iCloud removal where permitted.",
        "Explain post-bypass limitations (if any)."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 300 - RM 1000", "Time: 2 - 5 days"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "Data Backup & Recovery",
  hash: "data-recovery",
  title: "Laptop Data Backup & Recovery | Fix It Jerry",
  meta_description:
    "Accidentally deleted files or can’t access your laptop? We recover lost data and help you back it up safely.",
  sections: [
    {
      heading: "When to Use This Service",
      content: [
        "Laptop is dead or won’t turn on.",
        "Accidentally deleted important files.",
        "Drive is clicking or showing read errors.",
        "Preparing to format or sell your laptop."
      ]
    },
    {
      heading: "How We Recover Your Data",
      content: [
        "Clone or image the failing drive (if possible).",
        "Use recovery tools to extract lost files.",
        "Back up to external drive or cloud.",
        "Encrypt and label recovered files neatly."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 300 - RM 1200", "Time: 2 hours – 3 days"]
    }
  ]
}

  ],
};

export { laptopItems };
