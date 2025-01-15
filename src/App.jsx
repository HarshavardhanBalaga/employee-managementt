import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInMem = localStorage.getItem("loggedInUser");
    if (loggedInMem) {
      const userData = JSON.parse(loggedInMem);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (email === "user@gmail.com" && password === "123456") {
      const defaultEmployee = {
        email: "user@gmail.com",
        name: "Sample User",
        role: "employee"
      };
      setUser("employee");
      setLoggedInUser(defaultEmployee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: defaultEmployee }));
    } else if (userData && Array.isArray(userData)) {
      const employee = userData.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUser} />
      ) : null}
    </>
  );
};

export default App;
