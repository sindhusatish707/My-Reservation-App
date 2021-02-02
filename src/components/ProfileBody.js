//user profile
import React from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';



function ProfileBody(){
    
        const { register, handleSubmit, formState } = useForm({
          mode: "onChange"
        });
        const onSubmit = data => {
          alert(JSON.stringify(data));
        };
        
        const { dirtyFields } = formState;
        console.log(dirtyFields);
    return(
        <Container>
        <div>
        <div>
        <h3 align = 'left' className='Head'> My Profile </h3>
        <h5 align = 'center' className='Profile'> Create your Profile</h5>
        </div>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First name</label>
            <input type="text" name="First name" ref={register({ required: true })} />

            <label>Last name</label>
            <input type="text" name="Last name" ref={register} />

            <label>Address Line 1:</label>
            <input type="text" name="Address1" ref={register} />

            <label>Address Line 2:</label>
            <input type="text" name="Address2" ref={register} />

            <label>Country</label>
            <select name="Country" ref={register}>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
            </select>

            
            

            <input type="submit" onClick={() => onSubmit(register)}/>
      
    </form>
    </div>
  
        
</div>
</Container>

        

);
}


export default ProfileBody;