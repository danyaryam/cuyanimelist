import HeaderSection from "@/components/Utilities/header-about"
import StatsGrid from "@/components/Utilities/StarCard"
import Image from "next/image"
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5"

const Page = () => {
    return (
        <div>
            <HeaderSection title="About Us" subTitle="learn more about our CUYANIMELIST." />
            <div className="max-w-screen-xl mx-auto py-20 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image src="/meeting-room.jpg" width={650} height={579} alt="about image" />
                    <div className="">
                        <h1 className="text-5xl font-semibold text-color-accent mb-4">Who We Are</h1>
                        <p className="text-color-primary py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <ul className="list-item space-y-6 pt-8">
                            <li className="flex gap-5">
                                <div className="mt-1">
                                    <IoEyeOutline className="size-7 text-color-accent" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg text-color-accent font-semibold mb-1">Vision :</h4>
                                    <p className="text-color-primary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis doloremque omnis, eveniet ab perspiciatis illo.</p>
                                </div>
                            </li>
                            <li className="flex gap-5">
                                <div className="mt-1">
                                    <IoLocateOutline className="size-7 text-color-accent" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg text-color-accent font-semibold mb-1">Mission :</h4>
                                    <p className="text-color-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus numquam enim officia iusto? Blanditiis facere fugiat similique voluptate eius.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                    <div className="">
                        <h1 className="text-5xl font-semibold text-color-accent mb-4">About Our Platform</h1>
                        <p className="text-color-primary py-5">We are dedicated to providing the most complete and high-quality anime and manga discovery experience. With constantly updated data and a clean interface, we make it easier for fans to explore what they love.</p>
                        <StatsGrid />
                    </div>
                    <Image src="/office-2.jpg" width={650} height={579} alt="about image" />
                </div>
                <div className="">
                    <h1 className="text-5xl font-semibold text-color-accent flex justify-center mb-4 mt-10">Our Workspace</h1>
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        <Image src="/office-1.jpg" width={650} height={579} alt="about image" />
                        <Image src="/office-3.jpg" width={650} height={579} alt="about image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page