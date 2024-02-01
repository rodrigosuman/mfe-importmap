import { Motor } from "@pocs/motor-busca";

const Home: React.FC = () => {
  return (
    <>
      <Motor onSubmit={data => {
        console.log("Page 1", data);
      }} />
      Home: This a Micro-fes app with new updates
    </>
  );
};

export default Home;
