export const getDrugsTakenRecordByUserId = async ({ userId }) =>
  await fetch(`http://localhost:3000/drugTakenRecords/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
