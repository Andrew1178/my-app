export default function Vehicles(){
let vehicles = [
    {
        name: "Car",
        price: 10,
        imageURL: "https://via.placeholder.com/150"
    },
    {
        name: "Truck",
        price: 20,
        imageURL: "https://via.placeholder.com/150"
    }  
];

    const listItems = vehicles.map(aVehicle => { 
         return <Vehicle 
         aVehicleName={aVehicle.name}
         aVehiclePrice={aVehicle.price}
         aVehicleImageUrl={aVehicle.imageURL}
          />
     });
     return(
         <>
             <h1>Available Vehicles</h1>
             <ul>{listItems}</ul>
         </>
     );
 }

 function Vehicle({aVehicleName, aVehiclePrice, aVehicleImageUrl}){
     return(
        <> 
         <li className="Test">// TODO: ADD STYLING TO MAKE A BOX
             <h1><a href="TODO GET LINKM TO VEHCILE SPECIFICS PAGE">{aVehicleName}</a></h1>
             <h2>{aVehiclePrice}</h2>
             <img src="{aVehicleImageUrl}" alt="{aVehicleName}"/>
         </li>
         </>
     );
 }