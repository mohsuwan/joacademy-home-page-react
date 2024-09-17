import ServicesCard from "./ServicesCard";
import jobussnies from "../../images/jobussnies.svg";
import interactivecourses from "../../images/interactivecourses.svg";
import kalemon from "../../images/kalemon.svg";
import courses from "../../images/courses.svg";
import officehours from "../../images/officehours.svg";
import questions from "../../images/questions.svg";

function Services() {
  const allServices = [
    {
      title: "جو اكاديمي  اعمال",
      image: jobussnies,
      description:
        "نقوم بتمكين المؤسسات التعليمية باستخدام الأدوات والحلول التعليمية الأمثل التي ستساعد المنظمات في نشر المعرفة والفهم في جميع أنحاء المنطقة، والاستثمار في التعليم، وتحل محل الحاجة إلى التدريس التقليدي بالكتابة.",
    },
    {
      title: "دروس تفاعلية",
      image: interactivecourses,
      description:
        "نقوم بتمكين المؤسسات التعليمية باستخدام الأدوات والحلول التعليمية الأمثل التي ستساعد المنظمات في نشر المعرفة والفهم في جميع أنحاء المنطقة، والاستثمار في التعليم، وتحل محل الحاجة إلى التدريس التقليدي بالكتابة.",
    },
    {
      title: " كلِمن (قريباً)",
      image: kalemon,
      description:
        "نقوم بتمكين المؤسسات التعليمية باستخدام الأدوات والحلول التعليمية الأمثل التي ستساعد المنظمات في نشر المعرفة والفهم في جميع أنحاء المنطقة، والاستثمار في التعليم، وتحل محل الحاجة إلى التدريس التقليدي بالكتابة.",
    },
    {
      title: "دورات مسجلة",
      image: courses,
      description:
        "نقوم بتمكين المؤسسات التعليمية باستخدام الأدوات والحلول التعليمية الأمثل التي ستساعد المنظمات في نشر المعرفة والفهم في جميع أنحاء المنطقة، والاستثمار في التعليم، وتحل محل الحاجة إلى التدريس التقليدي بالكتابة.",
    },
    {
      title: "ساعات مكتبية",
      image: officehours,
      description:
        "نقوم بتمكين المؤسسات التعليمية باستخدام الأدوات والحلول التعليمية الأمثل التي ستساعد المنظمات في نشر المعرفة والفهم في جميع أنحاء المنطقة، والاستثمار في التعليم، وتحل محل الحاجة إلى التدريس التقليدي بالكتابة.",
    },
    {
      title: "بنك الاسئلة",
      image: questions,
      description:
        "نقوم بتمكين المؤسسات التعليمية باستخدام الأدوات والحلول التعليمية الأمثل التي ستساعد المنظمات في نشر المعرفة والفهم في جميع أنحاء المنطقة، والاستثمار في التعليم، وتحل محل الحاجة إلى التدريس التقليدي بالكتابة.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full pb-8 bg-[#F9F9F9] ">
      <h2 className="font-bold text-[42px] py-8">خدمات جو اكاديمي</h2>
      <div className="flex justify-center flex-wrap gap-3  ">
        {allServices?.map(({ image, title, description }, index) => {
          return (
            <ServicesCard 
              key={index}
              title={title}
              image={image}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Services;
