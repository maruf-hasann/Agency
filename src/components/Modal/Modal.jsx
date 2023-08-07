
import React from 'react';
const Modal = () => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        const price = e.target.price.value
        
        const res = await fetch("http://localhost:5000/products/1",{
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(price),
        });
        const data = await res.json()
        console.log(data);
        
    }
    return (
      <div>
        <div className="modal" id="my_modal_8">
          <div className="modal-box">
            <h2>Update Price</h2>
            <form onSubmit={handleSubmit}>
                        <input
                            name='price'
                type="number"
                placeholder="Price"
                            className="input input-bordered input-info w-full max-w-xs"
                           
                        /> <br/>
                        <input type="submit" value="Update" className='btn_primary mt-5' />
            </form>
          </div>
        </div>
      </div>
    );
};

export default Modal;