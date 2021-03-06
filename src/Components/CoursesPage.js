import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import {Link} from "react-router-dom"
function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));
    }, []);

    return (
        <>
            <h2>Courses</h2>
            <Link to={"/course"} className={"btn btn-primary"} >ADD COURSE</Link>
            {/*component composition*/}
            {/*Pass logic to child component usinf props*/}
            <CourseList courses={courses} />
        </>
    );
}

export default CoursesPage;
