import React from 'react'

export default function Greeting({hi}) {
    const isLoggedIn = hi.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>
    }
    return (
        <div>
            <GuestGreeting/>
        </div>
    )
}
