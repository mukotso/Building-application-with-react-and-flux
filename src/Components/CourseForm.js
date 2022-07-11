import React from "react";
import TextInput from "./Common/TextInput";

function CourseForm(props) {
    return (
        <form onSubmit={props.onSubmit}>

                    <TextInput
                        id="title"
                        type="text"
                        label="Title"
                        name="title"
                        onChange={props.onChange}
                        value={props.course.title}
                        error={props.errors.title}
                    />


            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        value={props.course.authorId || ""}
                        onChange={props.onChange}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Kelvin Mukotso</option>
                        <option value="2">Scott Martins</option>
                        <option value="2">Jude bellingham </option>
                    </select>
                </div>
            </div>
            {props.errors.authorId && (
                <div className="alert alert-danger">{props.errors.authorId}</div>
            )}


                    <TextInput
                        type="text"
                        id="category"
                        label="Category"
                        name="category"
                        value={props.course.category}
                        onChange={props.onChange}
                        error={props.errors.category}
                    />


            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default CourseForm;
