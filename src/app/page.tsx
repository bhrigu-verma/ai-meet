
"use client";
import React from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
// This file is the main entry point for the application, setting up the UI and handling user interactions.
import { Button } from "@/components/ui/button";
import {useState} from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
 const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[confirmPassword,setConfirmPassword]=useState("");
const onSubmit =()=>{
  authClient.signUp.email({
    email,
    name,
    password,
  },{
    onError() {
      console.error("Error during sign up:");
      window.alert("Error during sign up. Please try again.");
    },
    onSuccess() {
      console.log("Sign up successful!");
      window.alert("Sign up successful! Please check your email for verification.");
    }
  })
}
 
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Input
      placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <Input
      placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Input
      placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <Button onClick={onSubmit} >

      Create User
    </Button>
    
    </div>
    
  );
}
