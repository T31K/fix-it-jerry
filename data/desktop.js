const desktopItems = {
  title: "Desktop",
  imgSrc: "/images/services/desktop.webp",
  description:
    "Water damage, power supply repair, GPU repair, fan replacement, storage upgrade, custom PC build, OS installation, heatsink reapplication, general servicing",
  services: [
    {
  service_type: "repair",
  service: "Water damage / CPU Damage",
  hash: "water-damage",
  popular: true,
  title: "Desktop Water Damage & CPU Repair | Fix It Jerry",
  meta_description:
    "Spilled water or CPU failure? We repair water-damaged desktops and replace affected components to get your PC back online.",
  sections: [
    {
      heading: "When This Happens",
      content: [
        "No power after spill near the case.",
        "Visible corrosion or burnt marks on motherboard.",
        "Fans spin but no display or boot.",
        "System shuts down or restarts randomly."
      ]
    },
    {
      heading: "Repair Process",
      content: [
        "Disassemble and inspect all internal parts.",
        "Ultrasonic motherboard cleaning.",
        "Test and replace damaged CPU or VRM components.",
        "Stability and thermal performance testing."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 300 - RM 1000", "Time: 3 - 7 days"]
    }
  ]
},
{
  service_type: "replacement",
  service: "Power Supply",
  hash: "power-supply",
  title: "Desktop Power Supply Replacement | Fix It Jerry",
  meta_description:
    "PC not turning on or shutting off randomly? We replace faulty desktop power supply units (PSU) with high-quality replacements.",
  sections: [
    {
      heading: "Symptoms of Power Supply Failure",
      content: [
        "Desktop won’t power on.",
        "Random shutdowns or restarts.",
        "Burning smell or no fan spin in PSU.",
        "RGB lights flicker or motherboard doesn’t light up."
      ]
    },
    {
      heading: "Our Replacement Process",
      content: [
        "Test power rails and voltage outputs.",
        "Remove faulty PSU with care.",
        "Install new PSU (modular/non-modular).",
        "Reconnect and test all cables + boot stability."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 200 - RM 650", "Time: 1 - 2 hours"]
    }
  ]
},
{
  service_type: "replacement",
  service: "WiFi Card",
  hash: "wifi-card",
  title: "Desktop WiFi Card Replacement | Fix It Jerry",
  meta_description:
    "No internet or weak signal on your PC? We replace damaged or outdated desktop WiFi cards for strong, stable wireless connectivity.",
  sections: [
    {
      heading: "When to Replace Your WiFi Card",
      content: [
        "PC can’t detect WiFi networks.",
        "Intermittent disconnections.",
        "Very slow speeds despite fast internet plan.",
        "Bluetooth not working (combo cards)."
      ]
    },
    {
      heading: "Our Process",
      content: [
        "Remove old PCIe or M.2 WiFi module.",
        "Install high-speed dual-band or WiFi 6 card.",
        "Reconnect antennas (internal or external).",
        "Speed and signal strength testing post-installation."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 150 - RM 400", "Time: 30 mins – 1 hour"]
    }
  ]
},
{
  service_type: "repair",
  service: "GPU",
  hash: "gpu",
  title: "Desktop GPU Repair & Replacement | Fix It Jerry",
  meta_description:
    "Artifacts, crashes, or no display? We diagnose and fix GPU issues or replace it with a compatible graphics card.",
  sections: [
    {
      heading: "Common GPU Problems",
      content: [
        "No display or black screen at boot.",
        "Artifacts or glitches during games.",
        "Driver crashes or BSODs.",
        "GPU fans spin but nothing appears."
      ]
    },
    {
      heading: "Our Repair & Replacement Process",
      content: [
        "Thermal paste cleanup and repaste.",
        "Test GPU with benchmarking tools.",
        "Reball or reflow GPU core (if fixable).",
        "Replace card if beyond repair (upgrade options available)."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 350 - RM 1200", "Time: 2 - 5 days"]
    }
  ]
},
{
  service_type: "replacement",
  service: "Fan",
  hash: "fan",
  title: "Desktop Fan Replacement | Fix It Jerry",
  meta_description:
    "Noisy or dead fans in your PC? We replace faulty case, CPU, or GPU fans to keep your desktop cool and quiet.",
  sections: [
    {
      heading: "When to Replace a Desktop Fan",
      content: [
        "Fan not spinning or making clicking sounds.",
        "Overheating during normal tasks.",
        "High noise even at idle.",
        "BIOS or software shows RPM = 0."
      ]
    },
    {
      heading: "Replacement Process",
      content: [
        "Identify failing fan(s) — case, CPU, GPU, or PSU.",
        "Unplug and remove the damaged unit.",
        "Install new quiet/high-performance fan.",
        "Run temp and airflow tests after installation."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 80 - RM 300", "Time: 30 mins – 1 hour"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "Storage/SSD Upgrade",
  hash: "desktop-storage-upgrade",
  title: "Desktop SSD & Storage Upgrade | Fix It Jerry",
  meta_description:
    "Running out of storage or want faster load times? We upgrade desktop SSDs and hard drives for better performance and capacity.",
  sections: [
    {
      heading: "When to Upgrade",
      content: [
        "Boot time is very slow.",
        "Frequent lag when opening apps or files.",
        "Insufficient space for games or work files.",
        "Planning to clone OS to a new SSD."
      ]
    },
    {
      heading: "Upgrade Includes",
      content: [
        "Install new SATA/NVMe SSD or HDD.",
        "Clone existing data (optional).",
        "Fresh OS install if requested.",
        "Test for speed and stability post-upgrade."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 180 - RM 650", "Time: 1 - 2 hours"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "RAM Upgrade",
  hash: "desktop-ram-upgrade",
  title: "Desktop RAM Upgrade | Fix It Jerry",
  meta_description:
    "Need better multitasking or gaming performance? We upgrade desktop RAM with high-speed compatible modules.",
  sections: [
    {
      heading: "When to Upgrade RAM",
      content: [
        "Lag during multitasking or heavy apps.",
        "Browser tabs freeze or crash.",
        "You want to game or edit smoother.",
        "Old or mismatched RAM speeds."
      ]
    },
    {
      heading: "Upgrade Process",
      content: [
        "Identify RAM type and max supported capacity.",
        "Install matching high-speed DDR3/DDR4/DDR5 RAM.",
        "Run memory tests and stress benchmarks.",
        "Ensure full compatibility with motherboard."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 150 - RM 600", "Time: 30 mins – 1 hour"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "Installation and Reformat",
  hash: "desktop-installation-reformat",
  title: "Desktop OS Installation & Reformat | Fix It Jerry",
  meta_description:
    "Give your desktop a clean start. We format and reinstall your OS, drivers, and basic apps for smooth performance.",
  sections: [
    {
      heading: "Why You Might Need This",
      content: [
        "PC has slowed down significantly.",
        "Virus or malware infection.",
        "Switching to a new OS or fresh install.",
        "Too much bloatware or corrupted files."
      ]
    },
    {
      heading: "What We Do",
      content: [
        "Backup important files (if needed).",
        "Wipe existing partitions and reformat drive.",
        "Install OS (Windows, Linux, etc.) + drivers.",
        "Optional software and performance tuning."
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
  hash: "desktop-heatsink-repaste",
  title: "Desktop Heatsink & Thermal Paste Reapplication | Fix It Jerry",
  meta_description:
    "Overheating issues or high fan noise? We clean and reapply thermal paste to your CPU/GPU heatsinks for cooler and quieter performance.",
  sections: [
    {
      heading: "When to Reapply Thermal Paste",
      content: [
        "CPU or GPU temperatures are abnormally high.",
        "Fan always running at full speed.",
        "Thermal paste hasn’t been replaced in 2+ years.",
        "After a major component upgrade."
      ]
    },
    {
      heading: "What’s Included",
      content: [
        "Disassemble CPU/GPU cooling components.",
        "Clean off old dried paste carefully.",
        "Apply fresh premium thermal paste.",
        "Test temperatures after full reassembly."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 100 - RM 300", "Time: 1 hour"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "General Servicing",
  hash: "desktop-general-servicing",
  title: "Desktop General Servicing | Fix It Jerry",
  meta_description:
    "Dusty or noisy desktop? We clean your PC inside-out, run full diagnostics, and make sure everything is running in top shape.",
  sections: [
    {
      heading: "What’s Included",
      content: [
        "Remove internal dust from fans and heatsinks.",
        "Clean exterior, USB ports, and vents.",
        "Re-seat RAM, GPU, and connectors.",
        "Run full system diagnostics & performance check."
      ]
    },
    {
      heading: "Best Time to Service",
      content: [
        "Haven’t cleaned it in over a year.",
        "Fan noise or heat buildup.",
        "Slow performance without hardware issues.",
        "Before reselling or upgrading."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 100 - RM 200", "Time: 1 - 2 hours"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "Data Backup & Recovery",
  hash: "desktop-data-recovery",
  title: "Desktop Data Backup & Recovery | Fix It Jerry",
  meta_description:
    "Lost files or failed hard drive? We recover your data and back it up safely to external drives or cloud.",
  sections: [
    {
      heading: "When You Need This",
      content: [
        "Accidentally deleted important files.",
        "Drive not detected or makes clicking sounds.",
        "Need to back up before formatting or upgrading.",
        "Blue screen or boot errors preventing access."
      ]
    },
    {
      heading: "Our Recovery Process",
      content: [
        "Clone or image failing drives (if needed).",
        "Use recovery software and hardware tools.",
        "Save data to a new drive or USB backup.",
        "Label, organize, and verify recovered files."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 300 - RM 1200", "Time: 2 hours – 3 days"]
    }
  ]
},
{
  service_type: "upgrade",
  service: "Custom Build Assembly",
  hash: "custom-build-assembly",
  title: "Custom PC Build Assembly | Fix It Jerry",
  meta_description:
    "Bought all your PC parts but need help building it? We assemble and optimize your custom desktop build professionally.",
  sections: [
    {
      heading: "Why Choose Us",
      content: [
        "You have all the parts but don’t want to risk mistakes.",
        "Want optimal airflow and cable management.",
        "Need BIOS setup and OS pre-installation.",
        "Peace of mind with build warranty and stress testing."
      ]
    },
    {
      heading: "Build Process",
      content: [
        "Unbox and verify all components.",
        "Install motherboard, CPU, RAM, GPU, PSU, and drives.",
        "Cable management and airflow setup.",
        "Post-build BIOS config, OS install (if needed), and benchmarks."
      ]
    },
    {
      heading: "Cost & Turnaround",
      content: ["Cost: RM 250 - RM 800", "Time: 1 - 2 days"]
    }
  ]
}

  ]
};

export { desktopItems };
