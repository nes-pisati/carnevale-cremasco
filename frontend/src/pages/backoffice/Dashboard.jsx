import React from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

export default function Dashboard() {
    return (
        <section class="bg-gray-900 h-screen p-20">
            <div>
                    <DashboardCard 
                        title={"Titolo"}
                        votes={"250"}
                    />
            </div>
        </section>
    )
}