export const getPrescriptionsById = async ({ userId }) =>
  await fetch(`http://localhost:3000/prescriptions/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
