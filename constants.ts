import type { ProductTier, CoreTechnology, ComparisonSpec, DetailedTechnology } from './types';

export const PRODUCT_TIERS: ProductTier[] = [
  {
    name: 'Synaptic Core',
    slug: 'synaptic-core',
    price: 50,
    description: 'The essential AI-powered vibrator for exploring new dimensions of pleasure.',
    longDescription: 'The Core model is the perfect entry point into AI-integrated intimate wellness. This vibrator uses a cost-effective ERM motor and cloud-dependent AI to deliver novel pleasure patterns through turn-based conversational commands, making advanced technology accessible to everyone.',
    accentColor: 'gray',
    features: {
      actuation: 'Single Brushed ERM Motor',
      ai: 'Cloud NLU (API reliant)',
      sensing: 'None (Basic Vibration Control)',
      power: 'USB-C (Wired Only)',
      finish: 'Matte SPI C Finish (Standard)',
    },
  },
  {
    name: 'Synaptic Flow',
    slug: 'synaptic-flow',
    price: 100,
    description: 'A performance-focused AI vibrator with enhanced haptic responsiveness.',
    longDescription: 'Flow elevates the experience with a precision LRA haptic motor for superior fidelity, responsiveness, and durability. This advanced vibrator introduces a Hybrid Edge NLU strategy, processing key commands locally for a significantly more intuitive and powerful connection to your pleasure.',
    accentColor: 'blue',
    features: {
      actuation: 'Single Premium Z-Axis LRA Motor',
      ai: 'Hybrid Edge NLU (Intent Classification)',
      sensing: 'Basic Over-Current Sensing',
      power: 'USB-C + Basic Qi Wireless Charging',
      finish: 'EDM Micro-Texture Soft-Touch Finish',
    },
  },
  {
    name: 'Synaptic Synapse',
    slug: 'synaptic-synapse',
    price: 200,
    description: 'The pinnacle of pleasure technology, featuring sensory input and adaptive AI.',
    longDescription: 'Synapse is our most advanced dildo vibrator, featuring a Multi-LRA haptic array and integrated MEMS bio-sensors. Its Full Edge NLU architecture processes all data locally, enabling the vibrator to adapt to you in real-time for a truly personalized and immersive experience, all while ensuring the highest level of privacy.',
    accentColor: 'purple',
    features: {
      actuation: 'Multi-LRA Array (3-4 Units)',
      ai: 'Full Edge NLU (Dedicated AI Accelerator)',
      sensing: 'Integrated MEMS Pressure/Temp Sensor Array',
      power: 'USB-C PD + Qi2 Certified Wireless Charging',
      finish: 'Custom "Matte Skin" Finish',
    },
  },
];

export const CORE_TECHNOLOGIES: CoreTechnology[] = [
  {
    icon: 'fa-solid fa-flask-vial',
    title: 'Biocompatible Materials',
    description: 'Medical-Grade Liquid Silicone Rubber (LSR) ensures body-safe, hygienic, and comfortable use for all our vibrators.'
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'IPX7 Waterproof',
    description: 'Advanced NanoProof® PCB coatings provide robust waterproofing for easy cleaning and worry-free use in wet environments.'
  },
  {
    icon: 'fa-solid fa-fingerprint',
    title: 'Seamless Capacitive Controls',
    description: 'Buttonless, waterproof, and highly durable controls are integrated directly onto the device for intuitive and reliable operation.'
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Zero-Log Privacy',
    description: 'A non-broadcast privacy protocol ensures your personal usage data is never constantly broadcast, requiring explicit user activation.'
  }
];

