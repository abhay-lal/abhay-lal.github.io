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
    role: "Applied AI Engineer",
    location: "San Diego, CA",
    institution: "UC San Diego",
    status: "Full-Time from June 2026",
    email: "ablal@ucsd.edu",
    links: {
      linkedin: "https://www.linkedin.com/in/lal-abhay/",
      github: "https://github.com/abhay-lal",
      scholar: "https://scholar.google.com/citations?user=TsTzc9AAAAAJ",
      x: "https://x.com/abbylaal",
      resume: "https://drive.google.com/file/d/1casu6Y7gu1fHugDdG9rNaMCmcRVclvwq/view?usp=sharing"
    }
  },
  about: {
    bio: "Applied AI engineer currently embedded as a Forward Deployed Engineer at a stealth AI startup in San Francisco, while completing my MS CS (AI) at UC San Diego. I design and ship end-to-end intelligent systems — LLM guardrails, agentic pipelines, clinical-scale neuroimaging ML, and edge deployments. Previously MLE at UCSD Health and intern at IIT Bombay, Wells Fargo, and Samsung R&D.",
    focus: ["Applied AI Engineering", "LLM Safety & Agents", "Multimodal Systems", "Healthcare AI", "Edge / TinyML"]
  },
  experience: [
    {
      role: "Forward Deployed Engineer Intern",
      org: "Stealth Startup — AI for Supply Chain",
      loc: "San Francisco, CA",
      date: "Mar 2026 — Present",
      current: true,
      tags: ["Python", "Neo4j", "Graph"],
      bullets: [
        "Embedded with enterprise customers to build Python ERP-to-Neo4j graph pipelines for supply-chain analytics.",
        "Translated customer requirements into shipped features on-site, using Claude Code and Cursor as primary development tools."
      ]
    },
    {
      role: "Machine Learning Engineer",
      org: "UC San Diego Health",
      loc: "San Diego, CA",
      date: "Jan 2025 — Present",
      current: true,
      tags: ["Python", "SHAP", "MRI"],
      bullets: [
        "Rebuilt 5,000 lines of MATLAB neuroimaging code into modular Python ML components, achieving 3.5× faster GPU throughput through I/O profiling and hardware utilization improvements.",
        "Built an end-to-end multimodal ML pipeline combining MRI neuroimaging, polygenic scores, and environmental biomarkers across 10K+ scans with 100+ group-aware cross-validation splits.",
        "Reached AUC 0.70 on psychiatric risk prediction using stacked LR/SVM classifiers; applied SHAP to surface dominant MRI and genetic predictors for clinical collaborators (poster at SfN 2025)."
      ]
    },
    {
      role: "Machine Learning Engineer Intern",
      org: "IIT Bombay",
      loc: "Mumbai, IN",
      date: "Jan 2024 — Jun 2024",
      tags: ["YOLOv8", "Docker", "CUDA"],
      bullets: [
        "Designed a GPU-native YOLOv8 detection pipeline in Docker on NVIDIA DGX; processed 30K+ video frames per run and cut training time from 5 to 3 hours through I/O bottleneck profiling.",
        "Applied valence-arousal affective modeling to 80K+ study logs to generate per-session engagement scores; built REST microservices with unit and integration tests for the product team."
      ]
    },
    {
      role: "Data Science Intern",
      org: "Wells Fargo",
      loc: "Hyderabad, IN",
      date: "Jun 2023 — Aug 2023",
      tags: ["FastAPI", "SpaCy", "LDA"],
      bullets: [
        "Built scalable Python/SpaCy ETL pipelines over 2,500+ FHA regulatory documents, improving throughput 70% with memory-efficient distributed processing.",
        "Deployed an LDA topic model as a FastAPI microservice achieving 0.78 coherence; automated categorization cut manual review from 4 hours to 25 minutes for the compliance team."
      ]
    },
    {
      role: "Machine Learning Intern",
      org: "Samsung R&D Institute (SRI-B)",
      loc: "Bangalore, IN",
      date: "Dec 2022 — May 2023",
      tags: ["SARIMA", "LSTM", "Forecasting"],
      bullets: [
        "Ran decomposition, outlier detection, and stationarity checks on sales time-series across 12+ product lines; trained SARIMA, Holt-Winters, and LSTM models with sliding-window cross-validation, cutting MAE by 15%.",
        "Received Certificate of Excellence and the $1,200 PRISM award; shipped all models to production with automated performance monitoring and alerting."
      ]
    }
  ],
  education: [
    {
      role: "M.S. Computer Science — Artificial Intelligence",
      org: "University of California, San Diego",
      loc: "San Diego, CA",
      date: "Sept 2024 — Jun 2026",
      current: true,
      tags: ["GPA 3.92", "Funded GSR"],
      bullets: [
        "Fully funded via Graduate Student Researcher (GSR) appointment for 90% of the MS program.",
        "Coursework: CSE 251A Machine Learning: Learning Algorithms · CSE 251C ML Theory · CSE 291 Fair & Transparent ML · CSE 256 Statistical NLP · CSE 258R Recommender Systems & Web Mining · CSE 253 Machine Learning for Music · CSE 291A Human-Centered AI · DSC 210 Numerical Linear Algebra · CSE 261 Advanced Data-Driven Text Mining · CSE 237C Validation & Testing for Embedded Systems · CSE 237D Embedded Systems Design · COGS 209 Statistical Machine Learning for Social Sciences.",
        "Graduate Research at UCSD Health Neuroimaging (SfN 2025 poster)."
      ]
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
      sub: "Voice-first RAG assistant — Gemini API Hackathon Top 10",
      desc: "Paste a GitHub URL and talk to your code in real time. Answers are grounded with citations and links back to files. Turns JSON summaries into slides with synchronized TTS narration and an MP4 output — designed with accessibility in mind for blind developers.",
      tags: ["RAG", "Gemini", "FastAPI", "TTS"],
      link: "https://github.com/abhay-lal/Visper",
      award: "Gemini Hackathon · Top 10",
      year: "2025"
    },
    {
      title: "AI Safety Protocol",
      sub: "Multi-layer LLM guardrails",
      desc: "Code-aware guardrail system with regex checks, Llama Guard 4, and Cerebras inference. Detects prompt injection, jailbreak, and backdoor threats in agentic workflows with multi-agent validation and a real-time telemetry dashboard.",
      tags: ["LLM", "Safety", "Llama Guard"],
      link: "https://github.com/abhay-lal/AI-Safety-Protocol",
      year: "2025"
    },
    {
      title: "Fire-Ready Forests",
      sub: "SDSC / Los Alamos Lab Data Challenge — Winner",
      desc: "Ensemble models for hierarchical vegetation classification on the National Data Platform. Stacked RF and XGBoost classifiers reaching 96.9% accuracy and an 8%+ gain over baselines. Published at ACM ICPP 2025.",
      tags: ["Ensembles", "XGBoost", "Winner"],
      link: "https://github.com/abhay-lal/fire-ready-forests-agni",
      award: "SDSC Data Challenge · Winner",
      year: "2025"
    },
    {
      title: "MusiCRS",
      sub: "Audio-centric conversational recommendation benchmark",
      desc: "First multimodal evaluation benchmark linking 477 Reddit dialogues to grounded audio tracks. Benchmarked 9 frontier models across audio-only, query-only, and multimodal configs. Published at ICASSP 2026.",
      tags: ["Multimodal", "Qwen-Audio", "Benchmark"],
      link: "https://arxiv.org/abs/2509.19469",
      year: "2025"
    },
    {
      title: "TinyML Owl",
      sub: "Sub-0.5MB CNNs for acoustic monitoring",
      desc: "Built quantized CNNs in PyTorch for owl-call classification. Exported to ONNX/TFLite, deployed on STM32 with X-Cube.AI and TFLite Micro for real-time, low-power field monitoring. Collaboration with E4E and San Diego Zoo Wildlife Alliance.",
      tags: ["TinyML", "STM32", "Edge"],
      link: "https://github.com/abhay-lal/TinyML-Owl",
      year: "2024"
    },
    {
      title: "BlogPod",
      sub: "Podcast → blog pipeline with LLaMA 3.1",
      desc: "Convert podcast transcripts into structured blog posts via prompt engineering across LLaMA 3.1 8B/70B/405B. Evaluated with Gemini-1.5-Flash on clarity, tone, and engagement.",
      tags: ["LLaMA 3.1", "Prompting"],
      link: "https://github.com/abhay-lal/BlogPod",
      year: "2024"
    },
    {
      title: "Alveoli",
      sub: "Chest X-ray triage — IPFS Hackathon Best Prize",
      desc: "MobileNetV2-based classifier detecting COVID-19, pneumonia, and tuberculosis from chest X-rays. Won Best Prize at IPFS hackathon. Deployed as a secure web + mobile application.",
      tags: ["MobileNet", "Medical Imaging"],
      link: "https://github.com/abhay-lal/Alveoli",
      award: "IPFS Hackathon · Best Prize",
      year: "2023"
    },
    {
      title: "Asset Bubble",
      sub: "Stock crash prediction — Wells Fargo Grand Academic Challenge Winner",
      desc: "Predictive analytics platform outputting confidence scores on S&P 500 crash probability with estimated time intervals. Used ARIMA/SARIMAX for 2-year forecasting and CNN/Random Forest classifiers (94% accuracy) with real-time Twitter sentiment analysis via Alpha Vantage.",
      tags: ["ARIMA", "CNN", "Random Forest"],
      link: "https://github.com/abhay-lal/Asset-bubble",
      award: "Wells Fargo Challenge · 1st Prize",
      year: "2022"
    },
    {
      title: "ResPas",
      sub: "Resume → role classifier",
      desc: "Multi-label classification model combining deep learning and NLP to route resumes into job categories.",
      tags: ["NLP", "Classification"],
      link: "https://github.com/abhay-lal/ResumeParserClassifier",
      year: "2023"
    }
  ],
  publications: [
    {
      year: "2026",
      title: "MusiCRS: Benchmarking Audio-Centric Conversational Recommendation",
      venue: "IEEE ICASSP 2026",
      venueRef: "arXiv:2509.19469",
      status: "Published",
      authors: "Rohan Surana, Amit Namburi, Gagan Mundada, Abhay Lal, Zachary Novack, Julian McAuley, Junda Wu",
      equalContrib: ["Rohan Surana", "Abhay Lal"],
      link: "https://arxiv.org/abs/2509.19469"
    },
    {
      year: "2025",
      title: "Hierarchical Vegetation Classification for Wildfire Risk Assessment using the National Data Platform",
      venue: "ICPP Workshops '25",
      venueRef: "54th Intl. Conf. on Parallel Processing",
      status: "Published",
      authors: "Yash Vishe, Abhay Lal, Guruprasad Parasnis",
      equalContrib: ["Yash Vishe", "Abhay Lal"],
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
      title: "Languages",
      items: ["Python", "C / C++", "SQL", "Bash", "JavaScript"]
    },
    {
      title: "ML / AI",
      items: ["PyTorch", "TensorFlow", "JAX", "Hugging Face", "LangChain", "vLLM", "LoRA / PEFT", "RLHF", "ONNX", "TFLite"]
    },
    {
      title: "Domains",
      items: ["Computer Vision", "NLP", "Large Language Models", "RAG", "AI Safety", "Neuroimaging ML", "TinyML", "Multimodal Models"]
    },
    {
      title: "Infrastructure",
      items: ["AWS", "GCP", "Docker", "Kubernetes", "FastAPI", "Git", "Linux", "Distributed Systems"]
    }
  ]
};

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    document.body.setAttribute('data-theme', 'dark');
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
