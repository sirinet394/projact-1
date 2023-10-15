<template>
    <section class="background_1">
    </section>
    <head>
    <div style="width: 577px; height: 591px; left: 637px; top: 223px; position: absolute; background: rgba(243.33, 243.33, 243.33, 0.69)"></div>
    <div style="width: 233px; height: 57px; left: 859px; top: 223px; position: absolute; color: black; font-size: 36px; font-family: Inter; font-weight: 400; word-wrap: break-word">สมัครประกัน</div>
    <div style="width: 91px; height: 42px; left: 668px; top: 293px; position: absolute; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">ชื่อ-นามสกุล</div>
    <div style="width: 97px; height: 38px; left: 688px; top: 387px; position: absolute; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">เบอร์โทร</div>
    <div style="width: 59px; height: 38px; left: 714px; top: 473px; position: absolute; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">อีเมล</div>
    <div style="width: 129px; height: 44px; left: 637px; top: 552px; position: absolute; text-align: center; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">ประกันที่ต้องการ<br/>สมัคร</div>
    </head>
    <button style="width: 168px; height: 44px; left: 760px; top: 637px; position: absolute; background: #ff6262; border-radius: 9px; text-align: center; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">
        <router-link to="/">ย้อนกลับ</router-link>
    </button>
    <button type="submit" value="submit" style="width: 168px; height: 44px; left: 948px; top: 637px; position: absolute; background: #6EFF62; border-radius: 9px; text-align: center; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">
        <router-link to="/home">ลงทะเบียน</router-link>
    </button>
    <div style="width: 1920px; height: 72px; left: 0px; top: 0px; position: absolute; background: #83DCF9"></div>
    <img style="width: 90px; height: 90px; left: 898px; top: 125px; position: absolute; border-radius: 13px" src="https://i.pinimg.com/750x/46/e4/20/46e420eaa30a38cefdef83e4cd6bb138.jpg" />
    <form>
        <div class="form-control">
            <input type="text" v-model="info.name" style="left: 766px; top: 270px;">
        </div>
        <div class="form-control">
            <input type="tel" maxlength='10' v-model.number="info.phone" style="left: 766px; top: 362px; ">
        </div>
        <div class="form-control">
            <input type="text" v-model="info.email" style="left: 766px; top: 448px;">
        </div>
        <div class="form-control">
            <select v-model="info.insurance" style="left: 758px; top: 536px;">
                <option value="live">ประกันสุขภาพ</option>
                <option value="accident">ประกันอุบัติเหตุ</option>
                <option value="travel">ประกันเดินทาง</option>
                <option value="car">ประกันรถยนต์</option>
                <option value="home">ประกันอัคคีภัย</option>
            </select>
        </div>
    </form>
</template>
<script>
export default{
    name:"FromComponent",
    data(){
        return{
            info:{
                name:"",
                phone:"",
                email:"",
                insurance:""
            }
        }
    },
    methods: {
    async submit() {
      this.$emit('submit', this.form)
    }
  }
}

</script>
<style>
.form-control{
    margin: 0.5rem 0;
}
label{
    font-weight: bold;
}
input{
    position: absolute;
    display: block;
    height: 61px;
    width: 350px;
    margin-top: 0.5rem;
}
select{
    position: absolute;
    display: block;
    height: 61px;
    width: 350px;
    margin: 0.5rem;
}
template{
    background-color: white;
}
.background_1{
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url('https://www.uob.co.th/web-resources/html/insurance/assets/images/item/Pic_S_NL01001.jpg');
  background-color: wheat;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

</style>