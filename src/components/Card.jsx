import { FaUsers } from "react-icons/fa6";
function Card({ icon, description, heading }) {
  return (
    <div className="card shadow-lg p-14 text-center rounded-3xl pt-20 md:pt-32 relative bg-white">
      <div className={`icon absolute`}>{icon}</div>
      <h3 className="heading-3">{heading}</h3>
      <p className="text-lg text-leading-300">{description}</p>
    </div>
  );
}

const cardDetails = [
  {
    icon: (
      <div className="h-24 w-24 rounded-full bg-purple inline-flex items-center justify-center">
        <FaUsers className="text-5xl text-white" />,
      </div>
    ),

    heading: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
  },
  {
    icon: (
      <div className="h-24 w-24 rounded-full bg-accent inline-flex items-center justify-center">
        <FaUsers className="text-5xl text-white" />,
      </div>
    ),
    heading: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    icon: (
      <div className="h-24 w-24 rounded-full bg-secondary inline-flex items-center justify-center">
        <FaUsers className="text-5xl text-white" />,
      </div>
    ),
    heading: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
  },
];
export { cardDetails };

export default Card;
