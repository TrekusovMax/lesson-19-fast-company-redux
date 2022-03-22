import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import EditUserPage from '../components/page/editUserPage'
import UserPage from '../components/page/userPage'
import UsersListPage from '../components/page/usersListPage'
import UserLoader from '../components/ui/hoc/usersLoaders'

import { getCurrentUserId } from '../store/users'
const Users = () => {
    const params = useParams()
    const { userId, edit } = params

    const currentUserId = useSelector(getCurrentUserId())
    return (
        <>
            <UserLoader>
                {userId ? (
                    edit ? (
                        userId === currentUserId ? (
                            <EditUserPage />
                        ) : (
                            <Redirect to={`/users/${currentUserId}/edit`} />
                        )
                    ) : (
                        <UserPage userId={userId} />
                    )
                ) : (
                    <UsersListPage />
                )}
            </UserLoader>
        </>
    )
}

export default Users
