import Link from "next/link";
import { getGenresResponse } from '@/libs/api-libs';


const Page = async () => {
    const genres = await getGenresResponse("genres/anime");
    const genreList = genres?.data ?? [];

    return (
        <div className="px-4 py-6 text-color-primary">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Genre Anime</h1>

                <Link
                    href={`/`}
                    className="inline-block px-4 py-2 bg-color-accent text-color-dark rounded hover:opacity-90 transition"
                >
                    ← Back
                </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {genreList.map((genre) => (
                    <Link
                        key={genre.mal_id}
                        href={`/genres/anime/${genre.mal_id}`}
                        className="bg-white/10 border border-white/10 p-4 rounded-lg hover:bg-white/20 transition"
                    >
                        <h3 className="font-semibold">{genre.name}</h3>
                        <p className="text-sm opacity-70">{genre.count} judul</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page;
