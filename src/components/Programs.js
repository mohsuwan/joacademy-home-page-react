import React from "react";
import Card from "./Card";
import logo from "../images/logo.svg";
import jeel from "../images/jeel.webp";
import tawjihi from "../images/tawjihi.webp";
import uonivarsity from "../images/uonivarsity.webp";
import chil from "../images/chil.webp";
import worl from "../images/worl.webp";
function Program() {
  const allCards = [
    {
      title: "برنامج التوجيهي و الثانوي",
      color: "#0D2755",
      image: tawjihi,
    },
    {
      title: "برنامج الجامعات و الكليات",
      color: "#1A428A",
      image: uonivarsity,
    },
    {
      title: "برنامج الصفوف الاساسية ",
      color: "#1F36AD",
      image: chil,
    },
    {
      title: "البرنامج الدولي",
      color: "#327BF9",
      image: worl,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center my-6 w-full">
      <img src={logo} alt="logos" width="350" height="150" className="mb-6" />
      <img src={jeel} alt="jeel" width="500" height="281.25" />
      <h2 className="text-[24px] mt-16">
        اختر البرنامج الذي تفضل التصفح عبره، حتى تمكننا من خدمتك بأفضل طريقة
        ممكنة
      </h2>
      <div className="flex gap-3 mt-2 p-4">
        {allCards?.map(({ title, color, image}, index) => {
          // const { title, color, image } = ele;
          // const title = ele.title
          // const color = ele.color
          // const image = ele.image


          return (
            // <Fragment key={index}>
            <Card key={index} title={title} color={color} image={image} />
            // </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Program;
