const getOrderToReviewAuth = async (cookie?: string) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/orders`,

      {
        credentials: "include",
        headers: {
          Cookie: cookie as string,
        },
      },
    );

    const res = await result.json();
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getOrderToReviewAuth;
