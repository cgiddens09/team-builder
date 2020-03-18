import React, { useState } from 'react';


const Form = props => {
    const [person, setPerson] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = event => {
        setPerson({
            ...person,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        props.addMember(person);
        setPerson({ name: "", email: "", role: "" });

    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="First and Last Name, Please"
                    value={person.name}
                    onChange={changeHandler} 
                />
                <br />
                <label htmlFor="email">Email Address: </label>
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={person.email}
                    onChange={changeHandler}
                />
                <br />
                <label htmlFor="role">Role: </label>
                <select
                    name="role"
                    value={person.role}
                    onChange={changeHandler}
                >
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Fullstack Developer">Fullstack Developer</option>
                </select>

                
                <br />
                <button type="submit">Add Team Member</button>
            </form>
        </div>
    )


}


export default Form;