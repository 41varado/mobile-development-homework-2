import { IonButton, IonContent, IonInput, IonItem, IonList, IonPage } from "@ionic/react"
import UserModel from "../../Model/User"
import { useState } from "react"
import { InputInputEventDetail, IonInputCustomEvent } from "@ionic/core"
import { c } from "vitest/dist/reporters-5f784f42"
import { Route, useHistory } from "react-router"

interface UserInterface{
    login: (user: UserModel) => void
}

const Login : React.FC<UserInterface> = ({login} ) => {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const history = useHistory();

    const userNameHandler = (event: IonInputCustomEvent<InputInputEventDetail>) => {
        setUserName(event.target.value?.toString() || "");
    }

    const passwordHandler = (event: IonInputCustomEvent<InputInputEventDetail>) => {
        setPassword(event.target.value?.toString() || "");
    }

    const buttonHandler = () => {
        console.log(userName, password);
        let userRole = "";
    
        if(userName === "Admin" && password === "1234"){
            userRole = "admin";
        }
        if(userName === "Cliente" && password === "1234"){
            userRole = "user";
        }
    
        login({username: userName, password: password, role: userRole} as UserModel); // Usa la variable local
        history.push("/home");
    };
    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <IonItem>
                        <h1>Login</h1>
                    </IonItem>
                    <IonItem>
                        <IonInput label="Username:" placeholder="Enter username" onIonInput={(event) => userNameHandler(event)} />
                    </IonItem>
                    <IonItem>
                        <IonInput label="password" placeholder="Enter password" onIonInput={passwordHandler} />
                    </IonItem>
                    <IonItem>
                        <IonButton onClick={buttonHandler} >Enviar</IonButton>
                    </IonItem>
                </IonList>
                
            </IonContent>
        </IonPage>
    )
}

export default Login