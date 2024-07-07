// pages/index.tsx

import { GetStaticProps } from 'next';

type Props = {
  message: string;
};

const HomePage: React.FC<Props> = ({ message }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Simulate fetching data from an API
  const data = { message: 'This is a statically generated page!' };

  return {
    props: data,
  };
};

export default HomePage;
