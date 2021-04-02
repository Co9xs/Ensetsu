import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/Auth';

export function useRequireLogin() {
  const { isAuthChecking, currentUser } = useContext(AuthContext)
  const router = useRouter();

  useEffect(()=>{
    if(isAuthChecking) return;
    if(!currentUser) router.push("/");
  },[isAuthChecking, currentUser])
}