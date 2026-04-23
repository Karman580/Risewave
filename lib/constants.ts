import type { LucideIcon } from "lucide-react";
import {
  Cctv,
  Wifi,
  BellRing,
  ShieldAlert,
  Zap,
  Network,
  Cpu,
  HardDrive,
  Home,
  Speaker,
  Router,
  Server,
  Tv,
} from "lucide-react";

export const BRAND = {
  name: "Risewave Communications",
  tagline: "Intelligent Security. Seamless Connectivity.",
  phone: "(647)-762-8148",
  phoneRaw: "6477628148",
  address: "51 Sutter Avenue, Brampton, ON, Canada",
  addressLine1: "51 Sutter Avenue",
  addressLine2: "Brampton, ON, Canada",
  year: new Date().getFullYear(),
} as const;

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  features: string[];
  badge?: string;
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Cctv,
    title: "Security Camera Installation",
    features: [
      "Professional CCTV installation",
      "24/7 monitoring in HD with remote access",
    ],
  },
  {
    icon: Wifi,
    title: "Wi-Fi Cameras",
    features: ["Wireless, easy setup", "Mobile access & real-time alerts"],
  },
  {
    icon: BellRing,
    title: "Video Doorbell & Intercom",
    features: ["Two-way communication", "Remote visitor access control"],
  },
  {
    icon: ShieldAlert,
    title: "Security Alarm Systems",
    features: [
      "Advanced intrusion detection",
      "Smart threat response network",
    ],
    badge: "Coming Soon",
  },
  {
    icon: Zap,
    title: "Low Voltage Wiring",
    features: [
      "Clean, efficient wiring for security",
      "Optimized for data & AV integration",
    ],
  },
  {
    icon: Network,
    title: "Structured Cabling",
    features: [
      "Reliable network infrastructure",
      "Built for homes & businesses",
    ],
  },
  {
    icon: Cpu,
    title: "Custom Wiring",
    features: [
      "Tailored solutions for security",
      "Audio, visual and network systems",
    ],
  },
  {
    icon: HardDrive,
    title: "Pre-Wiring",
    features: [
      "Future-ready wiring for new construction",
      "Scalable project planning",
    ],
  },
  {
    icon: Home,
    title: "Smart Home & Business",
    features: [
      "Full building automation",
      "Centralized smartphone control",
    ],
  },
  {
    icon: Speaker,
    title: "Sound System Installation",
    features: [
      "Clean audio setup for home & commercial",
      "Aesthetic acoustic engineering",
    ],
  },
  {
    icon: Router,
    title: "Access Point Installation",
    features: [
      "Seamless Wi-Fi coverage",
      "Enterprise solutions for large spaces",
    ],
  },
  {
    icon: Server,
    title: "Network Setup",
    features: [
      "Secure wired & wireless solutions",
      "Zero-latency architecture",
    ],
  },
  {
    icon: Tv,
    title: "TV Mounting & Setup",
    features: [
      "Clean, modern installations for homes & offices",
      "Zero-wire visible aesthetics",
    ],
    featured: true,
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICE_OPTIONS = [
  { value: "security", label: "Security Camera Setup" },
  { value: "network", label: "Network & Cabling" },
  { value: "smart-home", label: "Smart Home Automation" },
  { value: "av", label: "Audio/Visual Installation" },
  { value: "other", label: "Other Inquiry" },
] as const;
