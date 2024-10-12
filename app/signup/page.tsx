'use client';

import { useState } from 'react';
import { grid } from '../grid';

type UserInfo = {
  email: string;
  password: string;
  userName: string;
};

export default function Signup() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
    userName: '',
  });

  function onClick() {}

  return (
    <form className={grid}>
      <label className='col-span-12 md:col-span-6'>
        <span className='block'>Email</span>
        <input
          type='email'
          className='input input-bordered w-full'
          value={userInfo.email}
          onChange={(evt) =>
            setUserInfo({ ...userInfo, email: evt.target.value })
          }
          required
        ></input>
      </label>

      <label className='col-span-12 md:col-span-6'>
        <span className='block'>Password</span>
        <input
          type='password'
          className='input input-bordered w-full'
          value={userInfo.password}
          onChange={(evt) =>
            setUserInfo({ ...userInfo, password: evt.target.value })
          }
          pattern='[0-9a-zA-Z.+=-_]{8,20}'
          title='半角英数字8から20字'
          required
        ></input>
      </label>

      <label className='col-span-12'>
        <span className='block'>ユーザー名</span>
        <input
          type='text'
          className='input input-bordered w-full'
          value={userInfo.userName}
          onChange={(evt) =>
            setUserInfo({ ...userInfo, userName: evt.target.value })
          }
          required
        ></input>
      </label>
      <button className='btn btn-primary col-span-12' onClick={onClick}>
        Register
      </button>
    </form>
  );
}
