"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const ACTIVITIES_PER_PAGE = 10;

export default function ActivityPagination({ activitiesLength }: { activitiesLength: number }) {

    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams);
    const router = useRouter()
    const pathname = usePathname();
    const actualPage = params.get("page") ?? 0

    const paginationContent = Array.from({ length: Math.ceil(activitiesLength / ACTIVITIES_PER_PAGE) }, (_, index) => index + 1);


    const handleClick = (val: number) => {
        if (actualPage != val) {
            params.set("page", val.toString());
            router.replace(`${pathname}?${params.toString()}`);
        }
    }

    return (
        <div className='mt-8 flex flex-wrap justify-center items-center gap-6 text-2xl font-medium xl:pt-8'>
            {paginationContent.map((pageArray, index) =>
                <button
                    key={index}
                    onClick={() => handleClick(index + 1)}
                    className={`px-3 py-1 rounded-md ${actualPage == index + 1 && "bg-gray-300"}`}
                >
                    {pageArray}
                </button>)}
        </div>
    )
}