import "./App.css";
import About from "./Component/About";
import Bindevent from "./Component/Bindevent";
import Counter from "./Component/Counter";
import Greet from "./Component/Greet";
import Message from "./Component/Message";
import ParentComp from "./Component/ParentComp";
import Welcome from "./Component/Welcome";
import Timer from "./Component/Timer";
import TodoApp from "./Component/TodoApp";
import UserGreeting from "./Component/UserGreeting";
import NameList from "./Component/NameList";
import Form from "./Component/Form";
import CompoenentA from "./Component/CompoenentA";
import Table from "./Component/Table";
import ParComp from "./Component/ParComp";
import RefsDemo from "./Component/RefsDemo";
import FocusInput from "./Component/FocusInput";
import FRParentInput from "./Component/FRParentInput";
import PortalDemo from "./Component/PortalDemo";
import Hero from "./Component/Hero";
import ErrorBoundry from "./Component/ErrorBoundry";
import ClickCounter from "./Component/ClickCounter";
import HoverCounter from "./Component/HoverCounter";

function App() {
  return (
    <div className="App">
      {/* <About />
      <Greet name="Aadil" lastname="Rana">
        <p>This is child</p>
      </Greet>
      <Greet name="Asif" lastname="Thakur">
        <button>Update</button>
      </Greet>
      <Greet name="Javed" lastname="Ali"/> */}
      {/* <Welcome /> */}
      {/* <Counter /> */}
      {/* <Greet name="Aadil" lastname="Rana"/> */}
      {/* <Welcome name="Aadil" lname="Rana"/> */}
      {/* <Bindevent /> */}
      {/* <ParentComp /> */}
      {/* <Timer /> */}
      {/* <TodoApp /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Form /> */}
      {/* <CompoenentA /> */}
      {/* <Table /> */}
      {/* <ParComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundry>
        <Hero heroname="batman" />
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroname="Superman" />
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroname="Joker" />
      </ErrorBoundry> */}
      <ClickCounter name="Clickargs"/>
      <HoverCounter name="hoverargs"/>
    </div>
  );
}

export default App;
