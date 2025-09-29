import React from 'react';
import BackButton from '../components/BackButton';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">{title}</h2>
    <div className="space-y-5 text-gray-300 leading-relaxed">{children}</div>
  </section>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <div className="space-y-4 text-gray-400 border-l-2 border-white/10 pl-6">{children}</div>
    </div>
  );

const StyledTable: React.FC<{ headers: string[]; rows: (string | number)[][]; }> = ({ headers, rows }) => (
    <div className="my-6 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-white/10 rounded-2xl">
            <table className="min-w-full divide-y divide-white/10">
                <thead className="bg-[#1a1a1a]">
                <tr>
                    {headers.map(header => (
                        <th key={header} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white sm:pl-6">{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-[#121212]/50">
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className={`whitespace-normal px-3 py-4 text-sm ${cellIndex === 0 ? 'font-medium text-white sm:pl-6' : 'text-gray-400'}`}>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
);


const WhitepaperPage: React.FC = () => {
  return (
    <div className="bg-black/20">
      <div className="container mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <div className="text-center mb-16">
            <p className="text-purple-400 font-semibold">2026 Prototype Documentation</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text mt-2">
              The Synaptic Pleasure Series
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Product Architecture and Cost Engineering for AI-Integrated Wellness Devices
            </p>
          </div>

          <Section title="I. Executive Summary: Strategic Positioning and Financial Feasibility">
            <p>The development of the Synaptic Pleasure Series is structured around a rigorous Design-to-Cost (DTC) methodology, necessitated by the mandate to maintain only a 1% profit margin across all three tiers—Core ($50), Flow ($100), and Synapse ($200). Achieving this minimal margin while integrating advanced technologies requires extreme operational efficiency, prioritizing component volume sourcing, maximizing material efficiency, and optimizing assembly labor within the established framework of Chinese manufacturing. The successful execution of this financial model relies heavily on maximizing production volume to achieve aggressive amortization of Non-Recurring Engineering (NRE) costs and securing favorable pricing for specialized components, particularly emerging Li-Poly battery technologies and next-generation AI processing units sourced from China’s rapidly expanding semiconductor sector.</p>
            <SubSection title="The Cloud-Augmented Edge AI Mandate">
                <p>The defining feature of the Synaptic Series—real-time conversational and adaptive Natural Language Understanding (NLU) integration—cannot be achieved solely through cloud processing. Global energy demand, significantly driven by generative AI data centers, is predicted to reach record levels by 2026. Relying exclusively on cloud LLM APIs for real-time control would introduce prohibitively high operational costs that would swiftly erode the narrow 1% profit margin. Furthermore, the inherent latency associated with network round-trip times would render any dynamic haptic control functionally unacceptable.</p>
                <p>This environmental and technical constraint mandates a Cloud-Augmented Edge AI model for the series. For the higher-tiered Flow and Synapse models, the financial viability hinges on the predicted rapid expansion of China’s domestic AI chip production. China is aiming to triple its AI processor output by 2026, which stabilizes the pricing and availability of low-power Network Processing Units (NPUs) optimized for domestic ecosystems. This rapid increase in supply is the crucial factor that allows the integration of dedicated edge processing into the $100 and $200 price points, circumventing the financial barriers posed by high-cost Western components. The $50 Core model, unable to afford dedicated Edge hardware, is thus structurally limited to a cloud-dependent, high-latency user experience.</p>
            </SubSection>
          </Section>

          <Section title="II. Core Technology Platform: The Common Foundation">
            <p>Every product in the Synaptic Pleasure Series is built upon a common foundation that guarantees material safety, industrial durability, and robust data security.</p>
            <SubSection title="Material Science and Biocompatibility">
                <p>Safety is paramount, requiring all product contact surfaces to utilize Medical-Grade Liquid Silicone Rubber (LSR). This choice not only guarantees biocompatibility but also offers excellent cost efficiency in mass production. Bulk LSR raw material is readily available from Chinese suppliers at competitive rates, ensuring a very low raw material cost per unit. To ensure the minimal 1% margin is achievable, this high tooling cost must be aggressively amortized over exceptionally high initial production volumes.</p>
            </SubSection>
            <SubSection title="Enclosure, Durability, and Interface Design">
                <p>All devices are engineered to meet the IPX7 standard, requiring survival after immersion in 1 meter of water for 30 minutes. Waterproofing is achieved through advanced PCB protection utilizing NanoProof® coatings. This technique minimizes mechanical complexity and reduces overall manufacturing cost.</p>
                <p>Traditional physical control buttons are avoided. The Synaptic Series utilizes Capacitive Sensing integrated directly via traces on the Printed Circuit Board (PCB), an approach that is inherently waterproof, highly durable, and easily scalable.</p>
                <p>Surface finish is a crucial non-electronic differentiator that separates the tiers. By transitioning from standard matte finishes to finer textures like EDM Spark Textures or custom Matte Skin, a silky, soft-touch feel is achieved that enhances perceived value.</p>
            </SubSection>
            <SubSection title="Connectivity and Data Security Architecture">
                <p>Communication relies on Bluetooth Low Energy (BLE) 5.2 or newer. A stringent security posture is mandatory, implementing a Zero-Log, Non-Broadcast Privacy Protocol. The device only initiates advertising upon explicit, intentional physical activation by the user. This proactive mitigation strategy ensures that intimate usage patterns and locations are not constantly broadcast, which is crucial for consumer trust and safety.</p>
            </SubSection>
          </Section>

          <Section title="III. The Tiered Product Architecture and Cost Allocation">
                <p>The three models share a consistent industrial design language but feature aggressive cost differentiation across four primary technology vectors: Actuation (Haptics), Processing (AI), Sensing, and Power Systems.</p>
                <StyledTable 
                    headers={['Feature', 'Synaptic Core ($50 MSRP)', 'Synaptic Flow ($100 MSRP)', 'Synaptic Synapse ($200 MSRP)']}
                    rows={[
                        ['Primary Actuation', 'Single Brushed ERM Motor', 'Single Premium Z-Axis LRA Motor', 'Multi-LRA Array (3-4 Units)'],
                        ['Haptic Fidelity', 'Low (Buzz/Rumble)', 'Medium (Precise Haptic Alerts)', 'High (Localized, Real-time Force Fields)'],
                        ['AI Processing', 'Cloud NLU (API reliant)', 'Hybrid Edge NLU (Intent Classification)', 'Full Edge NLU (Dedicated AI Accelerator)'],
                        ['Sensing/Feedback', 'None (Basic Vibration Control)', 'Basic Over-Current Sensing', 'Integrated MEMS Pressure/Temp Sensor Array'],
                        ['Connectivity', 'BLE 5.0 (Basic Data)', 'BLE 5.2 (Low Energy Audio/Data)', 'BLE 5.3 (High Throughput, Ultra-Low Power)'],
                        ['Power/Charging', 'USB-C (Wired Only)', 'USB-C + Basic Qi Wireless Charging', 'USB-C PD + Qi2 Certified Wireless Charging'],
                        ['Material Finish', 'Matte SPI C Finish (Standard)', 'EDM Micro-Texture Soft-Touch Finish', 'Custom "Matte Skin" Finish (Highest Quality)'],
                    ]}
                />
                <StyledTable
                    headers={['Component Category', 'Synaptic Core ($49.50 Target COGS)', 'Synaptic Flow ($99.00 Target COGS)', 'Synaptic Synapse ($198.00 Target COGS)']}
                    rows={[
                        ['1. Enclosure (LSR, Tooling, Nano-Coating)', '$9.50 (SPI C finish)', '$13.50 (EDM texture)', '$18.00 (Custom skin finish)'],
                        ['2. Actuation/Haptics (Motor + Driver)', '$3.00 (Brushed ERM)', '$13.00 (LRA + dedicated haptic IC)', '$45.00 (4x LRA Array + advanced driver ICs)'],
                        ['3. Processing Core (MCU, Flash, AI Chip)', '$4.50 (ULP MCU)', '$15.00 (ULP MCU + Basic NPU)', '$45.00 (High-Density SoC + Edge AI Accelerator)'],
                        ['4. Power (Battery, Charging Circuit, Protection)', '$3.50 (1000mAh Li-Poly, USB-C)', '$7.00 (2000mAh Li-Poly, Basic Qi Coil)', '$18.00 (3000mAh Li-Poly, Qi2 Coil + PD Circuitry)'],
                        ['5. Sensing & Interface (Capacitive, MEMS)', '$1.00 (Capacitive Traces Only)', '$2.00 (Capacitive + Basic Thermal)', '$9.00 (Capacitive + MEMS Pressure/Temp Array)'],
                        ['6. PCB, Wiring, Assembly Labor, QA', '$12.00 (Basic Assembly Labor)', '$18.00 (Moderate complexity assembly)', '$28.00 (Complex assembly, high QA)'],
                        ['7. Packaging (Discreet Luxury) & Manuals', '$4.00 (Basic corrugated)', '$6.00 (Recycled premium cardboard)', '$10.00 (Fabric-covered box, high-end inserts)'],
                        ['8. Freight, Logistics, & Overhead (5% of Subtotal)', '$2.00', '$3.50', '$5.50'],
                        ['Total Estimated COGS (Approx.)', '$39.50', '$78.00', '$178.50'],
                    ]}
                />
            </Section>

            <Section title="VIII. Conclusion and 2027 Roadmap">
                <p>The Synaptic Pleasure Series successfully outlines a technically aggressive and financially feasible product strategy. The analysis confirms that the highly constrained 1% profit margin is achievable across all tiers due to optimized BOM from high-volume Chinese manufacturing. The Core model acts as a market entry point, while the Flow and Synapse models establish a true technological advantage through LRA haptics and dedicated Edge AI processing, which maximizes performance and mandates user data privacy protection.</p>
                <SubSection title="Recommendations for Sustaining Innovation (2027 Roadmap)">
                    <ul className="list-disc list-inside space-y-3">
                        <li><strong className="text-white">Next-Generation Haptics:</strong> Research advanced piezoelectric or micro-actuator technologies to deliver true tactile simulation.</li>
                        <li><strong className="text-white">Autonomous Energy Management:</strong> Integrate AI algorithms into the MCUs to dynamically manage NPU workload and maximize battery life.</li>
                        <li><strong className="text-white">Privacy Certification:</strong> Formally validate the "Zero-Log Security Protocol" through independent third-party security audits.</li>
                        <li><strong className="text-white">Connectivity Advancement:</strong> Monitor and adopt ultra-low-power BLE 5.3+ and eventual 6G breakthroughs to reduce latency and power drain.</li>
                    </ul>
                </SubSection>
            </Section>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperPage;
