async function getUser(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const user = await res.json()
    return user.data
}

export default async function userDetail ({params}){
    const user = params.id
    const userData = await getUser(user)


    return (
        <>
        <h2>User Detail</h2>
        <div>
            <div>
                <img src={userData.avatar} alt={userData.first_name} />
            </div>
            <h3>{userData.first_name} {userData.last_name}</h3>
            <h3>Email: {userData.email}</h3>

        </div>
        </>
    )
}