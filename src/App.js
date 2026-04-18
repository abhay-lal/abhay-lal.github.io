import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Header';
import Hero from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const PORTFOLIO_DATA = {
  meta: {
    name: "Abhay Lal",
    role: "AI / ML Researcher",
    location: "San Diego, CA",
    institution: "UC San Diego",
    status: "Available for Summer 2026",
    email: "abhay.lal.cs@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/lal-abhay/",
      github: "https://github.com/abhay-lal",
      scholar: "https://scholar.google.com/citations?user=TsTzc9AAAAAJ",
      x: "https://x.com/abbylaal",
      resume: "https://drive.google.com/file/d/1casu6Y7gu1fHugDdG9rNaMCmcRVclvwq/view?usp=sharing"
    }
  },
  about: {
    lead: "I build ML systems that sit between research and production — from neuroimaging pipelines to multimodal recommendation benchmarks to guardrails for LLM agents.",
    body: "Currently a Master's student in Computer Science at UC San Diego, working as a Graduate Research Data Scientist at UCSD Health. My work spans AI safety, healthcare AI, neuroimaging, and large multimodal models. Before UCSD, I interned at Wells Fargo, Samsung R&D, and IIT Bombay — building ETL pipelines, forecasting models, and CV systems used in production.",
    focus: ["AI Safety", "Neuroimaging ML", "Healthcare AI", "Multimodal LLMs", "Computer Vision"]
  },
  experience: [
    {
      role: "Graduate Research Data Scientist",
      org: "UC San Diego Health",
      loc: "San Diego, CA",
      date: "Jan 2025 — Present",
      current: true,
      tags: ["Python", "SHAP", "MRI"],
      bullets: [
        "Refactored 5,000+ lines of MATLAB neuroimaging code into modular Python ML pipelines for scalable experimentation.",
        "Processed 10K+ multimodal MRI scans integrating imaging, genetic, and environmental predictors for large-scale analysis.",
        "Built reproducible modeling pipelines across 5K+ participants using group-aware cross-validation and covariate correction.",
        "Trained Logistic Regression and SVM models combining 15+ multimodal feature sets for neuropsychiatric prediction.",
        "Applied SHAP explainability to quantify predictor importance, achieving 0.70 AUC with multimodal stacked classifiers."
      ]
    },
    {
      role: "Research Intern",
      org: "IIT Bombay",
      loc: "Mumbai, IN",
      date: "Jan 2024 — Jun 2024",
      tags: ["YOLOv8", "Docker", "CUDA"],
      bullets: [
        "Designed YOLOv8 and Docker computer vision pipelines on NVIDIA GPUs; processed 30k+ frames efficiently.",
        "Cut training time from 5 to 3 hrs/run; delivered REST microservices for real-time engagement signals.",
        "Analyzed 80k+ study-log entries with valence-arousal modeling to quantify engagement signals."
      ]
    },
    {
      role: "Data Science Intern",
      org: "Wells Fargo",
      loc: "Hyderabad, IN",
      date: "Jun 2023 — Aug 2023",
      tags: ["FastAPI", "SpaCy", "LDA"],
      bullets: [
        "Engineered scalable Python ETL pipelines using Pandas and SpaCy, processing 2,500+ FHA policy documents.",
        "Deployed LDA topic modeling microservice via FastAPI; achieved 0.78 coherence score for text analytics.",
        "Reduced manual review time from 4 hrs to 25 mins via regex-based topic tagging and structured analytics."
      ]
    },
    {
      role: "Research Intern",
      org: "Samsung R&D Institute",
      loc: "Bangalore, IN",
      date: "Dec 2022 — Aug 2023",
      tags: ["SARIMA", "LSTM", "Forecasting"],
      bullets: [
        "Performed time-series EDA (decomposition, outliers, stationarity) on sales data across 12+ product lines.",
        "Built SARIMA and LSTM forecasting models with sliding-window validation; improved MAE by 15%.",
        "Awarded Certificate of Excellence plus $1,200 PRISM reward for outstanding model performance."
      ]
    }
  ],
  education: [
    {
      role: "M.S. Computer Science",
      org: "University of California, San Diego",
      loc: "San Diego, CA",
      date: "2024 — 2026",
      current: true,
      tags: ["GPA 3.92"],
      bullets: ["Focus: Machine Learning, AI Safety, Multimodal Models.", "Graduate Research at UCSD Health Neuroimaging."]
    },
    {
      role: "B.Tech Computer Science",
      org: "SRM Institute of Science & Technology",
      loc: "Chennai, IN",
      date: "2020 — 2024",
      tags: ["CGPA 9.56/10"],
      bullets: ["Final CGPA 9.56.", "6 peer-reviewed publications as undergraduate author."]
    }
  ],
  projects: [
    {
      title: "Visper",
      sub: "Voice-first RAG assistant for GitHub repos",
      desc: "Paste a GitHub URL and talk to your code in real time. Answers are grounded with citations and links back to files. Turns JSON summaries into slides with synchronized TTS narration and an MP4 output — designed with accessibility in mind for blind developers.",
      tags: ["RAG", "Gemini", "FastAPI", "TTS"],
      link: "https://github.com/abhay-lal/Visper",
      size: "featured", year: "2025"
    },
    {
      title: "AI Safety Protocol",
      sub: "Multi-layer LLM guardrails",
      desc: "Code-aware guardrail system with regex checks, Llama Guard 4, and Cerebras inference. Detects prompt injection, jailbreak, and backdoor threats in agentic workflows with multi-agent validation and a real-time telemetry dashboard.",
      tags: ["LLM", "Safety", "Llama Guard"],
      link: "https://github.com/abhay-lal/AI-Safety-Protocol",
      size: "std", year: "2025"
    },
    {
      title: "Fire-Ready Forests",
      sub: "ICPP 2025 data challenge — winner",
      desc: "Ensemble models for hierarchical vegetation classification on the National Data Platform. Achieved 96.9% test precision on species-level classification for wildfire fuel characterization.",
      tags: ["Ensembles", "NDP", "Winner"],
      link: "https://github.com/abhay-lal/fire-ready-forests-agni",
      size: "wide", year: "2025"
    },
    {
      title: "MusiCRS",
      sub: "Audio-centric conversational recommendation benchmark",
      desc: "Novel multimodal dataset combining Reddit dialogues with YouTube audio via FFmpeg. Benchmarked Qwen-2.5-7B and other LLMs under entity-linked conversational recommendation. Published as arXiv preprint.",
      tags: ["Multimodal", "Qwen", "Benchmark"],
      link: "https://arxiv.org/abs/2509.19469",
      size: "sm", year: "2025"
    },
    {
      title: "TinyML Owl",
      sub: "Sub-0.5MB CNNs for acoustic monitoring",
      desc: "Built quantized CNNs in PyTorch for owl-call classification. Exported to ONNX/TFLite, deployed on STM32 with X-Cube.AI and TFLite Micro for real-time, low-power field monitoring. Collaboration with E4E and San Diego Zoo Wildlife Alliance.",
      tags: ["TinyML", "STM32", "Edge"],
      link: "https://github.com/abhay-lal/TinyML-Owl",
      size: "sm", year: "2024"
    },
    {
      title: "BlogPod",
      sub: "Podcast → blog pipeline with LLaMA 3.1",
      desc: "Convert podcast transcripts into structured blog posts via prompt engineering across LLaMA 3.1 8B/70B/405B. Evaluated with Gemini-1.5-Flash on clarity, tone, and engagement.",
      tags: ["LLaMA 3.1", "Prompting"],
      link: "https://github.com/abhay-lal/BlogPod",
      size: "sm", year: "2024"
    },
    {
      title: "Alveoli",
      sub: "Chest X-ray triage in seconds",
      desc: "MobileNetV2-based classifier that detects COVID-19, pneumonia, and tuberculosis from chest X-rays. Deployed as a secure web + mobile application.",
      tags: ["MobileNet", "Medical Imaging"],
      link: "https://github.com/abhay-lal/Alveoli",
      size: "sm", year: "2023"
    },
    {
      title: "ResPas",
      sub: "Resume → role classifier",
      desc: "Multi-label classification model combining deep learning and NLP to route resumes into job categories.",
      tags: ["NLP", "Classification"],
      link: "https://github.com/abhay-lal/ResumeParserClassifier",
      size: "sm", year: "2023"
    }
  ],
  publications: [
    {
      year: "2025",
      title: "MusiCRS: Benchmarking Audio-Centric Conversational Recommendation",
      venue: "arXiv preprint",
      venueRef: "arXiv:2509.19469",
      status: "Preprint",
      authors: "Rohan Surana, Amit Namburi, Gagan Mundada, Abhay Lal, Zachary Novack, Julian McAuley, Junda Wu",
      link: "https://arxiv.org/abs/2509.19469"
    },
    {
      year: "2025",
      title: "Hierarchical Vegetation Classification for Wildfire Risk Assessment using the National Data Platform",
      venue: "ICPP Workshops '25",
      venueRef: "54th Intl. Conf. on Parallel Processing",
      status: "Published",
      authors: "Yash Vishe, Abhay Lal, Guruprasad Parasnis",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TsTzc9AAAAAJ"
    },
    {
      year: "2024",
      title: "Automated screening of hip X-rays for osteoporosis by Singh's Index using machine learning algorithms",
      venue: "Indian Journal of Orthopaedics",
      venueRef: "10.1007/s43465-024-01246-9",
      status: "Published",
      authors: "Vijaya Kalavakonda, Sameer Mohamed, Abhay Lal, Sathish Muthu",
      link: "https://doi.org/10.1007/s43465-024-01246-9"
    },
    {
      year: "2024",
      title: "Unsupervised Machine Learning for Osteoporosis Diagnosis Using Singh Index Clustering on Hip Radiographs",
      venue: "arXiv preprint",
      venueRef: "arXiv:2411.15253",
      status: "Preprint",
      authors: "V. Madhivanan, K. Vijaya, Abhay Lal, S. Rithika, S. K. Subramaniam, M. Sameer",
      link: "https://arxiv.org/abs/2411.15253"
    },
    {
      year: "2023",
      title: "Human gait recognition using cross-view micro-gait dataset with lightweight MobileNet",
      venue: "RAEEUCCI 2023",
      venueRef: "10.1109/RAEEUCCI57140.2023.10134510",
      status: "Published",
      authors: "Haripreeth D. Avarur, Abhay Lal, Aryan Sinha, G. N. Vyshnavi, Shruthi Kannan",
      link: "https://ieeexplore.ieee.org/abstract/document/10134510"
    },
    {
      year: "2023",
      title: "Gait speed based individual recognition model using deep 2-D convolutional neural network",
      venue: "ICCCI 2023",
      venueRef: "10.1109/ICCCI56745.2023.10128342",
      status: "Published",
      authors: "Abhay Lal, P. Nithyakani",
      link: "https://ieeexplore.ieee.org/abstract/document/10128342"
    },
    {
      year: "2023",
      title: "ALATS: Analysis of localization algorithms in terrestrial surveillance bots",
      venue: "IEEE CONECCT 2023",
      venueRef: "10.1109/CONECCT57959.2023.10234740",
      status: "Published",
      authors: "Vaishnavi Moorthy, Darshil Shah, Shresth Kapoor, Srinivas TB, Abhay Lal",
      link: "https://ieeexplore.ieee.org/abstract/document/10234740"
    }
  ],
  skills: [
    {
      title: "AI & Data Science",
      items: [
        { n: "Computer Vision", p: 92 },
        { n: "Natural Language Processing", p: 85 },
        { n: "Probability & Statistics", p: 85 },
        { n: "Generative AI", p: 60 }
      ]
    },
    {
      title: "Programming",
      items: [
        { n: "Python", p: 95 },
        { n: "C / C++", p: 90 },
        { n: "SQL", p: 85 }
      ]
    },
    {
      title: "Frameworks",
      items: [
        { n: "PyTorch", p: 90 },
        { n: "TensorFlow", p: 85 },
        { n: "Docker", p: 80 },
        { n: "Git", p: 90 }
      ]
    },
    {
      title: "Cloud & Systems",
      items: [
        { n: "AWS", p: 85 },
        { n: "Distributed Computing", p: 90 },
        { n: "Linux", p: 80 }
      ]
    }
  ]
};

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    document.body.setAttribute('data-theme', 'serif');
  }, []);

  useEffect(() => {
    const ids = ['about', 'experience', 'projects', 'publications', 'skills', 'contact'];
    const handler = () => {
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom > 120) { setActiveSection(id); return; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="app-root">
      <Nav activeSection={activeSection} />
      <Hero data={PORTFOLIO_DATA} />
      <About data={PORTFOLIO_DATA} />
      <Experience data={PORTFOLIO_DATA} />
      <Projects data={PORTFOLIO_DATA} />
      <Publications data={PORTFOLIO_DATA} />
      <Skills data={PORTFOLIO_DATA} />
      <Contact data={PORTFOLIO_DATA} />
      <Footer />
    </div>
  );
}

export default App;
