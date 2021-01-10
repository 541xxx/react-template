import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();
  function handleClick() {
    history.push("/about");
  }
  return <h2 onClick={handleClick}>Home</h2>;
}


export default Home;