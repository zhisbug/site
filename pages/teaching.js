import Layout from '../components/layout';
import Link from "next/link";
import React from "react";
import courses from '@/content/teaching.json'

export default function teaching() {
    return (
        <Layout>
            <Teaching />
        </Layout>
    );
}

function Teaching() {
    return (
        <div className="mt-6 text-xl space-y-4">
            {courses.map((course) => (
                <ul className="list-no-bullet" key={course.role}>
                <li key={course.link}>
                    <b><a href={course.link} target="_blank" rel="noopener noreferrer">{course.code}: {course.name}</a></b>
                </li>
                <li key={course.institute}>
                    {course.institute}, {course.date} ({course.role})
                </li>
                </ul>
            ))}
        </div>
    );
}