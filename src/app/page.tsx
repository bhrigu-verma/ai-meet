
"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {useState} from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
 const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[confirmPassword,setConfirmPassword]=useState("");

 
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Input
      placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <Input
      placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <Input
      placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  );
}
