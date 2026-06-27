"use client";

import { Button, Input, Modal } from "@heroui/react";
import { FaEdit } from "react-icons/fa";

export default function UpdatePrescription() {
  return (
    <Modal>
      <Button variant="outline" className={"border-none"}>
        <FaEdit />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="max-w-2xl">
            <Modal.Header>
              <Modal.Heading>
                Update Prescription
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="space-y-4">
              <Input placeholder="Patient Name" />
              <Input placeholder="Age" type="number" />
              <Input placeholder="Diagnosis" />
              <Input placeholder="Medicines" />

              <textarea
                className="w-full border rounded-lg p-3"
                rows={4}
                placeholder="Advice"
              />
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button slot="close">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}






// "use client";

// import { Table, Button } from "@heroui/react";
// import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

// const prescriptions = [
//   {
//     id: "#RX-1001",
//     patient: "John Smith",
//     age: 35,
//     diagnosis: "Fever",
//     medicines: "Paracetamol",
//     date: "26 Jun 2026",
//   },
//   {
//     id: "#RX-1002",
//     patient: "Kate Moore",
//     age: 28,
//     diagnosis: "Diabetes",
//     medicines: "Metformin",
//     date: "25 Jun 2026",
//   },
//   {
//     id: "#RX-1003",
//     patient: "Michael Brown",
//     age: 41,
//     diagnosis: "Hypertension",
//     medicines: "Amlodipine",
//     date: "24 Jun 2026",
//   },
// ];

// export default function PrescriptionTable() {
//   return (
//     <div className="w-full overflow-x-auto rounded-2xl border bg-white shadow">
//       <Table>
//         <Table.ScrollContainer>
//           <Table.Content
//             aria-label="Prescription Table"
//             className="min-w-[900px]"
//           >
//             <Table.Header>
//               <Table.Column>ID</Table.Column>
//               <Table.Column>Patient</Table.Column>
//               <Table.Column>Age</Table.Column>
//               <Table.Column>Diagnosis</Table.Column>
//               <Table.Column>Medicines</Table.Column>
//               <Table.Column>Date</Table.Column>
//               <Table.Column>Action</Table.Column>
//             </Table.Header>

//             <Table.Body>
//               {prescriptions.map((item) => (
//                 <Table.Row key={item.id}>
//                   <Table.Cell>{item.id}</Table.Cell>
//                   <Table.Cell>{item.patient}</Table.Cell>
//                   <Table.Cell>{item.age}</Table.Cell>
//                   <Table.Cell>{item.diagnosis}</Table.Cell>
//                   <Table.Cell>{item.medicines}</Table.Cell>
//                   <Table.Cell>{item.date}</Table.Cell>

//                   <Table.Cell>
//                     <div className="flex items-center gap-2">
//                       <Button
//                         isIconOnly
//                         size="sm"
//                         color="primary"
//                         variant="solid"
//                       >
//                         <FaEye />
//                       </Button>

//                       <Button
//                         isIconOnly
//                         size="sm"
//                         color="warning"
//                         variant="solid"
//                       >
//                         <FaEdit />
//                       </Button>

//                       <Button
//                         isIconOnly
//                         size="sm"
//                         color="danger"
//                         variant="solid"
//                       >
//                         <FaTrashAlt />
//                       </Button>
//                     </div>
//                   </Table.Cell>
//                 </Table.Row>
//               ))}
//             </Table.Body>
//           </Table.Content>
//         </Table.ScrollContainer>
//       </Table>
//     </div>
//   );
// }