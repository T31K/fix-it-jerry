// Branch metadata — nearest-branch lookup keys must match these.
export const branches = {
  "desa-parkcity": {
    name: "Desa Parkcity",
    address: "7, Jalan Residen Utama, Desa Parkcity, 52200 Kuala Lumpur",
    phone: "+60183646909",
    geo: { lat: 3.1853, lng: 101.6268 },
  },
  "bukit-jalil": {
    name: "Bukit Jalil",
    address: "1-10, Jalan Bukit Jalil Indah 4B, Taman LTAT, 57000 Kuala Lumpur",
    phone: "+60183101909",
    geo: { lat: 3.066, lng: 101.69 },
  },
  "sri-manja": {
    name: "Sri Manja, PJ",
    address: "23A, Jalan Sri Manja 10, Taman Sri Manja, 46000 Petaling Jaya",
    phone: "+60187673909",
    geo: { lat: 3.0921, lng: 101.6262 },
  },
  "ss15": {
    name: "Subang Jaya SS15",
    address: "22-1, Jalan SS 15/8, SS 15, 47500 Subang Jaya",
    phone: "+60183267909",
    geo: { lat: 3.0772, lng: 101.5912 },
  },
};

export const locations = [
  // ── KL Central ───────────────────────────────────────────────
  {
    slug: "mont-kiara",
    name: "Mont Kiara",
    region: "Kuala Lumpur",
    postcode: "50480",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 8,
    landmarks: ["Plaza Mont Kiara", "1 Mont Kiara", "Garden International School", "Solaris Mont Kiara", "163 Retail Park"],
    blurb:
      "Mont Kiara is one of KL's busiest expat enclaves, packed with high-rise condos like 1 Mont Kiara, Verve Suites and Kiara Designer Suites. Our Desa Parkcity branch is barely a 10-minute drive away, which makes same-day pickup straightforward. We service residents and offices around Plaza Mont Kiara, Solaris and 163 Retail Park almost every day.",
  },
  {
    slug: "bangsar",
    name: "Bangsar",
    region: "Kuala Lumpur",
    postcode: "59100",
    nearestBranch: "sri-manja",
    drivingMinutes: 12,
    landmarks: ["Bangsar Village", "Bangsar Shopping Centre", "Telawi", "Lucky Garden", "APW Bangsar"],
    blurb:
      "Bangsar mixes old-money bungalows with the cafés and boutiques along Telawi. We see a steady run of repairs from Bangsar Village, BSC and the apartment blocks around Lucky Garden. Our Sri Manja branch in PJ is the closest pickup point — most Lalamove jobs from Bangsar reach us in under 15 minutes.",
  },
  {
    slug: "klcc",
    name: "KLCC",
    region: "Kuala Lumpur",
    postcode: "50088",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 18,
    landmarks: ["Petronas Twin Towers", "Suria KLCC", "Avenue K", "Pavilion KL", "KLCC Park"],
    blurb:
      "KLCC sits in the middle of KL's office and luxury-residential core — Suria KLCC, the Twin Towers, Pavilion and the condos along Jalan Pinang and Persiaran KLCC. Most of our KLCC customers send their devices via Grab or Lalamove rather than drive in; turnaround is usually same-day for screen and battery jobs.",
  },
  {
    slug: "bukit-bintang",
    name: "Bukit Bintang",
    region: "Kuala Lumpur",
    postcode: "55100",
    nearestBranch: "sri-manja",
    drivingMinutes: 14,
    landmarks: ["Pavilion KL", "Lot 10", "Sungei Wang", "Berjaya Times Square", "Fahrenheit 88"],
    blurb:
      "Bukit Bintang is KL's busiest shopping and entertainment strip. Between Pavilion, Lot 10 and the office towers off Jalan Sultan Ismail, we get a constant stream of phone and laptop repairs from staff and visitors. Courier pickup is easier than driving in — most jobs leave Bukit Bintang and reach our Sri Manja or Desa Parkcity branch in 15 minutes flat.",
  },
  {
    slug: "damansara-heights",
    name: "Damansara Heights",
    region: "Kuala Lumpur",
    postcode: "50490",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 9,
    landmarks: ["Pusat Bandar Damansara", "Plaza Damansara", "Bukit Damansara", "The Sphere"],
    blurb:
      "Damansara Heights is leafy, low-density and full of corporate offices around Pusat Bandar Damansara. We service the bungalows along Jalan Setiabakti, the residences off Jalan Damansara, and the offices at The Sphere. Desa Parkcity is the nearest branch — usually 9 to 12 minutes away by car.",
  },
  {
    slug: "sri-hartamas",
    name: "Sri Hartamas",
    region: "Kuala Lumpur",
    postcode: "50480",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 6,
    landmarks: ["Plaza Damas", "Hartamas Shopping Centre", "Desa Sri Hartamas", "Aman Suria"],
    blurb:
      "Sri Hartamas is one of our busiest service areas — Plaza Damas, Hartamas Shopping Centre and the surrounding shoplots are six minutes from our Desa Parkcity branch. Pickup and same-day return is routine for residents around Jalan Sri Hartamas.",
  },
  {
    slug: "bangsar-south",
    name: "Bangsar South",
    region: "Kuala Lumpur",
    postcode: "59200",
    nearestBranch: "sri-manja",
    drivingMinutes: 8,
    landmarks: ["The Vertical", "Nexus", "UOA Business Park", "Pantai Hospital"],
    blurb:
      "Bangsar South (Kerinchi) is a dense business district anchored by The Vertical, Nexus and the UOA towers. We pick up devices from corporate clients here several times a week — Sri Manja is just across the Federal Highway, usually under ten minutes away.",
  },
  {
    slug: "ttdi",
    name: "TTDI",
    region: "Kuala Lumpur",
    postcode: "60000",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 10,
    landmarks: ["TTDI Plaza", "Glo Damansara", "Lorong Rahim Kajai", "TTDI MRT"],
    blurb:
      "TTDI (Taman Tun Dr Ismail) is a tight-knit suburban grid centred on Lorong Rahim Kajai and Glo Damansara. Our Desa Parkcity branch is a short hop up Jalan Damansara — couriers usually clear the round-trip in well under an hour.",
  },
  {
    slug: "cheras",
    name: "Cheras",
    region: "Kuala Lumpur",
    postcode: "56000",
    nearestBranch: "bukit-jalil",
    drivingMinutes: 14,
    landmarks: ["MyTOWN", "AEON Maluri", "Sunway Velocity", "Leisure Mall", "Pearl Point"],
    blurb:
      "Cheras spans a huge stretch from Maluri all the way out to Bandar Mahkota. For most of it — Sunway Velocity, MyTOWN, Leisure Mall, Pearl Point — our Bukit Jalil branch is the nearest pickup point. Same-day repair is standard for screens and batteries.",
  },
  {
    slug: "setapak",
    name: "Setapak",
    region: "Kuala Lumpur",
    postcode: "53000",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 18,
    landmarks: ["Wangsa Walk", "Setapak Central", "TARUC", "Danau Kota"],
    blurb:
      "Setapak runs from Wangsa Maju down through TARUC and Danau Kota. We get a lot of student repairs from this area — quick screen swaps, charging port jobs, water damage assessments. Lalamove from Setapak to our Desa Parkcity branch is around 20 minutes off-peak.",
  },
  {
    slug: "wangsa-maju",
    name: "Wangsa Maju",
    region: "Kuala Lumpur",
    postcode: "53300",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 20,
    landmarks: ["Wangsa Walk", "AEON BiG", "Alpha Angle", "Sri Rampai"],
    blurb:
      "Wangsa Maju is a self-contained neighbourhood around Wangsa Walk, Alpha Angle and the Sri Rampai LRT line. Pickup-and-deliver via Grab usually beats the drive into our Desa Parkcity branch — total turnaround is roughly the same.",
  },
  {
    slug: "ampang",
    name: "Ampang",
    region: "Kuala Lumpur",
    postcode: "68000",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 22,
    landmarks: ["Ampang Park", "Great Eastern Mall", "Ampang Point", "KLCC East"],
    blurb:
      "Ampang covers everything from the diplomatic enclave near KLCC to the residential lots out past Ampang Point. We see consistent repair volume from condos along Jalan Ampang — Lalamove pickup is the path of least resistance for most customers.",
  },
  {
    slug: "sentul",
    name: "Sentul",
    region: "Kuala Lumpur",
    postcode: "51000",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 15,
    landmarks: ["KL Gateway", "Sentul East", "Sentul Park", "Maxwell Towers"],
    blurb:
      "Sentul has gentrified fast around Sentul East and the new condos by KL Gateway, while Sentul West holds the older residential streets. Our Desa Parkcity branch handles most pickups — typically a 15-minute trip via the DUKE.",
  },
  {
    slug: "kepong",
    name: "Kepong",
    region: "Kuala Lumpur",
    postcode: "52100",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 10,
    landmarks: ["AEON Metro Prima", "Kepong Village Mall", "Desa Aman Puri", "Forest Research Institute"],
    blurb:
      "Kepong sits right next door to Desa Parkcity — most pickups from Metro Prima, Kepong Baru and Desa Aman Puri are at our front door inside ten minutes. Walk-ins are easy too if you prefer to wait while we work.",
  },
  {
    slug: "brickfields",
    name: "Brickfields",
    region: "Kuala Lumpur",
    postcode: "50470",
    nearestBranch: "sri-manja",
    drivingMinutes: 10,
    landmarks: ["KL Sentral", "Nu Sentral", "Little India", "YMCA"],
    blurb:
      "Brickfields anchors KL Sentral and Little India — high foot-traffic, lots of office workers, and tight parking. Sending the device by Grab to our Sri Manja branch in PJ usually saves the parking hunt. Most jobs come back the same day.",
  },
  {
    slug: "desa-parkcity",
    name: "Desa ParkCity",
    region: "Kuala Lumpur",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 0,
    landmarks: ["The Waterfront", "Plaza Arkadia", "Central Park", "Desa Parkcity"],
    blurb:
      "Desa Parkcity is home turf — our flagship branch sits on Jalan Residen Utama, a few minutes from The Waterfront and Plaza Arkadia. Walk in, drop off, or have us collect from your door. Most simple repairs are done in under an hour.",
  },
  {
    slug: "kl-sentral",
    name: "KL Sentral",
    region: "Kuala Lumpur",
    postcode: "50470",
    nearestBranch: "sri-manja",
    drivingMinutes: 8,
    landmarks: ["KL Sentral Station", "Nu Sentral", "St Regis", "Aloft KL"],
    blurb:
      "KL Sentral is a transport hub with the office towers, hotels and condos clustered around it. Couriers move fast in and out — pickup from Nu Sentral, St Regis or any of the office floors typically lands at our Sri Manja branch within 15 minutes.",
  },
  {
    slug: "bukit-jalil",
    name: "Bukit Jalil",
    region: "Kuala Lumpur",
    postcode: "57000",
    nearestBranch: "bukit-jalil",
    drivingMinutes: 0,
    landmarks: ["Pavilion Bukit Jalil", "Bukit Jalil Stadium", "Astro HQ", "Endah Parade"],
    blurb:
      "Bukit Jalil is one of our home branches — we're on Jalan Bukit Jalil Indah 4B, just minutes from Pavilion Bukit Jalil and the Stadium. Walk-in repairs welcomed. Most screen and battery jobs are completed while you grab a coffee at Pavilion.",
  },

  // ── Petaling Jaya ────────────────────────────────────────────
  {
    slug: "ss2",
    name: "SS2, Petaling Jaya",
    region: "Petaling Jaya",
    postcode: "47300",
    nearestBranch: "sri-manja",
    drivingMinutes: 8,
    landmarks: ["SS2 Mall", "SS2 Pasar Malam", "Murni Discovery", "Sea Park"],
    blurb:
      "SS2 still runs on its hawker grid and the Monday pasar malam — packed with old shoplots, mamak stalls and home-based businesses. Our Sri Manja branch is eight minutes south, and we run pickups from SS2 most days of the week.",
  },
  {
    slug: "damansara-utama",
    name: "Damansara Utama",
    region: "Petaling Jaya",
    postcode: "47400",
    nearestBranch: "sri-manja",
    drivingMinutes: 10,
    landmarks: ["Uptown Damansara", "Starling Mall", "The Atria", "Damansara Uptown"],
    blurb:
      "Damansara Utama (Uptown) is a dense mix of offices, condos and restaurants around Jalan SS21 and Starling Mall. Our Sri Manja branch is the closest pickup point — usually a ten-minute hop. Sameday turnaround for screens, batteries and back glass is standard here.",
  },
  {
    slug: "kelana-jaya",
    name: "Kelana Jaya",
    region: "Petaling Jaya",
    postcode: "47301",
    nearestBranch: "sri-manja",
    drivingMinutes: 8,
    landmarks: ["Paradigm Mall", "Giant Kelana Jaya", "Kelana LRT", "Kelana Business Centre"],
    blurb:
      "Kelana Jaya sits between Paradigm Mall, the LRT line and the SS6/SS7 residential blocks. We service offices in Kelana Business Centre and Paradigm regularly. Sri Manja and SS15 are both within ten minutes — whichever is closer to your address.",
  },
  {
    slug: "mutiara-damansara",
    name: "Mutiara Damansara",
    region: "Petaling Jaya",
    postcode: "47810",
    nearestBranch: "sri-manja",
    drivingMinutes: 12,
    landmarks: ["The Curve", "Ikano Power Centre", "IKEA Damansara", "1 Utama"],
    blurb:
      "Mutiara Damansara is the IKEA / The Curve / Ikano cluster, plus the surrounding offices and condos. Pickup from any of those malls or the residential streets nearby reaches our Sri Manja branch in roughly 12 minutes. Lalamove is the easy route.",
  },
  {
    slug: "ara-damansara",
    name: "Ara Damansara",
    region: "Petaling Jaya",
    postcode: "47301",
    nearestBranch: "ss15",
    drivingMinutes: 10,
    landmarks: ["Citta Mall", "Evolve Concept Mall", "Subang Skypark", "Oasis Square"],
    blurb:
      "Ara Damansara wraps around Citta Mall, Evolve and the Subang Skypark airport. We see a healthy stream of repair jobs from Oasis Square and the surrounding condos — SS15 branch is the natural pickup point, usually ten minutes away.",
  },
  {
    slug: "bandar-utama",
    name: "Bandar Utama",
    region: "Petaling Jaya",
    postcode: "47800",
    nearestBranch: "sri-manja",
    drivingMinutes: 12,
    landmarks: ["1 Utama", "Centrepoint Bandar Utama", "First Avenue", "BU3"],
    blurb:
      "Bandar Utama centres on 1 Utama and the office towers along First Avenue and Centrepoint. Our Sri Manja branch handles the area — pickups from BU3 and Centrepoint typically reach us in 10–12 minutes via the LDP.",
  },
  {
    slug: "subang-jaya",
    name: "Subang Jaya",
    region: "Selangor",
    postcode: "47500",
    nearestBranch: "ss15",
    drivingMinutes: 0,
    landmarks: ["SS15", "Subang Parade", "Empire Subang", "Sunway Pyramid", "Da Men Mall"],
    blurb:
      "Subang Jaya is one of our home branches — we're at 22-1, Jalan SS 15/8, right in the heart of SS15. Walk-ins welcome. Most jobs are completed while you grab a meal at the SS15 row of cafés downstairs.",
  },
  {
    slug: "usj",
    name: "USJ",
    region: "Selangor",
    postcode: "47600",
    nearestBranch: "ss15",
    drivingMinutes: 8,
    landmarks: ["Main Place USJ", "Summit USJ", "USJ 21", "Taipan"],
    blurb:
      "USJ is the residential half of greater Subang — Main Place, Summit and the Taipan strip. Our SS15 branch is eight minutes up the road; we pick up from USJ daily. Most repairs land back home the same evening.",
  },
  {
    slug: "kota-damansara",
    name: "Kota Damansara",
    region: "Petaling Jaya",
    postcode: "47810",
    nearestBranch: "sri-manja",
    drivingMinutes: 15,
    landmarks: ["Sunway Giza", "Strand Mall", "Encorp Strand", "Surian MRT"],
    blurb:
      "Kota Damansara stretches from Sunway Giza and Encorp Strand all the way to the Surian MRT corridor. Lalamove from any of these spots reaches our Sri Manja branch in roughly 15 minutes. Drop-off and self-pickup are fine if you're nearby anyway.",
  },
  {
    slug: "sunway",
    name: "Sunway",
    region: "Selangor",
    postcode: "47500",
    nearestBranch: "ss15",
    drivingMinutes: 10,
    landmarks: ["Sunway Pyramid", "Sunway University", "Sunway Lagoon", "Sunway Medical"],
    blurb:
      "Sunway covers the Pyramid, the university, Sunway Medical and the surrounding condos. SS15 branch is ten minutes away by Federal Highway — same-day pickup-repair-return is the norm.",
  },

  // ── Outer Selangor ───────────────────────────────────────────
  {
    slug: "shah-alam",
    name: "Shah Alam",
    region: "Selangor",
    postcode: "40000",
    nearestBranch: "ss15",
    drivingMinutes: 18,
    landmarks: ["Shah Alam Stadium", "Plaza Shah Alam", "Setia City Mall", "i-City"],
    blurb:
      "Shah Alam is sprawling — from the Blue Mosque and Stadium across to Setia City Mall and i-City. Our SS15 branch is the closest of the four; pickup via Lalamove is the standard route, usually under 25 minutes door-to-door.",
  },
  {
    slug: "puchong",
    name: "Puchong",
    region: "Selangor",
    postcode: "47100",
    nearestBranch: "bukit-jalil",
    drivingMinutes: 12,
    landmarks: ["IOI Mall", "Setia Walk", "Bandar Puteri", "IOI Boulevard"],
    blurb:
      "Puchong runs from IOI Mall and Bandar Puteri all the way down to Setia Walk and Pusat Bandar Puchong. Our Bukit Jalil branch is the natural pickup point — twelve minutes via the LDP for most addresses.",
  },
  {
    slug: "cyberjaya",
    name: "Cyberjaya",
    region: "Selangor",
    postcode: "63000",
    nearestBranch: "bukit-jalil",
    drivingMinutes: 25,
    landmarks: ["Shaftsbury Square", "DPULZE", "Tamarind Square", "Cyberjaya University"],
    blurb:
      "Cyberjaya is further out, but we still see steady volume from the tech offices around Shaftsbury, DPULZE and Tamarind Square. Lalamove pickup to our Bukit Jalil branch averages 25 minutes — most jobs are done same-day if dropped before noon.",
  },
  {
    slug: "kajang",
    name: "Kajang",
    region: "Selangor",
    postcode: "43000",
    nearestBranch: "bukit-jalil",
    drivingMinutes: 25,
    landmarks: ["Metro Point Kajang", "Plaza Metro Kajang", "Kajang 2", "Stadium Kajang"],
    blurb:
      "Kajang stretches from Metro Point and the satay strip down to Country Heights and Bandar Baru Bangi. Bukit Jalil is the closest of our four branches; courier pickup is the only sensible route — about 25 minutes off-peak.",
  },

  // ── Desa ParkCity condos — our home turf, walking distance to the branch ──
  {
    slug: "westside-1",
    name: "The Westside I",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 3,
    landmarks: ["The Waterfront", "Central Park", "West Park"],
    blurb:
      "The Westside I sits on the quieter western edge of Desa ParkCity, right beside West Park. Our branch is inside the township, so residents usually just walk or drive over in a few minutes — screen and battery jobs are typically done while you grab a coffee at The Waterfront.",
  },
  {
    slug: "westside-2",
    name: "The Westside II",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 3,
    landmarks: ["West Park", "The Waterfront", "The International School @ ParkCity"],
    blurb:
      "The Westside II residents are some of our most regular walk-ins — the branch is barely three minutes away inside the township. We also do lobby pickups for the towers, so you don't even need to leave the building for a battery swap.",
  },
  {
    slug: "westside-3",
    name: "Westside III",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 3,
    landmarks: ["West Park", "The Waterfront", "ParkCity Medical Centre"],
    blurb:
      "Westside III is the newest of the Westside towers, and being in the same township means same-hour turnaround is realistic — drop your phone on the way to lunch at The Waterfront and collect it after.",
  },
  {
    slug: "the-breezeway",
    name: "The Breezeway",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 4,
    landmarks: ["Central Park", "The Waterfront", "Plaza Arkadia"],
    blurb:
      "The Breezeway's mix of condos and park homes sits right by Central Park, a short hop from our branch. Plenty of Breezeway families use us for the kids' cracked iPads as much as their own phones — lobby pickup available.",
  },
  {
    slug: "northshore-gardens",
    name: "The Northshore Gardens",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 4,
    landmarks: ["Plaza Arkadia", "Central Park", "The Waterfront"],
    blurb:
      "Northshore Gardens sits between Plaza Arkadia and the lake, about four minutes from our branch. Many residents drop devices off on their morning Central Park loop and collect them on the way back.",
  },
  {
    slug: "nadia-parkfront",
    name: "Nadia Parkfront",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 3,
    landmarks: ["Central Park", "The Waterfront", "ParkCity Medical Centre"],
    blurb:
      "Nadia Parkfront faces Central Park and is one of the closest towers to our branch. Walk-ins are the norm here — most screen replacements are ready within the hour.",
  },
  {
    slug: "south-brooks",
    name: "South Brooks",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 4,
    landmarks: ["The Waterfront", "Central Park", "The International School @ ParkCity"],
    blurb:
      "South Brooks residents are a quick four-minute drive from our branch inside the township. We regularly handle MacBook and iPad jobs for work-from-home folks here — courier pickup from the lobby if you can't step out.",
  },
  {
    slug: "one-central-park",
    name: "One Central Park",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 3,
    landmarks: ["Central Park", "The Waterfront", "Plaza Arkadia"],
    blurb:
      "One Central Park overlooks the lake and is a few minutes' walk from our branch. It's common for residents to drop a device during an evening park walk and pick it up the same night before we close.",
  },
  {
    slug: "sofiya-residensi",
    name: "Sofiya Residensi",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 4,
    landmarks: ["Plaza Arkadia", "ParkCity Medical Centre", "Central Park"],
    blurb:
      "Sofiya Residensi is on the Arkadia side of the township, four minutes from our branch. Same-day turnaround is standard, and we offer lobby pickup for bigger items like laptops and desktops.",
  },
  {
    slug: "park-place",
    name: "Park Place",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 4,
    landmarks: ["Plaza Arkadia", "Central Park", "The Waterfront"],
    blurb:
      "Park Place sits near Plaza Arkadia, an easy four-minute drive to our branch. Residents often combine a drop-off with errands at Arkadia — most repairs are done before the errands are.",
  },
  {
    slug: "park-regent",
    name: "Park Regent",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 4,
    landmarks: ["Central Park", "The Waterfront", "Plaza Arkadia"],
    blurb:
      "Park Regent's lakefront towers are minutes from our branch inside Desa ParkCity. We handle everything from cracked iPhone screens to MacBook batteries for residents here, with lobby pickup if you'd rather not drive.",
  },
  {
    slug: "noora",
    name: "Noora",
    region: "Desa ParkCity",
    postcode: "52200",
    nearestBranch: "desa-parkcity",
    drivingMinutes: 4,
    landmarks: ["Plaza Arkadia", "Central Park", "ParkCity Medical Centre"],
    blurb:
      "Noora is one of the newest addresses in Desa ParkCity, and like the rest of the township it's only minutes from our branch. Drop in on the way to Plaza Arkadia or book a lobby pickup — same-day service either way.",
  },
];

// Service catalogue used on every location page (shared with main service taxonomy).
export const locationServices = [
  { slug: "screen-replacement", name: "Screen Replacement", from: 120 },
  { slug: "battery-replacement", name: "Battery Replacement", from: 80 },
  { slug: "back-glass-repair", name: "Back Glass Repair", from: 150 },
  { slug: "charging-port-repair", name: "Charging Port Repair", from: 100 },
  { slug: "water-damage-repair", name: "Water Damage Repair", from: 180 },
  { slug: "camera-repair", name: "Camera Repair", from: 120 },
  { slug: "speaker-mic-repair", name: "Speaker & Mic Repair", from: 100 },
  { slug: "data-recovery", name: "Data Recovery", from: 200 },
];
