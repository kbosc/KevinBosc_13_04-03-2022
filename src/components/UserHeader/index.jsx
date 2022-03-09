import { useSelector, useDispatch } from "react-redux"
import React from 'react';

import { Button } from "../../utils/style/theme"
import { updateUser } from "../../redux"
import * as Style from "./style"

export default function UserHeader(props) {
    const [updateProfile, setUpdateProfile] = React.useState(false)
    const toggleUpdateProfile = () => setUpdateProfile(!updateProfile)
    // const onClick = () => console.log("coucou");
    const userData = useSelector(state => state.user)
    const inputFirstName = React.createRef();
    const inputLastName = React.createRef();
    const dispatch = useDispatch()
    const arrayName = []
    console.log(arrayName);
    const onclickChangeUserData = (e) => {
        setUpdateProfile(!updateProfile)
        arrayName.push(inputFirstName.current.value, inputLastName.current.value)
        dispatch(updateUser(arrayName))
      };

    return (
        <Style.MainHeader> 
                <h1>
                    Welcome back
                    <br />
                    {userData.data.firstName + " " + userData.data.lastName}
                </h1>
                
                { updateProfile ? (
                    <Style.ContainerModify>
                        <Style.ContainerSave>
                            <input ref={inputFirstName} type="text" placeholder={userData.data.firstName}></input>
                            <Button onClick={() => onclickChangeUserData() }>Save</Button>
                        </Style.ContainerSave>
                        <Style.ContainerCancel>
                            <input ref={inputLastName} type="text" placeholder={userData.data.lastName}></input>
                            <Button onClick={toggleUpdateProfile}>Cancel</Button>
                        </Style.ContainerCancel>
                    </Style.ContainerModify>
                ): (
                    <Button onClick={toggleUpdateProfile}>Edit Name</Button>
                )
                }
            </Style.MainHeader>
    );
}
