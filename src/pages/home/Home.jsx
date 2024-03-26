import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Category from "./Category";
import Collections from "./Collections";
import Newsletter from "./Newsletter";
import Products from "./Products";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Products />
            <Collections />
            <BestSellers />
            <Newsletter />
        </div>
    );
}

export default Home;