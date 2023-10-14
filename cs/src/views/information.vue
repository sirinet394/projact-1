<template>
    <section>
    <div style="width: 233px; height: 57px; left: 859px; top: 223px; position: absolute; color: black; font-size: 36px; font-family: Inter; font-weight: 400; word-wrap: break-word">สมัครประกัน</div>
    <div style="width: 350px; height: 61px; left: 766px; top: 280px; position: absolute; background: #D9D9D9"></div>
    <div style="width: 350px; height: 61px; left: 766px; top: 372px; position: absolute; background: #D9D9D9"></div>
    <div style="width: 350px; height: 61px; left: 766px; top: 458px; position: absolute; background: #D9D9D9"></div>
    <div style="width: 350px; height: 61px; left: 766px; top: 543px; position: absolute; background: #D9D9D9"></div>
    <div style="width: 91px; height: 42px; left: 668px; top: 293px; position: absolute; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">ชื่อ-นามสกุล</div>
    <div style="width: 97px; height: 38px; left: 688px; top: 387px; position: absolute; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">เบอร์โทร</div>
    <div style="width: 59px; height: 38px; left: 714px; top: 473px; position: absolute; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">อีเมล</div>
    <div style="width: 129px; height: 44px; left: 637px; top: 552px; position: absolute; text-align: center; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">ประกันที่ต้องการ<br/>สมัคร</div>
    <button style="width: 168px; height: 44px; left: 760px; top: 637px; position: absolute; background: #ff6262; border-radius: 9px; text-align: center; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">
        <router-link to="/">ย้อนกลับ</router-link>
    </button>
    <button style="width: 168px; height: 44px; left: 948px; top: 637px; position: absolute; background: #6EFF62; border-radius: 9px; text-align: center; color: black; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word">
        <router-link to="/home">ลงทะเบียน</router-link>
    </button>
    <div style="width: 1920px; height: 72px; left: 0px; top: 0px; position: absolute; background: #83DCF9"></div>
    <img style="width: 90px; height: 90px; left: 898px; top: 125px; position: absolute; border-radius: 13px" src="https://i.pinimg.com/750x/46/e4/20/46e420eaa30a38cefdef83e4cd6bb138.jpg" />
    <form>
        <div class="form-control">
            <input type="text" v-model="info.name" style="left: 766px; top: 270px;">
        </div>
        <div class="form-control">
            <input type="text" v-model="info.tol" style="left: 766px; top: 362px;">
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
                <option value="pets">ประกันสัตว์เลี้ยง</option>
            </select>
        </div>
    </form>
    </section>
</template>
<script>
export default{
    name:"FromComponent",
    data(){
        return{
            info:{
                name:"",
                tol:"",
                email:"",
                insurance:""
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
template{
    background-color: white;
}
</style>