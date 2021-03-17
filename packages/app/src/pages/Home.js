import {useState} from 'react'

import Header from "../components/Header"
import {Cats,Teste,Dogs} from "../hosts"


function Home({ history }) {
    const [input, setInput] = useState("");
  
    const handleOnClick = () => {
      history.push(`/gato/${input}`);
    };
  
    return (
      <div>
        <Header />
        <Teste />
  
        <div className="home">
          <input
            placeholder="Insert a greeting"
            defaultValue={input}
            onBlur={(e) => setInput(e.target.value)}
          />
          <button onClick={handleOnClick}>Greet Me</button>
        </div>
  
        <div className="home">
          <div className="content">
            <div className="cat">
              <Cats />
            </div>
            <div className="dog">
              <Dogs />
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Home