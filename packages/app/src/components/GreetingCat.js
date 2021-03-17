import { Cats } from "../hosts";
import Header from "./Header";


function GreetingCat({ history }) {
    return (
      <div>
        <Header />
        <div className="home">
          <Cats />
        </div>
      </div>
    );
  }

  export default GreetingCat