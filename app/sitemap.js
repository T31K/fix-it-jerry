import { iphoneModels, iphoneServices } from "@/data/iphone";
import { ipadModels, ipadServices } from "@/data/ipad";
import { macbookModels, macbookServices } from "@/data/macbook";
import { appleWatchModels, appleWatchServices } from "@/data/applewatchModels";
import { samsungModels, samsungServices } from "@/data/samsung";
import { pixelModels, pixelServices } from "@/data/pixel";
import { xiaomiModels, xiaomiServices } from "@/data/xiaomi";
import { guides } from "@/data/guides";
import { locations } from "@/data/locations";
import { repairItems } from "@/data";

const BASE = "https://www.fixitjerry.com";

// Brand → device-catalog route segment. Keys must match repairItems[i].title.
const DEVICE_SEGMENTS = {
  Smartphone: "smartphone",
  Tablet: "tablet",
  Laptop: "laptop",
  Desktop: "desktop",
  Airpods: "airpods",
  "Apple Watch": "apple_watch",
  iPod: "ipod",
  "Nintendo Switch": "nintendo_switch",
  Ebook: "ebook",
};

const BRANDS = [
  { path: "iphone", models: iphoneModels, services: iphoneServices },
  { path: "ipad", models: ipadModels, services: ipadServices },
  { path: "macbook", models: macbookModels, services: macbookServices },
  { path: "apple-watch", models: appleWatchModels, services: appleWatchServices },
  { path: "samsung", models: samsungModels, services: samsungServices },
  { path: "pixel", models: pixelModels, services: pixelServices },
  { path: "xiaomi", models: xiaomiModels, services: xiaomiServices },
];

const STATIC_PAGES = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "devices", changeFrequency: "monthly", priority: 0.8 },
  { path: "guides", changeFrequency: "weekly", priority: 0.7 },
  { path: "blog", changeFrequency: "monthly", priority: 0.5 },
  { path: "book-a-repair", changeFrequency: "monthly", priority: 0.7 },
  { path: "contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "phone-repair", changeFrequency: "monthly", priority: 0.8 },
  { path: "privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "terms-and-conditions", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap() {
  const lastModified = new Date();
  const entries = [];

  for (const page of STATIC_PAGES) {
    entries.push({
      url: page.path ? `${BASE}/${page.path}` : `${BASE}/`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  for (const brand of BRANDS) {
    entries.push({
      url: `${BASE}/${brand.path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
    for (const model of brand.models) {
      entries.push({
        url: `${BASE}/${brand.path}/${model.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
      for (const service of brand.services) {
        entries.push({
          url: `${BASE}/${brand.path}/${model.slug}/${service.slug}`,
          lastModified,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  for (const loc of locations) {
    entries.push({
      url: `${BASE}/phone-repair/${loc.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const guide of guides) {
    entries.push({
      url: `${BASE}/guides/${guide.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const item of repairItems) {
    const segment = DEVICE_SEGMENTS[item?.title];
    if (!segment) continue;
    entries.push({
      url: `${BASE}/devices/${segment}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
    for (const service of item.services || []) {
      if (!service?.hash) continue;
      entries.push({
        url: `${BASE}/devices/${segment}/${service.hash}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
