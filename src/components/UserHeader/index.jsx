import React from 'react';

import { Button } from "../../utils/style/theme"
import * as Style from "./style"

export default function UserHeader(props) {
    return (
        <Style.MainHeader>
                <h1>
                    Welcome back
                    <br />
                    Tony Jarvis
                </h1>
                <Button>Edit Name</Button>
                {/* <h1> Welcome back</h1>
                <Style.ContainerModify>
                    <Style.ContainerSave>
                        <input placeholder='Tony'></input>
                        <Button>Save</Button>
                    </Style.ContainerSave>
                    <Style.ContainerCancel>
                        <input placeholder='Jarvis'></input>
                        <Button>Cancel</Button>
                    </Style.ContainerCancel>
                </Style.ContainerModify> */}
            </Style.MainHeader>
    );
}
