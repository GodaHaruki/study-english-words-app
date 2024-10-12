'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Signin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  function onClick() {}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='size-fit'>
        <form className='size-fit rounded-xl bg-secondary-content p-5'>
          <p className='text-center'>Signin</p>
          <label className='label'>
            <span className='label-text'></span>
            <input
              type='email'
              placeholder='email'
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              className='input input-bordered'
              required
            ></input>
          </label>

          <label className='label'>
            <span className='label-text'></span>
            <input
              type='password'
              placeholder='password'
              title='password is from 8 to 20 words'
              pattern='[a-zA-Z0-9.+-=_]{8,20}'
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              className='input input-bordered'
              required
            ></input>
          </label>

          <button onClick={onClick} className='btn btn-primary mt-2 w-full'>
            Signin
          </button>
        </form>

        <div className='mt-2 flex justify-center rounded-xl border border-primary-content p-2'>
          New to App-Name?
          <Link href='/signup'>create an account</Link>
        </div>
      </div>
    </div>
  );
}
