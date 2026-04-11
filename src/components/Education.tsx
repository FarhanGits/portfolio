import React from "react";
import { PERSONAL_DATA } from "../data/personal_data";

interface EducationListProps {
    uni: string;
    start: string;
    end: string;
    degree: string;
}

export default function Education({
    uni,
    start,
    end,
    degree,
}: EducationListProps) {
    return (
        <div className="mb-7">
            <h2 className="text-2xl font-bold mb-3">Education</h2>
            <div className="w-full flex justify-between items-center mb-1">
                <h3 className="text-xl font-semibold">{uni}</h3>
                <p className="text-base font-medium font-mono text-gray-500">
                    {start} - {end}
                </p>
            </div>
            <p className="text-base font-medium font-mono text-gray-500">
                {degree}
            </p>
        </div>
    );
}
