const luggageItems = {
  title: "Luggage",
  imgSrc: "/images/services/luggage.webp",
  description:
    "Wheel replacement, handle repair, telescopic handle replacement, and general servicing for hard-shell and soft-shell luggage and suitcases",
  services: [
    {
      service_type: "replacement",
      service: "Wheels",
      hash: "luggage-wheels",
      image: "/images/devices/luggage/wheels.webp",
      popular: true,
      title: "Luggage Wheel Replacement | Fix It Jerry",
      meta_description:
        "Suitcase wheel cracked, jammed, or worn flat? We replace luggage wheels on hard-shell and soft-shell cases so your bag rolls smoothly again.",
      sections: [
        {
          heading: "Signs Your Wheels Need Replacing",
          content: [
            "Wheel is cracked, flat-spotted, or worn down.",
            "Bag drags, wobbles, or pulls to one side.",
            "Wheel won't spin or is jammed with debris.",
            "A wheel has snapped off entirely."
          ]
        },
        {
          heading: "Our Replacement Process",
          content: [
            "Identify the wheel type and mount for your case.",
            "Remove the damaged wheel and axle.",
            "Fit a matched replacement wheel set.",
            "Test roll and spin on all wheels before return."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 80 - RM 200", "Time: 1 - 3 days"]
        }
      ]
    },
    {
      service_type: "repair",
      service: "Handle",
      hash: "luggage-handle",
      image: "/images/devices/luggage/handle.webp",
      popular: false,
      title: "Luggage Handle Repair | Fix It Jerry",
      meta_description:
        "Telescopic handle stuck, wobbly, or won't retract? We repair and replace luggage handles on hard-shell and soft-shell suitcases.",
      sections: [
        {
          heading: "Signs Your Handle Needs Repair",
          content: [
            "Telescopic handle won't extend or retract.",
            "Handle is stuck, bent, or wobbles loosely.",
            "Release button jammed or unresponsive.",
            "Grip or top handle has cracked or torn off."
          ]
        },
        {
          heading: "Our Repair Process",
          content: [
            "Inspect the handle mechanism and mounting points.",
            "Straighten, re-seat, or replace the telescopic tubes.",
            "Fit a compatible handle assembly where needed.",
            "Test full extension, retraction, and locking before return."
          ]
        },
        {
          heading: "Cost & Turnaround",
          content: ["Cost: RM 90 - RM 250", "Time: 1 - 3 days"]
        }
      ]
    }
  ]
};

export { luggageItems };
