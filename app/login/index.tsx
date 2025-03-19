import { createSession } from '@/src/infrastructure/state/slices/sessionSlice';
import { useAppDispatch } from '@/src/infrastructure/state/storeHooks';
import Input from '@/src/presentation/components/atoms/Input';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button } from "react-native";

interface ILogin {
  email: string;
  password: string
}

export default function Login() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [loginParams, setLoginParams] = useState<ILogin>({
    email: '',
    password: ''
  })

  const handleLogin = () => {
    const user = {
      id: '123123123',
      name: 'Vinnie Alves',
      email: loginParams.email
    }
    dispatch(createSession(user));
    router.back()
  };

  const handleChangeText = (key: keyof ILogin, value: string) => {
    let params = loginParams
    params[key] = value
    setLoginParams(params)
  }

  return (
    <>
      <Input
        keyboardType={'email-address'}
        placeholder={'nome@email.com'}
        onChangeText={(text) => handleChangeText('email', text)}
      />
      <Input
        secureTextEntry
        placeholder={'Digite sua senha'}
        onChangeText={(text) => handleChangeText('password', text)}
      />

      <Button
        disabled={!loginParams.email || !loginParams.password}
        title='Entrar'
        onPress={handleLogin}
      />

    </>
  );
}