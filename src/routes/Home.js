import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <nav>
                <Link to ="SignIn">회원가입</Link>
                <Link to ="Auth">로그인</Link>
            </nav>
            <h1>Home</h1>
        </div>
    )
}

export default Home