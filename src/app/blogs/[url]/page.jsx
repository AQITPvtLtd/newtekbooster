import DetailedBlog from "./DetailedBlog";


const Page = ({ params }) => {
  const { url } = params;

  return <DetailedBlog url={url} />;
};

export default Page;
