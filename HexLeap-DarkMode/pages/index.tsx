import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import FrameComponent from "../components/frame-component";

const Frame: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-100 flex flex-col items-center justify-start pt-[47px] px-5 pb-[94px] box-border gap-[50px] tracking-[normal] mq750:gap-[25px_50px]">
      <div className="w-[1444px] h-[1778px] relative bg-gray-100 hidden max-w-full" />
      <section className="w-[1241px] flex flex-col items-start justify-start gap-[23px] max-w-full text-left text-5xl text-white font-poppins">
        <div className="flex flex-col items-start justify-start gap-[5px]">
          <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[80px] z-[1] mq450:text-lgi">
            Sports
          </h2>
          <div className="w-[82px] h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-dodgerblue" />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[14px] text-mid font-inter">
          <div className="flex-1 bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-col items-start justify-start p-2.5 box-border gap-[15.350000000000025px] min-w-[232px] max-w-[237px] z-[1]">
            <div className="w-[237px] h-[511px] relative bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] hidden" />
            <img
              className="self-stretch h-[385.3px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
            <div className="relative capitalize font-medium z-[1]">
              Sacramento River Cats
            </div>
            <div className="self-stretch rounded-sm bg-gray-100 flex flex-row items-start justify-start pt-3 px-2.5 pb-[11px] gap-[39px] z-[1] text-xs text-gainsboro">
              <div className="h-[54px] w-[217px] relative rounded-sm bg-gray-100 hidden" />
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="h-[9px] relative capitalize inline-block min-w-[70px] z-[1]">
                  total events
                </div>
                <div className="h-2.5 relative text-sm capitalize font-medium text-white inline-block min-w-[67px] z-[1]">
                  48 Events
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="h-[9px] relative capitalize inline-block min-w-[32px] z-[1]">
                  sport
                </div>
                <div className="h-2.5 relative text-sm capitalize font-medium text-white inline-block min-w-[57px] z-[1]">
                  baseball
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-col items-start justify-start p-2.5 box-border gap-[15.299999999999956px] min-w-[232px] max-w-[237px] z-[1]">
            <div className="w-[237px] h-[511px] relative bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] hidden" />
            <img
              className="self-stretch h-[385.4px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-1@2x.png"
            />
            <div className="relative capitalize font-medium z-[1]">
              Las Vegas Aviators
            </div>
            <div className="self-stretch rounded-sm bg-gray-100 flex flex-row items-start justify-start pt-3 px-2.5 pb-[11px] gap-[39px] z-[1] text-xs text-gainsboro">
              <div className="h-[54px] w-[217px] relative rounded-sm bg-gray-100 hidden" />
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="h-[9px] relative capitalize inline-block min-w-[70px] z-[1]">
                  total events
                </div>
                <div className="h-2.5 relative text-sm capitalize font-medium text-white inline-block min-w-[67px] z-[1]">
                  28 Events
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="h-[9px] relative capitalize inline-block min-w-[32px] z-[1]">
                  sport
                </div>
                <div className="h-2.5 relative text-sm capitalize font-medium text-white inline-block min-w-[57px] z-[1]">
                  baseball
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-col items-start justify-start p-2.5 box-border gap-[15.299999999999956px] min-w-[232px] max-w-[237px] z-[1]">
            <div className="w-[237px] h-[511px] relative bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] hidden" />
            <img
              className="self-stretch h-[385.4px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className="relative capitalize font-medium z-[1]">
              new jersey devils
            </div>
            <div className="self-stretch rounded-sm bg-gray-100 flex flex-row items-start justify-start pt-3 px-2.5 pb-[11px] gap-[39px] z-[1] text-xs text-gainsboro">
              <div className="h-[54px] w-[217px] relative rounded-sm bg-gray-100 hidden" />
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="h-[9px] relative capitalize inline-block min-w-[70px] z-[1]">
                  total events
                </div>
                <div className="h-2.5 relative text-sm capitalize font-medium text-white inline-block min-w-[65px] z-[1]">
                  15 Events
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="h-[9px] relative capitalize inline-block min-w-[32px] z-[1]">
                  sport
                </div>
                <div className="h-2.5 relative text-sm capitalize font-medium text-white inline-block min-w-[74px] z-[1]">
                  ice hockey
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-col items-start justify-start p-2.5 box-border gap-[15.299999999999956px] min-w-[232px] max-w-[237px] z-[1]">
            <div className="w-[237px] h-[511px] relative bg-darkslategray-100 shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] hidden" />
            <img
              className="self-stretch h-[385.4px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-1@2x.png"
            />
            <div className="relative capitalize font-medium z-[1]">
              Las Vegas Aviators
            </div>
            <div className="self-stretch rounded-sm bg-gray-100 flex flex-row items-start justify-start pt-3 px-2.5 pb-[11px] gap-[39px] z-[1] text-xs text-gainsboro">
              <div className="h-[54px] w-[217px] relative rounded-sm bg-gray-100 hidden" />
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="h-[9px] relative capitalize inline-block min-w-[70px] z-[1]">
                  total events
                </div>
                <div className="h-2.5 relative text-sm capitalize font-medium text-white inline-block min-w-[67px] z-[1]">
                  28 Events
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="h-[9px] relative capitalize inline-block min-w-[32px] z-[1]">
                  sport
                </div>
                <div className="h-2.5 relative text-sm capitalize font-medium text-white inline-block min-w-[57px] z-[1]">
                  baseball
                </div>
              </div>
            </div>
          </div>
          <GroupComponent unnamed11="/unnamed-1-1@2x.png" />
        </div>
      </section>
      <section className="w-[1240px] flex flex-col items-start justify-start gap-[46px] max-w-full text-left text-31xl text-white font-poppins mq750:gap-[23px_46px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <button className="cursor-pointer [border:none] py-2.5 px-[30px] bg-cornflowerblue-100 rounded-10xs shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-cornflowerblue-200">
            <div className="relative text-sm leading-[26px] font-semibold font-inter text-white text-left inline-block min-w-[64px]">
              See More
            </div>
          </button>
        </div>
        <div className="self-stretch [background:linear-gradient(180deg,_#18282a,_#221a2c)] flex flex-col items-start justify-start pt-[70px] px-[77px] pb-[50px] box-border gap-[51px] max-w-full z-[1] lg:pl-[38px] lg:pr-[38px] lg:box-border mq750:gap-[25px_51px] mq1050:pt-[45px] mq1050:pb-8 mq1050:box-border mq450:pt-[29px] mq450:pb-[21px] mq450:box-border">
          <div className="w-[1240px] h-[918px] relative bg-black hidden max-w-full" />
          <div className="w-[1240px] h-[918px] relative [background:linear-gradient(180deg,_#18282a,_#221a2c)] hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
            <div className="w-[917px] flex flex-col items-start justify-start gap-[25px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
              <h1 className="m-0 relative leading-[105%] font-bold z-[1]" style={{ fontSize: 'xxx-large' }}>
                Collection Spotlight
              </h1>
            </div>
              <div className="self-stretch relative text-sm leading-[22.65px] font-inter text-center z-[2]">
                Discover extraordinary moments with our Spotlight Collection
                metatickets—exclusive access to premium events for an
                unforgettable experience. Grab yours today!
              </div>
            </div>
          </div>
          <FrameComponent
            group1975="/group-1975@2x.png"
            ticketMockup3="/ticket-mockup-3@2x.png"
            group19751="/group-1975@2x.png"
            unnamed1="/unnamed-1@2x.png"
            group19752="/group-1975@2x.png"
            ticketMockup31="/ticket-mockup-3@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Frame;
