// Shared FAQ generator for every brand's model × service page.
// Works across iphone / samsung / xiaomi / pixel / macbook / ipad / apple-watch —
// so it only relies on universally-present model fields (name, screenType, chipset,
// year) and guards everything brand-specific (batteryMah/batteryWh, port/ports,
// refreshRate, ipRating). Output feeds both the visible FAQ and the FAQPage JSON-LD.

const svc = (service) => service.name.toLowerCase();

// Pick one service-specific Q&A based on the service slug/name.
function serviceSpecificFaq(model, service) {
  const s = `${service.slug} ${service.name}`.toLowerCase();
  const battery = model.batteryMah
    ? `${model.batteryMah}mAh`
    : model.batteryWh
    ? `${model.batteryWh}Wh`
    : "";
  const port = model.port || model.ports || "USB-C";

  if (s.includes("screen") || s.includes("display")) {
    return {
      question: `Do you replace the whole ${model.name} display or just the glass?`,
      answer: `For the ${model.name} we replace the complete ${model.screenType} display assembly (glass, digitiser and panel) as one unit rather than only laminating new glass, so touch response and image quality come back to factory condition. Glass-only refurb can look fine on day one but often fails within weeks, which is why we don't cut that corner.`,
    };
  }
  if (s.includes("battery")) {
    return {
      question: `How do I know my ${model.name} battery needs replacing?`,
      answer: `Common signs are the ${model.name} dropping charge far faster than when new, shutting off with charge still showing, getting warm during light use, or the back/case bulging (a swollen ${battery ? battery + " " : ""}cell — bring it in quickly if so). We fit a fresh cell and reseal the device so its original resistance to dust and moisture is kept.`,
    };
  }
  if (s.includes("charg")) {
    return {
      question: `Why won't my ${model.name} charge or connect properly?`,
      answer: `Nine times out of ten it's a worn or lint-clogged ${port} port, a bad cable, or a damaged charging flex — not the battery. We start by cleaning and testing the ${port} port; if it's physically worn we replace the port/flex assembly and verify fast-charging and data transfer before handover.`,
    };
  }
  if (s.includes("water") || s.includes("liquid")) {
    return {
      question: `My ${model.name} got wet — what should I do first?`,
      answer: `Power it off, don't charge it, and don't shake or "dry it with rice". Bring the ${model.name} in as soon as possible — the real damage is corrosion that spreads over hours. We open it, ultrasonically clean the board, and treat corrosion before it kills components. The sooner it reaches us, the more we can save.`,
    };
  }
  if (s.includes("back") && s.includes("glass")) {
    return {
      question: `Can you replace the ${model.name} back glass without damaging it?`,
      answer: `Yes. The rear glass on the ${model.name} is bonded with adhesive, so we use controlled heat and careful separation to lift the broken panel, clear every shard, and fit a colour-matched replacement resealed to keep water resistance. Wireless charging and the cameras are tested afterwards.`,
    };
  }
  if (s.includes("keyboard")) {
    return {
      question: `Can you fix a single sticky key or does the whole ${model.name} keyboard need replacing?`,
      answer: `Where possible we clean or swap the affected key mechanism, but on the ${model.name} the keyboard is part of the top case, so widespread failures (multiple dead or repeating keys, liquid damage) usually mean a top-case/keyboard assembly replacement. We'll tell you which applies before starting any work.`,
    };
  }
  if (s.includes("camera")) {
    return {
      question: `Can you repair both front and rear cameras on the ${model.name}?`,
      answer: `Yes — front (selfie) and rear camera modules on the ${model.name} are both replaceable. Blurry photos, a shaking/rattling lens, black camera app or spots in every shot are the usual culprits. We test autofocus, stabilisation and flash after fitting a new module.`,
    };
  }
  if (s.includes("speaker") || s.includes("mic")) {
    return {
      question: `No sound or muffled calls on my ${model.name} — is that fixable?`,
      answer: `Usually yes. On the ${model.name} we check whether it's a blocked/blown earpiece or loudspeaker, a failed microphone, or just debris in the mesh. Cleaning is the cheapest fix; if a module is dead we replace it and test calls, speaker, and video recording audio before you leave.`,
    };
  }
  return {
    question: `Do I need an appointment for my ${model.name} ${svc(service)}?`,
    answer: `No appointment needed — you're welcome to walk in during opening hours, or book online so we can prepare the parts for your ${model.name} ahead of time. Booking ahead usually means a faster turnaround on the day.`,
  };
}

export function buildServiceFaqs(model, service) {
  return [
    {
      question: `How much does a ${model.name} ${svc(service)} cost in Kuala Lumpur?`,
      answer: `Pricing depends on the exact ${model.name} model and how much damage there is, so we quote you up front — before any work starts and with no obligation. There's no diagnostic fee for a standard ${svc(service)}. Message us the model or walk in and we'll give you an exact figure in minutes.`,
    },
    {
      question: `How long does a ${model.name} ${svc(service)} take?`,
      answer: `Most ${model.name} repairs are same-day, and many common jobs are done within 1–2 hours while you wait. Board-level and liquid-damage work can take longer because it's done properly rather than rushed — we'll give you a realistic time when we quote.`,
    },
    serviceSpecificFaq(model, service),
    {
      question: `Do you use good-quality parts, and is the ${model.name} repair guaranteed?`,
      answer: `Yes. We fit OEM or grade-A equivalent parts for the ${model.name} and back every repair with a warranty on both parts and labour. If anything related to the ${svc(service)} isn't right afterwards, bring it back and we'll sort it.`,
    },
    {
      question: `Where in KL can I get my ${model.name} ${svc(service)} done?`,
      answer: `Fix It Jerry is based in Kuala Lumpur and handles ${model.name} ${svc(service)} for walk-in and booked customers across KL and Petaling Jaya. Book online or drop in — most people are in and out the same day.`,
    },
  ];
}
