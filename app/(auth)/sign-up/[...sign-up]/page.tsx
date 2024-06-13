import { GetStaticPaths, GetStaticProps } from 'next';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return <SignUp />;
};

// Define static paths for dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  // Specify the paths you want to pre-render
  const paths = [{ params: { 'sign-up': [''] } }];

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
};

// Fetch data at build time
export const getStaticProps: GetStaticProps = async () => {
  // No dynamic data fetching needed for this static page
  return {
    props: {}, // Will be passed to the page component as props
  };
};

export default SignUpPage;