export const COMPARISON_SPECS: ComparisonSpec[] = [
  { feature: 'Primary Actuation', core: 'Single Brushed ERM Motor', flow: 'Single Premium Z-Axis LRA Motor', synapse: 'Multi-LRA Array (3-4 Units)' },
  { feature: 'Haptic Fidelity', core: 'Low (Buzz/Rumble)', flow: 'Medium (Precise Haptic Alerts)', synapse: 'High (Localized, Real-time Force Fields)' },
  { feature: 'AI Processing', core: 'Cloud NLU (API reliant)', flow: 'Hybrid Edge NLU (Intent Classification)', synapse: 'Full Edge NLU (Dedicated AI Accelerator)' },
  { feature: 'Sensing/Feedback', core: 'None', flow: 'Basic Over-Current Sensing', synapse: 'Integrated MEMS Pressure/Temp Sensor Array' },
  { feature: 'Connectivity', core: 'BLE 5.0 (Basic Data)', flow: 'BLE 5.2 (Low Energy Audio/Data)', synapse: 'BLE 5.3 (High Throughput, Ultra-Low Power)' },
  { feature: 'Power/Charging', core: 'USB-C (Wired Only)', flow: 'USB-C + Basic Qi Wireless', synapse: 'USB-C PD + Qi2 Certified Wireless' },
  { feature: 'Material Finish', core: 'Matte SPI C Finish', flow: 'EDM Micro-Texture Soft-Touch', synapse: 'Custom "Matte Skin" Finish' },
];

export const DETAILED_TECHNOLOGIES: DetailedTechnology[] = [
  {
    category: 'Materials & Durability',
    items: [
      {
        icon: 'fa-solid fa-flask-vial',
        title: 'Medical-Grade Liquid Silicone Rubber (LSR)',
        description: 'Ensures all product contact surfaces are biocompatible, hypoallergenic, and body-safe, while offering excellent cost efficiency in mass production.',
      },
      {
        icon: 'fa-solid fa-water',
        title: 'IPX7 Waterproofing',
        description: 'Advanced NanoProof® coatings on the PCB provide superior waterproofing without complex mechanical gaskets, ensuring reliability and easy sanitization.',
      },
      {
        icon: 'fa-solid fa-layer-group',
        title: 'Premium Surface Finishes',
        description: 'Each tier features a distinct, non-electronic finish to enhance perceived value, from the standard Matte SPI C to the silky, soft-touch "Matte Skin" on the Synapse.',
      },
    ],
  },
  {
    category: 'Interface & Connectivity',
    items: [
      {
        icon: 'fa-solid fa-fingerprint',
        title: 'Capacitive Sensing Controls',
        description: 'Replaces traditional physical buttons with cost-neutral, waterproof, and highly durable capacitive traces on the PCB for a seamless and reliable user interface.',
      },
      {
        icon: 'fa-solid fa-bluetooth-b',
        title: 'Bluetooth Low Energy (BLE) 5.2+',
        description: 'Utilizes modern BLE standards for low power consumption, compact size, and robust interoperability, with the Synapse tier featuring BLE 5.3 for ultra-low power and high throughput.',
      },
      {
        icon: 'fa-solid fa-shield-halved',
        title: 'Zero-Log, Non-Broadcast Privacy',
        description: 'A mandatory security posture where the device only advertises for connection upon explicit user activation, preventing constant signal broadcasting and protecting intimate usage data.',
      },
    ],
  },
  {
    category: 'Performance & AI',
    items: [
      {
        icon: 'fa-solid fa-microchip',
        title: 'Tiered AI Processing',
        description: 'A Cloud-Augmented Edge AI model scales from cloud-only NLU on the Core to Full Edge NLU with a dedicated AI Accelerator on the Synapse, balancing cost with latency.',
      },
      {
        icon: 'fa-solid fa-bolt',
        title: 'Advanced Haptic Actuation',
        description: 'Upgrades from a basic Brushed ERM Motor in the Core to a precision Z-Axis LRA in the Flow, and a Multi-LRA Array in the Synapse for complex, localized force fields.',
      },
      {
        icon: 'fa-solid fa-brain',
        title: 'Bio-Sensory Feedback',
        description: 'The Synapse model integrates MEMS Pressure and Temperature Sensor Arrays, enabling Adaptive Haptics that dynamically modulate patterns based on real-time physiological data.',
      },
    ],
  },
  {
    category: 'Power Systems',
    items: [
      {
        icon: 'fa-solid fa-battery-full',
        title: 'High-Density Li-Poly Batteries',
        description: 'Each tier is equipped with a Lithium-Polymer battery, scaling in capacity from 1000mAh in the Core to 3000mAh in the Synapse to support advanced features.',
      },
      {
        icon: 'fa-solid fa-charging-station',
        title: 'Advanced Charging Solutions',
        description: 'The series evolves from USB-C wired charging on the Core to including Qi wireless on the Flow, and culminating in USB-C Power Delivery and Qi2 Certified wireless charging for the Synapse.',
      },
    ],
  },
];
