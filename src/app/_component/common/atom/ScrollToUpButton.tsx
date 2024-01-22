"use client";

interface Props {
  viewMore: boolean;
}

const ScrollToUpButton = ({ viewMore }: Props) => {
  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getAnimation = () => {
    if (viewMore) return "animate-positionTopAnimation";
    return "";
  };

  return (
    <div
      className={`fixed z-50 ${getAnimation()} w-[40px] h-14 flex justify-center items-center`}
    >
      <button
        type="button"
        className="flex justify-center items-center w-9 h-9 rounded-[50%] border-2 border-solid border-grey-c bg-white shadow-dark"
        onClick={handleUp}
      >
        <img src="/icons/airplaneIcon.svg" alt="위로 가기" />
      </button>
    </div>
  );
};
export default ScrollToUpButton;
