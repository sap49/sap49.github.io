import React, {useState} from "react"
import Helmet from "react-helmet"
import {Input, Spacer, Button, Text, Card, Image} from "@nextui-org/react"

import useInput from "../../utils/useInput";
import {Link, useNavigate} from "react-router-dom";
import {validateInput} from "../../utils/validateInput";

import {UserAuth} from "../../context/AuthContext";


export default function SignUp() {
    const [name, bindName, resetName] = useInput("");
    const [email, bindEmail, resetEmail] = useInput("");
    const [inviteCode, bindInviteCode, resetInviteCode] = useInput("");

    // TODO: Display simplified error message to user
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const helper = React.useMemo(() => {
        if (!email) {
            return {
                text: "",
                color: "",
            };
        }
        const isValid = validateInput(email, "Email");
        return {
            text: isValid ? "" : "Email is invalid.",
            color: isValid ? "success" : "error",
        };
    }, [email]);

    const helperName = React.useMemo(() => {
        if (!name) {
            return {
                text: "",
                color: "",
            };
        }
        const isValid = validateInput(name, "Name"); // no need to validate name
        return {
            text: isValid ? "" : "Name is invalid.",
            color: isValid ? "success" : "error"
        };
    }, [name]);


    const helperInviteCode = React.useMemo(() => {
        if (!inviteCode) {
            return {
                text: "*Don't have an invite code? Contact Ram or Shreya.",
                color: "none",
            };
        }
        const isValid = validateInput(inviteCode, "Invite Code");
        return {
            text: isValid ? "" : "*Don't have an invite code? Contact Ram or Shreya.",
            color: isValid ? "success" : "error",
        };
    }, [inviteCode]);

    const {createUser} = UserAuth()

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const submitNameValid = validateInput(name, "Name");
            const submitInviteCodeValid = validateInput(inviteCode, "Invite Code");
            const submitEmailValid = validateInput(email, "Email");
            if (!!submitNameValid && !!submitEmailValid && !!submitInviteCodeValid) {
                await createUser(name, email, inviteCode)
                navigate("/")
            } else {
                setErrorMessage("Name, Email, and/or Invite Code is missing or entered incorrectly.");
            }
        } catch (e) {
            let message = e.message;
            message = message.replace(/ *\([^)]*\) */g, "").replace("Firebase: ", "");
            setErrorMessage(message)
        }
    }

    return (
        <React.Fragment>
            <Helmet>
                <style>
                    {`
                        html, body{
                            height: 100%;
                            width: 100%;
                            overflow: hidden;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-family: 'Kotta One', serif;
                        }
                        
                        p {
                          font-family: 'Kotta One', serif;
                        }
                   `}
                </style>
            </Helmet>
            <Image
                width={150}
                height={150}
                src={process.env.PUBLIC_URL + "/logos/logo.png"}
                alt="RS Logo"
            />
            <form onSubmit={submitHandler}>
                {errorMessage &&
                    <Card css={{ mw: "250px", mh: "128px", backgroundColor:"$error" }} variant={"bordered"}>
                        <Card.Body>
                            <Text css={{color:"$white"}}>{errorMessage}</Text>
                        </Card.Body>
                    </Card>
                }
                <Spacer y={1}/>
                <Input
                    {...bindName}
                    id="name"
                    underlined
                    onClearClick={resetName}
                    labelLeft={
                        <i className="gg-user"></i>
                    }
                    status={helperName.color}
                    helperColor={helperName.color}
                    helperText={helperName.text}
                    placeholder="First and Last Name"
                    fullWidth="true"
                    maxLength="256"
                    css={{inputTextColor: "$primaryLight", paddingLeft: 0}}
                />
                <Spacer y={1.6}/>
                <Input
                    {...bindEmail}
                    id="email"
                    underlined
                    onClearClick={resetEmail}
                    labelLeft={
                        <i className="gg-mail"></i>
                    }
                    status={helper.color}
                    helperColor={helper.color}
                    helperText={helper.text}
                    placeholder="Email"
                    fullWidth="true"
                    maxLength="256"
                    css={{inputTextColor: "$primaryLight", paddingLeft: 0}}
                />
                <Spacer y={1.6}/>
                <Input.Password
                    {...bindInviteCode}
                    id="passcode"
                    type="password"
                    underlined
                    labelLeft={
                        <i className="gg-key"></i>
                    }
                    status={helperInviteCode.color}
                    helperColor={helperInviteCode.color}
                    helperText={helperInviteCode.text}
                    placeholder="Invite Code"
                    fullWidth="true"
                    maxLength="6"
                />
                <Spacer y={2.2}/>
                <Button size={"sm"} type="submit" css={{backgroundImage: '$gradient', width: '100%'}}>Sign Up</Button>

                <Spacer y={0.2}/>
                <Text size="$xs">Already have an account? <Link to={"/"}>Sign In</Link>.</Text>
            </form>
        </React.Fragment>
    )
}