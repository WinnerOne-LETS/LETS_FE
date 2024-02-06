"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import useScrollYStore from "@/store/useScrollYStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import BestTheme from "./_component/BestTheme";
import Theme from "./_component/Theme";

const ThemePage = () => {
  // id 값을 통한 구분 -> 0의 경우 베스트 테마, 이외에는 각각의 테마
  const { id } = useParams();
  const scrollYState = useScrollYStore();

  useEffect(() => {
    const time = setTimeout(() => {
      if (scrollYState.scrollY !== 0) {
        window.scrollTo(0, scrollYState.scrollY);
        scrollYState.setScrollYZero();
      }
    }, 100);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <section className="w-full flex flex-col items-center">
      <DefaultHeader theme="main" back />
      {/* id == 0 -> 베스트 테마 id != 0 -> 일반 테마 */}
      {Number(id) === 0 ? <BestTheme /> : <Theme />}
    </section>
  );
};

export default ThemePage;
