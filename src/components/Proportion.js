import milion from "../images/milion.svg";
import thousan13d from "../images/thousan13d.svg";
import milio16n from "../images/milio16n.svg";
import thousan28d from "../images/thousan28d.svg";
import thousan131d from "../images/thousan131d.svg";
import divider from "../images/divider.svg";

function Proportion() {
  return (
    <div className="flex justify-around items-center bg-[#F9F9F9] mt-12 py-10 px-4">
      <div className="flex flex-col justify-center items-center">
        <img src={milio16n} alt="milio16n " width="120" height="140" />
        <p className="font-bold text-xl">طلاب</p>
      </div>
      <img src={divider} alt="divider " width="2" height="20" />
      <div className="flex flex-col justify-center items-center">
        <img src={milion} alt="milion " width="120" height="140" />
        <p className="font-bold text-xl">ساعة مشاهدة</p>
      </div>
      <img src={divider} alt="divider " width="2" height="20" />
      <div className="flex flex-col justify-center items-center">
        <img src={thousan28d} alt="thousan28d " width="120" height="140" />
        <p className="font-bold text-xl">معلم</p>
      </div>
      <img src={divider} alt="divider " width="2" height="20" />
      <div className="flex flex-col justify-center items-center">
        <img src={thousan13d} alt="thousan13d " width="120" height="140" />
        <p className="font-bold text-xl">دورة</p>
      </div>
      <img src={divider} alt="divider " width="2" height="20" />
      <div className="flex flex-col justify-center items-center">
        <img src={thousan131d} alt="milion " width="120" height="140" />
        <p className="font-bold text-xl">ملف</p>
      </div>
    </div>
  );
}
export default Proportion;
