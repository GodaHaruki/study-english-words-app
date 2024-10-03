"use client";
import { useState } from "react";
import Link from "next/link";

export default function Signin(){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    function onClick(){
    }

    return (
        <div className="col-span-12 flex w-screen h-screen justify-center items-center">
            <div className="w-fit h-fit">
                <form className="w-fit h-fit p-5 bg-secondary-content rounded-xl">
                    <p className="text-center text-bold">Signin</p>
                    <label className="label">
                        <span className="label-text"></span>
                        <input type="email" placeholder="email"
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                        className="input input-bordered" required></input>
                    </label>

                    <label className="label">
                        <span className="label-text"></span>
                        <input type="password" placeholder="password" title="password is from 8 to 20 words" pattern="[a-zA-Z0-9.+-=_]{8,20}" 
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                        className="input input-bordered" required></input>
                    </label>

                    <button onClick={onClick} className="mt-2 btn btn-primary w-full">Signin</button>
                </form>

                <div className="mt-2 p-2 flex justify-center border border-primary-content rounded-xl">
                    New to App-Name?  
                    <Link href="/signup">create an account</Link>
                </div>
            </div>
        </div>
    )
}