import Layout from '@/components/Layout';
const ErrorPage = () => {
  return (
    <>
      <Layout></Layout>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          fontSize: '5rem',
          transform: `translate(-50%, -50%)`,
        }}
      >
        Öyle bir ülke yok!
      </div>
    </>
  );
};
export default ErrorPage;
