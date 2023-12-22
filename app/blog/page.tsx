import Posts from '@/components/Blog/Posts';
import Container from '@/layout/Container';
import PageWrapper from '@/layout/PageWrapper';

const Blog = () => {
  return (
    <PageWrapper>
      <Container>
        <section className='flex flex-col min-h-screen sm:col-span-5 md:col-span-4 items-center p-2 gap-16 mb-10'>
          <Posts />
        </section>
      </Container>
    </PageWrapper>
  );
};

export default Blog;
