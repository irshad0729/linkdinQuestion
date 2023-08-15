import React from "react";
import Image from "next/image";

const imageEg = () => {
  return (
    <div>
      {/* <img
        src="/images/webdev.png"
        alt="web dev png"
        style={{ width: "200px" }}
      /> */}
      <div className="parent-img-container">
        <div className="img-resize">
          <Image src={"/images/img-1.webp"} fill />
        </div>
      </div>

      <div>
        <Image src={"/images/img-2.webp"} width={700} height={700} />
      </div>
      <div>
        <Image src={"/images/img-3.webp"} width={700} height={700} />
      </div>
    </div>
  );
};

export default imageEg;
