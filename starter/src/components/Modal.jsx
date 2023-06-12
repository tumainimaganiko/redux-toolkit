import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

export const Modal = () => {
    const dispatch = useDispatch()
  return (
    <aside className="modal-container">
        <div className="modal">
            <h4>Remove All items from your shopping cart</h4>
            <div className="btn-container">
                <button type='button' className="btn confirm-btn" onClick={
                    _ => {
                        dispatch(clearCart());
                        dispatch(closeModal());
                    }
                }>Confirm</button>
                <button type='button' className="btn clear-btn" onClick={
                    _ => dispatch(closeModal())
                }>Cancel</button>
            </div>
        </div>
    </aside>
  )
}
