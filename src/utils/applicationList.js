import announcements from "../assets/images/announcements.svg";
import career from "../assets/images/career.svg";
import employee from "../assets/images/employee.svg";
import absence from "../assets/images/suitcase.svg";

export const applicationList = [
    {
        name: "Employees",
        imageSrc: employee,
        linkTo: "/employees",
    },
    {
        name: "Announcements",
        imageSrc: announcements,
        linkTo: "/announcements",
    },
    {
        name: "Absence",
        imageSrc: absence,
        linkTo: "/absence",
    },
    {
        name: "Career",
        imageSrc: career,
        linkTo: "/career",
    },
];
