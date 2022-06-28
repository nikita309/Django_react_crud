import React, {Component} from "react";
import { Table } from "reactstrap";
import NewStudentModal from "./NewStudentModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class StudentList extends Component {
    render() {
        const students = this.props.students;
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Reference Id</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!students || students.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        students.map(student => (
                            <tr key={student.pk}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.document}</td>
                                <td>{student.phone}</td>
                                <td align="center">
                                    <NewStudentModal
                                    create = {false}
                                    student={student}
                                    resetState={this.props.resetState}
                                    />
                                    &nbsp;&nbsp;
                                    <ConfirmRemovalModal
                                    pk = {student.pk}
                                    resetState={this.props.resetState}
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default StudentList;