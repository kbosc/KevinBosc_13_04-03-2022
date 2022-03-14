import { useSelector, useDispatch } from "react-redux"
import React from 'react';

import { Button } from "../../utils/style/theme"
import { modifyData } from "../../redux"
import * as Style from "./style"

export default function UserHeader(props) {
    const [updateProfile, setUpdateProfile] = React.useState(false)
    const toggleUpdateProfile = () => setUpdateProfile(!updateProfile)
    const userData = useSelector(state => state.user)
    const inputFirstName = React.createRef();
    const inputLastName = React.createRef();
    const dispatch = useDispatch()

    const onclickChangeUserData = () => {
        dispatch(modifyData({
            firstName: inputFirstName.current.value,
            lastName: inputLastName.current.value,
        }));
        toggleUpdateProfile()
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
