import Image from "next/image";

const HeaderSection = ({ title, subTitle }) => {
    return (
        <header className="relative h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/header.jpg" alt="Header Image" fill className="object-center object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative flex flex-col items-center justify-center h-screen text-center pt-14">
                <h1 className="text-5xl font-bold leading-tight capitalize text-color-accent">{title}</h1>
                <p className="text-xl text-color-primary">{subTitle}</p>
            </div>
        </header>
    )
}

export default HeaderSection