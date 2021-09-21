import Profile from "./views/examples/Profile";
import Tables from "./views/examples/Tables";
import Index from "./views/Index";
import AddProject from "./views/project/AddProject";
import ProjectList from "./views/project/ProjectList";
import UserList from "./views/project/UserList";

// const selectDashboard = () => {
//   switch (data?.role) {
//     case "merchant":
//       return MerchantDashboard;
//     case "admin":
//       return Dashboard;
//     default:
//       return null;
//   }
// };

var routes = [
  {
    exact: true,
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    role: ["admin", "merchant"],
  },

  {
    exact: true,
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    exact: true,
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    exact: true,
    path: "/users",
    icon: "ni ni-single-02 text-yellow",
    name: "User List",
    component: UserList,
    layout: "/admin",
    role: ["admin"],
  },
  {
    exact: true,
    path: "/projectList",
    icon: "ni ni-bullet-list-67 text-red",
    name: "ProjectList",
    component: ProjectList,
    layout: "/admin",
    role: ["merchant"],
  },
  {
    exact: true,
    path: "/addProject",
    name: "Add Product",
    icon: "ni ni-single-02 text-yellow",
    component: AddProject,
    layout: "/admin",
    role: ["merchant"],
  },
];
export default routes;
