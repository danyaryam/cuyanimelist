import { getStreamingResponse } from "@/libs/api-libs";
import Link from "next/link";
import StreamingList from "@/components/streaming/page"; // kita buat komponen client

const Page = async ({ params: { id } }) => {
    const streaming = await getStreamingResponse(`anime/${id}/streaming`);
    const episodes = Array.isArray(streaming?.data) ? streaming.data : [];

    return (
        <div className="p-4 text-color-primary min-h-[60vh]">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Streaming Providers</h1>

                <Link
                    href={`/anime/${id}`}
                    className="inline-block px-4 py-2 bg-color-accent text-color-dark rounded hover:opacity-90 transition"
                >
                    ← Back
                </Link>
            </div>

            <StreamingList episodes={episodes} id={id} />
        </div>
    );
};

export default Page;
