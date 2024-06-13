import { GetStaticPaths, GetStaticProps } from 'next';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return <SignIn />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Specify the paths you want to pre-render
  const paths = [{ params: { 'sign-in': [''] } }];

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async () => {
  // No dynamic data fetching needed for this static page
  return {
    props: {}, // Will be passed to the page component as props
  };
};

export default SignInPage;
