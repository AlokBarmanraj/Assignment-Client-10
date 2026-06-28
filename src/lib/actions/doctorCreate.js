"use server";
// create Doctor
const baseUrl =process.env.NEXT_PUBLIC_BASE_URL
export const createDoctor = async (newDoctor) => {
    const res = await fetch(`${baseUrl}/api/doctorCreate`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(newDoctor),
    });
    return res.json();
};
