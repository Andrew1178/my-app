
export default function Orders(){

    let orders = [
        {
            OrderedOn: "2021-10-10",
            details: [
                {
                    Vehicle:  {Name: "Car" },
                    DateFrom: "2021-10-11",
                    DateTo: "2021-10-12"
                }
            ]
        }
    ];

    const listItems = orders.map(aOrder => <Order aOrder={aOrder} />);
     return(
         <>
             <ul>{listItems}</ul>
         </>
     );
 }

 // TODO: If we are looking at upcoming orders, we should show a cancel button and hide the cancel flag
 function Order({aOrder}){
    const orderDetailItems = aOrder.details.map(aDetail => <li>{aDetail.Vehicle.Name} - {aDetail.DateFrom} - {aDetail.DateTo} </li>);
     return(
         <li className="order">// TODO: ADD STYLING TO MAKE A BOX
             <h1>{aOrder.OrderedOn}</h1>
             <ul>{orderDetailItems}</ul>
             <button>Cancel?</button>
         </li>
     );
 }