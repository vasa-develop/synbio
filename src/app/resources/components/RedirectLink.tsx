"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function RedirectLink({link}:{link:string}) {
   const router = useRouter();

  useEffect(() => {}, [link,router]);
   
  return (
    <div>RedirectLink</div>
  )
  
}
