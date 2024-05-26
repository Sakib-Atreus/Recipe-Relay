import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe }) {
  const [recipes, setRecipes] = useState([]);

  const handleDelete = id =>{
    console.log(id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to recover it!",
        textColor:'#0000',
        icon: 'warning',
        iconColor:'red',
        background:'black',
        Color:'#545454',
        showCancelButton: true,
        confirmButtonColor: '#F40D0D',
        cancelButtonColor: '#gray',
        // cancelButtonAriaLabel:'white',
        confirmButtonText: 'Yes, delete it!',
        confirmButtonTextColor:'black'
        
      }).then((result) => {
        if (result.isConfirmed) {
       
        fetch(`http://localhost:3000/recipes/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire(
                        'Deleted!',
                        'Your recipe has been deleted.',
                        'success'
                      )
        const remaining =recipes.filter(recipe=>recipe.id!==id)
        setRecipes(remaining);
            }
        })
        }
      })
}

  return (
    <tr className="text-md font-medium">
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button onClick={()=>handleDelete(recipe.id)} className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
}
