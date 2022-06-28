import React from 'react';
import {getCourses} from '../api/courseApi'

class CoursesPage extends  React.Component{
    //set state to hold data
        state={
            courses:[],
        }

        //immediately after component mounts
        componentDidMount() {
            getCourses().then(courses=>{
                //set courses state from the courses we have received.
                this.setState({courses:courses})
            });
        }

    render(){
        return (
            <React.Fragment>
                <h1>Courses</h1>
                <table className={"table"}>
                    <thead>
                        <tr>
                            <tr>Title</tr>
                            <tr>Author Id</tr>
                            <tr>Category</tr>
                        </tr>
                    </thead>
                     <tbody>
                     {/*in react we usually use map function to iterate over arrays*/}
                     { this.state.courses.map( course =>{
                         return (
                             <tr key={course.id}>
                             <td>{course.title}</td>
                             <td>{course.authorId}</td>
                             <td>{course.category}</td>
                             </tr>
                         );
                     })}
                     </tbody>
                </table>
            </React.Fragment>
        );
    }

}


export default CoursesPage;