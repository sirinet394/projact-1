<template>
    <!--ตกแต่ง-->
    <background class="background_3">
    </background>

    <!--ตัวอักษร-->
    <head>
    <div style="width: 453px; height: 519px; left: 613px; top: 181px; position: absolute; background: rgba(243.33, 243.33, 243.33, 0.69)"></div>
    <div style="width: 166px; height: 45px; left: 771px; top: 181px; position: absolute; color: black; font-size: 32px; font-family: Inter; font-weight: 400; word-wrap: break-word">สมัครประกัน</div>
    <div style="width: 72px; height: 33px; left: 637px; top: 236px; position: absolute; color: black; font-size: 14px; font-family: Inter; font-weight: 400; word-wrap: break-word">ชื่อ-นามสกุล</div>
    <div style="width: 76px; height: 30px; left: 653px; top: 310px; position: absolute; color: black; font-size: 14px; font-family: Inter; font-weight: 400; word-wrap: break-word">เบอร์โทร</div>
    <div style="width: 47px; height: 30px; left: 673px; top: 377px; position: absolute; color: black; font-size: 14px; font-family: Inter; font-weight: 400; word-wrap: break-word">อีเมล</div>
    <div style="width: 102px; height: 34px; left: 622px; top: 450px; position: absolute; text-align: center; color: black; font-size: 14px; font-family: Inter; font-weight: 400; word-wrap: break-word">ชื่อสัตว์เลี้ยง</div>
    <div style="width: 102px; height: 34px; left: 622px; top: 508px; position: absolute; text-align: center; color: black; font-size: 14px; font-family: Inter; font-weight: 400; word-wrap: break-word">อายุสัตว์เลี้ยง</div>
    <div style="width: 102px; height: 34px; left: 622px; top: 574px; position: absolute; text-align: center; color: black; font-size: 14px; font-family: Inter; font-weight: 400; word-wrap: break-word">ชนิดสัตว์เลี้ยง</div>
    <div style="width: 1920px; height: 72px; left: 0px; top: 0px; position: absolute; background: #83DCF9"></div>
    <img style="width: 71px; height: 71px; left: 818px; top: 104px; position: absolute; border-radius: 13px" src="https://i.pinimg.com/750x/46/e4/20/46e420eaa30a38cefdef83e4cd6bb138.jpg" />
    </head>

    <!--ปุ้มกด-->
    <button style="width: 132px; height: 34px; left: 700px; top: 636px; position: absolute; background: #ff6262; border-radius: 9px; text-align: center; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">
        <router-link to="/">ย้อนกลับ</router-link>
    </button>
    <button @click="submit" style="width: 132px; height: 34px; left: 848px; top: 636px;position: absolute; background: #6EFF62; border-radius: 9px; text-align: center; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">
        <router-link to="/home">ลงทะเบียน</router-link>
    </button>

    <!--กรอกข้อมูล-->
    <div style="width: 1920px; height: 72px; left: 0px; top: 0px; position: absolute; background: #83DCF9"></div>
    <form>
        <div class="form-control">
            <input type="text" v-model="info.name" style="width: 275px; height: 48px; left: 714px; top: 226px;">
        </div>
        <div class="form-control">
            <input type="tel" maxlength='10' v-model="info.tel" style="width: 275px; height: 48px; left: 714px; top: 298px;">
        </div>
        <div class="form-control">
            <input type="text" v-model="info.email" style="width: 275px; height: 48px; left: 714px; top: 365px;">
        </div>
        <div class="form-control">
            <input type="text" v-model="info.pets_name" style="width: 275px; height: 48px; left: 714px; top: 432px;">
        </div>
        <div class="form-control">
            <input type="text" v-model="info.pets_age" style="width: 275px; height: 48px; left: 714px; top: 494px;">
        </div>
        <div class="form-control">
            <input type="text" v-model="info.type_pets" style="width: 275px; height: 48px; left: 714px; top: 556px;">
        </div>
    </form>
</template>

<!--ข้อมูล-->
<script>
export default{
    name:"FromComponent",
    data(){
        return{
            info:{
                name:"",
                tel:"",
                email:"",
                pets_name:"",
                pets_age:"",
                type_pets:"",

            }
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
.background_3{
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url('https://thematter.co/wp-content/uploads/2022/03/shutterstock_633384791.jpg');
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.background_4{
    width: 100%;
  height: 100%;
}
</style>