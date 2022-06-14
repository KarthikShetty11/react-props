import "./styles.css";
import Content from "./Content.js";
import Header from "./Header.js";
import contacts from "./contacts.js";

export default function App() {
  return (
    <div>
      <Header />
      <Content
        name={contacts[0].name}
        img={contacts[0].img}
        address={contacts[0].address}
        phone={contacts[0].phone}
      />
      <Content
        name={contacts[1].name}
        img={contacts[1].img}
        address={contacts[1].address}
        phone={contacts[1].phone}
      />
      <Content
        name={contacts[2].name}
        img={contacts[2].img}
        address={contacts[2].address}
        phone={contacts[2].phone}
      />
      <Content
        name={contacts[3].name}
        img={contacts[3].img}
        address={contacts[3].address}
        phone={contacts[3].phone}
      />
    </div>
  );
}
