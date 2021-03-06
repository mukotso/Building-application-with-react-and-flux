import React ,{ useState , useEffect} from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = props => {
    const [errors, setErrors]=useState({})
    const [course, setCourse]=useState({
            id:null,
            slug:"",
            title:"",
            authorId:"",
            category:"",
    })

    useEffect(() => {
        const slug = props.match.params.slug; // from the path `/courses/:slug`
        if (slug) {
            courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
        }
    }, [props.match.params.slug]);

    function handleChange({target}){
        // target
        // distructuring this is equal to event.target
        // use the spread operator to make a copy then set the event before passing to the setCoureser setter
        //use the computed property to set the value based on a variable []

        setCourse({...course, [target.name]:target.value})
    }


    function formIsValid() {
        const _errors = {};

        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author ID is required";
        if (!course.category) _errors.category = "Category is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        courseApi.saveCourse(course)
            .then(() => {
            props.history.push("/courses");
            toast.success('Course saved')
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            {/*{props.match.params.slug}*/}
            <CourseForm
                course={course}
                onChange={handleChange}
                onSubmit={handleSubmit}
                errors={errors}
        />
            </>
    );
};

export default ManageCoursePage;
