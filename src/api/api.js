export const getThreeDays = async (coords) => {
  const url = "localhost:3000/drugs/3";
  try {
    const response = await (await fetch(url)).json();
    if (response.code === "200") {
      return response;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Fetch Error:", error);
  }
};
