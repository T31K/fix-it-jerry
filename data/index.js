const reviews = [
  {
    content:
      "Nice and effective service provided by them. The owner is responsible and trustworthy 👍 He fixed my MSI laptop screen with reasonable price cause i accidentally dropped it and the screen cracked.",
    name: "Xin Yi",
    img_link:
      "https://scontent.fkul2-3.fna.fbcdn.net/v/t39.30808-1/283523950_1066851904206195_8578689390276874189_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=JMIgtnwIBc4Q7kNvgHMVBDd&_nc_zt=24&_nc_ht=scontent.fkul2-3.fna&_nc_gid=A9vZVfFyjYLKIVJcCpRA1hR&oh=00_AYDRSjGz-bVI5-jLIJ3wSxeY0p1QpScD2g_p6sPOxKy2Jw&oe=6786858B",
    review_link: "https://www.facebook.com/share/p/1AxyaWyCs5/",
  },
  {
    content:
      "Excellent customer service. The staff was very friendly and helpful, and they went above and beyond to ensure my satisfaction. I highly recommend their services to anyone in need of repairs.",
    name: "Renju Karukayil Abraham",
    img_link:
      "https://scontent.fkul2-4.fna.fbcdn.net/v/t39.30808-1/468873877_10162625980114122_1353397557366678940_n.jpg?stp=c0.7.200.200a_cp0_dst-jpg_s80x80_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=BBtoGR_4JUYQ7kNvgEIUPoM&_nc_zt=24&_nc_ht=scontent.fkul2-4.fna&_nc_gid=ALeM6T8hRjfsA6rrmHuWD3y&oh=00_AYCS_ywcx1-gy1eNR6DVocGyM0R_hXd0knVTNHpuUlx2ng&oe=678693B4",
    review_link: "https://www.facebook.com/share/p/1YB3KjWADT/",
  },
  {
    content:
      "Fortunately for me, they live nearby so dropping off / delivery of my Macbook Pro was super convenient. Felt very assured from the constant communication throughout the process, and happy to say that my Mac came back in a very good condition! FIJ would be my go-to for any repairs now 🙂",
    name: "Sara Jennavieve Chew ",
    img_link:
      "https://scontent.fkul2-3.fna.fbcdn.net/v/t39.30808-1/468086310_10230892929820385_5002660105252129809_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=AbuALpSXHzUQ7kNvgFfYIDf&_nc_zt=24&_nc_ht=scontent.fkul2-3.fna&_nc_gid=ATochNGBHTcPBiuemgkwVFp&oh=00_AYD3HXyuigFuTPUgVvFrTQ3Sd6QW9Sdsla8GS3ayzUWR-g&oe=67869D74",
    review_link: "https://www.facebook.com/share/p/14pNhE8zSq4/",
  },
  // {
  //   content:
  //     "Having any problem with Apple product is a nightmare because of its  ecosystem and then the cost associsted with repair. It does comes with a price. So, my daughter’s Ipad went dead, unexpectedly, fully charged, turned off in morning and daughter came back from school, it wont turn on. And so showed it to Dr i device and as expected it was diagnosed with a motherboard issue and almost 40% the price of new one. So , i was thinking to get my daughter a new one, I remembered an i device repair expert in DPC. So i reached out to him, I thot he left dpc since I couldnt get reply on his Fb messenger. I checked again on dpc group, only to find its now a FB page Fix it jerry. and his clients have grown. So o messeged the business page , handed over ipad, in 1 day told me wat the actual issue was. Veryyyyy competitve price. And much better timeline. Got it yesterday evening. And it works fine , daughter is happy, we are happy. Thanks Jerry for your help. Will always recommend your services.",
  //   name: "音楽音楽 ",
  //   img_link:
  //     "https://scontent.fkul2-5.fna.fbcdn.net/v/t39.30808-1/262755500_10165843363690223_7321233469272889541_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=oJVqTazNZVAQ7kNvgFFswuE&_nc_zt=24&_nc_ht=scontent.fkul2-5.fna&_nc_gid=ARpvQZWRV_mDrHbyFwGmY9p&oh=00_AYAaZWS5wIr1cvIXmbir8EXXrpuCG0Jr4MB3eP-PwuffOA&oe=678690DB",
  //   review_link: "https://www.facebook.com/share/p/18kR6rafMZ/",
  // },
  {
    content:
      "My daughter accidentally dropped her iPhone into the bathtub, causing it to go into recovery mode. Got Khye Mun’s contact from a friend, dropped it off on a Monday, and voilà! Fixed and collected on Thursday with all the data intact 😅 Loved that he kept me updated about the progress as well, very friendly and easy to deal with. Thanks again Jerry!",
    name: "Soo Yin",
    img_link:
      "https://scontent.fkul2-5.fna.fbcdn.net/v/t39.30808-1/368301812_10167937434360370_2317861947656052898_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=d5s9CZY_4C8Q7kNvgH28sZJ&_nc_zt=24&_nc_ht=scontent.fkul2-5.fna&_nc_gid=Az260ojx-Gnyvq4F-CYtHDD&oh=00_AYCPU2sbW-SpxJpCwSdshmlS_w-Rpj9qDsEoejIKerpAug&oe=67868FB7",

    review_link: "https://www.facebook.com/share/p/186Y2SrSiT/",
  },
];

