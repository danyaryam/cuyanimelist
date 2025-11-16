import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

const StatsGrid = () => {
    const data = [
        {
            value: "30+",
            label: "Employees",
        },
        {
            value: "40+",
            label: "Anime",
        },
        {
            value: "25+",
            label: "Manga",
        },
        {
            value: "80+",
            label: "Genres",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="bg-white/5 border border-color-accent rounded-2xl p-6 backdrop-blur-md hover:scale-[1.03] transition-all duration-300"
                >
                    <div className="flex justify-center items-center gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-color-accent">{item.value}</h2>
                            <p className="text-color-primary font-semibold">{item.label}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsGrid;
