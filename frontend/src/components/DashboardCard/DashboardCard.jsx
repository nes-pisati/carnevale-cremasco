import React from "react";

export default function DashboardCard({title, votes}) {
    return (
        <>
            <div class="w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img class="rounded-t-lg h-40 object-cover w-full" src="https://picsum.photos/200/300" alt="" />
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p class="mb-3 text-gray-700 dark:text-gray-400">{votes}</p>
                    <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-900">
                        Azzera
                    </button>
                </div>
            </div>
        </>
    )
}