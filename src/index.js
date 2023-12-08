import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

/**
 * Verilerimiz users-data.js'den geliyor
 * -----------------------------
 */

import users from "./users-data";

/**
 * Verileri görüntülediğimiz React bileşenimiz
 * -----------------------------
 */

const Users = (props) => {
  const { name, location, car, id } = props;
  return (
    <div>
      <p className="strong">{name}</p>
      <p>{location}</p>
      <p>{car}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Array üzerinde yineleme yapın ve verileri görüntüleyin</h2>
      </div>

      {/* Array üzerinde yineleme yapın ve verileri görüntüleyin */}
      <div className="users">
        {users.map((user) => {
          return <Users {...user} key={user.id} />;
        })}
        {/* Her kartın bir "key" özelliği olmalıdır */}
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
