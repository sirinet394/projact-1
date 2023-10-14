<template>
    <section>
        <div style="width: 100%; height: 100%; position: center; background: white">
        <div style="width: 312px; height: 76px; left: 740px; top: 260px; position: absolute; color: black; font-size: 48px; font-family: Inter; font-weight: 400; word-wrap: break-word">สมัครประกัน</div>
        <form>
            <div class="form-control">
                <label for="name">ชื่อนามสกุล</label>
                <input type="text" v-model="name"/>
            </div>
            <div class="form-control">
                <label for="name">อีเมล</label>
                <input type="text" v-model="email"/>
            </div>
            <div class="form-control">
                <label for="name">เบอร์โทรศัพท์</label>
                <input type="text" v-model="tol"/>
            </div>
            <div class="form-control">
                <label for="name">เลือกประกัน</label>
                <select>
                    <option value="def">เลือกประกัน</option>
                    <option value="live">ประกันสุขภาพ</option>
                    <option value="accident">ประกันอุบัติเหตุ</option>
                    <option value="travel">ประกันเดินทาง</option>
                    <option value="drive">ประกันรถยนต์</option>
                    <option value="home">ประกันอัคคีภัย</option>
                    <option value="pets">ประกันสัตว์เลี้ยง</option>
                </select>
            </div>
        </form>
        <button style="width: 225px; height: 59px; left: 740px; top: 650px; position: absolute; background: #6EFF62; border-radius: 9px; color: black; font-size: 32px; font-family: Inter; font-weight: 400; word-wrap: break-word">
        <router-link to="/home">
            ลงทะเบียน
        </router-link>
        </button>
        <div style="width: 1930px; height: 96px; left: 0px; top: 0px; position: absolute; background: #83DCF9"></div>
        <img style="width: 120px; height: 120px; left: 800px; top: 140px; position: absolute; border-radius: 13px" src="https://i.pinimg.com/750x/46/e4/20/46e420eaa30a38cefdef83e4cd6bb138.jpg" />
        </div>
    </section>
</template>
<style>
.form-control{
    margin: 0.5rem 0;
}
label{
    font-weight: bold;
}
input{
    display: block;
    height: 40px;
    width: 100%;
    margin-top: 0.5rem;
}
</style>