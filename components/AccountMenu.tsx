import React from 'react';
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps{
    visible?: boolean
}

const AccountMenu:React.FC<AccountMenuProps> = ({visible}) => {
    const { data: currentUser } = useCurrentUser();
    if(!visible) return null;

  return (
    <div className='bg-black w-36 absolute top-12 right-0 py-5 flex flex-col border-2 border-gray-800'>
        <div className='flex flex-col gap-3'>
            <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
                <img src="/images/default-blue.png" alt="logo" className='rounded-md w-8' />
                <p className='text-white text-sm group-hover/item:underline'>
                    {currentUser?.name}
                </p>
            </div>
            <hr className='bg-gray-600 border-0 h-px my-4' />
            <div onClick={()=>signOut()} className='px-3 text-center text-white text-sm hover:underline'>
                Sign out of netflix
            </div>
        </div>
    </div>
  )
}

export default AccountMenu;