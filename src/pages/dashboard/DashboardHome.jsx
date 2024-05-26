import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function DashboardHome() {
  const [user] = useAuthState(auth);

  return (
    <div className="dashboard">
      <header>
        <h2 className="text-5xl font-semibold">Welcome to Recipe Relay dashboard!</h2>
      </header>

      <section className="content mt-12">
        <div className="profile-card text-center">
          <div className="flex justify-center mb-6">
          <img
            src={user.photoURL}
            alt="User Avatar"
            className="profile-avatar rounded-full"
          />
          </div>
          <h1 className="profile-name text-2xl font-bold text-orange-400 mb-4">{user.displayName}</h1>
          <div className="profile-details">
            <div className="detail">
              <p>john.doe@example.com</p>
            </div>
            <div className="detail">
              <p>New York, USA</p>
            </div>
            <div className="detail">
              <h2>Joined on</h2>
              <p>January 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
