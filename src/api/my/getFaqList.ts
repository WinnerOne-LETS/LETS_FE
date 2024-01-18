const getFaqList = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/faq`);

  if (!result.ok) {
    throw new Error("데이터를 불러오는 데 실패했습니다.");
  }

  const res = await result.json();
  console.log("faq:", res);
  return res.data;
};
export default getFaqList;