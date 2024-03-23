import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  unnamed11?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propBackgroundColor3?: CSSProperties["backgroundColor"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  unnamed11,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
  propBackgroundImage,
  propColor,
  propColor1,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const advertisementTitleStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      fontSize: '1.20rem',
    };
  }, [propColor]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className="flex-1 bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start p-2.5 box-border min-w-[232px] max-w-[237px] z-[1] text-left text-smi-8 text-white font-inter"
      style={groupDivStyle}
    >
      <div
        className="h-[511px] w-[237px] relative bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] hidden"
        style={rectangleDivStyle}
      />
      <div
        className="flex-1 bg-darkslategray-100 flex flex-col items-end justify-start pt-0 px-0 pb-[42px] gap-[28px] z-[1] border-[0.2px] border-solid border-teal mq750:pb-[27px] mq750:box-border"
        style={groupDiv1Style}
      >
        <div
          className="self-stretch h-[491px] relative bg-darkslategray-100 box-border hidden border-[0.2px] border-solid border-teal"
          style={rectangleDiv1Style}
        />
        <div
          className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[193px] bg-[url('/unnamed-1-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]"
          style={frameDivStyle}
        >
          <img
            className="h-[218px] w-[217px] relative object-cover hidden"
            alt=""
            src={unnamed11}
          />
          <div className="bg-black flex flex-row items-start justify-start py-[3px] px-[14.899999999999975px] z-[2]">
            <b className="relative leading-[19px] inline-block min-w-[18px]">
              Ad
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[14.899999999999975px] pl-[15px] text-xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <h3
              className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-base"
              style={advertisementTitleStyle}
            >
              Advertisement title
            </h3>
            <div
              className="self-stretch relative text-smi-8 leading-[19px] text-gainsboro z-[1]"
              style={loremIpsumDolorStyle}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
