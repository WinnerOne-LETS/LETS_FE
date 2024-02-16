const putMyPassword = async (password: string) => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/my/password`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default putMyPassword;
