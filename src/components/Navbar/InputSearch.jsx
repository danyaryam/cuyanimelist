"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function InputSearch() {
    const [keyword, setKeyword] = useState("")
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!keyword.trim()) return

        router.push(`/search/${encodeURIComponent(keyword.trim())}`)
    }

    return (
        <form onSubmit={handleSubmit} className="relative">
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Cari Anime..."
                className="w-full p-2 rounded"
            />

            <button type="submit" className="absolute top-2 right-3">
                <MagnifyingGlass size={22} />
            </button>
        </form>
    )
}
