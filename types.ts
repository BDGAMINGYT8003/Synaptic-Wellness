export interface ProductTier {
  name: string;
  slug: string;
  price: number;
  description: string;
  longDescription: string;
  accentColor: string;
  features: {
    actuation: string;
    ai: string;
    sensing: string;
    power: string;
    finish: string;
  };
}

export interface CoreTechnology {
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonSpec {
  feature: string;
  core: string;
  flow: string;
  synapse: string;
}

export interface DetailedTechnology {
  category: string;
  items: {
    icon: string;
    title: string;
    description: string;
    details?: string[];
  }[];
}
