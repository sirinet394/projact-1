function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var insurance = document.getElementById("insurance").value;
    
    if (name === "" || email === "" || phone === "" || insurance === "") {
        alert("กรุณากรอกชื่อ,เบอร์โทรศัพท์,อีเมล,ประกัน");
        return false;
    }

    // ตรวจสอบรูปแบบเบอร์โทรศัพท์ (ในที่นี้ตั้งเงื่อนไขให้เป็น 10 หลัก)
    var phoneRegex = /^[0-9]{10}$/;
    if (!phone.match(phoneRegex)) {
        alert("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
        return false;
    }

    return true;
}