"use server";
// create Schedule
const baseUrl =process.env.NEXT_PUBLIC_BASE_URL
export const createSchedule = async (newSchedule) => {
    const res = await fetch(`${baseUrl}/api/manageSchedule`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(newSchedule),
    });
    return res.json();
};



// update Schedule
export const updateSchedule = async (id, schedule) => {
  const res = await fetch(`${baseUrl}/api/manageSchedule/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(schedule),
  });

  return res.json();
};



// delete Schedule
export const deleteSchedule = async (id) => {
  const res = await fetch(`${baseUrl}/api/manageSchedule/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
