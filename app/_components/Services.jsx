import Image from "next/image";
import Link from "next/link";
 
const iconRender = (val) => {
switch (val) {
    case "default-ico":
        return (
            // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            //     <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
            // </svg>
            <Image src={'/stethoscope.png'} alt="icon" width={50} height={50} />
        )
        case "spec-ico":
            return (
                // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                //     <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                // </svg>
                <Image src={'/dermatologist (2).png'} alt="icon" width={65} height={50} />
            )
            case "child-ico":
                return (
                    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    //     <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                    // </svg>
                    <Image src={'/child.png'} alt="icon" width={65} height={50} />
                )
                case "mentail-ico":
                    return (
                        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        //     <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                        // </svg>
                        <Image src={'/medical-report.png'} alt="icon" width={65} height={50} />
                    )
                    case "dentist-ico":
                        return (
                            // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            //     <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                            // </svg>
                            <Image src={'/tooth.png'} alt="icon" width={65} height={50} />
                        )
                        case "medicine-ico":
                            return (
                                // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                //     <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                                // </svg>
                                <Image src={'/medicine.png'} alt="icon" width={65} height={50} />
                            )
    default:
        return <>No Icon</>;
}
}
const FeatureItem = ({ title, description, icon, color }) => {
return (
    <div className="p-4 bg-sky-100 dark:bg-gray-900 rounded-lg space-y-3">
        <span className={`p-3 flex w-max rounded-full text-white `}>
            {
                iconRender(icon)
            }
        </span>
        <h1 className="flex text-lg font-semibold capitalize text-sky-950 dark:text-white">
            {title}
        </h1>
        <p className="text-sm font-light text-gray-700 dark:text-gray-300">
            {description}
        </p>
    </div>
)
}
const features = [
{
    id: 1,
    title: "Primary Care",
    description: "General practitioners, family medicine, and internal medicin",
    icon: "default-ico",
    color: "bg-sky-700"
},
{
    id: 2,
    title: "Specialists",
    description: "Dermatologists, cardiologists, orthopedists, and more.",
    icon: "spec-ico",
    color: "bg-sky-700"
},
{
    id: 3,
    title: "Pediatrics",
    description: "Pediatricians and child healthcare specialists.",
    icon: "child-ico",
    color: "bg-sky-700"
},
{
    id: 4,
    title: "Mental Health",
    description: "Psychiatrists and psychologists.",
    icon: "mentail-ico",
    color: "bg-sky-700"
},
{
    id: 5,
    title: "Dental Care",
    description: "General and specialized dental services.",
    icon: "dentist-ico",
    color: "bg-sky-700"
},
{
    id: 6,
    title: "Alternative Medicine",
    description: "Find acupuncturists, chiropractors, and holistic health practitioners.",
    icon: "medicine-ico",
    color: "bg-sky-700"
},
]
 
const Services = () => {
return (
    <section className="py-20 px-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
                <div className="lg:w-[55%] xl:w-3/5 lg:items-center grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {
                        features.map(feature => (
                            <FeatureItem key={feature.id} {...feature} />
                        ))
                    }
                </div>
                <div className="flex-1 py-10 lg:py-8 space-y-8 max-w-2xl">
                    <h2 className="text-4xl font-semibold text-sky-950 dark:text-white">
                   Our Comprehensive Healthcare at Your Fingertips
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-md">
                    Search for doctors by specialty, location, and insurance. 
                    </p>
                    <div className="flex">
                        <Link href="#" className="bg-sky-7 dark:bg-sky-500 text-white rounded-full px-6 h-12 flex w-max items-center">
                            Try it now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
export default Services