import React , { useState } from 'react';


const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) =>{
        const {target:{name,value}}=event;
        if (name==="email"){
            setEmail(value)
        } else if (name==="password"){
            setPassword(value);
        }
    };
    const onSubmit = (event) =>{
        event.preventDefault();
    };

    return(
        <div>
            <h1>로그인페이지 예시</h1>
            <form>
                <input name="email" type="email" placeholder='Email' required value={email} onChange={onChange}/>
                <br/>
                <input name="password" type="password" placeholder='Password' required value={password} onChange={onChange}/>
                <br/>
                <input type="submit" value="Log In"/>
            </form>
            <br/>
            <div>
                <button>구글 계정으로 로그인</button>
            </div>
        </div>
    )
}

export default Auth