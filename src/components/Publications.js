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
      title: 'Gait speed based individual Recognition model using deep 2-D convolutional neural network',
      conference: 'International Conference on Computer Communication and Informatics (ICCCI)',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/abstract/document/10128342',
      doi: '10.1109/ICCCI56745.2023.10128342',
      authors: 'Abhay Lal; P Nithyakani',
      description: 'Developed a custom 2-D Convolutional Neural Network using thermal infrared night images from CASIA C dataset for gait-based individual recognition, comparison and optimized classification of walking conditions outperformed pre-trained models.',
    },
    {
      title: 'Human Gait Recognition Using Cross View Micro Gait Dataset with Light weight MobileNet',
      conference: 'International Conference on Recent Advances in Electrical, Electronics, Ubiquitous Communication, and Computational Intelligence (RAEEUCCI)',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/abstract/document/10134510',
      doi: '10.1109/RAEEUCCI57140.2023.10134510',
      authors: 'Haripreeth Dwarakanath Avarur; Abhay Lal; Nithyakani P; Aryan Sinha; Gajulapalli Naga Vyshnavi; Shruthi Kannan',
      description: 'Implemented gait recognition using a lightweight MobileNet model on the Custom-made Cross View Micro Gait Dataset, surpassing existing methods for human identification from cross-view videos.',
    },
    {
      title: 'ALATS: Analysis of localization algorithms in terrestrial surveillance bots',
      conference: 'IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/abstract/document/10234740',
      doi: '10.1109/CONECCT57959.2023.10234740',
      authors: 'Vaishnavi Moorthy; Darshil Shah; Shresth Kapoor; Srinivas Tb; Abhay Lal',
      description: 'Designed and executed a state-of-the-art surveillance system on a Raspberry Pi, harnessing the YOLOv7 model and OpenCV to craft a compact, high-performance autonomous surveillance robot.',
    },
    {
      title: 'Automated screening of hip X-rays for osteoporosis by Singh\'s index using machine learning algorithms',
      conference: 'Indian Journal of Orthopaedics, Springer',
      status: 'Published',
      link: 'https://doi.org/10.1007/s43465-024-01246-9',
      doi: '10.1007/s43465-024-01246-9',
      authors: 'Vijaya Kalavakonda, Sameer Mohamed, Abhay Lal, Sathish Muthu',
      description: 'Developed and evaluated machine learning models for automating osteoporosis diagnosis using the Singh Index from hip radiographs, with the stacked CNN achieving superior accuracy (93.6%) and balanced metrics, making it the most reliable tool for clinical screening.',
    },
    {
      title: 'Unsupervised Machine Learning for Osteoporosis Diagnosis Using Singh Index Clustering on Hip Radiographs',
      conference: 'arXiv preprint arXiv:2411.15253',
      status: 'Published',
      link: 'https://doi.org/10.48550/arXiv.2411.15253',
      doi: '10.48550/arXiv.2411.15253',
      authors: 'Vimaladevi Madhivanan, Kalavakonda Vijaya, Abhay Lal, Senthil Rithika, Shamala Karupusamy Subramaniam, Mohamed Sameer',
      description: 'This study addressed the global challenge of osteoporosis by developing a machine learning-based approach to automate Singh Index (SI) identification from hip radiographs, utilizing a custom convolutional neural network for feature extraction and clustering, while highlighting the need for balanced datasets, improved image quality, and the integration of clinical data to enhance diagnostic accuracy.',
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
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
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
                        Conference: {pub.conference} | Progress: <i>{pub.status}</i>
                        <br />
                        Link: <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.doi}</a>
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

