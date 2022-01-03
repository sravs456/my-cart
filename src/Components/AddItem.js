import React from "react";

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            productName:"",
            productPrice:0,
        };
    }
  render() {
    return (
      <form className="row" onSubmit={(e) => {
e.preventDefault();
        this.props.addItem(this.state.productName, Number(this.state.productPrice));
      }}>
        <div className="mb-3 col-4 ">
          <label htmlFor="inputName" className="form-label">
            <h5>Product Name</h5>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="Product Name"
            name="productName"
            onChange={(e)=>{
                this.setState({productName:e.currentTarget.value});
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 mr-5 col-4">
          <label htmlFor="inputPrice" className="form-label">
           <h5>Price</h5> 
          </label>
          <input type="number" 
          className="form-control" 
          id="Price" 
          name= "ProductPrice"
          onChange={(e)=>{
            this.setState({productPrice:e.currentTarget.value});
        }}
        value={this.state.productPrice}
          />
         
        </div>

        <button
          type="submit"
          className=" col-1  padding:0px btn btn-secondary"
          
        >
         <b>AddItem</b>
        </button>
      </form>
    );
  }
}

export default AddItem;
