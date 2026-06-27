"use server";

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
