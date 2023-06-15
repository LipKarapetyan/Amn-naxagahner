import { presidents } from 'us-presidents';

const PresidentsList = () => {
  return (
    <div>
      <h1>List of U.S. Presidents</h1>
      <ol>
        {presidents.map((president) => (
         <a href={president.wikipedia} target='blank'><li  key={president.number}>
            {president.name } ___ { president.party}   
          </li> 
          
         
        
          </a> 
          
        ))}
      </ol>
    </div>
  );
};

export default PresidentsList;