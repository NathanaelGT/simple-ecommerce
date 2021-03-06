import Layout from '@common/components/Layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ProductCard from '@common/components/ProductCard';

const HomePage = ({ products }) => {
  const { list } = products;
  return (
    <Layout>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {list.map(list => (
            <Grid key={list.id} item xs={6} sm={6}>
              <ProductCard
                productId={list.id}
                img={list.img}
                title={list.name}
                promoLabel={list.promo}
                price={list.price}
                rating={list.rating}
                sold={list.sold}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://nathanaelgt.github.io/simple-ecommerce/api/products`);
  const products = await res.json();

  return {
    props: {
      products
    }
  }
}

export default HomePage;