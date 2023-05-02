import { Motor } from "@pocs/motor-busca";

const Home: React.FC = () => {
  return (
    <>
      <Motor onSubmit={console.log} />
      Home: This a Micro-fes app
    </>
  );
};

export default Home;
