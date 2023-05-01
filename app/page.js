
import Users from "./components/Users";

async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

export default async function Home(){
  const users = await fetchUsers();

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-title">
        </div>
        <div className="home-content-inner">
          <Users users={users}/>
        </div>
      </div>
    </div>
    )
}