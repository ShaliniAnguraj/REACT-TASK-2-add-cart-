function Cart({ cartlist, removecart }) {
  return (
    <ol class="list-group list-group-numbered">
      {cartlist.map((cartitem) => {
        return (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{cartitem.product}</div>
              {cartitem.price}
            </div>
            <button
              class="badge bg-danger rounded-pill"
              onClick={() => removecart(cartitem)}
            >
              X
            </button>
          </li>
        );
      })}
    </ol>
  );
}
export default Cart;
