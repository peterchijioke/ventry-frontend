import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export function MobileDrawerNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='' side={'left'}>
        <div className='grid my-5 space-y-8'>
          <ThemeSwitcher />
          <nav className='w-full'>
            <ul className='grid space-y-5'>
              <li>
                <SheetClose asChild>
                  <Link href='/services' className='text-sm'>
                    Services
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link href='/login' className='text-sm'>
                    Login
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link href='/signup' className='text-sm'>
                    Signup
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </nav>
        </div>
        <SheetFooter className=''>
          <Link href='/become-service-provider'>
            <Button
              className='text-sm 
                  bg-yellow-500 rounded-none w-full text-black hover:bg-yellow-400 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500
                  '
            >
              Become an Artisan
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
