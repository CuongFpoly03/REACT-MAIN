import { Products } from "../../interfaces/product";

type ProductProps = {
  data: Products[];
  onAdd: (product: Products) => void;
  onEdit: (product: Products) => void;
  onDel: (product: Products) => void;
};
const index = ({ data, onAdd, onEdit, onDel }: ProductProps) => {
  return (
    <div>
      {data?.map((item) => {
        return <div key={item.id}>{item?.name} || {item.img} || {item.price} || {item.quantity}</div>;
      })}
      <button className="btn btn-success" onClick={() => onAdd({ id: "1", name: "sp 1", price: 43, img: "https://picsum.photos/150/100", quantity: 1 })}>ADD</button>
      <button className="btn btn-primary" onClick={() => onEdit({ name: "sp 1 update", price: 433, img: "https://picsum.photos/150/100", quantity: 11, id: "1"})}>EDIT</button>
      <button className="btn btn-danger" onClick={() => onDel({ name: "sp 1 update", price: 433, img: "https://picsum.photos/150/100", quantity: 11, id: "1"})}>DEl</button>
    </div>
  );
};

export default index;
