import palproj from "../images/palproj.webp";
function Palestine() {
  return (
    <div dir="rtl" className="flex justify-center items-center px-10 mt-8">
      <div className="  bg-[#1E4387] h-[200px] w-[535px] rounded-s-lg p-6">
        <div className="text-white font-medium ">برنامج فلسطين</div>
        <div className="text-white text-sm mt-4 mb-10 w-auto">
          الآن من جو اكاديمي برنامج خاص ل اهلنا في فلسطين.
        </div>
        <button className="bg-[#F2A057] text-white py-2 px-6 rounded-lg">
          ادرس الآن مجاناََ
        </button>
      </div>
      <img src={palproj} alt="palproj" />
    </div>
  );
}

export default Palestine;
