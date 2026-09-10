import {
  Cpu,
  MemoryStick,
  CircuitBoard,
  HardDrive,
  Fan,
  Box,
  Monitor,
  Keyboard,
  Mouse,
  Headphones,
  Mic,
  Camera,
  Speaker,
  Wifi,
  Video,
  BatteryCharging,
  Usb,
  Cable,
  Gauge,
  Zap,
} from "lucide-react";
import { ProductCategory } from "@/types/product";

const iconByCategory: Record<ProductCategory, typeof Cpu> = {
  cpu: Cpu,
  gpu: Gauge,
  motherboard: CircuitBoard,
  ram: MemoryStick,
  ssd: HardDrive,
  hdd: HardDrive,
  psu: Zap,
  case: Box,
  "cooler-air": Fan,
  "cooler-liquid": Fan,
  fan: Fan,
  monitor: Monitor,
  keyboard: Keyboard,
  mouse: Mouse,
  headset: Headphones,
  microphone: Mic,
  webcam: Camera,
  mousepad: Box,
  speakers: Speaker,
  "network-card": Wifi,
  "capture-card": Video,
  ups: BatteryCharging,
  hub: Usb,
  cable: Cable,
};

export default function ProductThumb({
  category,
  className,
}: {
  category: ProductCategory;
  className?: string;
}) {
  const Icon = iconByCategory[category] ?? Box;
  return <Icon className={className} strokeWidth={1.25} />;
}
