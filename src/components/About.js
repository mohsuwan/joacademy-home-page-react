import us from "../images/us.webp";
function About() {
  return (
    <div className="flex items-center mt-20 py-10 px-40">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-[42px]">عن جو أكاديمي</h2>
        <p className="text-[25px]">
          أول منصة تعليم الكتروني بالمملكة الأردنية الهاشمية بالمنطقة بدأنا عام
          2014. تتنوع خدماتنا من تعليم تفاعلي متكامل لطلاب المنهاج الوطني
          والدولي والجامعات والعديد من الدورات التدريبية باستخدام أحدث التقنيات
          والتكنولوجيا والذكاء الاصطناعي لتسهيل وصول المعلومة بما يتناسب مع تطور
          العصر والتكنولوجيا والثورة الصناعية الرابعة
        </p>
        <button className="bg-[#1A428A] text-white py-2 px-6 rounded-lg w-80 h-14">قراءة المزيد</button>
      </div>
      <img
        className="rounded-2xl"
        src={us}
        alt="us"
        width="560"
        height="315 "
      />
    </div>
  );
}
export default About;
