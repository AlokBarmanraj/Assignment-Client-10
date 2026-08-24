// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const getDoctorList = async () => {
//   const res = await fetch(`${baseUrl}/api/doctorCreate`, {
//     cache: "no-store",
//   });

//   return res.json();
// };




const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getDoctorList = async (doctorId) => {
  if (!doctorId) {
    return [];
  }

  try {
    const response = await fetch(
      `${BASE_URL}/api/doctorCreate?doctorId=${doctorId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch doctor profile");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Get doctor profile error:", error);
    return [];
  }
};