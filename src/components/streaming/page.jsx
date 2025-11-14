"use client";

import React from "react";

const StreamingList = ({ episodes }) => {
    if (!episodes || episodes.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <p className="text-center text-lg text-red-400 mb-4">
                    Tidak ada daftar streaming untuk anime ini.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {episodes.map((item, idx) => (
                <div
                    key={idx}
                    className="flex flex-col justify-between p-4 border rounded-lg hover:shadow-md transition"
                >
                    <div>
                        <h3 className="text-sm font-semibold mb-2 text-color-primary">
                            {item.name}
                        </h3>
                        <p className="text-xs text-color-primary break-words">
                            {item.url}
                        </p>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
                        >
                            Buka
                        </a>

                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(item.url);
                                alert("Link disalin ke clipboard");
                            }}
                            className="px-3 py-2 bg-gray-700 text-white text-sm rounded hover:bg-gray-600 transition"
                        >
                            Salin
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StreamingList;
