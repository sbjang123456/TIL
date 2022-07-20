import React from 'react';
import {useRouter} from "next/router";

const jangsu = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <h1>My name is {name}</h1>
  )
};

export default jangsu;