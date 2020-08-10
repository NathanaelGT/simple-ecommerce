import Container from '@material-ui/core/Container';

import Layout from '@common/components/Layout';
import ProductDetailCard from '@mobile/components/ProductDetailCard';

const ProductDetail = ({ product }) => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <ProductDetailCard
          img={product.img}
          title={product.name}
          price={product.price}
          rating={product.rating}
          sold={product.sold}
          description={product.description}
          quantity={product.quantity}
          condition={product.condition}
          weight={product.weight}
          promo={product.promo}
        />
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`http://nathanaelgt.github.io/simple-ecommerce/api/products`);
  const products = await res.json();

  const paths = products.list.map(prod => `simple-ecommerce/product/${prod.id}`);

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://nathanaelgt.github.io/simple-ecommerce/api/product/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product
    }
  }
}

export default ProductDetail;