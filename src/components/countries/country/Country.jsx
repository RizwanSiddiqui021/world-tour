import "./country.css"
const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div className="country">
            <h3>Name: {name.common} </h3>
            <img style={{width:"320px", height:"240px", borderRadius:"16px"}} src={flags.png} alt="" />
        </div>
    );
};

export default Country;