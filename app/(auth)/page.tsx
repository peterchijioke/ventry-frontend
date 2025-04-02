'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import AppImage from '@/components/AppImage';
import { Apple, Chrome } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getApiService } from '../service/get.service';
import { accessCodeSchema, signInSchema } from '../zod/login-zod';
import { signUpSchema } from '../zod/sign-up-zod';
import { postApiService } from '../service/post.service';
import toast from 'react-hot-toast';

export interface AccessCodeResponse {
  success: boolean;
  valid: boolean;
  message: string;
}

export default function SignInPage() {
  const [accessCode, setAccessCode] = useState('');

  const {
    data: accessCodeData,
    error: accessCodeError,
    isLoading,
  } = useSWR<AccessCodeResponse>(
    accessCode ? `/api/v1/auth/validate-access-code?code=${accessCode}` : null,
    getApiService,
  );

  const { trigger, isMutating } = useSWRMutation(
    '/api/v1/auth/login',
    postApiService,
  );
  const { trigger: signupTrigger, isMutating: signupMutating } = useSWRMutation(
    '/api/v1/auth/signup',
    postApiService,
  );

  const signInForm = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signUpForm = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const accessCodeForm = useForm({
    resolver: zodResolver(accessCodeSchema),
    defaultValues: {
      accessCode: '',
    },
  });

  const onSignInSubmit = async (data: z.infer<typeof signInSchema>) => {
    try {
      const response: {
        success: boolean;
        data: { id: string; email: string };
        token: string;
      } = await trigger(data);
      localStorage.setItem('token', response?.token);
      toast.success('Login successful', {
        position: 'top-right',
      });
    } catch (error: any) {
      toast.error(
        error.response?.data?.error || 'An error occurred during sign-in',
        {
          position: 'top-right',
        },
      );
    }
  };

  const onSignUpSubmit = async (data: z.infer<typeof signUpSchema>) => {
    const isAccessCodeValid = accessCodeData?.valid;
    if (!isAccessCodeValid) {
      toast.error('Please validate a valid access code first', {
        position: 'top-right',
      });
      return;
    }

    try {
      const signupData = { ...data, accessCode };
      const response = await signupTrigger(signupData);
      toast.success('Sign-Up Successful!', {
        position: 'top-right',
      });
      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        console.log('Sign-Up Successful:', response.data);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || 'An error occurred during sign-up';
      toast.error(errorMessage, {
        position: 'top-right',
      });
    }
  };

  const onAccessCodeSubmit = (data: z.infer<typeof accessCodeSchema>) => {
    setAccessCode(data.accessCode);
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-900 to-purple-900/20'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <div className='flex justify-center mb-4'>
            <div className='w-16 h-16 bg-white flex items-center justify-center rounded-lg'>
              {/*  */}
              <AppImage src='/logo.svg' className='' alt='' />
            </div>
          </div>
          <h1 className='text-3xl font-bold text-black tracking-wide'>
            Ventry
          </h1>
          <p className='text-sm uppercase tracking-widest text-black'>
            Because Access is Everything
          </p>
        </div>

        <Form {...signInForm}>
          <form
            onSubmit={signInForm.handleSubmit(onSignInSubmit)}
            className='space-y-4'
          >
            <FormField
              control={signInForm.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='email@email.com'
                      className='bg-transparent border-ventry-gold text-white placeholder-black focus:ring-ventry-gold'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signInForm.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type='password'
                      placeholder='password'
                      className='bg-transparent border-ventry-gold  text-white placeholder-black focus:ring-ventry-gold'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='text-right'>
              <a href='#' className='text-sm text-black hover:text-ventry-gold'>
                Forgot password...
              </a>
            </div>
            <div className=' flex justify-center'>
              <Button
                disabled={isMutating}
                type='submit'
                className='w-fit bg-ventry-gold hover:bg-ventry-gold/50 text-ventry-dark hover:bg-opacity-90'
              >
                {isMutating ? 'Loading...' : 'Sign In'}
              </Button>
            </div>
            <p className='text-center text-sm text-black'>
              Securely access your account
            </p>
          </form>
        </Form>

        <div className='space-y-4'>
          <h2 className='text-center text-xl font-semibold'>Sign Up</h2>
          <Form {...signUpForm}>
            <form
              onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}
              className='space-y-4'
            >
              <FormField
                control={signUpForm.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='email@email.com'
                        className='bg-transparent border-ventry-gold text-white placeholder-black focus:ring-ventry-gold'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type='password'
                        placeholder='password'
                        className='bg-transparent border-ventry-gold text-white placeholder-black focus:ring-ventry-gold'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={signupMutating}
                className='w-full bg-ventry-gold hover:bg-ventry-gold/70 text-ventry-dark hover:bg-opacity-90'
              >
                <span>{signupMutating ? 'Loading...' : 'Signup'}</span>
              </Button>
              <Button
                type='button'
                className='w-full bg-ventry-gold hover:bg-ventry-gold/70 text-ventry-dark hover:bg-opacity-90'
              >
                <Apple className='w-5 h-5' />
                <span>Apple</span>
              </Button>
              <Button
                type='button'
                className='w-full bg-ventry-gold hover:bg-ventry-gold/70 text-ventry-dark hover:bg-opacity-90'
              >
                <Chrome className='w-5 h-5' />
                <span>Google</span>
              </Button>
            </form>
          </Form>
        </div>

        {/* Access Code Section */}
        <div className='space-y-4'>
          <Form {...accessCodeForm}>
            <form
              onSubmit={accessCodeForm.handleSubmit(onAccessCodeSubmit)}
              className='space-y-4 w-full'
            >
              <div className='grid grid-cols-1 md:grid-cols-3 gap-2.5'>
                <span className='text-sm text-white'>
                  Exclusive Access Code
                </span>
                <FormField
                  control={accessCodeForm.control}
                  name='accessCode'
                  render={({ field }) => (
                    <FormItem className='flex-1'>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder='XXX-XXX'
                          className={cn(
                            'bg-transparent  text-white placeholder-black focus:ring-ventry-gold',
                            accessCodeForm.formState.errors.accessCode
                              ? 'border-red-500'
                              : 'border-ventry-gold',
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  disabled={isLoading}
                  className='bg-black  flex-1 border border-ventry-gold text-white text-xs hover:bg-gray-800'
                >
                  {isLoading ? 'Loading...' : ' Request Invite Code'}
                </Button>
              </div>
              {accessCodeData?.valid && (
                <div className=' flex justify-end'>
                  <Button
                    type='button'
                    className='w-fit bg-ventry-gold hover:bg-ventry-gold/50 text-white hover:bg-opacity-90'
                  >
                    {accessCodeData?.message}
                  </Button>
                </div>
              )}

              <div className=' w-full'>
                {accessCodeError && (
                  <p className='text-sm text-red-400'>
                    Error validating access code
                  </p>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
