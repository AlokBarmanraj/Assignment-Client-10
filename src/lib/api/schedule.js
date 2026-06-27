const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getScheduleList = async () => {
  const res = await fetch(`${baseUrl}/api/manageSchedule`, {
    cache: "no-store",
  });

  return res.json();
};
