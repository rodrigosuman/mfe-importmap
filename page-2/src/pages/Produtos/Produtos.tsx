import { Motor } from "@pocs/motor-busca";

const Produtos: React.FC = () => {
  return (
    <>
      <Motor onSubmit={console.log} />
      Products: This is a Products page
    </>
  );
};

export default Produtos;
