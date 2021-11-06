<template>
  <div class="doraemon">
    <div class="head">
      <div class="eyes">
        <div class="eye left">
          <div class="black bleft"></div>
        </div>
        <div class="eye right">
          <div class="black bright"></div>
        </div>
      </div>
      <div class="face">
        <div class="white"></div>
        <div class="nose">
          <div class="light"></div>
        </div>
        <div class="nose1"></div>
        <div class="mouth"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
:root {
  --doraemon-width: 500px;
  --doraemon-height: 450px;
}

.doraemon {
  position: relative;
  top: -100px;
  transform:scale(50%) ;
  float: right;
}

.doraemon .head {
  position: relative;
  width: var(--doraemon-width);
  height: var(--doraemon-height);
  border-radius: 50% 50% 25% 25% / 55% 55% 45% 45%;
  background: #008ee3;
  border: 2px solid #555;
  box-shadow: -5px 10px 15px rgba(0, 0, 0, 0.45);
  margin: 0 auto;
}

/*脸部*/
.doraemon .face {
  position: relative;
  z-index: 2;
}

/*白色脸底*/
.doraemon .face .white {
  width: calc(var(--doraemon-width) - 90px);
  height: calc(var(--doraemon-height) - 90px);
  background: snow;
  border-radius: calc(var(--doraemon-width) / 2 + 20px);
  position: absolute;
  top: 75px;
  left: 45px;
  background: -webkit-radial-gradient(
    right top,
    #fff 75%,
    #eee 80%,
    #999 90%,
    #444
  );
}

/*鼻子*/
.doraemon .face .nose {
  width: calc(var(--doraemon-width) / 12);
  height: calc(var(--doraemon-width) / 12);
  border-radius: calc(var(--doraemon-width) / 12);
  background: #c93300;
  border: 2px solid #000;
  position: absolute;
  top: calc(var(--doraemon-height) / 2 - calc(var(--doraemon-width) / 12));
  left: calc(var(--doraemon-width) / 2.4);
  z-index: 3;
}

.doraemon .face .nose .light {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  box-shadow: 19px 8px 5px #fff;
}

.doraemon .face .nose1 {
  width: 3px;
  height: calc(var(--doraemon-height) / 3);
  background: #333;
  position: absolute;
  top: calc(var(--doraemon-height) / 2);
  left: calc(var(--doraemon-width) / 2.4 + calc(var(--doraemon-width) / 24));
  z-index: 3;
}

.doraemon .face .mouth {
  width: calc(var(--doraemon-width) / 2);
  height: var(--doraemon-height);
  border-bottom: 3px solid #333;
  border-radius: 120px;
  position: absolute;
  top: -40px;
  left: 120px;
}

.doraemon .eyes .eye {
  z-index: 3;
  width: calc(var(--doraemon-width) / 5);
  height: calc(var(--doraemon-height) / 3);
  background: #fff;
  border: 2px solid #000;
  border-radius: 35px 35px;
  position: absolute;
  top: 50px;
}

.doraemon .eyes .left {
  left: calc(
    var(--doraemon-width) / 2.4 - calc(var(--doraemon-width) / 5) +
      calc(var(--doraemon-width) / 24)
  );
}

.doraemon .eyes .right {
  left: calc(var(--doraemon-width) / 2.4 + calc(var(--doraemon-width) / 24));
}

/*眼珠*/
.doraemon .eyes .eye .black {
  width: 14px;
  height: 14px;
  background: #000;
  border-radius: 7px;
  position: absolute;
  top: 40px;
}

.doraemon .eyes .eye .bleft {
  left: calc(100% / 5);
}

.doraemon .eyes .eye .bright {
  left: calc(100% / 7);
}
</style>