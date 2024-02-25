import Header from "../components/Header";
import Footer from "../components/Footer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react";
import Productx from "../components/product/index";
import axios from "axios";
import { Products } from "../interfaces/product";
const Product = () => {
  const [pro, setPro] = useState([]);
  useEffect(function () {
    axios.get(` http://localhost:3000/product`).then(({ data }) => {
      setPro(data);
    });
  }, []);

  const onhandleAdd = async (product: Products) => {
    const { data } = await axios.post(
      ` http://localhost:3000/product`,
      product
    );
    setPro([...pro, data]);
  };

  const onhandleEdit = async(product: Products) => {
    const { data } = await axios.put(`http://localhost:3000/product/${product.id}`, product)
    setPro(pro.map((item) => (item.id === data.id ? data : item)));
  } 

  const onhandleDel = async(product: Products) => {
    await axios.delete(`http://localhost:3000/product/${product.id}`, product)
    setPro((pro) => pro.filter((item) => item.id !== product.id)); 
    //load page
    const { data } = await axios.get(`http://localhost:3000/product`);
    setPro(data);
  }
  return (
    <div className="container">
      <Header />
      <div>
        <h1 className="text-danger">product</h1>
        <div>
          <Productx data={pro} onAdd={onhandleAdd} onEdit={onhandleEdit}  onDel={onhandleDel}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
