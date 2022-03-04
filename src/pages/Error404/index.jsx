import * as Style from "./style"

export default function Error(props) {
    return (
        <Style.MainContent>
                <Style.MainError>
                    404
                </Style.MainError>
                <Style.Maintext>
                    Oups! La page que vous demandez n'existe pas.
                </Style.Maintext>
            <Style.LinkError to="/" >Retourner sur la page d’accueil</Style.LinkError>      
        </Style.MainContent>
    );
}