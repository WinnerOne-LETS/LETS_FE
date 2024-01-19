"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ListItemProps } from "@/app/types";
import Dialog from "@/app/_component/common/layout/Dialog";
import Withdraw from "./Withdraw";
import MenuList from "./MenuList";

// TODO:: 비회원 사용자에게는 노출 X
const AuthItems = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Logout");
    router.push("/");
  };

  const confirmWithdraw = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleWithdraw = () => {
    setIsWithdrawing(true);
    setTimeout(() => {
      console.log("탈퇴😂");
      setIsWithdrawing(false);
      router.push("/");
    }, 3000);
  };
  const AuthMenu: ListItemProps[] = [
    {
      text: "로그아웃",
      theme: "menu",
      onClickFn: handleLogout,
    },
    {
      text: "회원 탈퇴",
      theme: "menu",
      onClickFn: confirmWithdraw,
    },
  ];

  return (
    <>
      {!isWithdrawing && <MenuList menuItem={AuthMenu} />}
      <Dialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          setIsModalOpen(false);
          handleWithdraw();
        }}
        theme="withdraw"
        type="confirm"
      />
      {isWithdrawing && <Withdraw />}
    </>
  );
};

export default AuthItems;
