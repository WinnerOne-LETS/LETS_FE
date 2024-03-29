const getAvailableDates = async (id: number) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/${id}/available-dates`,
      {
        cache: "no-store",
      },
    );

    const data = await result.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAvailableDates;