const features = [
  {
    title: "Affordable Prices",
    feature: "Quality repairs at affordable prices with no crazy markup",
  },
  {
    title: "Quick Turnaround",
    feature:
      "Efficient repairs to minimize downtime and get your phone back quickly",
  },
  {
    title: "Transparent Pricing",
    feature: "Competitive rates tailored for the local community",
  },
  {
    title: "Genuine Parts",
    feature: "Authentic components sourced from trusted local suppliers",
  },
  {
    title: "Comprehensive Services",
    feature: "Repair solutions for a wide range of phone issues",
  },
  {
    title: "Community Trust",
    feature: "A reputation built on reliability and customer satisfaction",
  },
];

const randomUsp = [
  "Fix water damage",
  "Replace power supply",
  "Repair network",
  "Fix audio IC",
  "Replace backlight",
  "Repair charging IC",
  "Fix touch IC",
  "Repair Face ID",
  "Replace charging port",
  "Install software",
  "Backup data",
  "Repair trackpad",
  "Fix hinge",
  "Replace Wi-Fi card",
  "Repair top casing",
  "Repair bottom casing",
  "Upgrade RAM",
  "Upgrade SSD",
  "Reapply heatsink",
];

const repairItems = [
  {
    title: "Smartphone",
    imgSrc: "/images/services/phone.webp",
    description:
      "Water damage, power supply, network & connectivity, audio IC, backlight IC, charging IC, touch IC, Face ID, Touch ID, LCD, touchscreen, battery, camera, back glass",
    services: [
      {
        service_type: "repair",
        service: "Water Damage",
        slug: "services/repair/smartphone/water-damage",
        title: "Smartphone Water Damage Repair | Fix It Jerry",
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
        service: "Power Supply",
        slug: "services/repair/smartphone/power-supply",
        title: "Smartphone Power Supply Repair | Fix It Jerry",
        meta_description:
          "Is your smartphone not turning on or shutting down randomly? Fix It Jerry provides expert power supply repair services. Get fast and affordable repairs today!",
        sections: [
          {
            heading: "What is a Power Supply Issue?",
            content:
              "The power supply unit in a smartphone regulates and distributes power to all components. If it's faulty, your phone may not charge, turn on, or may shut down unexpectedly.",
          },
          {
            heading: "Common Issues with Power Supply Failure",
            content: [
              "Phone does not turn on at all.",
              "Random shutdowns or restarts.",
              "Overheating while charging or using the phone.",
              "Battery drains quickly despite full charge.",
              "Phone only turns on when plugged into a charger.",
              "Charging port feels loose or unresponsive.",
            ],
          },
          {
            heading: "What to Do If Your Phone Has Power Supply Issues",
            content: [
              "Try using a different charger and cable to rule out accessories.",
              "Perform a hard reset to check if it’s a software issue.",
              "Check the charging port for dust or debris and clean it gently.",
              "If the phone still won’t turn on, seek professional repair to prevent further damage.",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs Power Supply Issues",
            content: [
              "Component-Level Diagnosis – Checking the motherboard and power ICs for faults.",
              "Charging Port Repair or Replacement – Fixing loose or damaged charging ports.",
              "Battery Connector & Circuit Repair – Ensuring power is properly delivered to components.",
              "Power IC Replacement – Replacing faulty power management chips if necessary.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 250 - RM 900", "Turnaround Time: 1-2 days."],
          },
        ],
      },
      {
        service_type: "repair",
        service: "Network Issue",
        slug: "services/repair/smartphone/network-issue",
        title: "Smartphone Network Issue Repair | Fix It Jerry",
        meta_description:
          "Experiencing no signal, weak network, or dropped calls? Fix It Jerry offers expert smartphone network issue repair. Get fast and reliable service today!",
        sections: [
          {
            heading: "What are Network Issues?",
            content:
              "Network issues can arise from faulty hardware, software bugs, or SIM-related problems. A malfunctioning Baseband IC, damaged antennas, or misconfigured settings can lead to poor or no network reception.",
          },
          {
            heading: "Common Network Problems in Smartphones",
            content: [
              "No service or SIM card not detected.",
              "Weak signal even in areas with strong network coverage.",
              "Frequent call drops or poor call quality.",
              "Wi-Fi or Bluetooth won't turn on or keeps disconnecting.",
              "Cannot connect to mobile data (4G/5G not working).",
              "Airplane mode stuck or network unavailable error.",
            ],
          },
          {
            heading: "What to Do If Your Phone Has Network Issues",
            content: [
              "Restart your phone to refresh network connections.",
              "Toggle Airplane mode on and off to reset the network.",
              "Remove and reinsert the SIM card to check for connection issues.",
              "Check if the issue persists with a different SIM card.",
              "Update your phone’s software to fix potential bugs.",
              "If the problem persists, seek professional diagnosis and repair.",
            ],
          },
          {
            heading: "How Fix It Jerry Repairs Network Issues",
            content: [
              "Baseband IC Repair – Fixing or replacing faulty network processing chips.",
              "SIM Card Slot Repair – Resolving loose or broken SIM connectors.",
              "Antenna Circuit Fix – Checking and replacing damaged antennas for better signal strength.",
              "Firmware & Software Troubleshooting – Reflashing corrupted baseband software to restore connectivity.",
            ],
          },
          {
            heading: "Repair Cost & Turnaround Time",
            content: ["Cost: RM 200 - RM 850", "Turnaround Time: 1-2 days."],
          },
        ],
      },

      {
        service_type: "replacement",
        service: "LCD",
        slug: "services/replacement/smartphone/lcd",
        title: "Smartphone LCD Screen Replacement | Fix It Jerry",
        meta_description:
          "Cracked or unresponsive screen? Fix It Jerry offers fast and affordable smartphone LCD screen replacement. High-quality parts and expert service!",
        sections: [
          {
            heading: "What is an LCD Screen Replacement?",
            content:
              "The LCD (Liquid Crystal Display) is responsible for displaying images on your phone. Damage to the LCD can cause dead pixels, lines, or a completely black screen, requiring a full replacement.",
          },
          {
            heading: "Common Issues That Require LCD Replacement",
            content: [
              "Cracked or shattered screen.",
              "Unresponsive touch or ghost touch.",
              "Black screen despite the phone being on.",
              "Vertical or horizontal lines on the display.",
              "Flickering or dim screen.",
              "Dead pixels or screen discoloration.",
            ],
          },
          {
            heading: "What to Do If Your LCD is Damaged",
            content: [
              "Avoid applying pressure on the screen to prevent further damage.",
              "Do not attempt to use the phone if the screen is unresponsive.",
              "If possible, back up important data before bringing it for repair.",
              "Seek professional LCD replacement to restore full functionality.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces LCD Screens",
            content: [
              "High-Quality LCD Replacement – We use only premium parts for durability.",
              "Screen Calibration – Ensuring touch responsiveness after replacement.",
              "Adhesive Sealing – Proper installation to prevent dust and moisture entry.",
              "Frame Alignment – Checking for any structural damage around the display.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: [
              "Cost: RM 300 - RM 1200 (Depending on phone model)",
              "Turnaround Time: 1-2 hours.",
            ],
          },
        ],
      },
      //  replacement
      {
        service_type: "replacement",
        service: "Touchscreen",
        slug: "services/replacement/smartphone/touchscreen",
        title: "Smartphone Touchscreen Replacement | Fix It Jerry",
        meta_description:
          "Is your phone's touchscreen unresponsive or erratic? Fix It Jerry offers professional smartphone touchscreen replacement. Fast service with high-quality parts!",
        sections: [
          {
            heading: "What is a Touchscreen Replacement?",
            content:
              "The touchscreen digitizer is responsible for detecting and processing touch inputs. If it's damaged or malfunctioning, your phone may not respond to touches correctly, requiring a replacement.",
          },
          {
            heading: "Common Issues That Require Touchscreen Replacement",
            content: [
              "Touchscreen is completely unresponsive.",
              "Ghost touch (phone registers touches without input).",
              "Delayed or laggy touch response.",
              "Cracked glass causing touch issues.",
              "Multi-touch not working properly.",
              "Dead spots where touch is not detected.",
            ],
          },
          {
            heading: "What to Do If Your Touchscreen is Not Working",
            content: [
              "Restart your phone to check if the issue is temporary.",
              "Ensure your screen is clean and free from moisture.",
              "Try using your phone without a screen protector.",
              "Check if touch works in safe mode (to rule out software issues).",
              "If none of these work, professional touchscreen replacement is needed.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces Touchscreens",
            content: [
              "Precision Touchscreen Removal – Safely detaching the damaged screen.",
              "Digitizer Calibration – Ensuring accurate and smooth touch response.",
              "High-Quality Replacement Parts – Using premium digitizers for durability.",
              "Sealing & Frame Alignment – Ensuring a perfect fit for long-lasting performance.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: [
              "Cost: RM 250 - RM 900 (Depending on phone model)",
              "Turnaround Time: 1-2 hours.",
            ],
          },
        ],
      },
      {
        service_type: "replacement",
        service: "Battery",
        slug: "services/replacement/smartphone/battery",
        title: "Smartphone Battery Replacement | Fix It Jerry",
        meta_description:
          "Is your phone’s battery draining fast or not charging properly? Fix It Jerry offers professional smartphone battery replacement with high-quality parts and quick service!",
        sections: [
          {
            heading: "What is a Battery Replacement?",
            content:
              "Over time, smartphone batteries degrade, leading to poor battery life, unexpected shutdowns, or charging issues. Replacing the battery restores optimal performance and extends your phone’s lifespan.",
          },
          {
            heading: "Common Signs You Need a Battery Replacement",
            content: [
              "Battery drains quickly even with minimal use.",
              "Phone shuts down unexpectedly, even when battery percentage is high.",
              "Swollen battery causing the back cover to lift.",
              "Phone gets excessively hot during use or charging.",
              "Battery percentage jumps up or down randomly.",
              "Phone only turns on when plugged in.",
            ],
          },
          {
            heading: "What to Do If Your Battery is Draining Fast",
            content: [
              "Check if any background apps are consuming excessive power.",
              "Enable power-saving mode to extend battery life temporarily.",
              "Try using a different charging cable and adapter.",
              "Avoid using the phone while charging to prevent overheating.",
              "If issues persist, a professional battery replacement is recommended.",
            ],
          },
          {
            heading: "How Fix It Jerry Replaces Your Battery",
            content: [
              "Battery Health Diagnosis – Checking battery cycles and overall condition.",
              "Safe Battery Removal – Carefully removing the old battery without damaging components.",
              "Premium Replacement Battery – Using high-quality, long-lasting batteries.",
              "Post-Replacement Testing – Ensuring battery performance and proper charging functionality.",
            ],
          },
          {
            heading: "Replacement Cost & Turnaround Time",
            content: [
              "Cost: RM 180 - RM 600 (Depending on phone model)",
              "Turnaround Time: 30 minutes - 1 hour.",
            ],
          },
        ],
      },
      // /////
      {
        service_type: "upgrade",
        service: "OS Upgrade",
        slug: "services/upgrade/smartphone/os-upgrade",
        title: "Smartphone OS Upgrade Service | Fix It Jerry",
        meta_description:
          "Looking to upgrade your phone’s operating system? Fix It Jerry offers professional OS upgrade services for better performance, security, and new features!",
        sections: [
          {
            heading: "What is an OS Upgrade?",
            content:
              "An OS (Operating System) upgrade updates your smartphone’s software to a newer version, providing better performance, improved security, and new features.",
          },
          {
            heading: "Common Reasons to Upgrade Your OS",
            content: [
              "Your current OS version is outdated and no longer supported.",
              "Newer apps require a more recent OS version.",
              "Security vulnerabilities in older software versions.",
              "Performance issues like lagging, freezing, or slow app launches.",
              "New features and improvements available in the latest OS.",
            ],
          },
          {
            heading: "What to Do Before Upgrading Your OS",
            content: [
              "Back up all important data to prevent data loss.",
              "Ensure your phone has at least 50% battery or is plugged in.",
              "Check if your phone model is compatible with the latest OS.",
              "Free up storage space for a smooth upgrade process.",
              "Verify internet connection stability for uninterrupted downloads.",
            ],
          },
          {
            heading: "How Fix It Jerry Performs OS Upgrades",
            content: [
              "Compatibility Check – Ensuring your device supports the latest OS version.",
              "Data Backup Assistance – Helping you back up important files before upgrading.",
              "OS Installation – Secure and error-free installation of the new software.",
              "Post-Upgrade Optimization – Configuring settings for smooth performance.",
            ],
          },
          {
            heading: "Upgrade Cost & Turnaround Time",
            content: [
              "Cost: RM 80 - RM 300 (Depending on phone model)",
              "Turnaround Time: 30 minutes - 2 hours.",
            ],
          },
        ],
      },

      {
        service_type: "upgrade",
        service: "Performance Boost",
        slug: "services/upgrade/smartphone/performance-boost",
        title: "Smartphone Performance Boost Service | Fix It Jerry",
        meta_description:
          "Is your smartphone running slow or lagging? Fix It Jerry offers professional performance boost services to enhance speed, optimize storage, and improve efficiency!",
        sections: [
          {
            heading: "What is a Performance Boost?",
            content:
              "A performance boost optimizes your smartphone’s speed and responsiveness by clearing unnecessary data, optimizing settings, and upgrading components if necessary.",
          },
          {
            heading: "Common Signs Your Phone Needs a Performance Boost",
            content: [
              "Apps take a long time to open or crash frequently.",
              "The phone lags or freezes during use.",
              "Insufficient storage warnings despite deleting files.",
              "Battery drains faster than usual due to background processes.",
              "Overheating while performing basic tasks.",
            ],
          },
          {
            heading: "What to Do Before a Performance Boost",
            content: [
              "Back up your important files to avoid data loss.",
              "Uninstall unused apps to free up storage.",
              "Check for pending software updates.",
              "Restart your phone to see if temporary lag issues resolve.",
              "If the problem persists, professional optimization is needed.",
            ],
          },
          {
            heading: "How Fix It Jerry Boosts Your Phone's Performance",
            content: [
              "Storage Optimization – Clearing junk files and unnecessary cache.",
              "Software Optimization – Adjusting system settings for speed improvement.",
              "Hardware Inspection – Checking battery, RAM, and processor performance.",
              "OS & App Updates – Ensuring all software is up-to-date and bug-free.",
            ],
          },
          {
            heading: "Upgrade Cost & Turnaround Time",
            content: [
              "Cost: RM 100 - RM 500 (Depending on optimization level)",
              "Turnaround Time: 1 - 3 hours.",
            ],
          },
        ],
      },
      {
        service_type: "upgrade",
        service: "Storage Upgrade",
        slug: "services/upgrade/smartphone/storage-upgrade",
        title: "Smartphone Storage Upgrade Service | Fix It Jerry",
        meta_description:
          "Running out of storage on your phone? Fix It Jerry offers professional smartphone storage upgrade services to expand capacity and improve performance!",
        sections: [
          {
            heading: "What is a Storage Upgrade?",
            content:
              "A storage upgrade increases your smartphone's internal storage capacity, allowing you to store more apps, photos, videos, and files without performance slowdowns.",
          },
          {
            heading: "Common Signs You Need a Storage Upgrade",
            content: [
              "Frequent 'Storage Almost Full' warnings.",
              "Cannot install new apps due to low space.",
              "Phone slows down due to limited storage availability.",
              "Camera unable to take photos/videos due to insufficient space.",
              "Difficulty saving files or downloading updates.",
            ],
          },
          {
            heading: "What to Do Before Upgrading Your Storage",
            content: [
              "Back up all important files to avoid data loss.",
              "Uninstall unused apps to free up storage.",
              "Move photos, videos, and large files to cloud storage or an SD card.",
              "Check if your device supports storage expansion via microSD card.",
              "If storage is still insufficient, a professional storage upgrade is needed.",
            ],
          },
          {
            heading: "How Fix It Jerry Upgrades Your Phone’s Storage",
            content: [
              "Storage Expansion – Installing a larger capacity storage chip (for supported models).",
              "MicroSD Card Installation – Setting up and optimizing external storage expansion.",
              "Data Transfer & Backup – Ensuring no data is lost during the upgrade process.",
              "Performance Optimization – Configuring new storage for smooth operation.",
            ],
          },
          {
            heading: "Upgrade Cost & Turnaround Time",
            content: [
              "Cost: RM 200 - RM 800 (Depending on upgrade option)",
              "Turnaround Time: 2 - 4 hours.",
            ],
          },
        ],
      },
      // ///// installation
      {
        service_type: "installation",
        service: "Software Install",
        slug: "services/installation/smartphone/software-install",
        title: "Smartphone Software Installation Service | Fix It Jerry",
        meta_description:
          "Need help installing software on your smartphone? Fix It Jerry offers professional software installation services, ensuring smooth setup and compatibility!",
        sections: [
          {
            heading: "What is a Software Installation Service?",
            content:
              "Software installation involves setting up and configuring essential apps, drivers, and system tools on your smartphone to ensure smooth functionality and security.",
          },
          {
            heading: "Common Reasons for Software Installation",
            content: [
              "Need help installing system or security updates.",
              "Apps not installing due to compatibility issues.",
              "Phone requires specialized software for work or personal use.",
              "Custom firmware or alternative OS installation required.",
              "Corrupt software preventing normal phone operation.",
            ],
          },
          {
            heading: "What to Do Before Installing New Software",
            content: [
              "Ensure your phone has sufficient storage space for the new software.",
              "Back up all important data in case of installation failure.",
              "Check if the software is compatible with your phone model and OS version.",
              "Make sure your phone is fully charged or plugged into a power source.",
              "If software issues persist, professional installation is recommended.",
            ],
          },
          {
            heading: "How Fix It Jerry Installs Software on Your Phone",
            content: [
              "Software Compatibility Check – Ensuring your phone meets system requirements.",
              "Installation & Setup – Secure installation of requested software or updates.",
              "Bug Fixes & Troubleshooting – Resolving any installation errors or conflicts.",
              "System Optimization – Configuring software for the best performance.",
            ],
          },
          {
            heading: "Installation Cost & Turnaround Time",
            content: [
              "Cost: RM 80 - RM 300 (Depending on software complexity)",
              "Turnaround Time: 30 minutes - 2 hours.",
            ],
          },
        ],
      },
      {
        service_type: "installation",
        service: "OS Setup",
        slug: "services/installation/smartphone/os-setup",
        title: "Smartphone OS Setup Service | Fix It Jerry",
        meta_description:
          "Need help setting up your phone’s operating system? Fix It Jerry provides expert OS setup services, ensuring a smooth and optimized installation for your device!",
        sections: [
          {
            heading: "What is OS Setup?",
            content:
              "Operating System (OS) setup involves installing and configuring your smartphone’s system software to ensure it functions optimally, securely, and efficiently.",
          },
          {
            heading: "Common Reasons for OS Setup",
            content: [
              "Setting up a new phone with the latest OS version.",
              "Reinstalling the OS after a factory reset.",
              "Fixing software corruption or boot issues.",
              "Switching to a different OS (e.g., custom ROM installation).",
              "Optimizing system performance and removing bloatware.",
            ],
          },
          {
            heading: "What to Do Before Setting Up a New OS",
            content: [
              "Back up all important data to prevent data loss.",
              "Ensure your phone is fully charged or plugged into a power source.",
              "Check if your phone model is compatible with the desired OS version.",
              "Make sure you have stable Wi-Fi for downloading system updates.",
              "If switching to a custom OS, verify its stability and features.",
            ],
          },
          {
            heading: "How Fix It Jerry Sets Up Your Phone’s OS",
            content: [
              "OS Installation – Installing the latest or preferred operating system version.",
              "System Configuration – Setting up language, region, and security preferences.",
              "Data Transfer & Backup – Ensuring seamless transition from the old OS.",
              "Performance Optimization – Removing unnecessary bloatware for a faster experience.",
            ],
          },
          {
            heading: "Setup Cost & Turnaround Time",
            content: [
              "Cost: RM 100 - RM 500 (Depending on OS complexity)",
              "Turnaround Time: 1 - 3 hours.",
            ],
          },
        ],
      },
      {
        service_type: "installation",
        service: "App Install",
        slug: "services/installation/smartphone/app-install",
        title: "Smartphone App Installation Service | Fix It Jerry",
        meta_description:
          "Need help installing apps on your smartphone? Fix It Jerry offers professional app installation services, ensuring smooth setup and compatibility!",
        sections: [
          {
            heading: "What is an App Installation Service?",
            content:
              "App installation involves downloading, setting up, and configuring applications on your smartphone to ensure they function correctly and securely.",
          },
          {
            heading: "Common Reasons for Professional App Installation",
            content: [
              "Difficulty installing apps due to compatibility issues.",
              "Need help setting up specialized or business applications.",
              "Google Play Store or App Store errors preventing downloads.",
              "Phone running out of storage or slow during installations.",
              "Custom app installations that require specific configurations.",
            ],
          },
          {
            heading: "What to Do Before Installing Apps",
            content: [
              "Ensure your phone has enough storage space for new apps.",
              "Check if your phone’s OS is updated for better compatibility.",
              "Verify that your internet connection is stable.",
              "Enable app installation from trusted sources only to prevent malware.",
              "If facing persistent issues, professional app installation is recommended.",
            ],
          },
          {
            heading: "How Fix It Jerry Installs Apps on Your Phone",
            content: [
              "App Compatibility Check – Ensuring apps work properly on your device.",
              "Installation & Setup – Secure download and proper configuration.",
              "Storage Optimization – Freeing up space if needed for new apps.",
              "Error Troubleshooting – Fixing any Play Store/App Store installation issues.",
            ],
          },
          {
            heading: "Installation Cost & Turnaround Time",
            content: [
              "Cost: RM 50 - RM 200 (Depending on app complexity)",
              "Turnaround Time: 15 minutes - 1 hour.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Airpods",
    imgSrc: "/images/services/airpods.webp",
    description:
      "Apple, Samsung, Microsoft, Lenovo, Huawei, Asus, Google, Acer, Dell, HP, Sony, Xiaomi, Alcatel, LG",
    services: [
      {
        service_type: "repair",
        service: "Connectivity repair",
        slug: "services/repair/airpods/connectivity-repair",
      },
      {
        service_type: "repair",
        service: "Battery service",
        slug: "services/repair/airpods/battery-service",
      },
      {
        service_type: "repair",
        service: "Firmware update",
        slug: "services/repair/airpods/firmware-update",
      },
      {
        service_type: "replacement",
        service: "Earbud replacement",
        slug: "services/replacement/airpods/earbud-replacement",
      },
      {
        service_type: "replacement",
        service: "Battery",
        slug: "services/replacement/airpods/battery",
      },
      {
        service_type: "replacement",
        service: "Charging case",
        slug: "services/replacement/airpods/charging-case",
      },
      {
        service_type: "upgrade",
        service: "Firmware upgrade",
        slug: "services/upgrade/airpods/firmware-upgrade",
      },
      {
        service_type: "upgrade",
        service: "Audio tuning",
        slug: "services/upgrade/airpods/audio-tuning",
      },
      {
        service_type: "upgrade",
        service: "Performance tweak",
        slug: "services/upgrade/airpods/performance-tweak",
      },
      {
        service_type: "installation",
        service: "Device pairing",
        slug: "services/installation/airpods/device-pairing",
      },
      {
        service_type: "installation",
        service: "App configuration",
        slug: "services/installation/airpods/app-configuration",
      },
      {
        service_type: "installation",
        service: "Software update",
        slug: "services/installation/airpods/software-update",
      },
    ],
  },
  {
    title: "iPod",
    imgSrc: "/images/services/ipod.webp",
    description:
      "Apple, Dell, HP, Lenovo, Asus, Acer, Microsoft, MSI, Razer, Samsung, LG, Toshiba, Huawei, Google, Alienware",
    services: [
      {
        service_type: "repair",
        service: "Screen repair",
        slug: "services/repair/ipod/screen-repair",
      },
      {
        service_type: "repair",
        service: "Battery fix",
        slug: "services/repair/ipod/battery-fix",
      },
      {
        service_type: "repair",
        service: "Button repair",
        slug: "services/repair/ipod/button-repair",
      },
      {
        service_type: "replacement",
        service: "LCD replacement",
        slug: "services/replacement/ipod/lcd-replacement",
      },
      {
        service_type: "replacement",
        service: "Battery replacement",
        slug: "services/replacement/ipod/battery-replacement",
      },
      {
        service_type: "replacement",
        service: "Speaker replacement",
        slug: "services/replacement/ipod/speaker-replacement",
      },
      {
        service_type: "upgrade",
        service: "Software upgrade",
        slug: "services/upgrade/ipod/software-upgrade",
      },
      {
        service_type: "upgrade",
        service: "Hardware upgrade",
        slug: "services/upgrade/ipod/hardware-upgrade",
      },
      {
        service_type: "upgrade",
        service: "Storage upgrade",
        slug: "services/upgrade/ipod/storage-upgrade",
      },
      {
        service_type: "installation",
        service: "OS install",
        slug: "services/installation/ipod/os-install",
      },
      {
        service_type: "installation",
        service: "Software setup",
        slug: "services/installation/ipod/software-setup",
      },
      {
        service_type: "installation",
        service: "App install",
        slug: "services/installation/ipod/app-install",
      },
    ],
  },
  {
    title: "Apple Watch",
    imgSrc: "/images/services/apple_watch.webp",
    description:
      "Operating System, Software Installation, Data Recovery, Virus and Malware Removal",
    services: [
      {
        service_type: "repair",
        service: "Sensor repair",
        slug: "services/repair/apple-watch/sensor-repair",
      },
      {
        service_type: "repair",
        service: "Battery service",
        slug: "services/repair/apple-watch/battery-service",
      },
      {
        service_type: "repair",
        service: "Display repair",
        slug: "services/repair/apple-watch/display-repair",
      },
      {
        service_type: "replacement",
        service: "Screen replacement",
        slug: "services/replacement/apple-watch/screen-replacement",
      },
      {
        service_type: "replacement",
        service: "Battery replacement",
        slug: "services/replacement/apple-watch/battery-replacement",
      },
      {
        service_type: "replacement",
        service: "Strap replacement",
        slug: "services/replacement/apple-watch/strap-replacement",
      },
      {
        service_type: "upgrade",
        service: "Firmware upgrade",
        slug: "services/upgrade/apple-watch/firmware-upgrade",
      },
      {
        service_type: "upgrade",
        service: "Performance boost",
        slug: "services/upgrade/apple-watch/performance-boost",
      },
      {
        service_type: "upgrade",
        service: "Feature upgrade",
        slug: "services/upgrade/apple-watch/feature-upgrade",
      },
      {
        service_type: "installation",
        service: "App install",
        slug: "services/installation/apple-watch/app-install",
      },
      {
        service_type: "installation",
        service: "OS configuration",
        slug: "services/installation/apple-watch/os-configuration",
      },
      {
        service_type: "installation",
        service: "Device setup",
        slug: "services/installation/apple-watch/device-setup",
      },
    ],
  },
  {
    title: "Tablet",
    imgSrc: "/images/services/ipad.webp",
    description:
      "Operating System, Software Installation, Data Recovery, Virus and Malware Removal",
    services: [
      {
        service_type: "repair",
        service: "Screen repair",
        slug: "services/repair/tablet/screen-repair",
      },
      {
        service_type: "repair",
        service: "Battery fix",
        slug: "services/repair/tablet/battery-fix",
      },
      {
        service_type: "repair",
        service: "Button repair",
        slug: "services/repair/tablet/button-repair",
      },
      {
        service_type: "replacement",
        service: "LCD replacement",
        slug: "services/replacement/tablet/lcd-replacement",
      },
      {
        service_type: "replacement",
        service: "Battery replacement",
        slug: "services/replacement/tablet/battery-replacement",
      },
      {
        service_type: "replacement",
        service: "Housing fix",
        slug: "services/replacement/tablet/housing-fix",
      },
      {
        service_type: "upgrade",
        service: "OS upgrade",
        slug: "services/upgrade/tablet/os-upgrade",
      },
      {
        service_type: "upgrade",
        service: "Speed boost",
        slug: "services/upgrade/tablet/speed-boost",
      },
      {
        service_type: "upgrade",
        service: "Storage upgrade",
        slug: "services/upgrade/tablet/storage-upgrade",
      },
      {
        service_type: "installation",
        service: "Software install",
        slug: "services/installation/tablet/software-install",
      },
      {
        service_type: "installation",
        service: "App setup",
        slug: "services/installation/tablet/app-setup",
      },
      {
        service_type: "installation",
        service: "Driver install",
        slug: "services/installation/tablet/driver-install",
      },
    ],
  },
  {
    title: "Laptop",
    imgSrc: "/images/services/macbook.webp",
    description:
      "Operating System, Software Installation, Data Recovery, Virus and Malware Removal",
    services: [
      {
        service_type: "repair",
        service: "Keyboard fix",
        slug: "services/repair/laptop/keyboard-fix",
      },
      {
        service_type: "repair",
        service: "Fan repair",
        slug: "services/repair/laptop/fan-repair",
      },
      {
        service_type: "repair",
        service: "Screen repair",
        slug: "services/repair/laptop/screen-repair",
      },
      {
        service_type: "replacement",
        service: "Battery replacement",
        slug: "services/replacement/laptop/battery-replacement",
      },
      {
        service_type: "replacement",
        service: "Keyboard swap",
        slug: "services/replacement/laptop/keyboard-swap",
      },
      {
        service_type: "replacement",
        service: "Hinge replacement",
        slug: "services/replacement/laptop/hinge-replacement",
      },
      {
        service_type: "upgrade",
        service: "RAM upgrade",
        slug: "services/upgrade/laptop/ram-upgrade",
      },
      {
        service_type: "upgrade",
        service: "SSD upgrade",
        slug: "services/upgrade/laptop/ssd-upgrade",
      },
      {
        service_type: "upgrade",
        service: "GPU upgrade",
        slug: "services/upgrade/laptop/gpu-upgrade",
      },
      {
        service_type: "installation",
        service: "OS install",
        slug: "services/installation/laptop/os-install",
      },
      {
        service_type: "installation",
        service: "Driver setup",
        slug: "services/installation/laptop/driver-setup",
      },
      {
        service_type: "installation",
        service: "Software install",
        slug: "services/installation/laptop/software-install",
      },
    ],
  },
  {
    title: "Nintendo Switch",
    imgSrc: "/images/services/nintendo_switch.webp",
    description:
      "Operating System, Software Installation, Data Recovery, Virus and Malware Removal",
    services: [
      {
        service_type: "repair",
        service: "Joy-Con repair",
        slug: "services/repair/nintendo-switch/joy-con-repair",
      },
      {
        service_type: "repair",
        service: "Screen fix",
        slug: "services/repair/nintendo-switch/screen-fix",
      },
      {
        service_type: "repair",
        service: "Battery repair",
        slug: "services/repair/nintendo-switch/battery-repair",
      },
      {
        service_type: "replacement",
        service: "Screen swap",
        slug: "services/replacement/nintendo-switch/screen-swap",
      },
      {
        service_type: "replacement",
        service: "Battery replacement",
        slug: "services/replacement/nintendo-switch/battery-replacement",
      },
      {
        service_type: "replacement",
        service: "Button repair",
        slug: "services/replacement/nintendo-switch/button-repair",
      },
      {
        service_type: "upgrade",
        service: "Firmware upgrade",
        slug: "services/upgrade/nintendo-switch/firmware-upgrade",
      },
      {
        service_type: "upgrade",
        service: "Performance boost",
        slug: "services/upgrade/nintendo-switch/performance-boost",
      },
      {
        service_type: "upgrade",
        service: "Storage upgrade",
        slug: "services/upgrade/nintendo-switch/storage-upgrade",
      },
      {
        service_type: "installation",
        service: "System update",
        slug: "services/installation/nintendo-switch/system-update",
      },
      {
        service_type: "installation",
        service: "Software install",
        slug: "services/installation/nintendo-switch/software-install",
      },
      {
        service_type: "installation",
        service: "Configuration",
        slug: "services/installation/nintendo-switch/configuration",
      },
    ],
  },
  {
    title: "Desktop",
    imgSrc: "/images/services/desktop.webp",
    description:
      "Operating System, Software Installation, Data Recovery, Virus and Malware Removal",
    services: [
      {
        service_type: "repair",
        service: "Power supply fix",
        slug: "services/repair/desktop/power-supply-fix",
      },
      {
        service_type: "repair",
        service: "Fan repair",
        slug: "services/repair/desktop/fan-repair",
      },
      {
        service_type: "repair",
        service: "Diagnostics",
        slug: "services/repair/desktop/diagnostics",
      },
      {
        service_type: "replacement",
        service: "Motherboard",
        slug: "services/replacement/desktop/motherboard",
      },
      {
        service_type: "replacement",
        service: "PSU replacement",
        slug: "services/replacement/desktop/psu-replacement",
      },
      {
        service_type: "replacement",
        service: "Hard drive swap",
        slug: "services/replacement/desktop/hard-drive-swap",
      },
      {
        service_type: "upgrade",
        service: "RAM upgrade",
        slug: "services/upgrade/desktop/ram-upgrade",
      },
      {
        service_type: "upgrade",
        service: "SSD upgrade",
        slug: "services/upgrade/desktop/ssd-upgrade",
      },
      {
        service_type: "upgrade",
        service: "GPU upgrade",
        slug: "services/upgrade/desktop/gpu-upgrade",
      },
      {
        service_type: "installation",
        service: "OS install",
        slug: "services/installation/desktop/os-install",
      },
      {
        service_type: "installation",
        service: "Driver install",
        slug: "services/installation/desktop/driver-install",
      },
      {
        service_type: "installation",
        service: "Software setup",
        slug: "services/installation/desktop/software-setup",
      },
    ],
  },
];

export { reviews, features, randomUsp, repairItems };
