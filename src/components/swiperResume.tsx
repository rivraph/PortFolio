import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './swiperResume.module.css';
import Datas from "../datas/datas.json";



function Swipper() {
  const p = Datas;
    
  return (
    <>
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      className="mySwiper"
    >
      <SwiperSlide className={styles.swiperChildren}>
      <div className={styles.infos}>
      <h2 className={styles.titleCard}>Formations</h2>
          <div className={styles.cvContener}> 
              <span>{p.education?.wild}</span><br />
              <span>{p.education?.remap}</span><br />
              <span>{p.education?.tdra}</span><br />
              <span>{p.education?.bacc}</span><br />
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperChildren}>
      <div className={styles.infos}>
          <h2 className={styles.titleCard}>Expériences Pro</h2>
          <div className={styles.cvContener}> 
              <span>{p.experience?.bleulib}</span><br />                    
              <span>{p.experience?.biomotors}</span><br />
              <span>{p.experience?.kia1}</span><br />
              <span>{p.experience?.mecaperfs}</span><br />
              <span>{p.experience?.kia2}</span><br />
              <span>{p.experience?.delko}</span><br />
              <span>{p.experience?.kia}</span><br />
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperChildren}>
      <div className={styles.infos}>
      <h2 className={styles.titleCard}>Autres compétences</h2>
          <div className={styles.cvContener}> 
              <span>{p.others?.logiciels}</span><br />
              <span>{p.others?.francais}</span><br />
              <span>{p.others?.anglais}</span><br />
              <span>{p.others?.espagnol}</span><br />    
          </div>
      </div>
      </SwiperSlide>
    </Swiper>
    
        </>
  );
}
export default Swipper;