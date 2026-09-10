import { Product } from "@/types/product";

export interface BuildSelection {
  cpu?: Product;
  motherboard?: Product;
  ram?: Product;
  gpu?: Product;
  storage?: Product;
  psu?: Product;
  case?: Product;
  cooler?: Product;
}

export interface CompatibilityIssue {
  level: "error" | "warning";
  message: string;
}

// Consumo base estimado del resto de la placa (chipset, ventiladores, etc.)
const BASE_SYSTEM_DRAW_W = 60;
// Margen de seguridad recomendado sobre el consumo total estimado.
const PSU_SAFETY_MARGIN = 1.25;

export function checkBuild(build: BuildSelection): CompatibilityIssue[] {
  const issues: CompatibilityIssue[] = [];
  const { cpu, motherboard, ram, gpu, psu, case: pcCase, cooler } = build;

  // Socket CPU <-> placa base
  if (cpu && motherboard) {
    const cpuSocket = cpu.compatibility?.socket;
    const boardSocket = motherboard.compatibility?.socket;
    if (cpuSocket && boardSocket && cpuSocket !== boardSocket) {
      issues.push({
        level: "error",
        message: `El procesador usa socket ${cpuSocket} pero la placa base es ${boardSocket}. No son compatibles.`,
      });
    }
  }

  // Tipo de RAM <-> placa base
  if (ram && motherboard) {
    const ramType = ram.compatibility?.ramType;
    const boardRamType = motherboard.compatibility?.ramType;
    if (ramType && boardRamType && ramType !== boardRamType) {
      issues.push({
        level: "error",
        message: `La memoria RAM es ${ramType} pero la placa base solo admite ${boardRamType}.`,
      });
    }
  }

  // Tipo de RAM <-> CPU (algunos CPU solo admiten un tipo)
  if (ram && cpu) {
    const ramType = ram.compatibility?.ramType;
    const cpuRamType = cpu.compatibility?.ramType;
    if (ramType && cpuRamType && ramType !== cpuRamType) {
      issues.push({
        level: "warning",
        message: `Comprueba que el procesador admite memoria ${ramType}; su compatibilidad habitual es ${cpuRamType}.`,
      });
    }
  }

  // GPU <-> longitud máxima de la caja
  if (gpu && pcCase) {
    const gpuLength = gpu.compatibility?.gpuLengthMm;
    const maxLength = pcCase.compatibility?.maxGpuLengthMm;
    if (gpuLength && maxLength && gpuLength > maxLength) {
      issues.push({
        level: "error",
        message: `La tarjeta gráfica mide ${gpuLength}mm y la caja admite hasta ${maxLength}mm. No entrará.`,
      });
    }
  }

  // Disipador de aire <-> altura máxima de la caja
  if (cooler && pcCase && cooler.category === "cooler-air") {
    const coolerHeight = cooler.compatibility?.coolerHeightMm;
    const maxHeight = pcCase.compatibility?.maxCoolerHeightMm;
    if (coolerHeight && maxHeight && coolerHeight > maxHeight) {
      issues.push({
        level: "error",
        message: `El disipador mide ${coolerHeight}mm de alto y la caja admite hasta ${maxHeight}mm.`,
      });
    }
  }

  // Formato placa base <-> caja
  if (motherboard && pcCase) {
    const boardFormFactor = motherboard.compatibility?.formFactor;
    const supported = pcCase.compatibility?.supportedFormFactors;
    if (boardFormFactor && supported && !supported.includes(boardFormFactor)) {
      issues.push({
        level: "error",
        message: `La placa base es formato ${boardFormFactor} y la caja no lo admite (admite: ${supported.join(", ")}).`,
      });
    }
  }

  // Potencia de la fuente
  if (psu) {
    const psuW = psu.compatibility?.wattageW ?? 0;
    let estimatedDraw = BASE_SYSTEM_DRAW_W;
    if (cpu?.compatibility?.tdpW) estimatedDraw += cpu.compatibility.tdpW;
    if (gpu?.compatibility?.tdpW) estimatedDraw += gpu.compatibility.tdpW;

    const recommendedByGpu = gpu?.compatibility?.recommendedPsuW ?? 0;
    const recommendedTotal = Math.max(
      estimatedDraw * PSU_SAFETY_MARGIN,
      recommendedByGpu
    );

    if (psuW && psuW < estimatedDraw) {
      issues.push({
        level: "error",
        message: `La fuente es de ${psuW}W pero el consumo estimado del sistema ronda los ${Math.round(
          estimatedDraw
        )}W. Se queda corta.`,
      });
    } else if (psuW && psuW < recommendedTotal) {
      issues.push({
        level: "warning",
        message: `La fuente cubre el consumo estimado (${Math.round(
          estimatedDraw
        )}W) pero está justa. Se recomiendan al menos ${Math.round(
          recommendedTotal
        )}W para tener margen.`,
      });
    }
  }

  return issues;
}

export function estimatedWattage(build: BuildSelection): number {
  let total = BASE_SYSTEM_DRAW_W;
  if (build.cpu?.compatibility?.tdpW) total += build.cpu.compatibility.tdpW;
  if (build.gpu?.compatibility?.tdpW) total += build.gpu.compatibility.tdpW;
  return Math.round(total);
}
