import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Briefcase, Code, Cpu } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('angyuquan12@gmail.com');
      alert('Email copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/30 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span 
              className="text-xl font-bold cursor-pointer hover:text-blue-400 transition-colors"
              onClick={handleHomeClick}
            >
              About Me!
            </span>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#experience" onClick={handleNavClick} className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" onClick={handleNavClick} className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" onClick={handleNavClick} className="hover:text-blue-400 transition-colors">Skills</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-md">
              <a href="#experience" onClick={handleNavClick} className="block px-3 py-2 hover:bg-gray-700 rounded-md">Experience</a>
              <a href="#projects" onClick={handleNavClick} className="block px-3 py-2 hover:bg-gray-700 rounded-md">Projects</a>
              <a href="#skills" onClick={handleNavClick} className="block px-3 py-2 hover:bg-gray-700 rounded-md">Skills</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div 
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80")'
            }}
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Ang Yu Quan</h1>
          <p className="text-xl text-gray-400 mb-8">angyuquan12@gmail.com</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/YuQuanang" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yu-quan-ang-ba4b66158" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <button 
              onClick={copyEmail}
              className="p-2 hover:text-blue-400 transition-colors"
              title="Click to copy email"
            >
              <Mail size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Briefcase className="mr-4 text-blue-400" size={32} />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            {/* Synapxe Experience */}
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Project Manager Intern</h3>
                <span className="text-blue-400">Jan 2025 - Jun 2025</span>
              </div>
              <p className="text-gray-400 mb-4">Synapxe</p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Participated in the integration of new NGEMR system with the current SingHealth Queue Management System</li>
                <li>Orchestrated cross-functional collaboration with vendors and clinical users, executing system upgrades and software deployments with 100% on-time delivery through waterfall methodology</li>
                <li>Involved in the full-cycle SDLC activities such as user requirements, system integration, deployment, stakeholder management while aligning to multiple stakeholders</li>
                <li>Delivered complex projects under pressure by maintaining parallel workstreams, adapting to evolving scope changes, and implementing process optimizations that reduced implementation delays by 20%</li>
              </ul>
            </div>

            {/* LTA Experience */}
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Data Analyst</h3>
                <span className="text-blue-400">May 2024 - Jul 2024</span>
              </div>
              <p className="text-gray-400 mb-4">Land Transport Authority</p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Collaborated with data engineers to analyst and present data onto dashboards via specially curated Python scripts</li>
                <li>Automate and streamline existing Python scripts leading to significant reduction in time taken to analyse data</li>
                <li>Developed strong soft skills by participating in weekly stand-up meetings and presenting findings to cross-functional groups and management</li>
                <li>Demonstrated exceptional time management skills during internship, meeting tight deadlines while maintaining outstanding quality in all responsibilities</li>
              </ul>
            </div>

            {/* NETS Experience */}
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">UAT Tester</h3>
                <span className="text-blue-400">Feb 2022 - Jul 2022</span>
              </div>
              <p className="text-gray-400 mb-4">NETS</p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Collaborated as an integral member of a cross-functional team responsible for diagnosing and evaluating UAT systems, ensuring reliability and functionality through test cases</li>
                <li>Utilized multiple UAT equipment and tools, performs a strong technical aptitude and adaptability in working with different testing environments and software applications with a team of 4 members</li>
                <li>Acquired expertise in using Excel to leverage its functionalities for test data management, result analysis, and reporting</li>
                <li>Showcased strong problem-solving skills and attention to detail in identifying issues encountered during UAT, leading to multiple defect resolution improving usability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Code className="mr-4 text-blue-400" size={32} />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Anime Score Prediction Project */}
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <h3 className="text-xl font-bold mb-2">Anime Score Prediction</h3>
              <p className="text-gray-300 mb-4">
                A data science project leveraging MyAnimeList API data to predict anime success and viewer scores. 
                Features comprehensive data analysis, multiple machine learning models, and practical applications 
                for both anime studios and viewers.
              </p>
              <div className="space-y-4 mb-4">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Key Components:</h4>
                  <ul className="text-gray-300 list-disc list-inside space-y-1">
                    <li>Data preparation with feature engineering</li>
                    <li>Multiple regression and classification models</li>
                    <li>K-means clustering for anime grouping</li>
                    <li>Success factor analysis</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm">Jupyter Notebook</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm">Data Analysis</span>
              </div>
            </div>

            {/* Golf Ball Tracer WebApp */}
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <h3 className="text-xl font-bold mb-2">Golf Ball Tracer WebApp</h3>
              <p className="text-gray-300 mb-4">
                Golf Ball Tracer is a web application that allows golfers to upload their swing videos and automatically trace the ball flight path. Analyze your golf swing with precision, customize the tracer appearance, and export your traced videos to share with friends or coaches!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm">Material UI</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm">OpenCV.js</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm">Vite</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm">FFmpeg.wasm</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Cpu className="mr-4 text-blue-400" size={32} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Skill items will go here */}
            <div className="p-4 bg-gray-800/50 rounded-lg text-center backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <p className="font-semibold">JavaScript</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg text-center backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <p className="font-semibold">Excel</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg text-center backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <p className="font-semibold">Java</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg text-center backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <p className="font-semibold">Python</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg text-center backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <p className="font-semibold">Vue.js</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg text-center backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <p className="font-semibold">C/C++</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg text-center backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <p className="font-semibold">Node.js</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Ang Yu Quan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;