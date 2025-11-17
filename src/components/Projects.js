import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      img: '../assets/img/ai-work.png',
      title: 'Visper - Voice-First RAG Assistant',
      description: 'Voice-first RAG assistant for repositories. Paste a GitHub URL and talk to your code in real-time with grounded citations. Converts JSON summaries into elegant slides with synchronized TTS narration and MP4 output, designed with accessibility in mind for blind developers. Built with Python, Gemini, FastAPI, and RAG.',
      link: 'https://github.com/abhay-lal/Visper',
    },
    {
      img: '../assets/img/ai-work-2.png',
      title: 'AI Safety Protocol',
      description: 'Built a code guardrail system with regex checks, Llama Guard 4, and Cerebras inference for LLM safety. Developed code-aware filters detecting prompt injection, jailbreak, and backdoor threats in AI agents. Implemented multi-agent validation with real-time telemetry and Flask-based semantic moderation dashboard.',
      link: 'https://github.com/abhay-lal/AI-Safety-Protocol',
    },
    {
      img: '../assets/img/MusicCRS.png',
      title: 'Benchmarking Music Conversational Recommendation',
      description: 'Built a novel multi-modal dataset by combining Reddit dialogues with YouTube audio (FFmpeg, Python). Implemented entity linking and benchmarked LLMs (Qwen-2.5-7B) using PyTorch Transformers.',
      link: null,
    },
    {
      img: '../assets/img/fire-ready.png',
      title: 'Fire-Ready Forests Data Challenge (Winner)',
      description: 'Processed ecological and spatial data with missing-value handling and feature engineering for species classification. Built ensemble models achieving 96.9% test precision on the National Data Platform; results presented at ICPP 2025.',
      link: 'https://github.com/abhay-lal/fire-ready-forests-agni',
    },
    {
      img: '../assets/img/blogpod.png',
      title: 'BlogPod',
      description: 'Pipeline using LLaMA 3.1 (8B/70B/405B) to convert podcast transcripts into structured blogs via prompt engineering. Evaluation with Gemini-1.5-Flash on clarity, tone, and engagement.',
      link: 'https://github.com/abhay-lal/BlogPod',
    },
    {
      img: '../assets/img/tinyowl.png',
      title: 'TinyML Owl Vocalization',
      description: 'Built sub-0.5MB CNNs in PyTorch for owl call classification; quantized and exported to ONNX/TFLite. Deployed on STM32 with X-Cube.AI and TFLite Micro for real-time, low-power acoustic monitoring (with E4E & San Diego Zoo Wildlife Alliance).',
      link: 'https://github.com/abhay-lal/TinyML-Owl',
    },
    {
      img: '../assets/img/asset-buble.jpg',
      title: 'Asset Bubble',
      description: 'Project helps the investors using a predictive analytics model or providing actionable analytical insights to this problem. The output is the confidence score on whether the stock market will crash in 2022 or not and if it does find an approximate time interval in which this can possibly occur.',
      link: 'https://github.com/abhay-lal/Asset-bubble',
    },
    {
      img: '../assets/img/alveoli.png',
      title: 'Alveoli',
      description: 'Chest X-Ray reports in a matter of seconds. We have created a secure Chest X-Ray image classification based website and app that can detect Covid-19, Pneumonia and Tuberculosis. Deep Learning has been used to detect the disease by using a Convolutional Neural Network(MobileNetV2) which performs classification',
      link: 'https://github.com/abhay-lal/Alveoli',
    },
    {
      img: '../assets/img/respas.png',
      title: 'ResPas',
      description: 'This project is aimed at building a multi-label classification model using the principles of Deep Learning and NLP to effectively classify users into job categories given their resume.',
      link: 'https://github.com/abhay-lal/ResumeParserClassifier',
    },
    {
      img: '../assets/img/btc.png',
      title: 'BTC Prediction',
      description: 'In this Deep Learning Application, we have used the price data for Bitcoin to forecast its price in a specified future window. We have used the Tensorflow and Keras APIs to build a stacked LSTM model.',
      link: 'https://github.com/abhay-lal/Cryptocurrency-Price-Prediction',
    },
    {
      img: '../assets/img/hand.png',
      title: 'Astro Numbers',
      description: 'This project performs digit recognition using deep learning concepts. It can classify an image into 10 classes. We have built a Multilayer perceptron (MLP) model using most popular Google library Tensorflow to recognize handwritten digits.',
      link: 'https://github.com/abhay-lal/Hand-Written-Digit-Classification-Recognition',
    },
    {
      img: '../assets/img/aibot.png',
      title: 'License Plate',
      description: 'Number Plate recognition, also called License Plate recognition using image processing methods is a potential research area in smart cities and the Internet of Things. An exponential increase in the number of vehicles necessitates the use of automated systems to maintain vehicle information for various purposes.',
      link: 'https://github.com/abhay-lal/Number-plate-recognition',
    },
    {
      img: '../assets/img/ai-work-2.png',
      title: 'InfoViz',
      description: 'The dataset would also include other variables, such as unemployment rates, industrial production levels, and stock prices, depending on the specific economic indicators being analyzed. The visualizations cover a range of economic indicators, including time, unemployment data, consumer price index, price-to-earnings ratio, open, high, low, close, and industrial production index.',
      link: 'https://github.com/abhay-lal/InfoViz',
    },
  ];

  return (
    <section className="portfolio section" id="portfolio" ref={ref}>
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My works, projects & contributions
      </motion.span>

      <motion.div
        className="portfolio__container container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000, /* Changes every 3 seconds */
            disableOnInteraction: false,
            pauseOnMouseEnter: false, /* Keeps moving even on hover */
          }}
          speed={600} /* Normal transition speed */
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="portfolio-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="portfolio__content grid"
              >
                <img src={project.img} alt={project.title} className="portfolio__img" loading="lazy" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">{project.title}</h3>
                  <p className="portfolio__description">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="button button--flex button--small portfolio__button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repo
                      <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Projects;

