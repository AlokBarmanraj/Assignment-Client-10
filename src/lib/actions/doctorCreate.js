"use server";
// create Doctor
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const createDoctor = async (newDoctor) => {
  const res = await fetch(`${baseUrl}/api/doctorCreate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDoctor),
  });
  return res.json();
};

// export const getDoctorList = async (email) => {
//   const res = await fetch(`${baseUrl}/api/doctorCreate?email=${email}`, {
//     cache: "no-store",
//   });

//   return res.json();
// };

export const getDoctorList = async (doctorId) => {
  const url = `${baseUrl}/api/doctorCreate?doctorId=${doctorId}`;

  console.log(url);

  const res = await fetch(url, {
    cache: "no-store",
  });

  return res.json();
};

// update Doctor
export const updateDoctor = async (id, doctor) => {
  const res = await fetch(`${baseUrl}/api/doctorCreate/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(doctor),
  });

  return res.json();
};

// delete Doctor
export const deleteDoctor = async (id) => {
  const res = await fetch(`${baseUrl}/api/doctorCreate/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
