<template>
  <div class="container">
    <div class="title">
      <p>/2023.3.18/</p>
      <div class="desc">토요일 오후 3시</div>
    </div>
    <div class="divide-line"></div>

    <div class="day-row">
      <div v-for="day in days" :key="day" :class="day.style">
        {{ day.name }}
      </div>
    </div>
    <div class="date-column">
      <div class="week1">
        <div v-for="week in week1" :key="week" :class="week.style" :id="week.id">
          {{ week.date }}

        </div>
      </div>
      <!-- 1주 -->
      <div class="week2">
        <div v-for="week in week2" :key="week" :class="week.style">
          {{ week.date }}
        </div>
      </div>
      <div class="week3">
        <div v-for="week in week3" :key="week" :class="week.style">
          {{ week.date }}
          <div v-if="week.date == 18">
            <div id="bar">결혼식</div>
          </div>
        </div>
      </div>
      <div class="week4">
        <div v-for="week in week4" :key="week" :class="week.style">
          {{ week.date }}
        </div>
      </div>
      <div class="week5">
        <div v-for="week in week5" :key="week" :class="week.style">
          {{ week.date }}
        </div>
      </div>
    </div>
    <div class="divide-line"></div>
    <div class="counting">승진<span>♥</span>미영의 결혼식이 {{ getDate }}</div>
    <div class="divide-line"></div>
  </div>
</template>

<script>
export default {
  computed: {
    getDate() {
      let count = new Date().getTime();
      let dday = new Date("march 18, 2023 0:00:00").getTime();
      let gap = dday - count;
      if (gap < 0) {
        return (
          Math.abs(Math.ceil(gap / (1000 * 60 * 60 * 24))) + "일 지났습니다."
        );
      }
      return Math.ceil(gap / (1000 * 60 * 60 * 24)) + "일 남았습니다.";
    },
  },
  data() {
    return {
      days: [
        { name: "Sun", style: "sun" },
        { name: "Mon", style: null },
        { name: "Tue", style: null },
        { name: "Wed", style: null },
        { name: "Thu", style: null },
        { name: "Fri", style: null },
        { name: "Sat", style: null },
      ],
      week1: [
        { date: null, style: null, id: null },
        { date: null, style: null, id: null },
        { date: null, style: null, id: null },
        { date: 1, style: null, id: null },
        { date: 2, style: null, id: null },
        { date: 3, style: null, id: null },
        { date: 4, style: null, id: null },
      ],
      week2: [
        { date: 5, style: "sun" },
        { date: 6, style: null },
        { date: 7, style: null },
        { date: 8, style: null },
        { date: 9, style: null },
        { date: 10, style: null },
        { date: 11, style: null },
      ],
      week3: [
        { date: 12, style: "sun" },
        { date: 13, style: null },
        { date: 14, style: null },
        { date: 15, style: null },
        { date: 16, style: null },
        { date: 17, style: null },
        { date: 18, style: null },
      ],
      week4: [
        { date: 19, style: "sun" },
        { date: 20, style: null },
        { date: 21, style: null },
        { date: 22, style: null },
        { date: 23, style: null },
        { date: 24, style: null },
        { date: 25, style: null },
      ],

    };
  },
};
</script>

<style scoped>
.container {
  max-width: 768px;
  width: 96%;
  margin: 3rem auto auto auto;
}

.divide-line {
  margin: 3rem 3rem;
  border: 0.7px solid rgb(218, 218, 218);
}

.title p {
  font-size: 1.7rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-bottom: 1rem;
  letter-spacing: 0.8rem;
  text-align: center;
}

.desc {
  width: 100%;
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 2rem;
}

.day-row {
  display: flex;
  justify-content: space-evenly;
  font-size: 1.4rem;
}

.date-column {
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
}

#bar {
  position: absolute;
  background: #d1b6e6;
  width: 5rem;
  color: white;
  font-size: 1.1rem;
}

.week1 {
  margin-right: 1rem;
}

.week1,
.week2,
.week3,
.week4,
.week5 {
  display: flex;
  justify-content: space-evenly;
  padding-top: 8%;
}

.week5 {
  margin-right: 8rem;
}

.box {
  text-align: center;
}

.num19 {
  color: white;
}

#Dday {
  z-index: -1;
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 30px;
  transform: translate(-0.7rem, -2.5rem);
  background: #a588bb;
  text-align: center;
}

.holiday {
  opacity: 0.5;
}

.sun {
  color: rgba(255, 103, 57, 0.76);
  font-weight: bold;
}

.counting {
  text-align: center;
  font-size: 1.5rem;
}

.counting span {
  color: #c3a0df;
}

@media (max-width: 320px) {
  #bar {
    position: absolute;
    background: #d1b6e6;
    color: white;
    font-size: 1rem;
  }
}
</style>
