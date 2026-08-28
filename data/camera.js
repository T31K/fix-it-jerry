const cameraItems = {
  title: "Camera",
  imgSrc: "/images/services/camera.webp",
  description:
    "LCD display replacement, SD card slot repair, screen fixes, and general servicing for DSLR, mirrorless, and compact digital cameras",
  services: [
    {
      service_type: "replacement",
      service: "LCD Display",
      hash: "camera-lcd-display",
      image: "/images/devices/camera/lcd.webp",
      popular: true,
      title: "Camera LCD Display Replacement | Fix It Jerry",
      meta_description:
        "Cracked or dead camera screen? We replace faulty LCD displays on DSLR, mirrorless, and compact cameras so you can frame and review shots again.",
      sections: [
        {
          heading: "Signs Your LCD Needs Replacing",
          content: [
            "Cracked, scratched, or shattered rear screen.",
            "Black, white, or flickering display with no image.",
            "Lines, dead pixels, or discolouration on screen.",
            "Screen works but touch response has failed."
          ]
        },
        {
          heading: "Our Replacement Process",
          content: [
            "Inspect whether it's the LCD panel, ribbon, or mainboard.",
            "Open the body and disconnect the damaged display.",
            "Fit a compatible LCD assembly for your camera model.",
            "Test live view, playback, and menu display before return."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 150 - RM 400", "Time: 2 - 5 days"]
        }
      ]
    },
    {
      service_type: "repair",
      service: "SD Card Slot",
      hash: "camera-sd-card-slot",
      image: "/images/devices/camera/sd_card_slot.webp",
      popular: false,
      title: "Camera SD Card Slot Repair | Fix It Jerry",
      meta_description:
        "Camera won't read or save to the SD card? We repair and replace bent pins and faulty memory card slots on DSLR, mirrorless, and compact cameras.",
      sections: [
        {
          heading: "Signs of a Faulty Card Slot",
          content: [
            "\"No card\" or \"card error\" even with a working SD card.",
            "Card won't lock in or keeps ejecting.",
            "Bent, broken, or pushed-in pins inside the slot.",
            "Intermittent read/write failures while shooting."
          ]
        },
        {
          heading: "Our Repair Process",
          content: [
            "Test with known-good cards to confirm the slot is at fault.",
            "Open the body and inspect the slot pins and solder joints.",
            "Reflow, re-pin, or replace the card slot as needed.",
            "Verify read, write, and lock with multiple cards."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 120 - RM 300", "Time: 2 - 4 days"]
        }
      ]
    }
  ]
};

export { cameraItems };
