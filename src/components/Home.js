import React from "react";
import TextImgPair from "./TextImgPair";
import "./GradientText.css";

function Home() {
  return (
    <>
      <TextImgPair
        text={<>Give people the power to build community</>}
        textSize="7vw"
        imgSrc={
          "https://scontent.fbom23-1.fna.fbcdn.net/v/t39.8562-6/314388463_457051459669939_3108666438678561576_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6825c5&_nc_ohc=IBne1O-ubPcAX9vAhpT&_nc_ht=scontent.fbom23-1.fna&oh=00_AfCs5gyw6V9OJCDH5cly33tQ5wSHVr3o9F57Fl7WNVXn6g&oe=644EA054"
        }
        minImgHeight="20vh"
      />
      <TextImgPair
        textFirst={false}
        text={
          <>
            and bring the world closer{" "}
            <span className="gradientText">together</span>
          </>
        }
        textSize="7vw"
        imgSrc={
          "https://scontent.fbom23-1.fna.fbcdn.net/v/t39.8562-6/314730002_817565139472772_8622744997054410343_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6825c5&_nc_ohc=J-t61JqQPpwAX-EvHSE&_nc_ht=scontent.fbom23-1.fna&oh=00_AfAN7jByrBpdcnRtJjkQ_Pa0ohgqr8f9YQEDhnefd3ZqlA&oe=644DC820"
        }
        minImgHeight="25vh"
      />
      <div
        className="my-3 p-0 rounded"
        style={{
          backgroundImage: `url("https://scontent.fbom23-1.fna.fbcdn.net/v/t39.8562-6/314661388_1266205910839814_7482004128031949893_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6825c5&_nc_ohc=h5VcbghCX2MAX8bsHFR&_nc_ht=scontent.fbom23-1.fna&oh=00_AfBCHo-rklY9HBso41-wEKzHSCUnYXk453P_0QT08KCauQ&oe=644EBEC1")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "20vh",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
}

export default Home;
