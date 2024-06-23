import Image from "next/image"
 
const About = () => {
return (
    <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
            <div className="flex md:flex-1">
                <Image src="https://plus.unsplash.com/premium_photo-1661746101294-0b53eaaacc61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="working on housing" width={1300} height={900} className="w-full md:h-full object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2 lg:w-[54%] space-y-12 text-sky-700 dark:text-sky-300">
                <h1 className="text-sky-950 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-700 to-sky-600">About MedLink</span>  
                <br/>Your Trusted Healthcare Partner
                </h1>
                <p className="text-sky-950">
                At MedLink, our mission is to make healthcare accessible and convenient for everyone. We bridge the gap between patients and healthcare providers by offering a platform that simplifies finding, reviewing, and booking appointments with top-rated doctors in your area.
                </p>
                <p className="text-sky-950">
                Our dedicated team works tirelessly to keep our platform updated with the latest information and technology, ensuring you have a seamless experience from start to finish. We are committed to providing reliable, comprehensive, and secure healthcare solutions to our users.
                </p>
            </div>
        </div>
    </section>
)
}
 
export default About