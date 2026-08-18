const ps5Items = {
  title: "PS5",
  imgSrc: "/images/services/ps5.webp",
  description:
    "Power supply replacement, fan replacement, heatsink reapplication, overheating fixes, and general servicing for PlayStation 5 consoles",
  services: [
    {
      service_type: "replacement",
      service: "Power Supply",
      hash: "ps5-power-supply",
      image: "/images/devices/ps5/power_supply.webp",
      popular: true,
      title: "PS5 Power Supply Replacement | Fix It Jerry",
      meta_description:
        "PS5 won't turn on or clicks and shuts off? We replace faulty PlayStation 5 power supply units (PSU) to get your console booting again.",
      sections: [
        {
          heading: "Signs of a Failing Power Supply",
          content: [
            "Console won't power on at all — no light, no fan.",
            "Powers on then instantly shuts down with a beep or click.",
            "Blinking blue or white light of death.",
            "Burning smell or buzzing from the power unit."
          ]
        },
        {
          heading: "Our Replacement Process",
          content: [
            "Diagnose whether it's the PSU, board, or wall power.",
            "Open the console and remove the faulty power supply.",
            "Install a matched PS5 PSU (disc or digital edition).",
            "Stress-test boot, load, and gameplay before return."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 250 - RM 500", "Time: 1 - 3 days"]
        }
      ]
    },
    {
      service_type: "replacement",
      service: "Fan",
      hash: "ps5-fan",
      image: "/images/devices/ps5/fan.webp",
      popular: true,
      title: "PS5 Fan Replacement | Fix It Jerry",
      meta_description:
        "PS5 loud, whirring, or overheating? We replace noisy and failing PlayStation 5 cooling fans to bring temperatures and noise back down.",
      sections: [
        {
          heading: "Signs Your Fan Needs Replacing",
          content: [
            "Loud jet-engine noise even in menus.",
            "Console runs hot or shuts off during gameplay.",
            "Grinding, rattling, or clicking from the fan.",
            "Fan spins irregularly or not at all."
          ]
        },
        {
          heading: "Our Replacement Process",
          content: [
            "Open and inspect the fan, vents, and airflow path.",
            "Remove the worn fan and clear dust buildup.",
            "Install a compatible PS5 cooling fan.",
            "Verify temperatures and noise under load after repair."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 180 - RM 350", "Time: 1 - 2 days"]
        }
      ]
    },
    {
      service_type: "repair",
      service: "Heatsink Reapplication",
      hash: "ps5-heatsink",
      image: "/images/devices/ps5/heatsink.webp",
      popular: false,
      title: "PS5 Heatsink & Thermal Paste Reapplication | Fix It Jerry",
      meta_description:
        "PS5 overheating or shutting down mid-game? We reapply liquid metal / thermal paste and reseat the heatsink to fix PlayStation 5 thermal throttling.",
      sections: [
        {
          heading: "When You Need Heatsink Service",
          content: [
            "Console overheats and shuts down during long sessions.",
            "Performance drops or games stutter as it heats up.",
            "Older console with dried-out thermal paste.",
            "Overheating warning appears on screen."
          ]
        },
        {
          heading: "Our Reapplication Process",
          content: [
            "Disassemble and remove the old, dried thermal compound.",
            "Clean the APU and reapply fresh liquid metal / paste.",
            "Reseat the heatsink and replace worn thermal pads.",
            "Run a thermal stress test to confirm stable temps."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 150 - RM 300", "Time: 1 - 2 days"]
        }
      ]
    }
  ]
};

export { ps5Items };
