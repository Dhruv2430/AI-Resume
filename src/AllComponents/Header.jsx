import React from 'react'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-5 px-5 flex justify-between shadow-md'>
             <Link to={'/dashboard'}>
            <h1 className='text-3xl'>Dhruv</h1>
            </Link>
            {isSignedIn ?
                <div className='flex gap-2 items-center'>
                    <Link to={'/dashboard'}>
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to={'/signup'}>
                    <Button>Get Started</Button>
                </Link>
            }

        </div>
    )
}

export default Header