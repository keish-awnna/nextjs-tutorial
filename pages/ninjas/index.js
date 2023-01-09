import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
// this function runs at build time, we can add a fetch request to request data

export const getStaticProps = async () => {
  // fetch request url for data

  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();
  //'props' proerty with a value, value will be object
  return {
    props: {
      // can call it what you want, can be title users
      ninjas: data,
    },
  };
};

// data in the component is attached to the props that we can take in like so:
// const Index = (props) => {

// now we can destructure from that, the 'ninjas' property like so:
const Index = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {/* map through those ninjas and output them into the template*/}
      {ninjas.map((ninja) => (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id} legacyBehavior>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Index;
