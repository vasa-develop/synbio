"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function RedirectLink({link}:{link:string}) {
   const router = useRouter();

  useEffect(() => {
    // Redirect to GitHub repository after a slight delay for the Twitter crawler
    setTimeout(() => {
      // Using router.replace to avoid pushing a new entry into the history stack
      router.replace(link);
    }, 3000);  // 3000 milliseconds delay
  }, [link,router]);
   
  return (
    <div>RedirectLink</div>
  )
  
}
