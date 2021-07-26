<template>
  <div :class="$style.container">
    <div :class="$style.img">
      <img src="../assets/images/banner.png" alt="" />
    </div>
    <div :class="$style.info">
      <h2><span>Наши конкурентные </span>преимущества</h2>
      <div :class="$style.text">
        Мы нацелены на честность и открытость в работе. Большой опыт в
        перевозках, более 20 лет, а также современные молодые специалисты
        помогают задать вектор развития компании в сторону самого качественного
        обслуживания и сервиса. Собственный парк автомобилей, складские площади
        позволяют достичь максимальных сроков доставки ваших грузов и посылок.
      </div>
      <div :class="$style.advantages">
        <Advantage
          v-for="advantage in advantages"
          :key="advantage.title"
          :img="advantage.img"
          :title="advantage.title"
          :subtitle="advantage.subtitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Advantage from "./Advantage";
import advantageImg1 from "../assets/images/1.png";
import advantageImg2 from "../assets/images/2.png";
import advantageImg3 from "../assets/images/3.png";
import advantageImg4 from "../assets/images/4.png";
export default {
  name: "Content",
  components: {
    Advantage,
  },
  data() {
    return {
      advantages: [
        {
          img: advantageImg1,
          title: "Надежность",
          subtitle:
            "Несем полную материальную ответственность за ваше имущество",
        },
        {
          img: advantageImg2,
          title: "От двери до двери",
          subtitle:
            "Несем полную материальную ответственность за ваше имущество",
        },
        {
          img: advantageImg3,
          title: "Собственный автопарк",
          subtitle:
            "Принимаем ваш товар лично и доставляем точно в пункт назначения",
        },
        {
          img: advantageImg4,
          title: "Индивидуальный маршрут",
          subtitle: "Вы можете сами указать собственный маршрут доставки",
        },
      ],
    };
  },
};
</script>

<style lang="scss" module>
@import "../assets/styles/styles";
.container {
  background-color: $Dark;
  color: $White;
  .img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .info {
    padding: 1.8rem 1rem 0 1rem;
    position: relative;
    z-index: 5;
    background-color: $Dark;
    max-width: 1100px;
    margin: -4rem auto 0 auto;
    h2 {
      text-align: center;
      color: $Orange;
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 1;
      margin: 0 0 1.8rem 0;
      span {
        color: $White;
      }
    }
    .text {
      text-align: center;
      max-width: 850px;
      margin: 0 auto 1.8rem auto;
      line-height: 1.6rem;
    }
    .advantages {
      display: flex;
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
}
</style>
