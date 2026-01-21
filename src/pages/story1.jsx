import { motion, useScroll, useTransform } from "framer-motion";

export default function StressBasedScrollStory() {
  return (
    <main className="w-full text-neutral-900">
      <SectionHero />
      <SectionMotivation />
      <SectionProblem />
      <SectionCoreIdea />
      <SectionPipeline />
      <SectionInterpretation />
      <SectionIteration />
      <SectionResults />
      <SectionDesignSpace />
      <SectionImplications />
      <SectionFuture />
      <SectionCTA />
    </main>
  );
}

function SectionWrapper({ children }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-5xl w-full">{children}</div>
    </section>
  );
}

function SectionHero() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-semibold mb-6">
          Designing Form by Listening to Stress
        </h1>
        <p className="text-xl text-neutral-600">
          A stress-driven computational design method integrating performance into early exploration.
        </p>
        <div className="mt-12 h-64 bg-gradient-to-r from-blue-500 via-green-400 to-red-500 rounded-2xl opacity-80" />
      </motion.div>
    </SectionWrapper>
  );
}

function SectionMotivation() {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Stress Should Drive Design</h2>
          <p className="text-lg text-neutral-700">
            Conventional workflows treat stress as a verification step rather than a generative signal.
          </p>
        </div>
        <div className="h-64 bg-neutral-100 rounded-2xl flex items-center justify-center shadow">
          <p className="text-neutral-500">Workflow Diagram</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

function SectionProblem() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">The Gap Between Analysis and Generation</h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
          Structural solvers and generative tools exist independently, but real-time stress feedback rarely informs geometry creation.
        </p>
      </div>
    </SectionWrapper>
  );
}

function SectionCoreIdea() {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Stress as a Design Signal</h2>
          <p className="text-lg text-neutral-700">
            Instead of asking whether a design is safe, we ask how stress wants the design to evolve.
          </p>
        </div>
        <div className="h-64 bg-gradient-to-br from-red-400 to-blue-400 rounded-2xl opacity-80" />
      </div>
    </SectionWrapper>
  );
}

function SectionPipeline() {
  const steps = [
    "Initial Geometry",
    "Stress Analysis",
    "Stress Interpretation",
    "Geometry Update",
    "Iteration",
  ];

  return (
    <SectionWrapper>
      <div>
        <h2 className="text-3xl font-semibold mb-8 text-center">Method Overview</h2>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 p-6 bg-neutral-100 rounded-2xl shadow"
            >
              <p className="font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function SectionInterpretation() {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Stress Interpretation Strategy</h2>
          <ul className="space-y-3 text-lg text-neutral-700">
            <li>Compression → thickening</li>
            <li>Tension → alignment</li>
            <li>Low stress → material reduction</li>
          </ul>
        </div>
        <div className="h-64 bg-neutral-200 rounded-2xl flex items-center justify-center">
          <p className="text-neutral-500">Stress → Geometry Diagram</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

function SectionIteration() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Iterative Evolution</h2>
        <div className="h-64 bg-gradient-to-r from-blue-400 via-green-400 to-red-400 rounded-2xl" />
        <p className="mt-6 text-lg text-neutral-700">
          Stress redistributes and smooths across iterations, improving performance.
        </p>
      </div>
    </SectionWrapper>
  );
}

function SectionResults() {
  return (
    <SectionWrapper>
      <div>
        <h2 className="text-3xl font-semibold mb-8 text-center">Quantitative Results</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-56 bg-neutral-100 rounded-2xl flex items-center justify-center">
            Stress Reduction Chart
          </div>
          <div className="h-56 bg-neutral-100 rounded-2xl flex items-center justify-center">
            Material Efficiency Chart
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function SectionDesignSpace() {
  return (
    <SectionWrapper>
      <div>
        <h2 className="text-3xl font-semibold mb-8 text-center">Design Space Exploration</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-32 bg-gradient-to-br from-neutral-300 to-neutral-100 rounded-xl"
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function SectionImplications() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Implications for Computational Design</h2>
        <ul className="space-y-3 text-lg text-neutral-700">
          <li>Early-stage performance integration</li>
          <li>Bridging engineering and generative design</li>
          <li>Structurally expressive outcomes</li>
        </ul>
      </div>
    </SectionWrapper>
  );
}

function SectionFuture() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Future Directions</h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
          Multi-material systems, fabrication-aware constraints, real-time feedback, and ML integration.
        </p>
      </div>
    </SectionWrapper>
  );
}

function SectionCTA() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-6">Let’s Collaborate</h2>
        <p className="text-lg text-neutral-700 mb-8">
          Interested in stress-aware computational design systems?
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-neutral-900 text-white rounded-xl">Read Paper</button>
          <button className="px-6 py-3 bg-neutral-200 rounded-xl">Contact</button>
        </div>
      </div>
    </SectionWrapper>
  );
}
