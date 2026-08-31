const speakerItems = {
  title: "Speaker",
  imgSrc: "/images/services/speaker.webp",
  description:
    "Battery replacement, speaker driver replacement, sound fixes, and general servicing for Bluetooth and portable speakers",
  services: [
    {
      service_type: "replacement",
      service: "Battery",
      hash: "speaker-battery",
      image: "/images/devices/speaker/battery.webp",
      popular: true,
      title: "Speaker Battery Replacement | Fix It Jerry",
      meta_description:
        "Bluetooth speaker dying fast or won't hold a charge? We replace worn-out speaker batteries to restore full playtime on portable and wireless speakers.",
      sections: [
        {
          heading: "Signs Your Battery Needs Replacing",
          content: [
            "Playtime has dropped to a fraction of what it was.",
            "Speaker only works while plugged into power.",
            "Won't charge or won't power on at all.",
            "Battery swelling pushing the casing apart."
          ]
        },
        {
          heading: "Our Replacement Process",
          content: [
            "Test charge and drain to confirm battery wear.",
            "Open the enclosure and remove the old cell.",
            "Install a matched replacement battery.",
            "Reassemble and verify full playtime and charging."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 100 - RM 250", "Time: 1 - 3 days"]
        }
      ]
    },
    {
      service_type: "replacement",
      service: "Speaker Driver",
      hash: "speaker-driver",
      image: "/images/devices/speaker/driver.webp",
      popular: false,
      title: "Speaker Driver Replacement | Fix It Jerry",
      meta_description:
        "Crackling, distorted, or silent sound? We replace blown speaker drivers on Bluetooth and portable speakers to bring back clear, full audio.",
      sections: [
        {
          heading: "Signs Your Driver Needs Replacing",
          content: [
            "Crackling, buzzing, or distorted sound at any volume.",
            "One side or channel has gone silent.",
            "Rattling or blown-out bass on louder tracks.",
            "No audio despite a working charge and connection."
          ]
        },
        {
          heading: "Our Replacement Process",
          content: [
            "Test each driver and channel to isolate the fault.",
            "Open the enclosure and remove the damaged driver.",
            "Fit a compatible replacement speaker driver.",
            "Check clarity, balance, and volume before return."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 120 - RM 300", "Time: 1 - 3 days"]
        }
      ]
    }
  ]
};

export { speakerItems };
