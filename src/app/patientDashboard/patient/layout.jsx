
import { requireRole } from "@/lib/session";

const PatientLayout = async ({ children }) => {
  await requireRole("patient");

  return children;
};

export default PatientLayout;