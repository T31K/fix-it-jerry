const ebookItems = {
  title: "Ebook",
  imgSrc: "/images/services/ebook.webp",
  description:
    "Battery replacement, LCD display replacement, charging port repair, general servicing for Kindle, Kobo, and other e-readers",
  services: [
    {
      service_type: "replacement",
      service: "Battery",
      hash: "ebook-battery",
      image: "/images/devices/ebook/battery.webp",
      popular: true,
      title: "Ebook Reader Battery Replacement | Fix It Jerry",
      meta_description:
        "Kindle or Kobo not holding charge? We replace worn-out e-reader batteries so your ebook lasts weeks on a single charge again.",
      sections: [
        {
          heading: "Signs of Battery Failure",
          content: [
            "Battery drains within hours instead of weeks.",
            "Device won't power on or keeps restarting.",
            "Won't charge past a certain percentage.",
            "Battery swelling pushing against the screen or back cover."
          ]
        },
        {
          heading: "Our Replacement Process",
          content: [
            "Carefully open the e-reader without cracking the bezel.",
            "Remove the old or swollen battery safely.",
            "Install a new matched-capacity battery.",
            "Test full charge cycle and standby drain before return."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 120 - RM 250", "Time: 1 - 2 days"]
        }
      ]
    },
    {
      service_type: "replacement",
      service: "LCD Display",
      hash: "ebook-lcd-display",
      image: "/images/devices/ebook/lcd.webp",
      popular: true,
      title: "Ebook Reader Screen Replacement | Fix It Jerry",
      meta_description:
        "Cracked or ghosting e-reader screen? We replace Kindle and Kobo E Ink displays to restore a clean, sharp reading surface.",
      sections: [
        {
          heading: "Signs You Need a Screen Replacement",
          content: [
            "Cracked, shattered, or spider-webbed E Ink panel.",
            "Black ink blotches, faded lines, or dead columns.",
            "Ghosting or frozen text that won't refresh.",
            "Screen stays blank while the device still charges."
          ]
        },
        {
          heading: "Our Replacement Process",
          content: [
            "Diagnose whether it's the display panel or the mainboard.",
            "Source a compatible E Ink panel for your model.",
            "Replace the display and reseal the bezel cleanly.",
            "Test touch, front-light, and refresh across full pages."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 180 - RM 400", "Time: 2 - 4 days"]
        }
      ]
    },
    {
      service_type: "replacement",
      service: "Charging Port",
      hash: "ebook-charging-port",
      image: "/images/devices/ebook/charging_port.webp",
      popular: false,
      title: "Ebook Reader Charging Port Repair | Fix It Jerry",
      meta_description:
        "E-reader won't charge or the cable is loose? We repair and replace worn micro-USB and USB-C charging ports on Kindle, Kobo, and more.",
      sections: [
        {
          heading: "Charging Port Symptoms",
          content: [
            "Cable has to be held at an angle to charge.",
            "Port feels loose, wobbly, or clogged with lint.",
            "Device only charges intermittently or not at all.",
            "Bent pins or visible damage inside the port."
          ]
        },
        {
          heading: "Our Repair Process",
          content: [
            "Inspect the port and rule out a faulty cable or battery.",
            "Desolder and replace the damaged charging port.",
            "Clean and reflow the surrounding board contacts.",
            "Verify a stable charge and firm cable fit before return."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 100 - RM 220", "Time: 1 - 2 days"]
        }
      ]
    }
  ]
};

export { ebookItems };
