function Card({ product, addtocart, cartlist }) {
  return (
    <div className="col-lg-4">
      <div class="card" style={{ width: "17rem" }}>
        <img
          src={product.imgurl}
          class="card-img-top"
          alt="..."
          height="270px"
        />
        <div class="card-body">
          <h5 class="card-title">{product.product}</h5>
          <br></br>
          <p class="card-text">
            <b>Price </b> Rs.{product.price}
          </p>
          <button
            disabled={cartlist.some((carditem) => carditem.id === product.id)}
            class="btn btn-primary"
            onClick={() => {
              return addtocart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
