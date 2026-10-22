# FOOD COURT – Zamalek Promenade

موقع ثابت (HTML + CSS + JavaScript فقط) يجمع خمسة مطاعم في مكان واحد. لا يحتاج أي build أو سيرفر.

## هيكل المشروع

كل الملفات في **جذر المستودع** (لا يوجد مجلد للصور):

```
index.html
style.css
script.js
README.md
food_court_logo.jpg ← شعار FOOD COURT (العلامة المائية + الأيقونة)
e3genha_logo_.jpg ← صورة اعجنها
mubhara_logo.jpg  ← صورة مبهرة
go_crispy_logo_.jpg ← صورة GO CRISPY
batatsay_logo.jpg  ← صورة بطاطسايه
5-burger_logo.jpg  ← صورة 5 BURGER
```

> الأسماء أعلاه هي نفس أسماء الملفات التي أرسلتها، فارفعها كما هي في جذر المستودع بدون أي مجلد وبدون إعادة تسمية. لو غيّرت اسم أي صورة، حدّث قيمة `image` في `script.js` (والشعار `food_court_logo.jpg` يُستدعى أيضاً من `index.html` و`style.css`).

## 1) إنشاء مستودع GitHub
1. ادخل على github.com → **New repository**.
2. اكتب اسماً (مثلاً `food-court`) واختر **Public** → **Create repository**.

## 2) رفع الملفات
1. اضغط **Add file → Upload files**.
2. ارفع كل الملفات أعلاه (الكود + الصور + الشعار) في نفس المكان.
3. اضغط **Commit changes**.

## 3) تفعيل GitHub Pages
**Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.**

## 4) معرفة رابط الموقع
يظهر في نفس صفحة Pages بعد دقيقة أو دقيقتين، بالشكل:
`https://USERNAME.github.io/REPO/`
المسارات نسبية فتعمل تحت اسم المستودع بدون تعديل.

## 5) تغيير الشعار
استبدل `food_court_logo.jpg` بالملف الجديد بنفس الاسم.

## 6) تغيير صور المطاعم
استبدل الصورة بنفس الاسم، أو غيّر قيمة `image` في `CONFIG` داخل `script.js`.

## 7) تعديل روابط المطاعم والأسماء والأوصاف
افتح `script.js` وعدّل `CONFIG.restaurants` (الاسم، `url`، `desc`، `image`، ولون خلفية الصورة `bg`).

## 8) تعديل رابط إنستجرام
في أعلى `script.js`: `CONFIG.instagramUrl`.

## 9) تعديل النصوص والألوان
- نصوص الواجهة بالعربية والإنجليزية: كائن `I18N` في `script.js`.
- الألوان والمسافات والخطوط: المتغيرات في أول `style.css` (`:root`).
- شفافية العلامة المائية: `.watermark { opacity }` في `style.css`.

## 10) نشر التحديثات
عدّل الملف على GitHub (أيقونة القلم) أو ارفع نسخة جديدة، ثم **Commit changes**. يتحدث الموقع خلال دقائق.

## المشاركة على السوشيال ميديا (اختياري)
بعد معرفة الرابط الحقيقي، فعّل `canonical` و`og:image` داخل `<head>` في `index.html` (التعليقات الموجودة هناك توضح كيف).
