"use client"

import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

import Input from '../InputComponents/Input/Input'
import InputGroup from '../InputComponents/InputGroup/InputGroup'
import InputLeftElement from '../InputComponents/InputLeftElement/InputLeftElement'

import c from './LoginPanel.module.scss'
import InputRightElement from "../InputComponents/InputRightElement/InputRightElement";
import Link from "next/link";

function LoginPanel() {
  return (
    <form className={c.component}>
      <h2>Singed in</h2>

      <InputGroup>
        <InputLeftElement >
          <IoPersonSharp />
        </InputLeftElement>
        <Input placeholder="Login" />
      </InputGroup>

      <InputGroup>
        <InputLeftElement >
          <RiLockPasswordFill />
        </InputLeftElement>
        <Input placeholder="Password" />
      </InputGroup>

      <button type="button" className={c.logButton}>Log in</button>

      <div className={c.links}>
        <Link href="/register">register</Link>
        <Link href="/forgetPassword">forget password</Link>
      </div>
    </form>
  )
}

export default LoginPanel