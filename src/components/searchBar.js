
export default function SearchBar(props) {


  const handleChange = (e) => {

    props.onChange(e.target.value)
  
}

  return (
    <div >

      <input value={props.searchValue} onChange={handleChange}/>
    </div >
  )
}