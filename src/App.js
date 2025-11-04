import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-bold mb-4">
          Lohith Movva
        </motion.h1>
        <p className="text-xl max-w-xl">
          Aspiring Data Analyst passionate about transforming raw information into clear insights. Curious, creative, and always exploring new ways to connect data with real stories.
        </p>
      </section>

      {/* Skills */}
      <section className="px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {[
            "Python","SQL","Power BI","Excel","Tableau","Data Cleaning",
            "Visualization","Machine Learning Basics","Git/GitHub","ETL Concepts"
          ].map((skill) => (
            <motion.div whileHover={{ scale: 1.08 }} key={skill} className="bg-white shadow-md rounded-2xl py-4 px-3 text-sm font-medium">
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Personal Finance Tracker (Frontend)", link: "https://github.com/lohith-movva/personal-finance-tracker-frontend" },
            { name: "Personal Finance Tracker (Backend)", link: "https://github.com/lohith-movva/personal-finance-tracker-backend" },
            { name: "Lip Sync System", link: "https://github.com/lohith-movva/lip-sync-system" }
          ].map((proj) => (
            <div key={proj.name} className="bg-white rounded-2xl shadow-md p-6 text-center">
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">
                {proj.name}
              </a>
            </div>
          ))}
        </div>
        <div className="text-center text-gray-600 mt-6 italic">More projects coming soon — building dashboards & ML models.</div>
      </section>

      {/* Journey */}
      <section className="px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">My Journey</h2>
        <div className="max-w-xl mx-auto space-y-6">
          {[ 
            { year: "2023", text: "Graduated B.Tech in Computer Science (India)" },
            { year: "2024", text: "Completed Master's in Computer Science (USA)" },
            { year: "2024", text: "Built Finance Tracker & Lip Sync ML System" },
            { year: "2025", text: "Pursuing Data Analyst / Software roles" }
          ].map((step) => (
            <div key={step.year} className="flex items-start space-x-4">
              <div className="text-orange-500 font-bold text-lg">{step.year}</div>
              <div className="text-gray-700">{step.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-600 mb-6">Open to data roles, internships, and collaborations.</p>
        <div className="space-x-6">
          <a className="underline" href="https://linkedin.com/in/lohith-movva">LinkedIn</a>
          <a className="underline" href="https://github.com/lohith-movva">GitHub</a>
          <a className="underline" href="mailto:lohithmovva7@gmail.com">Email</a>
        </div>
      </section>
    </div>
  );
}

