import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Publications.css';

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publications = [
    {
      title: 'Automated screening of hip X-rays for osteoporosis by Singh\'s index using machine learning algorithms',
      venue: 'Indian Journal of Orthopaedics',
      year: '2024',
      status: 'Published',
      link: 'https://doi.org/10.1007/s43465-024-01246-9',
      linkLabel: '10.1007/s43465-024-01246-9',
      authors: 'Vijaya Kalavakonda, Sameer Mohamed, Lal Abhay, Sathish Muthu',
      description: 'This work automates Singh Index based osteoporosis screening from hip radiographs using machine learning pipelines on an annotated clinical dataset. The study compares ViT, MobileNet-V3, and stacked CNN approaches for practical radiology support.',
    },
    {
      title: 'Human gait recognition using cross view micro gait dataset with light weight MobileNet',
      venue: 'International Conference on Recent Advances in Electrical, Electronics, Ubiquitous Communication, and Computational Intelligence (RAEEUCCI)',
      year: '2023',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/abstract/document/10134510',
      linkLabel: '10.1109/RAEEUCCI57140.2023.10134510',
      authors: 'Haripreeth Dwarakanath Avarur, Abhay Lal, Aryan Sinha, Gajulapalli Naga Vyshnavi, Shruthi Kannan',
      description: 'The paper introduces cross-view micro-gait modeling for person identification in surveillance conditions and benchmarks classical and deep models. A lightweight MobileNet-based solution delivers strong real-world cross-view recognition performance.',
    },
    {
      title: 'Musicrs: Benchmarking audio-centric conversational recommendation',
      venue: 'arXiv preprint arXiv:2509.19469',
      year: '2025',
      status: 'Preprint',
      link: 'https://arxiv.org/abs/2509.19469',
      linkLabel: 'arXiv:2509.19469',
      authors: 'Rohan Surana*, Amit Namburi*, Gagan Mundada*, Abhay Lal*, Zachary Novack, Julian McAuley, Junda Wu',
      description: 'MusiCRS provides an audio-grounded conversational recommendation benchmark linking real Reddit conversations with song-level audio context. Results highlight persistent multimodal grounding gaps in current recommendation systems.',
    },
    {
      title: 'Gait speed based individual recognition model using deep 2-D convolutional neural network',
      venue: 'International Conference on Computer Communication and Informatics (ICCCI)',
      year: '2023',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/abstract/document/10128342',
      linkLabel: '10.1109/ICCCI56745.2023.10128342',
      authors: 'Abhay Lal, P Nithyakani',
      description: 'This paper evaluates gait-speed-aware individual recognition across multiple walking conditions using thermal infrared imagery from CASIA-C. A custom 2D CNN is compared with transfer-learning baselines and shows robust classification performance.',
    },
    {
      title: 'Unsupervised Machine Learning for Osteoporosis Diagnosis Using Singh Index Clustering on Hip Radiographs',
      venue: 'arXiv preprint arXiv:2411.15253',
      year: '2024',
      status: 'Preprint',
      link: 'https://arxiv.org/abs/2411.15253',
      linkLabel: 'arXiv:2411.15253',
      authors: 'Vimaladevi Madhivanan, Kalavakonda Vijaya, Abhay Lal, Senthil Rithika, Shamala Karupusamy Subramaniam, Mohamed Sameer',
      description: 'The study explores unsupervised clustering of hip radiographs for Singh Index grade discovery with a custom CNN feature extractor. It analyzes data quality and class balance effects, and outlines practical improvements for clinical-grade automation.',
    },
    {
      title: 'Hierarchical Vegetation Classification for Wildfire Risk Assessment using the National Data Platform',
      venue: "ICPP Workshops '25: Workshop Proceedings of the 54th International Conference on Parallel Processing",
      year: '2025',
      status: 'Published',
      link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TsTzc9AAAAAJ&citation_for_view=TsTzc9AAAAAJ:IjCSPb-OGe4C',
      linkLabel: 'Google Scholar entry',
      authors: 'Yash Vishe*, Abhay Lal*, Parasnis* Guruprasad',
      description: 'This work introduces a hierarchical ML framework on the National Data Platform to classify vegetation at plant functional type, genus, and species levels. The taxonomy-aware pipeline supports better wildfire fuel and risk characterization.',
    },
    {
      title: 'ALATS: Analysis of localization algorithms in terrestrial surveillance bots',
      venue: 'IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)',
      year: '2023',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/abstract/document/10234740',
      linkLabel: '10.1109/CONECCT57959.2023.10234740',
      authors: 'Vaishnavi Moorthy, Darshil Shah, Shresth Kapoor, Srinivas Tb, Abhay Lal',
      description: 'ALATS studies localization and navigation methods for terrestrial surveillance bots that combine SLAM, object detection, and onboard sensing. The system targets practical, autonomous monitoring under constrained hardware settings.',
    },
  ];

  return (
    <section className="testimonial section" id="research" ref={ref}>
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Publications
      </motion.h2>
      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My research & publications
      </motion.span>

      <motion.div
        className="testimonial__container container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          grabCursor={true}
          spaceBetween={48}
          autoplay={{
            delay: 3000, /* Changes every 3 seconds */
            disableOnInteraction: false,
            pauseOnMouseEnter: false, /* Keeps moving even on hover */
          }}
          speed={600} /* Normal transition speed */
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            568: {
              slidesPerView: 1,
            },
          }}
          className="publications-swiper"
        >
          {publications.map((pub, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="testimonial__content"
              >
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <div>
                      <h3 className="testimonial__name">{pub.title}</h3>
                      <span className="testimonial__client">
                        Venue: {pub.venue} | Year: {pub.year} | Status: <i>{pub.status}</i>
                        <br />
                        Link: <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.linkLabel}</a>
                        <br />
                        Author(s): {pub.authors}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="testimonial__description">{pub.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Publications;

