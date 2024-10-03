import Link from "next/link";

export default function Signin(){
    return (
        <div className="col-span-12 flex w-screen h-screen justify-center items-center">
            <div className="w-fit h-fit">
                <div className="w-fit h-fit p-5 bg-secondary-content rounded-xl">
                    <p className="text-center text-bold">Login</p>
                    <label className="label">
                        <span className="label-text"></span>
                        <input type="text" placeholder="email" className="input input-bordered"></input>
                    </label>

                    <label className="label">
                        <span className="label-text"></span>
                        <input type="password" placeholder="password" className="input input-bordered"></input>
                    </label>

                    <button className="mt-2 btn btn-primary w-full">Signin</button>
                </div>

                <div className="mt-2 p-2 border border-primary-content rounded-xl">
                    New to App-Name?  
                    <Link href="/signup">create an account</Link>
                </div>
            </div>
        </div>
    )
}