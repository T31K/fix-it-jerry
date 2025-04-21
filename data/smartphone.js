const smartphoneItems = {
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
  }

export { smartphoneItems };
