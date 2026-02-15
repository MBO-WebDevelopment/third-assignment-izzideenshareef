const url = new URL("https://script.google.com/macros/s/AKfycbyNloyKii561T5GqN6G2NwelyiNvjjCjU2byS-I6PEmY8AZI6teZgxkZzMg2iHl10AZ8Q/exec");
url.searchParams.set("name", name);
url.searchParams.set("phone", phone);
url.searchParams.set("email", email);

// نستخدم img-beacon عشان ما ينحجب
const img = new Image();
img.onload = () => { msg.textContent = "تم التسجيل ✅"; form.reset(); };
img.onerror = () => { msg.textContent = "صار خطأ بالإرسال"; };
img.src = url.toString();
