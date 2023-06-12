import React from 'react'

export const Modal = () => {
  return (
    <aside className="modal-container">
        <div className="modal">
            <h4>Remove All items from your shopping cart</h4>
            <div className="btn-container">
                <button type='button' className="btn confirm-btn">Confirm</button>
                <button type='button' className="btn clear-btn">Cancel</button>
            </div>
        </div>
    </aside>
  )
}
