<template>
  <div class="container">
    <div class="leaf"><img :src="require('@/assets/images/leaf.png')" /></div>
    <div class="text">
      <p>결혼식 참고사항</p>
      <p>웨딩홀 6층</p>
      <p>신부대기실 7층</p>
      <p>웨딩부페 5층</p>
      <p>전용주차장 3시간 무료</p>
    </div>
    <div class="from">문의사항 032-228-8000</div>
    <div class="leaf"><img :src="require('@/assets/images/leaf.png')" /></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 768px;
  width: 96%;
  margin: 0 auto;
  font-size: 1.3rem;
  height: 50rem;
  text-align: center;
}

.text {
  text-align: center;
}

.from {
  padding-top: 3rem;
  text-align: center;
}

.leaf {
  margin-top: 3rem;
}

.leaf img {
  width: 5rem;
}

@media (min-width: 350px) {
  .container {
    padding: 0 2rem;
    font-size: 1.4rem;
  }
}

@media (min-width: 380px) {
  .container {
    padding: 0 2rem;
    font-size: 1.5rem;
    height: 55rem;
  }
}
</style>